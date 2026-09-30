import { nextUnfinished } from './levels';
import type { HistoryEntry } from './stats.service';

const done = (status: 'won' | 'lost'): HistoryEntry => ({ status, turns: 3, hard: false, archive: true });

describe('nextUnfinished', () => {
  it('starts at puzzle #1 when nothing is played', () => {
    expect(nextUnfinished({}, '2026-09-25')).toEqual({ id: 1, date: '2026-09-21' });
  });

  it('skips finished puzzles, won or lost, and finds the first gap', () => {
    const history = { '2026-09-21': done('won'), '2026-09-22': done('lost'), '2026-09-24': done('won') };
    expect(nextUnfinished(history, '2026-09-25')).toEqual({ id: 3, date: '2026-09-23' });
  });

  it('can skip the puzzle you are on', () => {
    expect(nextUnfinished({ '2026-09-21': done('won') }, '2026-09-25', '2026-09-22')).toEqual({ id: 3, date: '2026-09-23' });
  });

  it('ends with today, and is null when everything up to today is done', () => {
    const history = { '2026-09-21': done('won'), '2026-09-22': done('won') };
    expect(nextUnfinished(history, '2026-09-23')).toEqual({ id: 3, date: '2026-09-23' });
    expect(nextUnfinished({ ...history, '2026-09-23': done('lost') }, '2026-09-23')).toBeNull();
  });
});
