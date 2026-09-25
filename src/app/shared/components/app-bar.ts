import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n, fmt } from '../../core/i18n';
import { StatsService } from '../../core/stats.service';
import { AuthButton } from '../../features/auth/auth-button';
import { OpenStats } from '../../features/stats/open-stats';
import { Icon } from './icon';

/**
 * The game's own controls, under the design-kit header (which stays identical across every joeyoosenbrug.nl app):
 * the app name in the kit's editor-path style, the streak, statistics and the optional sign-in.
 */
@Component({
  selector: 'app-app-bar',
  imports: [RouterLink, Icon, AuthButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().nav;
    <div class="bar">
      <a class="name mono" [routerLink]="i18n.href('/')" [attr.aria-label]="t.home"><span class="tilde" aria-hidden="true">~/</span>codeguessr</a>
      <div class="tools" role="group" [attr.aria-label]="t.game">
        <button
          type="button"
          class="icon-btn streak"
          [class.lit]="stats.streak() > 0"
          [attr.aria-label]="fmt(t.streak, { n: stats.streak() })"
          (click)="openStats.open()"
        >
          <app-icon name="flame" />
          <span aria-hidden="true">{{ stats.streak() }}</span>
        </button>
        <button type="button" class="icon-btn" [attr.aria-label]="t.stats" (click)="openStats.open()">
          <app-icon name="chart" />
        </button>
        <app-auth-button />
      </div>
    </div>
  `,
  styles: `
    .bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      margin-bottom: 1.25rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px dashed var(--border);
    }
    .name {
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: -0.02em;
      color: var(--text);
      text-decoration: none;
    }
    .tilde {
      color: var(--accent-text);
    }
    .tools {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .streak {
      color: var(--muted);
    }
    .streak.lit app-icon {
      color: var(--flame);
    }
    .streak span {
      color: var(--text);
    }
  `
})
export class AppBar {
  protected readonly i18n = inject(I18n);
  protected readonly stats = inject(StatsService);
  protected readonly openStats = inject(OpenStats);
  protected readonly fmt = fmt;
}
