import { TestBed } from '@angular/core/testing';
import type { PuzzleRow } from '../data/shared/types';
import { snapshotRows } from '../data/snapshot';
import { CACHE_TTL_MS, PuzzleService, localize } from './puzzle.service';
import { Supabase } from './supabase.client';

const row = (date: string, answer = 'Remote'): PuzzleRow => ({
  id: 99,
  date,
  answer,
  aliases: [],
  clues_en: ['1', '2', '3', '4', '5', '6'],
  clues_nl: ['een', 'twee', 'drie', 'vier', 'vijf', 'zes'],
  fun_fact_en: 'fact',
  fun_fact_nl: 'feitje',
  category: 'tool'
});

/** A tiny stand-in for the supabase-js query builder: from().select().eq().abortSignal().maybeSingle(). */
function fakeClient(result: () => Promise<{ data: unknown; error: unknown }>) {
  const calls = { count: 0 };
  const builder = {
    select: () => builder,
    eq: () => builder,
    gte: () => builder,
    lte: () => builder,
    order: () => builder,
    retry: () => builder,
    abortSignal: () => builder,
    maybeSingle: () => {
      calls.count++;
      return result();
    }
  };
  return { client: { from: () => builder }, calls };
}

function setup(client: unknown) {
  TestBed.configureTestingModule({ providers: [{ provide: Supabase, useValue: { configured: !!client, get: () => Promise.resolve(client) } }] });
  return TestBed.inject(PuzzleService);
}

describe('PuzzleService', () => {
  const day = snapshotRows[0]!.date;

  beforeEach(() => localStorage.clear());
  afterEach(() => vi.useRealTimers());

  it('fetches from Supabase and caches the row', async () => {
    const { client, calls } = fakeClient(async () => ({ data: row(day), error: null }));
    const service = setup(client);
    expect(await service.load(day)).toEqual({ row: row(day), source: 'network' });
    expect(await service.load(day)).toEqual({ row: row(day), source: 'cache' });
    expect(calls.count).toBe(1);
  });

  it('refetches once the cache is older than 24 hours', async () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2026-09-21T08:00:00Z'));
    const { client, calls } = fakeClient(async () => ({ data: row(day), error: null }));
    const service = setup(client);
    await service.load(day);
    vi.setSystemTime(Date.now() + CACHE_TTL_MS + 1);
    expect((await service.load(day))?.source).toBe('network');
    expect(calls.count).toBe(2);
  });

  it('falls back to the bundled snapshot when the fetch fails', async () => {
    const { client } = fakeClient(async () => ({ data: null, error: new Error('offline') }));
    const loaded = await setup(client).load(day);
    expect(loaded?.source).toBe('snapshot');
    expect(loaded?.row.answer).toBe(snapshotRows[0]!.answer);
  });

  it('uses the snapshot when Supabase is not configured', async () => {
    expect((await setup(null).load(day))?.source).toBe('snapshot');
  });

  it('returns null for a day without a puzzle', async () => {
    expect(await setup(null).load('1999-01-01')).toBeNull();
  });

  it('keeps only the newest cache entries', async () => {
    for (let i = 1; i <= 20; i++) {
      const d = `2030-01-${String(i).padStart(2, '0')}`;
      TestBed.resetTestingModule();
      await setup(fakeClient(async () => ({ data: row(d), error: null })).client).load(d);
    }
    const keys = Object.keys(localStorage).filter((k) => k.startsWith('cg:puzzle:'));
    expect(keys.length).toBe(14);
    expect(keys).toContain('cg:puzzle:2030-01-20');
    expect(keys).not.toContain('cg:puzzle:2030-01-01');
  });

  it('localizes clues and fun facts', () => {
    expect(localize(row(day), 'nl').clues[0]).toBe('een');
    expect(localize(row(day), 'en').funFact).toBe('fact');
  });
});
