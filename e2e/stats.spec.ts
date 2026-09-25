import { expect, test } from '@playwright/test';
import { ANSWER, guess, setup } from './helpers';

test.use({ permissions: ['clipboard-read', 'clipboard-write'] });

test('a win updates the streak, the stats dialog and the share text', async ({ page }) => {
  // won yesterday's puzzle already, so today's win makes a 2-day streak
  await setup(page, {
    storage: {
      'cg:stats': { streak: 1, maxStreak: 1, lastPlayedDate: '2026-09-24', gamesPlayed: 1, gamesWon: 1, guessDistribution: [0, 0, 1, 0, 0, 0] },
      'cg:history': { '2026-09-24': { status: 'won', turns: 3, hard: false, archive: false } }
    }
  });
  await page.goto('/');
  await expect(page.getByRole('button', { name: /current streak: 1 days/i })).toBeVisible();

  await guess(page, 'Java');
  await guess(page, ANSWER);
  await expect(page.getByRole('heading', { name: 'You got it!' })).toBeVisible();
  await expect(page.getByRole('button', { name: /current streak: 2 days/i })).toBeVisible();

  await page.getByRole('button', { name: 'Share result' }).click();
  await expect(page.locator('app-share-button').getByText('Result copied to the clipboard.')).toBeVisible();
  // Windows stores line breaks on the clipboard as CRLF
  const text = (await page.evaluate(() => navigator.clipboard.readText())).replace(/\r\n/g, '\n');
  expect(text).toBe('Codeguessr #5 2/6 🔥2\n⬛🟩\ncodeguessr.joeyoosenbrug.nl');

  await page.getByRole('button', { name: 'Statistics', exact: true }).click();
  const dialog = page.getByRole('dialog', { name: 'Statistics' });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText('Played', { exact: true }).locator('..')).toContainText('2');
  await expect(dialog.getByText('Win %', { exact: true }).locator('..')).toContainText('100');
  await expect(dialog.getByText('Max streak', { exact: true }).locator('..')).toContainText('2');
  await expect(dialog.getByRole('listitem', { name: 'Solved in 2: 1' })).toBeVisible();
  await expect(dialog.getByRole('img', { name: /2 won, 0 lost/ })).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  // focus goes back to the button that opened the dialog
  await expect(page.getByRole('button', { name: 'Statistics', exact: true })).toBeFocused();
});

test('a loss resets the streak', async ({ page }) => {
  await setup(page, {
    storage: { 'cg:stats': { streak: 3, maxStreak: 3, lastPlayedDate: '2026-09-24', gamesPlayed: 3, gamesWon: 3, guessDistribution: [0, 3, 0, 0, 0, 0] } }
  });
  await page.goto('/');
  for (let i = 0; i < 6; i++) await page.getByRole('button', { name: /skip this turn/i }).click();
  await expect(page.getByRole('heading', { name: 'Out of turns' })).toBeVisible();
  await expect(page.getByRole('button', { name: /current streak: 0 days/i })).toBeVisible();
});
