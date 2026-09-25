/** Language-neutral schema types. Text for each language lives in data/locales/<lang>/. */

export type Locale = 'en' | 'nl';

export const categories = ['language', 'framework', 'library', 'tool', 'protocol', 'database', 'platform', 'concept'] as const;
export type Category = (typeof categories)[number];

/** Six clues, ordered from hardest/vaguest to easiest/most specific. */
export type Clues = readonly [string, string, string, string, string, string];

/** The structure of one puzzle. `id` is the puzzle number shown to players (#1 is launch day). */
export interface PuzzleMeta {
  id: number;
  /** UTC day, YYYY-MM-DD. One puzzle per day. */
  date: string;
  /** Must match a term in terms.json. */
  answer: string;
  /** Extra accepted spellings for this puzzle, on top of the term's own aliases. */
  aliases: readonly string[];
  category: Category;
}

/** The translatable part of a puzzle, one entry per puzzle id in each locale's puzzles.ts. */
export interface PuzzleText {
  clues: Clues;
  funFact: string;
}

/** One row of the Supabase `puzzles` table (and of the bundled snapshot). */
export interface PuzzleRow {
  id: number;
  date: string;
  answer: string;
  aliases: string[];
  clues_en: string[];
  clues_nl: string[];
  fun_fact_en: string;
  fun_fact_nl: string;
  category: Category;
}

/** A puzzle resolved for one language, as the game uses it. */
export interface Puzzle {
  id: number;
  date: string;
  answer: string;
  aliases: string[];
  category: Category;
  clues: string[];
  funFact: string;
}

/** An entry in the validation list (terms.json). */
export interface Term {
  name: string;
  aliases?: string[];
}
