import type { PuzzleMeta, PuzzleRow, PuzzleText } from './shared/types';

/**
 * Joins the language-neutral structure with both translations into rows for the Supabase `puzzles` table.
 * Used by the offline snapshot and by scripts/seed-puzzles.ts, so it has no runtime imports.
 */
export function toRows(meta: readonly PuzzleMeta[], en: Record<number, PuzzleText>, nl: Record<number, PuzzleText>): PuzzleRow[] {
  return meta.map((p) => {
    const e = en[p.id];
    const n = nl[p.id];
    if (!e || !n) throw new Error(`Puzzle #${p.id} is missing ${e ? 'Dutch' : 'English'} text`);
    return {
      id: p.id,
      date: p.date,
      answer: p.answer,
      aliases: [...p.aliases],
      clues_en: [...e.clues],
      clues_nl: [...n.clues],
      fun_fact_en: e.funFact,
      fun_fact_nl: n.funFact,
      category: p.category
    };
  });
}
