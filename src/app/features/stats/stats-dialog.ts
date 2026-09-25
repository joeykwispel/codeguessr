import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { addDays, utcDay } from '../../core/dates';
import { I18n, fmt } from '../../core/i18n';
import { winRate } from '../../core/stats';
import { StatsService } from '../../core/stats.service';
import { AuthService } from '../../core/auth.service';
import { Icon } from '../../shared/components/icon';

const WEEKS = 12;

/** Monday of the week containing `day` (UTC). */
function mondayOf(day: string): string {
  const weekday = (new Date(`${day}T00:00:00Z`).getUTCDay() + 6) % 7;
  return addDays(day, -weekday);
}

/** Statistics: totals, streaks, guess distribution and a 12-week calendar of daily results. Opened in a CDK dialog. */
@Component({
  selector: 'app-stats-dialog',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().stats;
    @let s = stats.stats();
    <div class="head">
      <h2 id="stats-title"><span class="br" aria-hidden="true">&lt;</span>{{ t.title }}<span class="br" aria-hidden="true">/&gt;</span></h2>
      <button type="button" class="icon-btn" [attr.aria-label]="t.close" (click)="ref.close()">
        <app-icon name="x" />
      </button>
    </div>

    <dl class="totals">
      <div>
        <dt>{{ t.played }}</dt>
        <dd>{{ s.gamesPlayed }}</dd>
      </div>
      <div>
        <dt>{{ t.winRate }}</dt>
        <dd>{{ rate() }}</dd>
      </div>
      <div>
        <dt>{{ t.streak }}</dt>
        <dd>{{ stats.streak() }}</dd>
      </div>
      <div>
        <dt>{{ t.maxStreak }}</dt>
        <dd>{{ s.maxStreak }}</dd>
      </div>
    </dl>

    <h3>{{ t.distribution }}</h3>
    @if (s.gamesWon) {
      <ol class="dist">
        @for (count of s.guessDistribution; track $index; let i = $index) {
          <li [attr.aria-label]="fmt(t.distributionRow, { n: i + 1, count })">
            <span class="k" aria-hidden="true">{{ i + 1 }}</span>
            <span class="bar" [class.top]="count > 0 && count === maxCount()" [style.width.%]="barWidth(count)" aria-hidden="true">{{ count }}</span>
          </li>
        }
      </ol>
    } @else {
      <p class="muted">{{ t.empty }}</p>
    }

    <h3>{{ t.history }}</h3>
    <div class="cal" role="img" [attr.aria-label]="summary()">
      @for (d of calendar(); track d.date) {
        <span [class]="'cell ' + d.result" [class.future]="d.future" [attr.title]="d.label">{{ d.mark }}</span>
      }
    </div>
    <p class="legend muted" aria-hidden="true">
      <span class="cell won">✓</span> {{ t.won }} <span class="cell lost">✗</span> {{ t.lost }} <span class="cell none"></span> {{ t.none }}
    </p>
    <ng-content />
    <p class="note muted">{{ auth.status() === 'signed-in' ? i18n.t().auth.synced : t.local }}</p>
  `,
  styles: `
    :host {
      display: block;
      width: min(92vw, 440px);
      max-height: 90dvh;
      overflow-y: auto;
      padding: 1.25rem;
      background: var(--bg-2);
      color: var(--text);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 1.375rem;
    }
    /* section titles written as a tag, like the portfolio */
    .br {
      color: var(--accent-text);
    }
    h3 {
      font-family: var(--mono);
      font-size: 0.85rem;
      margin: 1.25rem 0 0.5rem;
    }
    .totals {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.5rem;
      margin: 0;
      text-align: center;
    }
    .totals div {
      display: flex;
      flex-direction: column-reverse;
      padding: 0.5rem 0.25rem;
      border-radius: var(--radius-sm);
      border: 1px solid var(--border);
      background: var(--surface);
    }
    dt {
      font-family: var(--mono);
      font-size: 0.75rem;
      color: var(--muted);
      line-height: 1.2;
    }
    dd {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 800;
      font-family: var(--mono);
    }
    .dist {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 4px;
    }
    .dist li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .k {
      width: 1rem;
      font-family: var(--mono);
      font-weight: 700;
    }
    .bar {
      min-width: 1.75rem;
      padding: 0.125rem 0.5rem;
      border-radius: 4px;
      background: var(--surface);
      border: 1px solid var(--border);
      text-align: right;
      font-weight: 700;
      font-family: var(--mono);
      font-size: 0.875rem;
    }
    .bar.top {
      background: var(--ok-fill);
      border-color: var(--ok-fill);
      color: var(--accent-ink);
    }
    .cal {
      display: grid;
      grid-template-rows: repeat(7, 1fr);
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      gap: 3px;
    }
    .cell {
      display: inline-grid;
      place-items: center;
      aspect-ratio: 1;
      min-width: 14px;
      border-radius: 3px;
      font-size: 0.625rem;
      font-weight: 800;
      line-height: 1;
    }
    .won {
      background: var(--ok-fill);
      color: var(--accent-ink);
    }
    .lost {
      background: var(--bad);
      color: var(--bg);
    }
    .none {
      background: var(--surface);
      border: 1px solid var(--border);
    }
    .future {
      visibility: hidden;
    }
    .legend {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      margin-top: 0.5rem;
      font-size: 0.8125rem;
    }
    .legend .cell {
      width: 14px;
      margin-left: 0.5rem;
    }
    .legend .cell:first-child {
      margin-left: 0;
    }
    .note {
      margin-top: 1rem;
      font-size: 0.8125rem;
    }
  `
})
export class StatsDialog {
  protected readonly i18n = inject(I18n);
  protected readonly stats = inject(StatsService);
  protected readonly ref = inject(DialogRef);
  protected readonly auth = inject(AuthService);
  protected readonly fmt = fmt;

  protected readonly rate = computed(() => winRate(this.stats.stats()));
  protected readonly maxCount = computed(() => Math.max(1, ...this.stats.stats().guessDistribution));
  protected barWidth(count: number): number {
    return Math.max(8, (count / this.maxCount()) * 100);
  }

  /** 12 full weeks (Monday to Sunday) ending with the current week; daily games only. */
  protected readonly calendar = computed(() => {
    const t = this.i18n.t().stats;
    const today = utcDay();
    const start = addDays(mondayOf(today), -(WEEKS - 1) * 7);
    const history = this.stats.history();
    return Array.from({ length: WEEKS * 7 }, (_, i) => {
      const date = addDays(start, i);
      const h = history[date];
      const result = h && !h.archive ? h.status : 'none';
      return {
        date,
        result,
        future: date > today,
        mark: result === 'won' ? '✓' : result === 'lost' ? '✗' : '',
        label: fmt(t.day, { date, result: t[result] })
      };
    });
  });

  protected readonly summary = computed(() => {
    const days = this.calendar();
    return fmt(this.i18n.t().stats.historySummary, {
      won: days.filter((d) => d.result === 'won').length,
      lost: days.filter((d) => d.result === 'lost').length
    });
  });
}
