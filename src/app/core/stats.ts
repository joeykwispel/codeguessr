import { addDays } from './dates';

/** Aggregate stats, shaped like the Supabase `user_stats` row so local and cloud stats map one-to-one. */
export interface Stats {
  /** Consecutive daily puzzles won, ending on lastPlayedDate. */
  streak: number;
  maxStreak: number;
  /** UTC day of the last daily puzzle finished (won or lost). */
  lastPlayedDate: string | null;
  gamesPlayed: number;
  gamesWon: number;
  /** Wins by number of turns used: index 0 = solved on turn 1. */
  guessDistribution: number[];
}

export interface GameResult {
  date: string;
  won: boolean;
  /** Turns used (1-6). */
  turns: number;
}

export function emptyStats(): Stats {
  return { streak: 0, maxStreak: 0, lastPlayedDate: null, gamesPlayed: 0, gamesWon: 0, guessDistribution: [0, 0, 0, 0, 0, 0] };
}

/**
 * Adds a finished daily puzzle. A day only counts once, and only days after the last one played move the
 * streak: a win the day after a win extends it, any other win starts a new streak of 1, a loss resets it.
 */
export function recordGame(stats: Stats, game: GameResult): Stats {
  if (stats.lastPlayedDate && game.date <= stats.lastPlayedDate) return stats;
  const guessDistribution = [...stats.guessDistribution];
  if (game.won) guessDistribution[Math.min(Math.max(game.turns, 1), 6) - 1]! += 1;
  const continues = stats.lastPlayedDate === addDays(game.date, -1) && stats.streak > 0;
  const streak = game.won ? (continues ? stats.streak + 1 : 1) : 0;
  return {
    streak,
    maxStreak: Math.max(stats.maxStreak, streak),
    lastPlayedDate: game.date,
    gamesPlayed: stats.gamesPlayed + 1,
    gamesWon: stats.gamesWon + (game.won ? 1 : 0),
    guessDistribution
  };
}

/** The streak as it stands today: it survives until the end of the day after the last win, then drops to 0. */
export function currentStreak(stats: Pick<Stats, 'streak' | 'lastPlayedDate'>, today: string): number {
  if (!stats.lastPlayedDate || stats.streak === 0) return 0;
  return stats.lastPlayedDate === today || stats.lastPlayedDate === addDays(today, -1) ? stats.streak : 0;
}

export function winRate(stats: Pick<Stats, 'gamesPlayed' | 'gamesWon'>): number {
  return stats.gamesPlayed ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) : 0;
}
