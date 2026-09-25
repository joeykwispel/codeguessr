import { ChangeDetectionStrategy, Component, PLATFORM_ID, computed, effect, inject, input, resource, signal, viewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { RouterLink } from '@angular/router';
import { isDay, utcDay } from '../../core/dates';
import { I18n, fmt } from '../../core/i18n';
import { PuzzleService } from '../../core/puzzle.service';
import { ClueList } from './clue-list';
import { GameStore } from './game.store';
import { GuessHistory } from './guess-history';
import { GuessInput } from './guess-input';
import { ResultPanel } from './result-panel';

/** Today's puzzle at /, and any past puzzle at /archive/<date> (which never touches the streak). */
@Component({
  selector: 'app-play-page',
  imports: [RouterLink, ClueList, GuessInput, GuessHistory, ResultPanel],
  providers: [GameStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t().play;
    @let p = store.puzzle();
    @let s = store.state();
    <header class="intro">
      <h1>
        @if (p) {
          {{ fmt(t.puzzle, { n: p.id }) }}
        } @else {
          {{ t.today }}
        }
      </h1>
      @if (p) {
        <p class="tags">
          <span class="tag">{{ i18n.content().categories[p.category] }}</span>
          <span class="tag mono">{{ p.date }}</span>
        </p>
      }
      <p class="muted">{{ t.intro }}</p>
    </header>

    @if (!valid()) {
      <div class="notice card" role="alert">
        <p>{{ t.future }}</p>
        <a routerLink="/">{{ t.backToToday }}</a>
      </div>
    } @else if (puzzle.error()) {
      <div class="notice card" role="alert">
        <p>{{ t.error }}</p>
        <button type="button" class="btn" (click)="puzzle.reload()">{{ t.retry }}</button>
      </div>
    } @else if (puzzle.hasValue() && !puzzle.value()) {
      <div class="notice card" role="status">
        <p>{{ t.missing }}</p>
      </div>
    } @else if (p && s) {
      @if (s.archive) {
        <p class="banner" role="note">{{ t.archiveNote }}</p>
      }
      @if (puzzle.value()?.source === 'snapshot' && offline()) {
        <p class="banner muted">{{ t.offline }}</p>
      }
      <app-clue-list [clues]="store.clues()" [revealed]="store.revealed()" />

      @if (s.status === 'playing') {
        <app-guess-input
          [(query)]="query"
          [error]="error()"
          [exclude]="guessed()"
          [turnsLeft]="store.turnsLeft()"
          [turns]="store.turns()"
          (submitted)="guess($event)"
          (skipped)="skip()"
        />
        <label class="hard">
          <input type="checkbox" [checked]="s.hard" [disabled]="s.guesses.length > 0" (change)="setHard($event)" aria-describedby="hard-hint" />
          <span>{{ t.hard }}</span>
        </label>
        <p id="hard-hint" class="hint muted">{{ t.hardHint }}</p>
      } @else {
        <app-result-panel [state]="s" [puzzle]="p" [focusOnShow]="endedHere()" (reload)="reload()" />
      }

      <app-guess-history [guesses]="s.guesses" [turns]="store.turns()" [finished]="s.status !== 'playing'" />
    } @else {
      <div class="skeleton" aria-busy="true">
        <p class="visually-hidden" role="status">{{ t.loading }}</p>
        @for (i of [1, 2, 3, 4, 5, 6]; track i) {
          <div class="bar" aria-hidden="true"></div>
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
      font-size: clamp(1.75rem, 5vw, 2.25rem);
      letter-spacing: -0.02em;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
    }
    .tag {
      padding: 0.125rem 0.625rem;
      border-radius: 999px;
      background: var(--surface-2);
      border: 1px solid var(--border);
      font-size: 0.8125rem;
      font-weight: 600;
    }
    .notice {
      display: grid;
      gap: 0.75rem;
      justify-items: start;
      padding: 1.25rem;
    }
    .banner {
      padding: 0.625rem 0.875rem;
      border-radius: var(--radius-sm);
      background: var(--accent-soft);
      font-size: 0.9375rem;
    }
    .hard {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      min-height: 44px;
      font-weight: 600;
      cursor: pointer;
      justify-self: start;
    }
    .hard input {
      width: 1.25rem;
      height: 1.25rem;
      accent-color: var(--accent);
    }
    .hint {
      margin-top: -1.125rem;
      font-size: 0.875rem;
    }
    .skeleton {
      display: grid;
      gap: 0.5rem;
    }
    .bar {
      height: 3.25rem;
      border-radius: var(--radius-sm);
      background: var(--surface-2);
      animation: pulse 1.4s ease-in-out infinite;
    }
    @keyframes pulse {
      50% {
        opacity: 0.55;
      }
    }
  `
})
export class PlayPage {
  protected readonly i18n = inject(I18n);
  protected readonly store = inject(GameStore);
  protected readonly fmt = fmt;
  private readonly puzzles = inject(PuzzleService);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly guessInput = viewChild(GuessInput);
  private readonly announcer = inject(LiveAnnouncer);

  /** Route parameter for archive games; empty for today's puzzle. */
  readonly date = input<string>();

  private readonly today = signal(utcDay());
  protected readonly day = computed(() => this.date() ?? this.today());
  protected readonly archive = computed(() => this.day() !== this.today());
  protected readonly valid = computed(() => isDay(this.day()) && this.day() <= this.today());
  protected readonly offline = signal(false);

  protected readonly query = signal('');
  protected readonly error = signal<string | null>(null);
  /** True once the game ended during this visit, so the result gets focus (not when reopening a finished game). */
  protected readonly endedHere = signal(false);
  protected readonly guessed = computed(() => this.store.state()?.guesses.map((g) => g.value) ?? []);

  /** Nothing loads during prerendering: the static page shows the loading state and the browser fills it in. */
  protected readonly puzzle = resource({
    params: () => (this.browser && this.valid() ? this.day() : undefined),
    loader: ({ params }) => this.puzzles.load(params)
  });

  constructor() {
    if (this.browser) this.offline.set(!navigator.onLine);
    effect(() => {
      const loaded = this.puzzle.hasValue() ? this.puzzle.value() : null;
      if (loaded && loaded.row.id !== this.store.row()?.id) this.store.start(loaded.row, this.archive());
    });
    this.store.onFinished(() => this.endedHere.set(true));
  }

  protected guess(value: string): void {
    const t = this.i18n.t().play;
    const outcome = this.store.guess(value);
    const term = value.trim();
    this.error.set(outcome === 'empty' ? t.empty : outcome === 'unknown' ? fmt(t.unknown, { term }) : outcome === 'repeat' ? fmt(t.repeat, { term }) : null);
    const message = this.error();
    if (message) void this.announcer.announce(message, 'assertive');
    if (outcome === 'ok') this.query.set('');
    this.guessInput()?.focus();
  }

  protected skip(): void {
    this.error.set(null);
    this.store.skip();
    this.guessInput()?.focus();
  }

  protected setHard(e: Event): void {
    this.store.setHard((e.target as HTMLInputElement).checked);
  }

  /** The day rolled over while the page was open. */
  protected reload(): void {
    this.today.set(utcDay());
    this.endedHere.set(false);
  }
}
