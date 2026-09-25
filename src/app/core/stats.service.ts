import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { utcDay } from './dates';
import type { GameState } from './game';
import { type GameResult, type Stats, currentStreak, emptyStats, recordGame } from './stats';
import { storage } from './storage';

/** One finished game, daily or archive, for the history calendar and the archive markers. */
export interface HistoryEntry {
  status: 'won' | 'lost';
  turns: number;
  hard: boolean;
  archive: boolean;
}

const STATS_KEY = 'cg:stats';
const HISTORY_KEY = 'cg:history';

/**
 * Stats and streak, kept in localStorage. This is the default and complete path: everything works without an
 * account. Cloud sync (core/cloud-sync.service.ts) is an optional layer that listens to `onRecorded` and may
 * `replace` the stats after merging with the signed-in user's row; removing it leaves this service untouched.
 */
@Injectable({ providedIn: 'root' })
export class StatsService {
  readonly stats = signal<Stats>(emptyStats());
  readonly history = signal<Record<string, HistoryEntry>>({});
  /** The streak as it stands now (0 once a day was missed). */
  readonly streak = computed(() => currentStreak(this.stats(), utcDay()));
  private readonly listeners: ((result: GameResult, stats: Stats) => void)[] = [];

  constructor() {
    if (!isPlatformBrowser(inject(PLATFORM_ID))) return;
    this.stats.set(normalizeStats(storage.get<Partial<Stats> | null>(STATS_KEY, null)));
    this.history.set(storage.get<Record<string, HistoryEntry>>(HISTORY_KEY, {}));
  }

  /** Records a finished game. Archive games only go into the history; daily games also update the stats. */
  record(state: GameState): void {
    if (state.status === 'playing') return;
    const entry: HistoryEntry = { status: state.status, turns: state.guesses.length, hard: state.hard, archive: state.archive };
    const history = { ...this.history(), [state.date]: this.history()[state.date] ?? entry };
    this.history.set(history);
    storage.set(HISTORY_KEY, history);
    if (state.archive) return;

    const result: GameResult = { date: state.date, won: state.status === 'won', turns: state.guesses.length };
    const next = recordGame(this.stats(), result);
    if (next === this.stats()) return;
    this.replace(next);
    for (const listener of this.listeners) listener(result, next);
  }

  /** Overwrites the stats, e.g. with the merged cloud row after signing in. */
  replace(stats: Stats): void {
    this.stats.set(stats);
    storage.set(STATS_KEY, stats);
  }

  /** Subscribe to daily games that changed the stats. */
  onRecorded(listener: (result: GameResult, stats: Stats) => void): void {
    this.listeners.push(listener);
  }
}

/** Fills gaps in stored stats (older versions, hand-edited storage) so the rest of the app can trust the shape. */
export function normalizeStats(s: Partial<Stats> | null): Stats {
  const base = emptyStats();
  if (!s || typeof s !== 'object') return base;
  const n = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) && v >= 0 ? Math.floor(v) : 0);
  const dist = Array.isArray(s.guessDistribution) ? s.guessDistribution : [];
  return {
    streak: n(s.streak),
    maxStreak: n(s.maxStreak),
    lastPlayedDate: typeof s.lastPlayedDate === 'string' ? s.lastPlayedDate : null,
    gamesPlayed: n(s.gamesPlayed),
    gamesWon: n(s.gamesWon),
    guessDistribution: base.guessDistribution.map((_, i) => n(dist[i]))
  };
}
