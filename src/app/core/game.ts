/** Pure game rules. The store (features/play/game.store.ts) wraps these in signals and persists the state. */

export const CLUES = 6;
export const HARD_CLUES = 4;

export type GuessResult = 'correct' | 'wrong' | 'skipped';
export type GameStatus = 'playing' | 'won' | 'lost';

export interface Guess {
  /** Canonical term name, or null for a skipped turn. */
  value: string | null;
  result: GuessResult;
}

export interface GameState {
  date: string;
  puzzleId: number;
  /** Hard mode: only the four hardest clues, and four turns. Fixed once the first guess is made. */
  hard: boolean;
  /** Played from the archive: never touches the streak or stats. */
  archive: boolean;
  guesses: Guess[];
  status: GameStatus;
}

export function newGame(date: string, puzzleId: number, hard: boolean, archive: boolean): GameState {
  return { date, puzzleId, hard, archive, guesses: [], status: 'playing' };
}

export function maxTurns(state: Pick<GameState, 'hard'>): number {
  return state.hard ? HARD_CLUES : CLUES;
}

/** How many clues are visible: one to start, one more per wrong or skipped turn, all of them once the game ends. */
export function revealedClues(state: GameState): number {
  const max = maxTurns(state);
  return state.status === 'playing' ? Math.min(state.guesses.length + 1, max) : max;
}

/** Turns used; for a win this is the number shown in the share text and the guess distribution. */
export function turnsUsed(state: GameState): number {
  return state.guesses.length;
}

/** Plays one turn. `correct` is decided by the caller (see isCorrect in guess.ts). Finished games don't change. */
export function play(state: GameState, value: string | null, correct: boolean): GameState {
  if (state.status !== 'playing') return state;
  const result: GuessResult = value === null ? 'skipped' : correct ? 'correct' : 'wrong';
  const guesses = [...state.guesses, { value, result }];
  const status: GameStatus = result === 'correct' ? 'won' : guesses.length >= maxTurns(state) ? 'lost' : 'playing';
  return { ...state, guesses, status };
}

/** Whether this term was already guessed in this game (case- and spelling-insensitive, via its canonical name). */
export function alreadyGuessed(state: GameState, value: string): boolean {
  return state.guesses.some((g) => g.value === value);
}

/** Hard mode can only change before the first turn. */
export function setHard(state: GameState, hard: boolean): GameState {
  return state.guesses.length === 0 && state.status === 'playing' ? { ...state, hard } : state;
}
