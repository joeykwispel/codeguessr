import { expect, test } from '@playwright/test';
import { ANSWER, setup } from './helpers';

test.beforeEach(async ({ page }) => {
  await setup(page);
});

test('a full game can be played with the keyboard alone', async ({ page, browserName }, testInfo) => {
  test.skip(testInfo.project.name === 'mobile', 'no physical keyboard on phones');
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: 'Puzzle #5' })).toBeVisible();

  // the first Tab lands on the skip link, which jumps past the header
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to the puzzle' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();

  // Tab reaches the guess field
  const field = page.getByRole('combobox', { name: 'Your guess' });
  for (let i = 0; i < 10 && !(await field.evaluate((el) => el === document.activeElement)); i++) await page.keyboard.press('Tab');
  await expect(field).toBeFocused();

  // a wrong guess via typing + Enter
  await page.keyboard.type('Java');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await expect(page.getByText('5 of 6 turns left')).toBeVisible();
  await expect(field).toBeFocused();

  // the right one via the suggestion list
  await page.keyboard.type('graphq');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { name: 'You got it!' })).toBeVisible();
  // focus moves to the result, so it's read out and the share button is the next Tab stop
  await expect(page.locator('app-result-panel section')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Share result' })).toBeFocused();
  void browserName;
  void ANSWER;
});

test('new clues, results and errors are announced in a live region', async ({ page }) => {
  await page.goto('/');
  const live = page.locator('.cdk-live-announcer-element');
  await page.getByRole('combobox', { name: 'Your guess' }).fill('Java');
  await page.getByRole('button', { name: 'Guess', exact: true }).click();
  await expect(live).toContainText('Java is wrong. 5 turns left. Clue 2: In 2018');
  await page.getByRole('combobox', { name: 'Your guess' }).fill('Banana');
  await page.getByRole('button', { name: 'Guess', exact: true }).click();
  await expect(live).toContainText('isn’t in the term list');
  await page.getByRole('combobox', { name: 'Your guess' }).fill(ANSWER);
  await page.getByRole('button', { name: 'Guess', exact: true }).click();
  await expect(live).toContainText('You got it! Solved in 2 of 6 turns.');
});

test('the win animation is skipped with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.getByRole('combobox', { name: 'Your guess' }).fill(ANSWER);
  await page.getByRole('button', { name: 'Guess', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'You got it!' })).toBeVisible();
  await expect(page.locator('.burst')).toBeHidden();
});

test('the win animation plays without reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  await page.getByRole('combobox', { name: 'Your guess' }).fill(ANSWER);
  await page.getByRole('button', { name: 'Guess', exact: true }).click();
  await expect(page.locator('.burst')).toBeAttached();
  await expect(page.locator('.burst')).toHaveCSS('display', 'block');
});

test('focus moves to the new page after client-side navigation', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Archive', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Archive' })).toBeVisible();
  await expect(page.locator('main')).toBeFocused();
});
