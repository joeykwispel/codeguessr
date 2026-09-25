import { currentStreak, emptyStats, recordGame, winRate } from './stats';

const win = (date: string, turns = 3) => ({ date, won: true, turns });
const loss = (date: string) => ({ date, won: false, turns: 6 });

describe('streak logic', () => {
  it('starts at 1 and grows with wins on consecutive days', () => {
    let s = recordGame(emptyStats(), win('2026-09-21'));
    expect(s.streak).toBe(1);
    s = recordGame(s, win('2026-09-22'));
    s = recordGame(s, win('2026-09-23'));
    expect(s.streak).toBe(3);
    expect(s.maxStreak).toBe(3);
  });

  it('resets on a loss but keeps the max', () => {
    let s = recordGame(recordGame(emptyStats(), win('2026-09-21')), win('2026-09-22'));
    s = recordGame(s, loss('2026-09-23'));
    expect(s.streak).toBe(0);
    expect(s.maxStreak).toBe(2);
    s = recordGame(s, win('2026-09-24'));
    expect(s.streak).toBe(1);
  });

  it('starts over after a missed day', () => {
    let s = recordGame(emptyStats(), win('2026-09-21'));
    s = recordGame(s, win('2026-09-23'));
    expect(s.streak).toBe(1);
  });

  it('crosses month and year boundaries', () => {
    let s = recordGame(emptyStats(), win('2026-12-31'));
    s = recordGame(s, win('2027-01-01'));
    expect(s.streak).toBe(2);
  });

  it('counts a day only once', () => {
    const s = recordGame(emptyStats(), win('2026-09-21'));
    expect(recordGame(s, win('2026-09-21'))).toBe(s);
    expect(recordGame(s, loss('2026-09-20'))).toBe(s);
  });

  it('tracks played, won and the guess distribution', () => {
    let s = recordGame(emptyStats(), win('2026-09-21', 1));
    s = recordGame(s, win('2026-09-22', 3));
    s = recordGame(s, loss('2026-09-23'));
    s = recordGame(s, win('2026-09-24', 3));
    expect(s.gamesPlayed).toBe(4);
    expect(s.gamesWon).toBe(3);
    expect(s.guessDistribution).toEqual([1, 0, 2, 0, 0, 0]);
    expect(winRate(s)).toBe(75);
  });

  it('shows the streak until the day after the last win runs out', () => {
    const s = recordGame(recordGame(emptyStats(), win('2026-09-21')), win('2026-09-22'));
    expect(currentStreak(s, '2026-09-22')).toBe(2);
    expect(currentStreak(s, '2026-09-23')).toBe(2);
    expect(currentStreak(s, '2026-09-24')).toBe(0);
  });

  it('has a zero win rate without games', () => {
    expect(winRate(emptyStats())).toBe(0);
  });
});
