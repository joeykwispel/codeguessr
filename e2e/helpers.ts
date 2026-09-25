import type { Page } from '@playwright/test';

/** Puzzle #5 (GraphQL) is the puzzle for this day in the bundled data. */
export const TODAY = '2026-09-25';
export const ANSWER = 'GraphQL';

/**
 * Freezes the clock on a fixed UTC day and stubs Supabase: the puzzles table answers with no rows (so the bundled
 * snapshot is used) and everything else fails, like an unreachable server. Tests can add more specific routes after.
 */
export async function setup(page: Page, { day = TODAY, storage = {} as Record<string, unknown> } = {}) {
  await page.clock.setFixedTime(new Date(`${day}T10:00:00Z`));
  await page.route(/supabase\.co/, (route) => (route.request().url().includes('/rest/v1/puzzles') ? route.fulfill({ json: [] }) : route.abort()));
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

/** A link in the design-kit header; below 1120px the links sit in the burger menu, so open it first. */
export async function headerLink(page: Page, name: string) {
  const burger = page.locator('.jo-nav__burger');
  if ((await burger.isVisible()) && (await burger.getAttribute('aria-expanded')) !== 'true') await burger.click();
  // the kit numbers its links (01., 02.); the number is only visible at some widths
  return page.locator('.jo-nav__menu').getByRole('link', { name: new RegExp(`^(\\d+\\.)?${name}$`) });
}

/** The EN/NL pill in the design-kit header (same page in the other language). */
export function languageLink(page: Page, code: 'EN' | 'NL') {
  return page.locator('.jo-nav__lang').getByRole('link', { name: code, exact: true });
}
