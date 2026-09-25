import type { GameState } from './game';
import { maxTurns } from './game';

export const SHARE_URL = 'codeguessr.joeyoosenbrug.nl';

/** One square per turn used: 🟩 for the solve, ⬛ for a wrong guess or a skip. */
export function shareGrid(state: Pick<GameState, 'guesses'>): string {
  return state.guesses.map((g) => (g.result === 'correct' ? '🟩' : '⬛')).join('');
}

/** The score, e.g. "3/6", "X/6" for a loss, with "*" for hard mode (like Wordle). */
export function shareScore(state: Pick<GameState, 'guesses' | 'status' | 'hard'>): string {
  const turns = maxTurns(state);
  return `${state.status === 'won' ? state.guesses.length : 'X'}/${turns}${state.hard ? '*' : ''}`;
}

/**
 * The text copied to the clipboard. The score is spelled out next to the grid, so the result never depends on
 * telling the colours apart.
 */
export function shareText(state: Pick<GameState, 'guesses' | 'status' | 'hard' | 'puzzleId'>, streak?: number): string {
  const header = `Codeguessr #${state.puzzleId} ${shareScore(state)}${streak && streak > 1 ? ` 🔥${streak}` : ''}`;
  return `${header}\n${shareGrid(state)}\n${SHARE_URL}`;
}
