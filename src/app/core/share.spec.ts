import { newGame, play } from './game';
import { shareGrid, shareScore, shareText } from './share';

const game = (hard = false) => newGame('2026-09-25', 5, hard, false);

describe('share grid', () => {
  it('marks wrong guesses and skips black and the solve green', () => {
    const s = play(play(play(game(), 'Java', false), null, false), 'GraphQL', true);
    expect(shareGrid(s)).toBe('⬛⬛🟩');
    expect(shareScore(s)).toBe('3/6');
  });

  it('scores a loss as X', () => {
    let s = game();
    for (let i = 0; i < 6; i++) s = play(s, `T${i}`, false);
    expect(shareGrid(s)).toBe('⬛⬛⬛⬛⬛⬛');
    expect(shareScore(s)).toBe('X/6');
  });

  it('marks hard mode with an asterisk out of four', () => {
    const s = play(game(true), 'GraphQL', true);
    expect(shareScore(s)).toBe('1/4*');
  });

  it('includes the puzzle number, the score and the site', () => {
    const s = play(play(game(), 'Java', false), 'GraphQL', true);
    expect(shareText(s)).toBe('Codeguessr #5 2/6\n⬛🟩\ncodeguessr.joeyoosenbrug.nl');
  });

  it('adds the streak when there is one', () => {
    const s = play(game(), 'GraphQL', true);
    expect(shareText(s, 4).split('\n')[0]).toBe('Codeguessr #5 1/6 🔥4');
    expect(shareText(s, 1).split('\n')[0]).toBe('Codeguessr #5 1/6');
  });
});
