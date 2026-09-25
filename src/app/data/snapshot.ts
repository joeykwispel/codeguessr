import { toRows } from './rows';
import { puzzles } from './shared/puzzles';
import { puzzles as en } from './locales/en/puzzles';

/**
 * The bundled copy of every puzzle, used when Supabase is unreachable or not configured.
 * Loaded lazily (dynamic import), so it stays out of the initial bundle.
 */
export const snapshotRows = toRows(puzzles, en, en);
