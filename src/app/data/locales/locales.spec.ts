import { readdirSync } from 'node:fs';
import { getContent } from '.';
import { puzzles } from '../shared/puzzles';
import { puzzles as enPuzzles } from './en/puzzles';
import { puzzles as nlPuzzles } from './nl/puzzles';

/** All key paths of a nested object, so two translations can be compared. */
function keys(o: unknown, prefix = ''): string[] {
  if (Array.isArray(o)) return [`${prefix}[${o.length}]`, ...o.flatMap((v, i) => keys(v, `${prefix}[${i}]`))];
  if (o && typeof o === 'object') return Object.entries(o).flatMap(([k, v]) => [`${prefix}.${k}`, ...keys(v, `${prefix}.${k}`)]);
  return [];
}

/** All placeholders ({n}, {term}) in every string, so a translation can't drop one. */
function placeholders(o: unknown, prefix = ''): string[] {
  if (typeof o === 'string') return [...o.matchAll(/\{(\w+)\}/g)].map((m) => `${prefix}:${m[1]}`).sort();
  if (o && typeof o === 'object') return Object.entries(o).flatMap(([k, v]) => placeholders(v, `${prefix}.${k}`));
  return [];
}

const en = getContent('en');
const nl = getContent('nl');

describe('translations', () => {
  it('both locale folders have the same files', () => {
    const files = (lang: string) => readdirSync(`src/app/data/locales/${lang}`).sort();
    expect(files('nl')).toEqual(files('en'));
  });

  for (const part of ['ui', 'categories'] as const) {
    it(`nl has the same ${part} keys as en`, () => {
      expect(keys(nl[part])).toEqual(keys(en[part]));
    });
  }

  it('nl keeps every placeholder of the English copy', () => {
    expect(placeholders(nl.ui)).toEqual(placeholders(en.ui));
  });

  it('no translation is left empty', () => {
    const empty = (o: unknown, prefix = ''): string[] =>
      typeof o === 'string' ? (o.trim() ? [] : [prefix]) : o && typeof o === 'object' ? Object.entries(o).flatMap(([k, v]) => empty(v, `${prefix}.${k}`)) : [];
    expect(empty(nl)).toEqual([]);
    expect(empty(en)).toEqual([]);
  });

  it('every puzzle has six clues and a fun fact in both languages', () => {
    for (const p of puzzles) {
      for (const [lang, text] of [
        ['en', enPuzzles[p.id]],
        ['nl', nlPuzzles[p.id]]
      ] as const) {
        expect(text, `#${p.id} ${lang}`).toBeDefined();
        expect(text!.clues, `#${p.id} ${lang}`).toHaveLength(6);
        for (const c of text!.clues) expect(c.trim(), `#${p.id} ${lang}`).not.toBe('');
        expect(text!.funFact.trim(), `#${p.id} ${lang}`).not.toBe('');
      }
    }
  });

  it('there is no translated puzzle without a puzzle', () => {
    const ids = puzzles.map((p) => String(p.id)).sort();
    expect(Object.keys(enPuzzles).sort()).toEqual(ids);
    expect(Object.keys(nlPuzzles).sort()).toEqual(ids);
  });
});
