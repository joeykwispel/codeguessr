import { expect, test } from '@playwright/test';
import { ANSWER, guess, setup } from './helpers';

test.beforeEach(async ({ page }) => {
  await setup(page);
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: 'Puzzle #5' })).toBeVisible();
});

test('shows one clue to start and locks the rest', async ({ page }) => {
  const clues = page.locator('app-clue-list li');
  await expect(clues).toHaveCount(6);
  await expect(page.getByText('Locked until your next turn')).toHaveCount(5);
});

test('win with the keyboard through the autocomplete', async ({ page }) => {
  const field = page.getByRole('combobox', { name: 'Your guess' });
  await field.fill('graph');
  await expect(page.getByRole('listbox')).toBeVisible();
  await field.press('ArrowDown');
  await expect(field).toHaveAttribute('aria-activedescendant', 'guess-option-0');
  await expect(page.getByRole('option', { name: ANSWER })).toHaveAttribute('aria-selected', 'true');
  await field.press('Enter');
  await expect(page.getByRole('heading', { name: 'You got it!' })).toBeVisible();
  await expect(page.getByText('Solved in 1 of 6 turns.')).toBeVisible();
  await expect(page.getByText(/resolvers can fetch data from anywhere/)).toBeVisible();
  // the finished game survives a reload
  await page.reload();
  await expect(page.getByRole('heading', { name: 'You got it!' })).toBeVisible();
});

test('lose after six wrong turns, with skips revealing clues', async ({ page }) => {
  await guess(page, 'Java');
  await expect(page.getByText('Locked until your next turn')).toHaveCount(4);
  await page.getByRole('button', { name: /skip this turn/i }).click();
  for (const term of ['Rust', 'Go', 'PHP', 'Ruby']) await guess(page, term);
  await expect(page.getByRole('heading', { name: 'Out of turns' })).toBeVisible();
  await expect(page.getByText('The answer was')).toContainText(ANSWER);
  await expect(page.getByText('Locked until your next turn')).toHaveCount(0);
});

test('accepts aliases and rejects unknown or repeated terms without using a turn', async ({ page }) => {
  await guess(page, 'Banana');
  await expect(page.getByText(/isn’t in the term list/)).toBeVisible();
  await expect(page.getByText('6 of 6 turns left')).toBeVisible();

  await guess(page, 'JS');
  await expect(page.getByRole('listitem').filter({ hasText: 'JavaScript' })).toContainText('wrong');
  await guess(page, 'javascript');
  await expect(page.getByText('You already guessed javascript.')).toBeVisible();
  await expect(page.getByText('5 of 6 turns left')).toBeVisible();
});

test('Escape closes the suggestions, then clears the field', async ({ page }) => {
  const field = page.getByRole('combobox', { name: 'Your guess' });
  await field.fill('re');
  await expect(field).toHaveAttribute('aria-expanded', 'true');
  await field.press('Escape');
  await expect(field).toHaveAttribute('aria-expanded', 'false');
  await field.press('Escape');
  await expect(field).toHaveValue('');
});

test('hard mode gives four clues and locks once you guess', async ({ page }) => {
  await page.getByRole('checkbox', { name: 'Hard mode' }).check();
  await expect(page.getByText('4 of 4 turns left')).toBeVisible();
  await guess(page, 'Java');
  await expect(page.getByRole('checkbox', { name: 'Hard mode' })).toBeDisabled();
});

test('tapping a suggestion guesses it', async ({ page }) => {
  await page.getByRole('combobox', { name: 'Your guess' }).fill('graphq');
  await page.getByRole('option', { name: ANSWER }).click();
  await expect(page.getByRole('heading', { name: 'You got it!' })).toBeVisible();
});
