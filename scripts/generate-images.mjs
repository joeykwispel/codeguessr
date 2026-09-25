// Renders the PWA icons and the social preview image (public/og.png) from public/favicon.svg with Playwright.
// Run once after changing the logo: node scripts/generate-images.mjs (PW_CHANNEL=chrome to use your installed Chrome)
import { readFileSync } from 'node:fs';
import { chromium } from '@playwright/test';

const logo = readFileSync(new URL('../public/favicon.svg', import.meta.url), 'utf8');
const out = (name) => new URL(`../public/${name}`, import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const svg = logo.replace('<svg', '<svg width="100%" height="100%"');

const icon = (size, padding, bg) => `<html><body style="margin:0;width:${size}px;height:${size}px;display:grid;place-items:center;background:${bg}">
  <div style="width:${size - padding * 2}px;height:${size - padding * 2}px">${svg}</div></body></html>`;

// Fonts inlined as data URLs, so the image uses the kit's Inter and JetBrains Mono. Colors are the kit's dark tokens.
const font = (pkg, file) => readFileSync(new URL(`../node_modules/@fontsource-variable/${pkg}/files/${file}`, import.meta.url)).toString('base64');
const og = `<html><head><style>
  @font-face{font-family:Inter;src:url(data:font/woff2;base64,${font('inter', 'inter-latin-wght-normal.woff2')}) format('woff2');font-weight:100 900}
  @font-face{font-family:Mono;src:url(data:font/woff2;base64,${font('jetbrains-mono', 'jetbrains-mono-latin-wght-normal.woff2')}) format('woff2');font-weight:100 800}
  body{margin:0;width:1200px;height:630px;color:#e6e9f2;font-family:Inter,sans-serif;display:flex;flex-direction:column;justify-content:center;padding:0 96px;box-sizing:border-box;
    background:radial-gradient(1100px 650px at 85% -10%,rgba(180,156,255,.16),transparent 60%),radial-gradient(900px 600px at -10% 25%,rgba(125,211,192,.12),transparent 60%),
      linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px) 0 0/48px 48px,linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px) 0 0/48px 48px,#0a0e17}
  .path{font:600 30px Mono;color:#98a3b9;margin:0 0 18px}.path b{color:#7dd3c0;font-weight:600}
  .row{display:flex;align-items:center;gap:32px}
  h1{font:700 118px Inter;margin:0;letter-spacing:-0.04em;line-height:1}
  p{font-size:34px;color:#98a3b9;margin:28px 0 44px}
  .clues{display:flex;gap:14px}
  .c{width:80px;height:80px;border-radius:14px;display:grid;place-items:center;font:700 40px Mono}
  .w{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);color:#98a3b9}.g{background:#7dd3c0;color:#06201b}
</style></head><body>
  <div class="path"><b>~/</b>codeguessr</div>
  <div class="row"><div style="width:128px;height:128px">${svg}</div><h1>Codeguessr</h1></div>
  <p>Guess the tech term from six clues. A new puzzle every day.</p>
  <div class="clues"><div class="c w">✗</div><div class="c w">✗</div><div class="c w">✗</div><div class="c g">✓</div></div>
</body></html>`;

const browser = await chromium.launch({ channel: process.env.PW_CHANNEL });
const page = await browser.newPage();
for (const [name, size, padding, bg] of [
  ['icons/icon-192x192.png', 192, 0, 'transparent'],
  ['icons/icon-512x512.png', 512, 0, 'transparent'],
  // maskable icons need their content inside the central 80% safe zone
  ['icons/icon-maskable-512x512.png', 512, 64, '#151c2e']
]) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(icon(size, padding, bg));
  await page.screenshot({ path: out(name), omitBackground: bg === 'transparent' });
}
await page.setViewportSize({ width: 1200, height: 630 });
await page.setContent(og);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out('og.png') });
await browser.close();
console.log('icons and og.png written to public/');
