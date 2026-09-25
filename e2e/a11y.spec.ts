import { readFileSync } from 'node:fs';
import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { ANSWER, guess, setup } from './helpers';

const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

async function scan(page: Page) {
  // let reveal animations finish so contrast is measured on the final colours
  await page.waitForTimeout(400);
  const { violations } = await new AxeBuilder({ page }).withTags(TAGS).analyze();
  const serious = violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
  return serious.map(
    (v) =>
      `${v.id}: ${v.nodes
        .map((n) => n.target.join(' '))
        .slice(0, 5)
        .join(', ')}`
  );
}

// Every prerendered page in the built sitemap (both languages), plus the client-rendered routes.
const sitemap = readFileSync(new URL('../dist/codeguessr/browser/sitemap.xml', import.meta.url), 'utf8');
const pages = [...sitemap.matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g)].map((m) => m[1]!);
const clientPages = ['/archive/2026-09-22', '/nl/archive/2026-09-23', '/not-a-page'];

for (const theme of ['dark', 'light'] as const) {
  test.describe(`${theme} theme`, () => {
    test.beforeEach(async ({ page }) => {
      await setup(page);
      await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
      await page.emulateMedia({ reducedMotion: 'reduce' });
    });

    for (const path of [...pages, ...clientPages]) {
      test(`${path} has no serious accessibility issues`, async ({ page }) => {
        await page.goto(path);
        await expect(page.locator('h1')).toBeVisible();
        await page.waitForLoadState('networkidle');
        expect(await scan(page)).toEqual([]);
      });
    }

    test('game states: suggestions, errors, history, result, share', async ({ page }) => {
      await page.goto('/');
      await page.getByRole('combobox', { name: 'Your guess' }).fill('ja');
      await expect(page.getByRole('listbox')).toBeVisible();
      expect(await scan(page)).toEqual([]);
      await guess(page, 'Banana');
      await guess(page, 'Java');
      await page.getByRole('button', { name: /skip this turn/i }).click();
      expect(await scan(page)).toEqual([]);
      await guess(page, ANSWER);
      await expect(page.getByRole('heading', { name: 'You got it!' })).toBeVisible();
      expect(await scan(page)).toEqual([]);
    });

    test('stats dialog and sign-in panel', async ({ page }) => {
      await page.goto('/');
      await page.getByRole('button', { name: 'Statistics', exact: true }).click();
      await expect(page.getByRole('dialog')).toBeVisible();
      expect(await scan(page)).toEqual([]);
      await page.keyboard.press('Escape');
      await page.getByRole('button', { name: 'Sign in' }).click();
      await expect(page.locator('#auth-panel')).toBeVisible();
      expect(await scan(page)).toEqual([]);
    });
  });
}
