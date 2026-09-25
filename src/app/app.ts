import { ChangeDetectionStrategy, Component, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, skip } from 'rxjs';
import { AuthService } from './core/auth.service';
import { CloudSync } from './core/cloud-sync.service';
import { I18n } from './core/i18n';
import { SiteFooter } from './shared/components/site-footer';
import { SiteHeader } from './shared/components/site-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip" href="#main">{{ i18n.t().nav.skip }}</a>
    <app-site-header />
    <main #main id="main" tabindex="-1">
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
      width: 100%;
      max-width: var(--max);
      margin: 0 auto;
      padding: 1rem var(--gutter) 2rem;
    }
    main:focus {
      outline: none;
    }
    .skip {
      position: absolute;
      left: var(--gutter);
      top: -100px;
      z-index: 100;
      padding: 0.5rem 1rem;
      background: var(--accent);
      color: var(--accent-contrast);
      border-radius: var(--radius-sm);
      font-weight: 600;
    }
    .skip:focus {
      top: 0.5rem;
    }
  `
})
export class App {
  protected readonly i18n = inject(I18n);
  private readonly main = viewChild.required<ElementRef<HTMLElement>>('main');

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
    inject(Router)
      .events.pipe(
        filter((e) => e instanceof NavigationEnd),
        skip(1)
      )
      .subscribe(() => setTimeout(() => this.main().nativeElement.focus({ preventScroll: true })));
  }
}
