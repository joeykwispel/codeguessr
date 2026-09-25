import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { locales } from '../data/locales';
import { I18n } from './i18n';
import { localize, publicUrl } from './locale-path';

export type SeoPage = 'home' | 'archive' | 'privacy' | 'notFound';

const ogLocale = { en: 'en_GB', nl: 'nl_NL' } as const;

/**
 * Title, description, canonical URL, hreflang alternates and social tags for the current page and language.
 * Runs during prerendering too, so every static page ships with the right tags for its language.
 */
@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);
  private readonly i18n = inject(I18n);
  private readonly page = signal<SeoPage | null>(null);

  constructor() {
    effect(() => {
      const page = this.page();
      if (page) this.apply(page);
    });
  }

  set(page: SeoPage): void {
    this.page.set(page);
  }

  private apply(page: SeoPage): void {
    const t = this.i18n.t().meta;
    const locale = this.i18n.locale();
    const path = this.i18n.path();
    const title = { home: t.title, archive: t.archiveTitle, privacy: t.privacyTitle, notFound: t.notFoundTitle }[page];
    const description = page === 'archive' ? t.archiveDescription : page === 'privacy' ? t.privacyDescription : t.description;
    const url = publicUrl(environment.siteUrl, localize(path, locale));

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: page === 'notFound' ? 'noindex' : 'index,follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Codeguessr' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: `${environment.siteUrl}/og.png` });
    this.meta.updateTag({ property: 'og:image:alt', content: title });
    this.meta.updateTag({ property: 'og:locale', content: ogLocale[locale] });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    // canonical + hreflang: rebuilt on every change, so client-side navigation never leaves stale links behind
    for (const el of Array.from(this.doc.head.querySelectorAll('link[data-seo]'))) el.remove();
    if (page === 'notFound') return;
    this.link({ rel: 'canonical', href: url });
    for (const l of locales) this.link({ rel: 'alternate', hreflang: l, href: publicUrl(environment.siteUrl, localize(path, l)) });
    this.link({ rel: 'alternate', hreflang: 'x-default', href: publicUrl(environment.siteUrl, localize(path, 'en')) });
  }

  private link(attrs: Record<string, string>): void {
    const el = this.doc.createElement('link');
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    el.setAttribute('data-seo', '');
    this.doc.head.appendChild(el);
  }
}
