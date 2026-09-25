import { Injectable, computed, inject, signal } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { type GameState, alreadyGuessed, maxTurns, newGame, play, revealedClues, setHard } from '../../core/game';
import { TermIndex, isCorrect } from '../../core/guess';
import { I18n, fmt } from '../../core/i18n';
import { localize } from '../../core/puzzle.service';
import { SettingsService } from '../../core/settings.service';
import { StatsService } from '../../core/stats.service';
import { storage } from '../../core/storage';
import type { PuzzleRow, Term } from '../../data/shared/types';
import termList from '../../data/shared/terms.json';

export const terms = new TermIndex(termList as Term[]);

export type GuessOutcome = 'ok' | 'empty' | 'unknown' | 'repeat';

const gameKey = (date: string) => `cg:game:${date}`;

/** Reads a saved game for a day, if it belongs to the same puzzle. */
export function savedGame(date: string, puzzleId?: number): GameState | null {
  const s = storage.get<GameState | null>(gameKey(date), null);
  return s && Array.isArray(s.guesses) && (puzzleId === undefined || s.puzzleId === puzzleId) ? s : null;
}

/**
 * State of the game on screen. Provided per play page, so an archive game and today's game never share state.
 * Every turn is saved to localStorage, so a reload continues where you left off.
 */
@Injectable()
export class GameStore {
  private readonly announcer = inject(LiveAnnouncer);
  private readonly i18n = inject(I18n);
  private readonly settings = inject(SettingsService);
  private readonly stats = inject(StatsService);
  private readonly finishedHandlers: ((state: GameState) => void)[] = [];

  readonly row = signal<PuzzleRow | null>(null);
  readonly state = signal<GameState | null>(null);

  /** The puzzle in the active language; switching language keeps the game going. */
  readonly puzzle = computed(() => {
    const row = this.row();
    return row ? localize(row, this.i18n.locale()) : null;
  });
  readonly clues = computed(() => {
    const p = this.puzzle();
    const s = this.state();
    return p && s ? p.clues.slice(0, maxTurns(s)) : [];
  });
  readonly revealed = computed(() => {
    const s = this.state();
    return s ? revealedClues(s) : 0;
  });
  readonly turns = computed(() => {
    const s = this.state();
    return s ? maxTurns(s) : 0;
  });
  readonly turnsLeft = computed(() => this.turns() - (this.state()?.guesses.length ?? 0));
  readonly finished = computed(() => this.state()?.status !== 'playing');

  start(row: PuzzleRow, archive: boolean): void {
    this.row.set(row);
    const saved = savedGame(row.date, row.id);
    // a daily game left unfinished and completed from the archive later counts as an archive game
    this.state.set(saved ? { ...saved, archive: saved.archive || archive } : newGame(row.date, row.id, this.settings.hard(), archive));
  }

  /** Called once when a game ends (stats, streak). */
  onFinished(handler: (state: GameState) => void): void {
    this.finishedHandlers.push(handler);
  }

  guess(input: string): GuessOutcome {
    const state = this.state();
    const puzzle = this.puzzle();
    if (!state || !puzzle || state.status !== 'playing') return 'ok';
    if (!input.trim()) return 'empty';
    // the answer always counts, even if a new puzzle's term hasn't made it into terms.json yet
    const correct = isCorrect(input, puzzle);
    const value = correct ? puzzle.answer : terms.resolve(input);
    if (!value) return 'unknown';
    if (alreadyGuessed(state, value)) return 'repeat';
    this.commit(play(state, value, correct));
    return 'ok';
  }

  skip(): void {
    const state = this.state();
    if (state?.status === 'playing') this.commit(play(state, null, false));
  }

  setHard(hard: boolean): void {
    this.settings.setHard(hard);
    const state = this.state();
    if (state) this.state.set(setHard(state, hard));
  }

  private commit(next: GameState): void {
    this.state.set(next);
    storage.set(gameKey(next.date), next);
    this.announce(next);
    if (next.status !== 'playing') {
      this.stats.record(next);
      for (const h of this.finishedHandlers) h(next);
    }
  }

  private announce(s: GameState): void {
    const t = this.i18n.t().play;
    const last = s.guesses.at(-1);
    const puzzle = this.puzzle();
    if (!last || !puzzle) return;
    let message: string;
    if (s.status === 'won') {
      message = `${t.won} ${fmt(t.wonIn, { n: s.guesses.length, total: maxTurns(s) })} ${puzzle.funFact}`;
    } else if (s.status === 'lost') {
      message = `${t.lost}. ${t.answerWas} ${puzzle.answer}. ${puzzle.funFact}`;
    } else {
      const left = maxTurns(s) - s.guesses.length;
      const result = last.value ? fmt(t.wrongAnnounce, { term: last.value, left }) : fmt(t.skipAnnounce, { left });
      const n = revealedClues(s);
      message = `${result} ${fmt(t.newClue, { n, clue: puzzle.clues[n - 1] ?? '' })}`;
    }
    void this.announcer.announce(message, 'polite');
  }
}
