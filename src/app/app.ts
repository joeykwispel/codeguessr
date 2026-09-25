import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
    <main id="main" tabindex="-1">
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
}
