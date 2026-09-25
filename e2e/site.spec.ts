import { expect, test } from '@playwright/test';
import { setup } from './helpers';

test('home page loads with a CSP and no console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', (e) => errors.push(e.message));
  await setup(page);
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: 'Puzzle #5' })).toBeVisible();
  await expect(page.locator('meta[http-equiv="Content-Security-Policy"]')).toHaveCount(1);
  expect(errors).toEqual([]);
});

test('unknown routes fall back to the app shell with a 404 page', async ({ page }) => {
  const res = await page.goto('/does-not-exist');
  expect(res?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: /404/ })).toBeVisible();
});

test('theme toggle switches and persists', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');
  await page.getByRole('button', { name: /switch to light theme/i }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('the privacy policy is linked from the footer, in both languages', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('contentinfo').getByRole('link', { name: 'Privacy', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Privacy' })).toBeVisible();
  await expect(page).toHaveTitle('Privacy · Codeguessr');
  await expect(page.getByText('joey.oosenbrug@gmail.com')).toBeVisible();
  await page.goto('/nl/privacy/');
  await expect(page.getByRole('heading', { name: 'Als je inlogt met Google' })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang', 'nl');
});
