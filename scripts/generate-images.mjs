// Renders the PWA icons and the social preview image (public/og.png) from public/favicon.svg with Playwright.
// Run once after changing the logo: node scripts/generate-images.mjs
import { readFileSync } from 'node:fs';
import { chromium } from '@playwright/test';

const logo = readFileSync(new URL('../public/favicon.svg', import.meta.url), 'utf8');
const out = (name) => new URL(`../public/${name}`, import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

const icon = (size, padding, bg) => `<html><body style="margin:0;width:${size}px;height:${size}px;display:grid;place-items:center;background:${bg}">
  <div style="width:${size - padding * 2}px;height:${size - padding * 2}px">${logo.replace('<svg', '<svg width="100%" height="100%"')}</div></body></html>`;

const og = `<html><head><style>
  body{margin:0;width:1200px;height:630px;background:#0b0f17;color:#e8ebf1;font-family:'Segoe UI',system-ui,sans-serif;display:flex;flex-direction:column;justify-content:center;padding:0 96px;box-sizing:border-box}
  .row{display:flex;align-items:center;gap:32px}
  h1{font-size:112px;margin:0;letter-spacing:-3px}
  p{font-size:40px;color:#a3adbd;margin:24px 0 48px}
  .clues{display:flex;gap:16px}
  .c{width:84px;height:84px;border-radius:16px;display:grid;place-items:center;font:700 44px Consolas,monospace}
  .w{background:#1b2433;border:2px solid #2a3446;color:#a3adbd}.g{background:#11321f;border:2px solid #4ade80;color:#4ade80}
</style></head><body>
  <div class="row"><div style="width:140px;height:140px">${logo.replace('<svg', '<svg width="100%" height="100%"')}</div><h1>Codeguessr</h1></div>
  <p>Guess the tech term from six clues. A new puzzle every day.</p>
  <div class="clues"><div class="c w">✗</div><div class="c w">✗</div><div class="c w">✗</div><div class="c g">✓</div></div>
</body></html>`;

const browser = await chromium.launch({ channel: process.env.PW_CHANNEL });
const page = await browser.newPage();
for (const [name, size, padding, bg] of [
  ['icons/icon-192x192.png', 192, 0, 'transparent'],
  ['icons/icon-512x512.png', 512, 0, 'transparent'],
  // maskable icons need their content inside the central 80% safe zone
  ['icons/icon-maskable-512x512.png', 512, 64, '#4f3fd9']
]) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(icon(size, padding, bg));
  await page.screenshot({ path: out(name), omitBackground: bg === 'transparent' });
}
await page.setViewportSize({ width: 1200, height: 630 });
await page.setContent(og);
await page.screenshot({ path: out('og.png') });
await browser.close();
console.log('icons and og.png written to public/');
