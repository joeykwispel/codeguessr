import { addDays } from '../core/dates';
import { LAUNCH_DAY, puzzles } from './shared/puzzles';
import { categories, type Term } from './shared/types';
import termList from './shared/terms.json';
import { puzzles as en } from './locales/en/puzzles';
import { puzzles as nl } from './locales/nl/puzzles';
import { snapshotRows } from './snapshot';

const terms = termList as Term[];
const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

describe('puzzle data integrity', () => {
  it('numbers puzzles 1..n on consecutive days from launch', () => {
    puzzles.forEach((p, i) => {
      expect(p.id, p.answer).toBe(i + 1);
      expect(p.date, `#${p.id}`).toBe(addDays(LAUNCH_DAY, i));
    });
  });

  it('every answer is a known term', () => {
    const names = new Set(terms.map((t) => t.name));
    for (const p of puzzles) expect(names.has(p.answer), p.answer).toBe(true);
  });

  it('every category is valid', () => {
    for (const p of puzzles) expect(categories).toContain(p.category);
  });

  it('every puzzle has six non-empty clues and a fun fact', () => {
    for (const p of puzzles) {
      const text = en[p.id];
      expect(text, `#${p.id}`).toBeDefined();
      expect(text!.clues).toHaveLength(6);
      for (const c of text!.clues) expect(c.trim().length, `#${p.id}`).toBeGreaterThan(0);
      expect(text!.funFact.trim().length).toBeGreaterThan(0);
    }
  });

  it('no clue gives the answer away by name', () => {
    for (const p of puzzles) {
      // the last clue may be blunt, but earlier ones must not spell out the answer
      const name = new RegExp(`(^|[^a-z0-9])${escapeRegExp(p.answer)}([^a-z0-9]|$)`, 'i');
      for (const c of [...en[p.id]!.clues.slice(0, 5), ...nl[p.id]!.clues.slice(0, 5)]) expect(c, `#${p.id}`).not.toMatch(name);
    }
  });

  it('builds one snapshot row per puzzle', () => {
    expect(snapshotRows).toHaveLength(puzzles.length);
  });
});
