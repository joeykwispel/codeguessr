import type { Page } from '@playwright/test';

/** Puzzle #5 (GraphQL) is the puzzle for this day in the bundled data. */
export const TODAY = '2026-09-25';
export const ANSWER = 'GraphQL';

/** Freezes the clock on a fixed UTC day and blocks Supabase, so every test plays the bundled snapshot. */
export async function setup(page: Page, { day = TODAY, storage = {} as Record<string, unknown> } = {}) {
  await page.clock.setFixedTime(new Date(`${day}T10:00:00Z`));
  await page.route(/supabase\.co/, (route) => route.abort());
  if (Object.keys(storage).length) {
    await page.addInitScript((entries) => {
      if (sessionStorage.getItem('seeded')) return;
      for (const [k, v] of Object.entries(entries)) localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v));
      sessionStorage.setItem('seeded', '1');
    }, storage);
  }
}

export async function guess(page: Page, term: string) {
  const field = page.getByRole('combobox', { name: /your guess|jouw gok/i });
  await field.fill(term);
  await page.getByRole('button', { name: /^(guess|gok)$/i }).click();
}
