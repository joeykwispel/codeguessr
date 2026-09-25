import { combineStreaks, fromResults, mergeOnSignIn } from './merge';
import type { GameResult, Stats } from './stats';

const win = (date: string, turns = 2): GameResult => ({ date, won: true, turns });
const loss = (date: string): GameResult => ({ date, won: false, turns: 6 });
const stats = (s: Partial<Stats>): Stats => ({
  streak: 0,
  maxStreak: 0,
  lastPlayedDate: null,
  gamesPlayed: 0,
  gamesWon: 0,
  guessDistribution: [0, 0, 0, 0, 0, 0],
  ...s
});

describe('stats merge on sign-in', () => {
  it('uploads local stats as they are when the account has no cloud row yet', () => {
    const local = fromResults([win('2026-09-21'), win('2026-09-22')]);
    expect(mergeOnSignIn({ cloud: null, local, unsynced: [], owner: 'none' })).toEqual(local);
  });

  it('adds anonymous games from a never-synced device to the cloud counts', () => {
    const cloud = stats({ gamesPlayed: 10, gamesWon: 8, guessDistribution: [1, 2, 3, 2, 0, 0], streak: 0, maxStreak: 5, lastPlayedDate: '2026-09-10' });
    const local = fromResults([win('2026-09-21', 1), loss('2026-09-22')]);
    const merged = mergeOnSignIn({ cloud, local, unsynced: [], owner: 'none' });
    expect(merged.gamesPlayed).toBe(12);
    expect(merged.gamesWon).toBe(9);
    expect(merged.guessDistribution).toEqual([2, 2, 3, 2, 0, 0]);
    expect(merged.maxStreak).toBe(5);
  });

  it('does not double-count games that are already in the cloud', () => {
    // the local stats mirror the cloud row plus one anonymous game played after signing out
    const cloud = stats({ gamesPlayed: 5, gamesWon: 5, guessDistribution: [0, 5, 0, 0, 0, 0], streak: 5, maxStreak: 5, lastPlayedDate: '2026-09-22' });
    const local = stats({ gamesPlayed: 6, gamesWon: 6, guessDistribution: [0, 6, 0, 0, 0, 0], streak: 6, maxStreak: 6, lastPlayedDate: '2026-09-23' });
    const merged = mergeOnSignIn({ cloud, local, unsynced: [win('2026-09-23')], owner: 'self' });
    expect(merged.gamesPlayed).toBe(6);
    expect(merged.gamesWon).toBe(6);
    expect(merged.streak).toBe(6);
    expect(merged.lastPlayedDate).toBe('2026-09-23');
  });

  it('skips a queued game for a day the cloud already counted on another device', () => {
    const cloud = stats({ gamesPlayed: 3, gamesWon: 3, guessDistribution: [0, 3, 0, 0, 0, 0], streak: 3, maxStreak: 3, lastPlayedDate: '2026-09-23' });
    const local = fromResults([win('2026-09-23')]);
    const merged = mergeOnSignIn({ cloud, local, unsynced: [win('2026-09-23')], owner: 'self' });
    expect(merged.gamesPlayed).toBe(3);
  });

  it('keeps the higher streak when both sides played the same last day', () => {
    const cloud = stats({ streak: 4, maxStreak: 4, lastPlayedDate: '2026-09-23', gamesPlayed: 4, gamesWon: 4 });
    const local = stats({ streak: 1, maxStreak: 1, lastPlayedDate: '2026-09-23', gamesPlayed: 1, gamesWon: 1 });
    expect(mergeOnSignIn({ cloud, local, unsynced: [], owner: 'none' }).streak).toBe(4);
  });

  it('joins streaks from two devices on back-to-back days', () => {
    // cloud won the 20th-22nd, this device (anonymous) won the 23rd and 24th
    const cloud = stats({ streak: 3, maxStreak: 3, lastPlayedDate: '2026-09-22', gamesPlayed: 3, gamesWon: 3 });
    const local = fromResults([win('2026-09-23'), win('2026-09-24')]);
    const merged = mergeOnSignIn({ cloud, local, unsynced: [], owner: 'none' });
    expect(merged.streak).toBe(5);
    expect(merged.maxStreak).toBe(5);
    expect(merged.lastPlayedDate).toBe('2026-09-24');
  });

  it('a loss on the most recent day ends the streak', () => {
    const cloud = stats({ streak: 5, maxStreak: 5, lastPlayedDate: '2026-09-22', gamesPlayed: 5, gamesWon: 5 });
    const local = fromResults([loss('2026-09-23')]);
    const merged = mergeOnSignIn({ cloud, local, unsynced: [], owner: 'none' });
    expect(merged.streak).toBe(0);
    expect(merged.maxStreak).toBe(5);
  });

  it('only carries over the unsynced games when the local stats belong to another account', () => {
    const someoneElse = stats({ gamesPlayed: 50, gamesWon: 40, streak: 9, maxStreak: 20, lastPlayedDate: '2026-09-20' });
    const merged = mergeOnSignIn({ cloud: null, local: someoneElse, unsynced: [win('2026-09-23')], owner: 'other' });
    expect(merged.gamesPlayed).toBe(1);
    expect(merged.maxStreak).toBe(1);
  });

  it('with a cloud row and another owner, adds just the queued games', () => {
    const cloud = stats({ gamesPlayed: 2, gamesWon: 1, guessDistribution: [1, 0, 0, 0, 0, 0], lastPlayedDate: '2026-09-01' });
    const someoneElse = stats({ gamesPlayed: 50, gamesWon: 40, streak: 9, maxStreak: 20, lastPlayedDate: '2026-09-22' });
    const merged = mergeOnSignIn({ cloud, local: someoneElse, unsynced: [win('2026-09-23', 3)], owner: 'other' });
    expect(merged.gamesPlayed).toBe(3);
    expect(merged.guessDistribution).toEqual([1, 0, 1, 0, 0, 0]);
    expect(merged.maxStreak).toBe(1);
  });
});

describe('combineStreaks', () => {
  it('returns the other side when one never played', () => {
    expect(combineStreaks({ streak: 0, lastPlayedDate: null }, { streak: 2, lastPlayedDate: '2026-09-01' })).toEqual({
      streak: 2,
      lastPlayedDate: '2026-09-01'
    });
  });

  it('does not join across a gap', () => {
    expect(combineStreaks({ streak: 3, lastPlayedDate: '2026-09-20' }, { streak: 1, lastPlayedDate: '2026-09-22' })).toEqual({
      streak: 1,
      lastPlayedDate: '2026-09-22'
    });
  });
});
