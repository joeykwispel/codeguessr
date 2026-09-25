import { expect, test } from '@playwright/test';
import { guess, languageLink, setup } from './helpers';

test('prerendered pages carry their language, canonical and hreflang tags', async ({ request }) => {
  for (const [path, lang] of [
    ['/', 'en'],
    ['/nl/', 'nl']
  ] as const) {
    const html = await (await request.get(path)).text();
    expect(html).toContain(`<html lang="${lang}"`);
    expect(html).toContain(`rel="canonical" href="https://codeguessr.joeyoosenbrug.nl${path}"`);
    expect(html).toContain('hreflang="en" href="https://codeguessr.joeyoosenbrug.nl/"');
    expect(html).toContain('hreflang="nl" href="https://codeguessr.joeyoosenbrug.nl/nl/"');
    expect(html).toContain('hreflang="x-default" href="https://codeguessr.joeyoosenbrug.nl/"');
  }
  const sitemap = await (await request.get('/sitemap.xml')).text();
  expect(sitemap).toContain('<loc>https://codeguessr.joeyoosenbrug.nl/nl/</loc>');
});

test('switch to Dutch and back, keeping the game and remembering the choice', async ({ page }) => {
  await setup(page);
  await page.goto('/');
  await guess(page, 'Java');

  await languageLink(page, 'NL').click();
  await expect(page).toHaveURL(/\/nl\/?$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'nl');
  await expect(page.getByRole('heading', { level: 1, name: 'Puzzel #5' })).toBeVisible();
  await expect(page).toHaveTitle('Codeguessr · De dagelijkse puzzel voor developers');
  // same game, now in Dutch
  await expect(page.getByText('Nog 5 van 6 beurten')).toBeVisible();
  await expect(page.locator('app-clue-list li').first()).toContainText('mobiele app');

  // the choice is remembered: the English home page sends you to /nl/
  await page.goto('/');
  await expect(page).toHaveURL(/\/nl\/?$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'nl');

  await languageLink(page, 'EN').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1, name: 'Puzzle #5' })).toBeVisible();
  await page.goto('/');
  await expect(page).toHaveURL(/\/$/);
});

test('Dutch copy for the whole game flow', async ({ page }) => {
  await setup(page);
  await page.goto('/nl/');
  await guess(page, 'GraphQL');
  await expect(page.getByRole('heading', { name: 'Geraden!' })).toBeVisible();
  await expect(page.locator('app-result-panel')).toContainText('Leuk weetje');
  await expect(page.getByRole('button', { name: 'Deel resultaat' })).toBeVisible();
});
