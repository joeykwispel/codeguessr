import { ChangeDetectionStrategy, Component, PLATFORM_ID, computed, inject, resource, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { utcDay } from '../../core/dates';
import { I18n, fmt } from '../../core/i18n';
import { PuzzleService, type PuzzleSummary } from '../../core/puzzle.service';
import { Seo } from '../../core/seo.service';
import { StatsService } from '../../core/stats.service';
import { LAUNCH_DAY } from '../../data/shared/puzzles';
import { Icon } from '../../shared/components/icon';
import { savedGame } from '../play/game.store';

type Status = 'won' | 'lost' | 'playing' | 'none';

interface Item extends PuzzleSummary {
  status: Status;
  turns: number;
  today: boolean;
}

/**
 * Every puzzle from launch until today as levels, grouped by month, with what you did on each, and a button that
 * continues with the oldest puzzle you haven't finished yet.
 */
@Component({
  selector: 'app-archive-page',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().archive;
    <header class="intro">
      <h1>{{ t.title }}</h1>
      <p class="muted">{{ t.intro }}</p>
    </header>

    @if (list.error()) {
      <div class="glass notice" role="alert">
        <p>{{ t.error }}</p>
        <button type="button" class="btn" (click)="list.reload()">{{ i18n.t().play.retry }}</button>
      </div>
    } @else if (list.hasValue()) {
      @if (items().length) {
        @if (next(); as n) {
          <a class="glass ring continue" [routerLink]="href(n)">
            <span class="play" aria-hidden="true"><app-icon name="play" /></span>
            <span class="what">
              <span class="kicker mono">{{ t.nextUp }}</span>
              <span class="title">{{ fmt(t.play, { n: n.id }) }}</span>
              <span class="muted small">{{ n.today ? t.today : dayLabel(n.date) }} · {{ i18n.content().categories[n.category] }}</span>
            </span>
          </a>
        } @else {
          <p class="glass done"><app-icon name="trophy" /> {{ t.allDone }}</p>
        }

        <div class="bar">
          <div class="progress">
            <p class="mono">{{ fmt(t.progress, { played: playedCount(), total: items().length }) }}</p>
            <div class="meter" aria-hidden="true"><span [style.width.%]="(playedCount() / items().length) * 100"></span></div>
          </div>
          <fieldset class="filter">
            <legend class="sr-only">{{ t.filter }}</legend>
            <label [class.on]="!onlyUnplayed()"
              ><input type="radio" name="filter" [checked]="!onlyUnplayed()" (change)="onlyUnplayed.set(false)" />{{ t.all }}</label
            >
            <label [class.on]="onlyUnplayed()"
              ><input type="radio" name="filter" [checked]="onlyUnplayed()" (change)="onlyUnplayed.set(true)" />{{ t.unplayed }}</label
            >
          </fieldset>
        </div>

        @for (month of months(); track month.key) {
          <section [attr.aria-labelledby]="'m-' + month.key">
            <h2 [id]="'m-' + month.key">{{ month.label }}</h2>
            <ol class="levels">
              @for (item of month.items; track item.date) {
                <li>
                  <a
                    [routerLink]="href(item)"
                    [class]="'level ' + item.status"
                    [class.next]="item.date === next()?.date"
                    [class.today]="item.today"
                    [attr.aria-label]="label(item)"
                    [attr.aria-current]="item.date === next()?.date ? 'step' : null"
                  >
                    <span class="n mono" aria-hidden="true">{{ item.id }}</span>
                    <span class="date" aria-hidden="true">{{ item.today ? t.today : shortDay(item.date) }}</span>
                    <span class="mark" aria-hidden="true">
                      @switch (item.status) {
                        @case ('won') {
                          <app-icon name="check" />
                        }
                        @case ('lost') {
                          <app-icon name="x" />
                        }
                        @case ('playing') {
                          <app-icon name="play" />
                        }
                      }
                    </span>
                  </a>
                </li>
              }
            </ol>
          </section>
        }
      } @else {
        <p class="glass notice">{{ t.empty }}</p>
      }
    } @else {
      <div class="skeleton" aria-busy="true">
        <p class="sr-only" role="status">{{ t.loading }}</p>
        <div class="sk continue-sk" aria-hidden="true"></div>
        <div class="sk-grid" aria-hidden="true">
          @for (i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; track i) {
            <div class="sk"></div>
          }
        </div>
      </div>
    }
  `,
  styles: `
    :host {
      display: grid;
      gap: 1.25rem;
    }
    .intro {
      display: grid;
      gap: 0.5rem;
    }
    h1 {
      font-size: clamp(2rem, 6vw, 3rem);
      letter-spacing: -0.04em;
      line-height: 1;
    }
    h2 {
      font-size: 0.9rem;
      letter-spacing: 0;
      margin: 0.5rem 0;
      color: var(--muted);
      text-transform: capitalize;
    }
    .continue {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.25rem;
      color: var(--text);
      text-decoration: none;
      animation: fade-up 0.6s var(--ease) both;
      transition:
        transform 0.25s var(--ease),
        box-shadow 0.25s;
    }
    .continue:hover {
      transform: translateY(-2px);
      box-shadow:
        var(--shadow),
        0 0 0 4px var(--glow);
    }
    .play {
      flex: none;
      display: grid;
      place-items: center;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: var(--accent);
      color: var(--accent-ink);
      box-shadow: 0 0 0 6px var(--glow);
      animation: pulse 2.4s ease-in-out infinite;
    }
    .play app-icon {
      width: 22px;
      height: 22px;
    }
    @keyframes pulse {
      50% {
        box-shadow: 0 0 0 12px transparent;
      }
    }
    .what {
      display: grid;
      gap: 0.125rem;
    }
    .kicker {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--accent-text);
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .title {
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
    .small {
      font-size: 0.875rem;
    }
    .done {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 1.25rem;
      font-weight: 600;
    }
    .done app-icon {
      color: var(--flame);
    }
    .bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.75rem;
    }
    .progress {
      display: grid;
      gap: 0.375rem;
      min-width: min(100%, 14rem);
    }
    .progress p {
      font-size: 0.9rem;
      font-weight: 600;
    }
    .meter {
      height: 6px;
      border-radius: 999px;
      background: var(--surface-2);
      overflow: hidden;
    }
    .meter span {
      display: block;
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(90deg, var(--accent), var(--accent-2));
      transition: width 0.6s var(--ease);
    }
    .filter {
      display: inline-flex;
      margin: 0;
      padding: 3px;
      border: 1px solid var(--border);
      border-radius: 999px;
      background: var(--surface);
    }
    .filter label {
      position: relative;
      display: inline-flex;
      align-items: center;
      min-height: 40px;
      padding: 0 0.875rem;
      border-radius: 999px;
      font-family: var(--mono);
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
    }
    .filter label.on {
      background: var(--accent);
      color: var(--accent-ink);
    }
    .filter input {
      position: absolute;
      opacity: 0;
      inset: 0;
      margin: 0;
      cursor: pointer;
    }
    .filter label:has(input:focus-visible) {
      outline: 3px solid var(--accent-text);
      outline-offset: 2px;
    }
    .levels {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
      gap: 0.5rem;
    }
    .level {
      position: relative;
      display: grid;
      align-content: center;
      justify-items: center;
      gap: 0.125rem;
      aspect-ratio: 1;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: var(--surface);
      -webkit-backdrop-filter: blur(14px);
      backdrop-filter: blur(14px);
      color: var(--text);
      text-decoration: none;
      transition:
        transform 0.2s var(--ease),
        background 0.2s,
        box-shadow 0.2s;
    }
    .level:hover {
      transform: translateY(-2px);
      background: var(--surface-2);
      box-shadow: 0 0 0 4px var(--glow);
    }
    .n {
      font-size: 1.35rem;
      font-weight: 800;
      line-height: 1;
    }
    .date {
      font-size: 0.7rem;
      color: var(--muted);
      white-space: nowrap;
    }
    .mark {
      position: absolute;
      top: 6px;
      right: 6px;
      display: grid;
      place-items: center;
    }
    .mark app-icon {
      width: 14px;
      height: 14px;
    }
    .level.won {
      border-color: color-mix(in srgb, var(--ok) 55%, var(--border));
      background: var(--ok-soft);
    }
    .level.won .mark {
      color: var(--ok);
    }
    .level.lost {
      border-color: color-mix(in srgb, var(--bad) 45%, var(--border));
      background: var(--bad-soft);
    }
    .level.lost .mark {
      color: var(--bad);
    }
    .level.playing {
      border-style: dashed;
      border-color: var(--accent-2);
    }
    .level.playing .mark {
      color: var(--accent-2-text);
    }
    .level.today .date {
      color: var(--accent-text);
      font-weight: 700;
    }
    .level.next {
      border: 2px solid var(--accent);
      box-shadow: 0 0 0 4px var(--glow);
      animation: glow 2.4s ease-in-out infinite;
    }
    @keyframes glow {
      50% {
        box-shadow: 0 0 0 7px var(--glow);
      }
    }
    .notice {
      display: grid;
      gap: 0.75rem;
      justify-items: start;
      padding: 1.25rem;
    }
    .skeleton {
      display: grid;
      gap: 1rem;
    }
    .continue-sk {
      height: 84px;
    }
    .sk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
      gap: 0.5rem;
    }
    .sk-grid .sk {
      aspect-ratio: 1;
    }
    .sk {
      border-radius: var(--radius-sm);
      background: var(--surface-2);
    }
  `
})
export class ArchivePage {
  protected readonly i18n = inject(I18n);
  protected readonly fmt = fmt;
  private readonly puzzles = inject(PuzzleService);
  private readonly stats = inject(StatsService);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly today = utcDay();

  protected readonly onlyUnplayed = signal(false);

  protected readonly list = resource({
    params: () => (this.browser ? this.today : undefined),
    loader: ({ params }) => this.puzzles.list(LAUNCH_DAY, params)
  });

  protected readonly items = computed<Item[]>(() => {
    const history = this.stats.history();
    // oldest first, like levels: #1, #2, #3…
    return (this.list.value() ?? []).map((p) => {
      const h = history[p.date];
      const saved = h ? null : savedGame(p.date, p.id);
      const status: Status = h ? h.status : saved?.guesses.length ? 'playing' : 'none';
      return { ...p, status, turns: h?.turns ?? 0, today: p.date === this.today };
    });
  });

  /** The first puzzle, oldest first, that isn't finished yet: where the continue button takes you. */
  protected readonly next = computed(() => this.items().find((i) => i.status !== 'won' && i.status !== 'lost') ?? null);

  protected readonly playedCount = computed(() => this.items().filter((i) => i.status === 'won' || i.status === 'lost').length);

  protected readonly months = computed(() => {
    const locale = this.i18n.locale() === 'nl' ? 'nl-NL' : 'en-GB';
    const monthFmt = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric', timeZone: 'UTC' });
    const groups = new Map<string, { key: string; label: string; items: Item[] }>();
    for (const item of this.items()) {
      if (this.onlyUnplayed() && (item.status === 'won' || item.status === 'lost')) continue;
      const key = item.date.slice(0, 7);
      if (!groups.has(key)) groups.set(key, { key, label: monthFmt.format(new Date(`${key}-01T00:00:00Z`)), items: [] });
      groups.get(key)!.items.push(item);
    }
    return [...groups.values()];
  });

  constructor() {
    inject(Seo).set('archive');
  }

  protected href(item: Pick<Item, 'date' | 'today'>): string {
    return item.today ? this.i18n.href('/') : this.i18n.href('/archive/' + item.date);
  }

  protected shortDay(date: string): string {
    const locale = this.i18n.locale() === 'nl' ? 'nl-NL' : 'en-GB';
    return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
  }

  protected dayLabel(date: string): string {
    const locale = this.i18n.locale() === 'nl' ? 'nl-NL' : 'en-GB';
    return new Intl.DateTimeFormat(locale, { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
  }

  protected label(item: Item): string {
    const t = this.i18n.t().archive;
    const status = item.status === 'won' ? fmt(t.won, { n: item.turns }) : item.status === 'lost' ? t.lost : item.status === 'playing' ? t.playing : t.none;
    const date = item.today ? `${t.today}, ${this.dayLabel(item.date)}` : this.dayLabel(item.date);
    return fmt(t.item, { n: item.id, date, category: this.i18n.content().categories[item.category], status });
  }
}
