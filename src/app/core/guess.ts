import type { Puzzle, Term } from '../data/shared/types';

/**
 * Normalises a guess for comparison: case-insensitive, accents and surrounding punctuation dropped, and
 * separators (spaces, dots, dashes, slashes) ignored, so "node.js", "Node JS" and "NodeJS" are the same.
 * "+" and "#" are kept because they matter: C, C++ and C# are different languages.
 */
export function normalize(input: string): string {
  return input
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/^[^a-z0-9+#]+|[^a-z0-9+#]+$/g, '')
    .replace(/[\s._\-/'’"`()]+/g, '');
}

export interface Suggestion {
  /** The canonical term name, which is what gets submitted. */
  name: string;
  /** Set when the match came from an alias, so the list can show "JS → JavaScript". */
  alias?: string;
}

interface Entry {
  name: string;
  keys: { key: string; label: string }[];
}

/** Lookup for the term validation list: exact resolution (with aliases) and typeahead suggestions. */
export class TermIndex {
  private readonly byKey = new Map<string, string>();
  private readonly entries: Entry[];

  constructor(terms: readonly Term[]) {
    this.entries = terms.map((t) => ({
      name: t.name,
      keys: [t.name, ...(t.aliases ?? [])].map((label) => ({ key: normalize(label), label }))
    }));
    for (const e of this.entries) for (const { key } of e.keys) if (key && !this.byKey.has(key)) this.byKey.set(key, e.name);
  }

  /** The canonical term for any spelling or alias, or null if it isn't a known term. */
  resolve(input: string): string | null {
    const key = normalize(input);
    return key ? (this.byKey.get(key) ?? null) : null;
  }

  /** Up to `limit` suggestions: exact matches first, then prefix matches, then matches inside a word. */
  search(input: string, limit = 8): Suggestion[] {
    const q = normalize(input);
    if (!q) return [];
    const ranked: { s: Suggestion; rank: number }[] = [];
    for (const e of this.entries) {
      let best: { rank: number; label: string } | null = null;
      for (const { key, label } of e.keys) {
        const rank = key === q ? 0 : key.startsWith(q) ? 1 : key.includes(q) ? 2 : -1;
        if (rank >= 0 && (!best || rank < best.rank)) best = { rank, label };
      }
      if (best) ranked.push({ rank: best.rank, s: best.label === e.name ? { name: e.name } : { name: e.name, alias: best.label } });
    }
    return ranked
      .sort((a, b) => a.rank - b.rank || a.s.name.length - b.s.name.length || a.s.name.localeCompare(b.s.name))
      .slice(0, limit)
      .map((r) => r.s);
  }
}

/** Whether a (canonical) guess solves the puzzle, including the puzzle's own extra aliases. */
export function isCorrect(guess: string, puzzle: Pick<Puzzle, 'answer' | 'aliases'>): boolean {
  const g = normalize(guess);
  return g === normalize(puzzle.answer) || puzzle.aliases.some((a) => normalize(a) === g);
}
