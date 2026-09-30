import { LAUNCH_DAY } from '../data/shared/puzzles';
import { addDays } from './dates';
import type { HistoryEntry } from './stats.service';

/** A puzzle as a level: its number and its day. */
export interface Level {
  id: number;
  date: string;
}

/**
 * The oldest puzzle up to today that isn't finished yet (not played, or still in progress), skipping `except`.
 * Puzzle n is played on LAUNCH_DAY + (n - 1), so no puzzle list is needed. Null when everything is done.
 */
export function nextUnfinished(history: Readonly<Record<string, HistoryEntry>>, today: string, except?: string): Level | null {
  for (let date = LAUNCH_DAY, id = 1; date <= today; date = addDays(date, 1), id++) {
    if (date !== except && !history[date]) return { id, date };
  }
  return null;
}
