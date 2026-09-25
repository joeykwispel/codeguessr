import type { PuzzleMeta } from './types';

/** Puzzle #1 is played on this UTC day; puzzle n on LAUNCH_DAY + (n - 1). */
export const LAUNCH_DAY = '2026-09-21';

/**
 * The structure of every puzzle. Clues and fun facts live in data/locales/<lang>/puzzles.ts under the same id.
 * This file (with the locale files) is the seed for the Supabase `puzzles` table and the offline snapshot.
 */
export const puzzles: readonly PuzzleMeta[] = [
  { id: 1, date: '2026-09-21', answer: 'React', aliases: [], category: 'library' },
  { id: 2, date: '2026-09-22', answer: 'Docker', aliases: [], category: 'tool' },
  { id: 3, date: '2026-09-23', answer: 'Git', aliases: [], category: 'tool' },
  { id: 4, date: '2026-09-24', answer: 'Rust', aliases: [], category: 'language' },
  { id: 5, date: '2026-09-25', answer: 'GraphQL', aliases: [], category: 'protocol' },
  { id: 6, date: '2026-09-26', answer: 'Kubernetes', aliases: [], category: 'platform' },
  { id: 7, date: '2026-09-27', answer: 'TypeScript', aliases: [], category: 'language' }
];
