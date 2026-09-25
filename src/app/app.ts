import { ChangeDetectionStrategy, Component, ElementRef, afterNextRender, computed, inject, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { distinctUntilChanged, filter, map, skip } from 'rxjs';
import { AuthService } from './core/auth.service';
import { CloudSync } from './core/cloud-sync.service';
import { I18n } from './core/i18n';
import { localize, publicPath } from './core/locale-path';
import { locales } from './data/locales';
import { JO_HEADER_LABELS, JoHeaderComponent, type JoHeaderLanguage, type JoHeaderLink } from './jo/jo-header.component';
import { AppBar } from './shared/components/app-bar';
import { SiteFooter } from './shared/components/site-footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JoHeaderComponent, AppBar, SiteFooter],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip" href="#main">{{ i18n.t().nav.skip }}</a>
    <jo-header [links]="links()" [languages]="languages()" [labels]="labels()" />
    <main #main id="main" tabindex="-1">
      <app-app-bar />
      <router-outlet />
    </main>
    <app-site-footer />
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100dvh;
    }
    main {
      flex: 1;
      width: min(var(--column), 100% - 2rem);
      margin-inline: auto;
      /* the kit header is fixed, so the page starts below it */
      padding: calc(var(--nav-h) + 1rem) 0 clamp(2.75rem, 6vw, 4.5rem);
    }
    main:focus {
      outline: none;
    }
  `
})
export class App {
  protected readonly i18n = inject(I18n);
  private readonly main = viewChild.required<ElementRef<HTMLElement>>('main');

  /** Only the header's inputs change per app: its links, which one is current, the languages and the labels. */
  protected readonly links = computed<JoHeaderLink[]>(() => {
    const t = this.i18n.t().nav;
    const path = this.i18n.path();
    return [
      { label: t.play, routerLink: this.i18n.href('/'), current: path === '/' },
      { label: t.archive, routerLink: this.i18n.href('/archive'), current: path === '/archive' || path.startsWith('/archive/') }
    ];
  });
  /** The same page in the other language, not the home page. */
  protected readonly languages = computed<JoHeaderLanguage[]>(() =>
    locales.map((code) => ({ code, href: publicPath(localize(this.i18n.path(), code)), current: code === this.i18n.locale() }))
  );
  protected readonly labels = computed(() => JO_HEADER_LABELS[this.i18n.locale()]);

  constructor() {
    // Optional sign-in and cloud sync start after the first render, so they never hold up the game.
    const auth = inject(AuthService);
    const sync = inject(CloudSync);
    afterNextRender(() => {
      auth.init();
      sync.init();
    });
    // After client-side navigation, move focus to the new content (like a page load would), so keyboard and
    // screen reader users don't stay behind on a link that may no longer exist.
    // Only real page changes count: the skip link's #main jump is a navigation too, and moving focus then would pull it
    // out of whatever the visitor tabbed to next.
    inject(Router)
      .events.pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e) => e.urlAfterRedirects.split('#')[0]),
        distinctUntilChanged(),
        skip(1)
      )
      .subscribe(() => setTimeout(() => this.main().nativeElement.focus({ preventScroll: true })));
  }
}
