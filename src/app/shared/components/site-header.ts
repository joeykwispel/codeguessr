import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n, fmt } from '../../core/i18n';
import { StatsService } from '../../core/stats.service';
import { ThemeService } from '../../core/theme.service';
import { AuthButton } from '../../features/auth/auth-button';
import { OpenStats } from '../../features/stats/open-stats';
import { Icon } from './icon';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, Icon, AuthButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().nav;
    <header>
      <a class="brand" routerLink="/" [attr.aria-label]="t.home">
        <img src="favicon.svg" alt="" width="28" height="28" />
        <span>Codeguessr</span>
      </a>
      <nav [attr.aria-label]="t.main">
        <button
          type="button"
          class="icon-btn streak"
          [class.lit]="stats.streak() > 0"
          [attr.aria-label]="fmt(t.streak, { n: stats.streak() })"
          (click)="openStats.open()"
        >
          <app-icon name="flame" />
          <span class="mono" aria-hidden="true">{{ stats.streak() }}</span>
        </button>
        <button type="button" class="icon-btn" [attr.aria-label]="t.stats" (click)="openStats.open()">
          <app-icon name="chart" />
        </button>
        <app-auth-button />
        <button type="button" class="icon-btn" (click)="theme.toggle()" [attr.aria-label]="theme.theme() === 'dark' ? t.toLight : t.toDark">
          <app-icon [name]="theme.theme() === 'dark' ? 'sun' : 'moon'" />
        </button>
      </nav>
    </header>
  `,
  styles: `
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      max-width: 960px;
      margin: 0 auto;
      padding: 0.5rem var(--gutter);
    }
    :host {
      display: block;
      border-bottom: 1px solid var(--border);
      background: var(--surface);
    }
    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      min-height: 44px;
      color: var(--text);
      font-weight: 800;
      font-size: 1.125rem;
      text-decoration: none;
      letter-spacing: -0.01em;
    }
    nav {
      display: flex;
      align-items: center;
      gap: 0.125rem;
    }
    .streak {
      color: var(--muted);
    }
    .streak.lit {
      color: var(--warning);
    }
    .streak span {
      color: var(--text);
    }
    @media (max-width: 380px) {
      .brand span {
        display: none;
      }
    }
  `
})
export class SiteHeader {
  protected readonly theme = inject(ThemeService);
  protected readonly i18n = inject(I18n);
  protected readonly stats = inject(StatsService);
  protected readonly openStats = inject(OpenStats);
  protected readonly fmt = fmt;
}
