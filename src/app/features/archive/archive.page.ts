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

/** Every puzzle from launch until today, grouped by month, with what you did on each. */
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
        <div class="bar">
          <p class="progress">{{ fmt(t.progress, { played: playedCount(), total: items().length }) }}</p>
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
            <ol class="list">
              @for (item of month.items; track item.date) {
                <li>
                  <a
                    [routerLink]="item.today ? i18n.href('/') : i18n.href('/archive/' + item.date)"
                    [class]="'item ' + item.status"
                    [attr.aria-label]="label(item)"
                  >
                    <span class="n mono" aria-hidden="true">#{{ item.id }}</span>
                    <span class="what" aria-hidden="true">
                      <span class="date">{{ item.today ? t.today : dayLabel(item.date) }}</span>
                      <span class="cat muted">{{ i18n.content().categories[item.category] }}</span>
                    </span>
                    <span class="status" aria-hidden="true">
                      @switch (item.status) {
                        @case ('won') {
                          <app-icon name="check" />
                          {{ fmt(t.won, { n: item.turns }) }}
                        }
                        @case ('lost') {
                          <app-icon name="x" />
                          {{ t.lost }}
                        }
                        @case ('playing') {
                          <app-icon name="play" />
                          {{ t.playing }}
                        }
                        @default {
                          {{ t.none }}
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
        @for (i of [1, 2, 3, 4, 5]; track i) {
          <div class="sk" aria-hidden="true"></div>
        }
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
    .bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.75rem;
    }
    .progress {
      font-family: var(--mono);
      font-size: 0.9rem;
      font-weight: 600;
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
    .list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 0.375rem;
    }
    .item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      min-height: 56px;
      padding: 0.5rem 0.875rem;
      border: 1px solid var(--border);
      border-left-width: 4px;
      border-radius: var(--radius-sm);
      background: var(--surface);
      -webkit-backdrop-filter: blur(14px);
      backdrop-filter: blur(14px);
      color: var(--text);
      text-decoration: none;
      transition:
        background 0.25s,
        box-shadow 0.25s;
    }
    .item:hover {
      background: var(--surface-2);
      box-shadow: 0 0 0 4px var(--glow);
    }
    .n {
      min-width: 2.5rem;
      font-weight: 700;
    }
    .what {
      flex: 1;
      display: grid;
    }
    .date {
      font-weight: 600;
    }
    .cat {
      font-size: 0.8125rem;
    }
    .status {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--muted);
      white-space: nowrap;
    }
    .won {
      border-left-color: var(--ok);
    }
    .won .status {
      color: var(--ok);
    }
    .lost {
      border-left-color: var(--bad);
    }
    .lost .status {
      color: var(--bad);
    }
    .playing {
      border-left-color: var(--accent-2);
    }
    .notice {
      display: grid;
      gap: 0.75rem;
      justify-items: start;
      padding: 1.25rem;
    }
    .skeleton {
      display: grid;
      gap: 0.375rem;
    }
    .sk {
      height: 56px;
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
    return [...(this.list.value() ?? [])].reverse().map((p) => {
      const h = history[p.date];
      const saved = h ? null : savedGame(p.date, p.id);
      const status: Status = h ? h.status : saved?.guesses.length ? 'playing' : 'none';
      return { ...p, status, turns: h?.turns ?? 0, today: p.date === this.today };
    });
  });

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
