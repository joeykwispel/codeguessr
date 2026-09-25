import { addDays } from './dates';
import { type GameResult, type Stats, emptyStats, recordGame } from './stats';

/**
 * Merge rules for signing in (the "delta merge"):
 *
 * - Counts (games played, won, guess distribution) are the cloud row plus only the games this device finished
 *   while not synced (the unsynced queue). Games already in the cloud are never counted twice. A queued game on
 *   the cloud's last played day is skipped, because that day was already counted on another device.
 * - Streak: the side that played most recently decides how the streak ends (a loss there means 0). If the other
 *   side's streak ended the day before this streak started, the two join up. Two devices that both played the
 *   same last day keep the higher streak.
 * - Max streak is the highest of both sides and the merged streak.
 *
 * `owner` says whose cloud row the local stats last mirrored:
 * - null: this device never synced, so all local stats are anonymous games and get uploaded.
 * - the same user: local stats = their cloud copy + the unsynced queue.
 * - another user: the local stats belong to someone else; only the unsynced queue is carried over.
 */
export interface MergeInput {
  cloud: Stats | null;
  local: Stats;
  unsynced: readonly GameResult[];
  owner: 'none' | 'self' | 'other';
}

/** Stats built from a list of finished daily games. */
export function fromResults(results: readonly GameResult[]): Stats {
  return [...results].sort((a, b) => a.date.localeCompare(b.date)).reduce(recordGame, emptyStats());
}

type StreakSide = Pick<Stats, 'streak' | 'lastPlayedDate'>;

/** Combines two streak histories into one (see the rules above). */
export function combineStreaks(a: StreakSide, b: StreakSide): StreakSide {
  if (!a.lastPlayedDate) return b;
  if (!b.lastPlayedDate) return a;
  if (a.lastPlayedDate === b.lastPlayedDate) return { streak: Math.max(a.streak, b.streak), lastPlayedDate: a.lastPlayedDate };
  const [early, late] = a.lastPlayedDate < b.lastPlayedDate ? [a, b] : [b, a];
  const lateStart = addDays(late.lastPlayedDate!, -(late.streak - 1));
  const joins = late.streak > 0 && early.streak > 0 && lateStart === addDays(early.lastPlayedDate!, 1);
  return { streak: joins ? early.streak + late.streak : late.streak, lastPlayedDate: late.lastPlayedDate };
}

export function mergeOnSignIn({ cloud, local, unsynced, owner }: MergeInput): Stats {
  const localSide = owner === 'other' ? fromResults(unsynced) : local;
  if (!cloud) return localSide;

  const pending =
    owner === 'none'
      ? // never synced: every local game is new to the cloud
        { gamesPlayed: local.gamesPlayed, gamesWon: local.gamesWon, guessDistribution: local.guessDistribution }
      : fromResults(unsynced.filter((r) => r.date !== cloud.lastPlayedDate));

  const { streak, lastPlayedDate } = combineStreaks(cloud, localSide);
  return {
    streak,
    lastPlayedDate,
    maxStreak: Math.max(cloud.maxStreak, localSide.maxStreak, streak),
    gamesPlayed: cloud.gamesPlayed + pending.gamesPlayed,
    gamesWon: cloud.gamesWon + pending.gamesWon,
    guessDistribution: cloud.guessDistribution.map((n, i) => n + (pending.guessDistribution[i] ?? 0))
  };
}
