import { Injectable, inject } from '@angular/core';
import type { Locale, Puzzle, PuzzleRow } from '../data/shared/types';
import { storage } from './storage';
import { Supabase } from './supabase.client';

export type PuzzleSource = 'network' | 'cache' | 'snapshot';

export interface LoadedPuzzle {
  row: PuzzleRow;
  source: PuzzleSource;
}

/** A past (or today's) puzzle in the archive list: no answers or clues, just enough to link to it. */
export interface PuzzleSummary {
  id: number;
  date: string;
  category: PuzzleRow['category'];
}

interface CacheEntry {
  row: PuzzleRow;
  fetchedAt: number;
}

export const CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const CACHE_PREFIX = 'cg:puzzle:';
const CACHE_KEEP = 14;
const TIMEOUT_MS = 6000;

/** Picks the text for one language out of a row that holds both. */
export function localize(row: PuzzleRow, locale: Locale): Puzzle {
  return {
    id: row.id,
    date: row.date,
    answer: row.answer,
    aliases: row.aliases,
    category: row.category,
    clues: locale === 'nl' ? row.clues_nl : row.clues_en,
    funFact: locale === 'nl' ? row.fun_fact_nl : row.fun_fact_en
  };
}

/**
 * Loads puzzles: localStorage cache (24h) first, then Supabase, and the bundled snapshot when Supabase is
 * unreachable, not configured or not seeded yet. Rows hold both languages, so switching language needs no refetch.
 */
@Injectable({ providedIn: 'root' })
export class PuzzleService {
  private readonly supabase = inject(Supabase);

  /** The puzzle for a UTC day, or null if there is none. Only throws if every source fails. */
  async load(date: string): Promise<LoadedPuzzle | null> {
    const cached = storage.get<CacheEntry | null>(CACHE_PREFIX + date, null);
    if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS && cached.row?.date === date) return { row: cached.row, source: 'cache' };

    let networkFailed = false;
    try {
      const row = await this.fetchRow(date);
      if (row) {
        this.remember(row);
        return { row, source: 'network' };
      }
    } catch {
      networkFailed = true;
    }

    try {
      const row = await this.snapshotRow(date);
      if (row) return { row, source: 'snapshot' };
    } catch (e) {
      if (networkFailed) throw e;
    }
    // a stale cache entry still beats nothing when we're offline
    if (cached?.row?.date === date) return { row: cached.row, source: 'cache' };
    return null;
  }

  /** Puzzles from `from` to `to` (inclusive) for the archive, oldest first. */
  async list(from: string, to: string): Promise<PuzzleSummary[]> {
    try {
      const client = await this.supabase.get();
      if (client) {
        const { data, error } = await client
          .from('puzzles')
          .select('id, date, category')
          .gte('date', from)
          .lte('date', to)
          .order('date')
          // no built-in retries with backoff: the bundled snapshot is a faster fallback
          .retry(false)
          .abortSignal(AbortSignal.timeout(TIMEOUT_MS));
        if (error) throw error;
        if (data?.length) return data as PuzzleSummary[];
      }
    } catch {
      // fall through to the snapshot
    }
    const { snapshotRows } = await import('../data/snapshot');
    return snapshotRows.filter((r) => r.date >= from && r.date <= to).map(({ id, date, category }) => ({ id, date, category }));
  }

  private async fetchRow(date: string): Promise<PuzzleRow | null> {
    const client = await this.supabase.get();
    if (!client) return null;
    const { data, error } = await client.from('puzzles').select('*').eq('date', date).retry(false).abortSignal(AbortSignal.timeout(TIMEOUT_MS)).maybeSingle();
    if (error) throw error;
    return (data as PuzzleRow | null) ?? null;
  }

  private async snapshotRow(date: string): Promise<PuzzleRow | null> {
    const { snapshotRows } = await import('../data/snapshot');
    return snapshotRows.find((r) => r.date === date) ?? null;
  }

  /** Caches a fetched row and drops the oldest entries, so the cache never grows past a couple of weeks. */
  private remember(row: PuzzleRow): void {
    storage.set(CACHE_PREFIX + row.date, { row, fetchedAt: Date.now() } satisfies CacheEntry);
    try {
      const keys = Object.keys(localStorage)
        .filter((k) => k.startsWith(CACHE_PREFIX))
        .sort();
      for (const k of keys.slice(0, Math.max(0, keys.length - CACHE_KEEP))) storage.remove(k);
    } catch {
      // storage unavailable
    }
  }
}
