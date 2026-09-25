import { DOCUMENT, Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { getContent } from '../data/locales';
import type { Locale } from '../data/shared/types';
import { localeOf, localize, stripLocale } from './locale-path';
import { storage } from './storage';

/** Fills {placeholders} in a translated string. */
export function fmt(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, key: string) => (key in values ? String(values[key]) : m));
}

/**
 * The active language, taken from the URL (/ is English, /nl is Dutch), and its copy.
 * Also keeps <html lang> in sync, both in prerendered pages and after client-side navigation.
 */
@Injectable({ providedIn: 'root' })
export class I18n {
  private readonly router = inject(Router);
  private readonly doc = inject(DOCUMENT);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly locale = signal<Locale>(this.browser ? localeOf(location.pathname) : 'en');
  /** The current router path without the locale prefix, e.g. "/archive". */
  readonly path = signal('/');
  readonly content = computed(() => getContent(this.locale()));
  readonly t = computed(() => this.content().ui);
  readonly other = computed<Locale>(() => (this.locale() === 'en' ? 'nl' : 'en'));

  constructor() {
    this.router.events.subscribe((e) => {
      if (!(e instanceof NavigationEnd)) return;
      this.locale.set(localeOf(e.urlAfterRedirects));
      this.path.set(stripLocale(e.urlAfterRedirects.split(/[?#]/)[0] ?? '/'));
    });
    effect(() => {
      this.doc.documentElement.lang = this.locale();
    });
    // The design kit's EN/NL pill is a plain link; remember the choice when it's used.
    if (this.browser) {
      this.doc.addEventListener('click', (e) => {
        const link = e.target instanceof Element ? e.target.closest<HTMLAnchorElement>('.jo-nav__lang a[hreflang]') : null;
        if (link?.hreflang === 'en' || link?.hreflang === 'nl') this.remember(link.hreflang);
      });
    }
  }

  /** A router path in the active language. */
  href(path: string): string {
    return localize(path, this.locale());
  }

  /** Remembers an explicit language choice, so a visit to / can send a Dutch reader straight to /nl/. */
  remember(locale: Locale): void {
    storage.setString('lang', locale);
  }
}
