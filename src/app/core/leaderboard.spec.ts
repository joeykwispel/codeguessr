import { validNickname } from './leaderboard.service';

describe('validNickname', () => {
  it('accepts 2 to 20 letters (a-z), digits, spaces, dots, dashes and underscores', () => {
    for (const ok of ['Ada', 'ab', 'grace_hopper', 'Linus T.', 'dev-42', '12345678901234567890']) expect(validNickname(ok), ok).toBe(true);
  });

  it('rejects names that are too short or long, padded, or contain other characters', () => {
    for (const bad of ['a', '', ' Ada', 'Ada ', '123456789012345678901', '<b>', 'semi;colon', 'Jöey', 'emoji🙂']) expect(validNickname(bad), bad).toBe(false);
  });
});
