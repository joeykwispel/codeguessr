import { expect, test } from '@playwright/test';
import { guess, setup } from './helpers';

const stats = { streak: 1, maxStreak: 1, lastPlayedDate: '2026-09-24', gamesPlayed: 3, gamesWon: 2, guessDistribution: [0, 0, 2, 0, 0, 0] };

test.beforeEach(async ({ page }) => {
  await setup(page, {
    storage: {
      'cg:stats': stats,
      'cg:history': {
        '2026-09-24': { status: 'won', turns: 3, hard: false, archive: false },
        '2026-09-23': { status: 'won', turns: 3, hard: false, archive: false },
        '2026-09-22': { status: 'lost', turns: 6, hard: false, archive: false }
      },
      'cg:game:2026-09-21': {
        date: '2026-09-21',
        puzzleId: 1,
        hard: false,
        archive: true,
        guesses: [{ value: 'Vue.js', result: 'wrong' }],
        status: 'playing'
      }
    }
  });
});

test('lists every puzzle so far with what you did on it', async ({ page }) => {
  await page.goto('/archive/');
  await expect(page.getByRole('heading', { level: 1, name: 'Archive' })).toBeVisible();
  await expect(page.getByText('3 of 5 played')).toBeVisible();
  await expect(page.getByRole('link', { name: /Puzzle #5, Today.*: Not played/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Puzzle #4, .*: Won in 3/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Puzzle #2, .*: Lost/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Puzzle #1, .*: In progress/ })).toBeVisible();
  // the header link marks the current page
  await expect(page.getByRole('link', { name: 'Archive', exact: true })).toHaveAttribute('aria-current', 'page');

  await page.getByText('Not played yet').click();
  await expect(page.getByRole('link', { name: /Puzzle #/ })).toHaveCount(2);
});

test('an archive game can be finished without touching the streak', async ({ page }) => {
  await page.goto('/archive/');
  await page.getByRole('link', { name: /Puzzle #1,/ }).click();
  await expect(page).toHaveURL(/\/archive\/2026-09-21$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Puzzle #1' })).toBeVisible();
  await expect(page.getByRole('note')).toContainText('doesn’t count towards your streak');
  // the saved progress is still there
  await expect(page.getByText('5 of 6 turns left')).toBeVisible();
  await guess(page, 'React');
  await expect(page.getByRole('heading', { name: 'You got it!' })).toBeVisible();
  // archive games have no countdown and no streak in the share text
  await expect(page.locator('app-result-panel')).not.toContainText('Next puzzle in');
  await expect(page.getByRole('button', { name: /current streak: 1 days/i })).toBeVisible();

  await page.getByRole('link', { name: 'Back to the archive' }).click();
  await expect(page.getByRole('link', { name: /Puzzle #1, .*: Won in 2/ })).toBeVisible();
  await page.getByRole('button', { name: 'Statistics', exact: true }).click();
  await expect(page.getByRole('dialog').getByText('Played', { exact: true }).locator('..')).toContainText('3');
});

test('a direct link to an archive day works (served by the 404 fallback)', async ({ page }) => {
  await page.goto('/nl/archive/2026-09-23');
  await expect(page.getByRole('heading', { level: 1, name: 'Puzzel #3' })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang', 'nl');
  await expect(page.getByRole('heading', { name: 'Geraden!' })).toBeHidden();
});

test('future and malformed days are refused', async ({ page }) => {
  await page.goto('/archive/2026-09-26');
  await expect(page.getByRole('alert')).toContainText('isn’t out yet');
  await page.goto('/archive/not-a-day');
  await expect(page.getByRole('alert')).toContainText('isn’t a valid puzzle date');
});
