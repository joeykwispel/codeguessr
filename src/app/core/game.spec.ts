import { alreadyGuessed, maxTurns, newGame, play, revealedClues, setHard } from './game';

const start = (hard = false) => newGame('2026-09-25', 5, hard, false);

describe('game rules', () => {
  it('starts with one clue and reveals one more per wrong or skipped turn', () => {
    let s = start();
    expect(revealedClues(s)).toBe(1);
    s = play(s, 'Java', false);
    expect(revealedClues(s)).toBe(2);
    s = play(s, null, false);
    expect(revealedClues(s)).toBe(3);
    expect(s.guesses.map((g) => g.result)).toEqual(['wrong', 'skipped']);
  });

  it('is won by a correct guess', () => {
    const s = play(play(start(), 'Java', false), 'GraphQL', true);
    expect(s.status).toBe('won');
    expect(s.guesses).toHaveLength(2);
    expect(revealedClues(s)).toBe(6);
  });

  it('is lost after six wrong turns', () => {
    let s = start();
    for (let i = 0; i < 5; i++) s = play(s, `T${i}`, false);
    expect(s.status).toBe('playing');
    s = play(s, 'T5', false);
    expect(s.status).toBe('lost');
  });

  it('ignores turns after the game ended', () => {
    const won = play(start(), 'GraphQL', true);
    expect(play(won, 'Java', false)).toBe(won);
  });

  it('hard mode has four clues and four turns', () => {
    let s = start(true);
    expect(maxTurns(s)).toBe(4);
    for (let i = 0; i < 4; i++) s = play(s, `T${i}`, false);
    expect(s.status).toBe('lost');
    expect(revealedClues(s)).toBe(4);
  });

  it('only allows switching hard mode before the first turn', () => {
    const s = setHard(start(), true);
    expect(s.hard).toBe(true);
    const played = play(s, 'Java', false);
    expect(setHard(played, false).hard).toBe(true);
  });

  it('detects repeated guesses', () => {
    const s = play(start(), 'Java', false);
    expect(alreadyGuessed(s, 'Java')).toBe(true);
    expect(alreadyGuessed(s, 'Rust')).toBe(false);
  });
});
