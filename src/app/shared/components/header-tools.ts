import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n, fmt } from '../../core/i18n';
import { StatsService } from '../../core/stats.service';
import { AuthButton } from '../../features/auth/auth-button';
import { OpenStats } from '../../features/stats/open-stats';
import { Icon } from './icon';

/**
 * The game's own controls, projected into the design-kit header next to the language switch: the streak,
 * statistics and the optional sign-in. On narrow screens the statistics button hides (the streak opens them too).
 */
@Component({
  selector: 'app-header-tools',
  imports: [Icon, AuthButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().nav;
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
      <button type="button" class="icon-btn stats" [attr.aria-label]="t.stats" (click)="openStats.open()">
        <app-icon name="chart" />
      </button>
      <app-auth-button />
    </div>
  `,
  styles: `
    :host {
      display: contents;
    }
    .tools {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding-right: 0.5rem;
      margin-right: 0.125rem;
      border-right: 1px solid var(--border);
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
    @media (max-width: 520px) {
      .stats {
        display: none;
      }
      .tools {
        gap: 0.375rem;
        padding-right: 0;
        border-right: 0;
      }
    }
  `
})
export class HeaderTools {
  protected readonly i18n = inject(I18n);
  protected readonly stats = inject(StatsService);
  protected readonly openStats = inject(OpenStats);
  protected readonly fmt = fmt;
}
