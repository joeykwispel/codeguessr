import { ChangeDetectionStrategy, Component, PLATFORM_ID, computed, inject, input, resource } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../core/auth.service';
import { I18n, fmt } from '../../core/i18n';
import { LeaderboardService, type LeaderboardEntry, type Metric, metrics } from '../../core/leaderboard.service';
import { Icon, type IconName } from '../../shared/components/icon';

interface Row extends LeaderboardEntry {
  me: boolean;
  /** Width of the bar, as a percentage of the leader's value. */
  width: number;
  /** The '⋯' between the top rows and your own row when you're further down. */
  gap?: boolean;
}

interface Card {
  metric: Metric;
  rows: Row[];
}

const icons: Record<Metric, IconName> = { played: 'calendar', streak: 'flame', wins: 'trophy' };

/**
 * The three rankings side by side: most played, longest streak, most wins. Used compact on the home page
 * (top 3) and in full on /leaderboard. Your own row is highlighted, and pinned below when you're outside the top.
 */
@Component({
  selector: 'app-leaderboard-board',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().leaderboard;
    @if (boards.error()) {
      <div class="glass notice" role="alert">
        <p>{{ t.error }}</p>
        <button type="button" class="btn" (click)="boards.reload()">{{ i18n.t().play.retry }}</button>
      </div>
    } @else {
      <div class="grid" [class.sized]="compact() || !boards.hasValue()" [style.--n]="limit()">
        @for (card of cards(); track card.metric) {
          @let id = 'lb-' + card.metric + (compact() ? '-home' : '');
          <article class="card glass" [class]="card.metric" [attr.aria-labelledby]="id">
            <header class="head">
              <span class="ico" aria-hidden="true"><app-icon [name]="icons[card.metric]" /></span>
              @if (compact()) {
                <h3 [id]="id">{{ t[card.metric] }}</h3>
              } @else {
                <h2 [id]="id">{{ t[card.metric] }}</h2>
              }
            </header>

            @if (boards.hasValue()) {
              @if (card.rows.length) {
                <ol [attr.aria-label]="t[card.metric]">
                  @for (row of card.rows; track row.gap ? 'gap' : row.nickname; let i = $index) {
                    @if (row.gap) {
                      <li class="gap" aria-hidden="true">⋯</li>
                    } @else {
                      <li class="row" [class.me]="row.me" [class.first]="row.rank === 1" [style.--i]="i" [style.--w]="row.width">
                        <span class="sr-only">{{
                          fmt(t.row, { rank: row.rank, name: row.nickname + (row.me ? ' (' + t.you + ')' : ''), value: valueLabel(card.metric, row.value) })
                        }}</span>
                        <span class="pos mono" [class]="'m' + row.rank" aria-hidden="true">{{ row.rank }}</span>
                        <span class="who" aria-hidden="true">
                          <span class="nick">{{ row.nickname }}</span>
                          @if (row.me) {
                            <span class="you mono">{{ t.you }}</span>
                          }
                        </span>
                        <span class="val mono" aria-hidden="true"
                          >{{ row.value }}<span class="unit">{{ unit(card.metric) }}</span></span
                        >
                        <span class="bar" aria-hidden="true"></span>
                      </li>
                    }
                  }
                </ol>
              } @else {
                <p class="empty muted">{{ t.cardEmpty }}</p>
              }
            } @else {
              <div class="sk-list" aria-hidden="true">
                @for (i of skeleton(); track i) {
                  <div class="sk"></div>
                }
              </div>
            }
          </article>
        }
      </div>
      @if (boards.isLoading() && !boards.hasValue()) {
        <p class="sr-only" role="status">{{ t.loading }}</p>
      }
    }
  `,
  styles: `
    /* stack by the room the board actually has, not the window: zoom or a narrow column stacks it, a wide one doesn't */
    :host {
      display: block;
      container-type: inline-size;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0.75rem;
    }
    @container (max-width: 700px) {
      .grid {
        grid-template-columns: minmax(0, 1fr);
      }
    }
    .card {
      --c: var(--accent-text);
      display: grid;
      align-content: start;
      gap: 0.625rem;
      padding: 0.875rem 0.75rem 0.75rem;
      overflow: hidden;
    }
    .card::before {
      content: '';
      position: absolute;
      inset: 0 0 auto;
      height: 3px;
      background: linear-gradient(90deg, var(--c), transparent);
    }
    /* while loading (and always on the compact home board) cards keep their full height, so nothing jumps */
    .sized .card {
      min-height: calc(3.75rem + var(--n) * 2.75rem);
    }
    .card.played {
      --c: var(--syn-fn);
    }
    .card.streak {
      --c: var(--flame);
    }
    .card.wins {
      --c: var(--accent-2-text);
    }
    .head {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding-inline: 0.25rem;
    }
    .ico {
      display: grid;
      place-items: center;
      width: 32px;
      height: 32px;
      border-radius: 10px;
      color: var(--c);
      background: color-mix(in srgb, var(--c) 15%, transparent);
    }
    .ico app-icon {
      width: 18px;
      height: 18px;
    }
    h2,
    h3 {
      margin: 0;
      font-size: 0.95rem;
      letter-spacing: -0.01em;
    }
    ol {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 0.25rem;
    }
    .row {
      position: relative;
      display: grid;
      grid-template-columns: 1.75rem minmax(0, 1fr) auto;
      align-items: center;
      gap: 0.5rem;
      min-height: 2.5rem;
      padding: 0.25rem 0.5rem;
      border-radius: var(--radius-sm);
      overflow: hidden;
      animation: fade-up 0.55s var(--ease) both;
      animation-delay: calc(var(--i) * 45ms);
      transition: background 0.2s;
    }
    .row:hover {
      background: var(--surface-2);
    }
    .row.first {
      background: color-mix(in srgb, #f5c542 9%, transparent);
    }
    .row.me {
      background: var(--ok-soft);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--accent) 45%, transparent);
    }
    .bar {
      position: absolute;
      left: 0.5rem;
      bottom: 3px;
      height: 3px;
      width: calc((100% - 1rem) * var(--w) / 100);
      border-radius: 999px;
      background: var(--c);
      opacity: 0.55;
      transform-origin: left;
      animation: grow 0.8s var(--ease) both;
      animation-delay: calc(120ms + var(--i) * 45ms);
    }
    @keyframes grow {
      from {
        transform: scaleX(0);
      }
    }
    .pos {
      display: grid;
      place-items: center;
      width: 1.625rem;
      height: 1.625rem;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--muted);
    }
    .pos.m1 {
      background: #f5c542;
      color: #231a00;
      box-shadow: 0 0 0 3px color-mix(in srgb, #f5c542 25%, transparent);
    }
    .pos.m2 {
      background: #cfd6e2;
      color: #1b2230;
    }
    .pos.m3 {
      background: #e3a877;
      color: #2a1606;
    }
    .who {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      min-width: 0;
    }
    .nick {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
    }
    .you {
      flex: none;
      padding: 0.05rem 0.4rem;
      border-radius: 999px;
      background: var(--accent);
      color: var(--accent-ink);
      font-size: 0.65rem;
      font-weight: 700;
    }
    .val {
      font-size: 0.95rem;
      font-weight: 700;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .unit {
      margin-left: 0.25rem;
      font-size: 0.7rem;
      font-weight: 500;
      color: var(--muted);
    }
    .gap {
      text-align: center;
      line-height: 1;
      color: var(--muted);
    }
    .empty {
      margin: 0;
      padding: 0.5rem 0.25rem;
      font-size: 0.875rem;
    }
    .sk-list {
      display: grid;
      gap: 0.25rem;
    }
    .sk {
      height: 2.5rem;
      border-radius: var(--radius-sm);
      background: linear-gradient(90deg, var(--surface) 0%, var(--surface-2) 50%, var(--surface) 100%) 0 0 / 200% 100%;
      animation: shimmer 1.4s linear infinite;
    }
    @keyframes shimmer {
      to {
        background-position: -200% 0;
      }
    }
    .notice {
      display: grid;
      gap: 0.75rem;
      justify-items: start;
      padding: 1.25rem;
    }
  `
})
export class LeaderboardBoard {
  protected readonly i18n = inject(I18n);
  private readonly auth = inject(AuthService);
  private readonly service = inject(LeaderboardService);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  protected readonly fmt = fmt;
  protected readonly icons = icons;

  /** How many players each card shows. */
  readonly limit = input(10);
  /** Compact mode for the home page: card titles become h3 under the section's h2. */
  readonly compact = input(false);

  protected readonly boards = resource({
    params: () => (this.browser && this.service.enabled ? true : undefined),
    loader: async () => {
      const lists = await Promise.all(metrics.map((m) => this.service.top(m, 100)));
      return Object.fromEntries(metrics.map((m, i) => [m, lists[i]!])) as Record<Metric, LeaderboardEntry[]>;
    }
  });

  /** Your nickname, when you're signed in and have joined. */
  readonly mine = resource({
    params: () => (this.auth.status() === 'signed-in' ? this.auth.user()?.id : undefined),
    loader: ({ params }) => this.service.nickname(params).catch(() => null)
  });

  protected readonly skeleton = computed(() => Array.from({ length: this.limit() }, (_, i) => i));

  protected readonly cards = computed<Card[]>(() => {
    const data = this.boards.value();
    const mine = this.mine.value()?.toLowerCase() ?? null;
    return metrics.map((metric) => {
      const list = data?.[metric] ?? [];
      const top = list[0]?.value || 1;
      const all: Row[] = list.map((e) => ({ ...e, me: !!mine && e.nickname.toLowerCase() === mine, width: Math.max(4, Math.round((e.value / top) * 100)) }));
      const rows = all.slice(0, this.limit());
      const own = all.findIndex((r) => r.me);
      if (own >= this.limit()) rows.push({ ...all[own]!, gap: true }, all[own]!);
      return { metric, rows };
    });
  });

  /** Reloads the rankings and your nickname (after joining, renaming or leaving). */
  reload(): void {
    this.boards.reload();
    this.mine.reload();
  }

  protected valueLabel(metric: Metric, n: number): string {
    const t = this.i18n.t().leaderboard;
    return fmt({ played: t.playedValue, streak: t.streakValue, wins: t.winsValue }[metric], { n });
  }

  protected unit(metric: Metric): string {
    const t = this.i18n.t().leaderboard;
    return { played: t.playedUnit, streak: t.streakUnit, wins: t.winsUnit }[metric];
  }
}
