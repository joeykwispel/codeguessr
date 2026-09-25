// Runs after `ng build` on the static output in dist/codeguessr/browser:
// 1. Content Security Policy as a <meta> tag (GitHub Pages can't send headers), with a sha256 hash for every
//    inline script in each page, so scripts never need 'unsafe-inline'. Inline event handlers fail the build.
// 2. 404.html: the client-rendered shell, so GitHub Pages serves the app for routes that aren't prerendered.
// 3. sitemap.xml with hreflang alternates for every prerendered page.
// 4. Refreshes the service worker's hash table for the files changed above, so the PWA doesn't reject them.
import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/codeguessr/browser/', import.meta.url));
const siteUrl = 'https://codeguessr.joeyoosenbrug.nl';

const policy = (hashes) =>
  [
    "default-src 'self'",
    ["script-src 'self'", ...hashes.map((h) => `'${h}'`)].join(' '),
    // Angular injects component styles as <style> tags at runtime
    "style-src 'self' 'unsafe-inline'",
    // Google profile pictures for the signed-in avatar
    "img-src 'self' data: https://*.googleusercontent.com",
    "font-src 'self'",
    // Supabase REST + Auth (public anon key, protected by Row Level Security)
    "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
    "worker-src 'self'",
    "manifest-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'none'"
  ].join('; ');

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return htmlFiles(path);
    return name.endsWith('.html') ? [path] : [];
  });
}

/** Hashes of every executable inline script. Data blocks (hydration state) never run, so they need none. */
export function inlineScriptHashes(html) {
  const hashes = [];
  for (const [, attrs, body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (/\bsrc\s*=/i.test(attrs)) continue;
    const type = /\btype\s*=\s*["']?([^"'\s>]+)/i.exec(attrs)?.[1]?.toLowerCase();
    if (type && !['text/javascript', 'module', 'application/javascript'].includes(type)) continue;
    const hash = `sha256-${createHash('sha256').update(body).digest('base64')}`;
    if (!hashes.includes(hash)) hashes.push(hash);
  }
  return hashes;
}

const changed = new Set();

for (const file of htmlFiles(root)) {
  let html = readFileSync(file, 'utf8');
  if (html.includes('http-equiv="Content-Security-Policy"')) continue;

  const handler = /<[a-z][^>]*\son[a-z]+\s*=/i.exec(html);
  if (handler) throw new Error(`${relative(root, file)}: inline event handler breaks the CSP: ${handler[0]}`);

  const meta = `<meta http-equiv="Content-Security-Policy" content="${policy(inlineScriptHashes(html))}">`;
  html = html.replace(/<meta charset="utf-8"\s*\/?>/i, (m) => `${m}\n    ${meta}`);
  if (!html.includes(meta)) throw new Error(`${relative(root, file)}: no <meta charset> to put the CSP after`);
  writeFileSync(file, html);
  changed.add(file);
}

// Angular writes the bundled packages' licenses next to the site instead of into it; ship them with the site
const licenses = fileURLToPath(new URL('../dist/codeguessr/3rdpartylicenses.txt', import.meta.url));
if (existsSync(licenses)) copyFileSync(licenses, join(root, '3rdpartylicenses.txt'));

// 404 fallback: the client-rendered shell handles every route that has no prerendered page
copyFileSync(join(root, 'index.csr.html'), join(root, '404.html'));

// Sitemap: every prerendered index.html, English at the root and Dutch under /nl/
const pages = htmlFiles(root)
  .filter((f) => f.endsWith(`${sep}index.html`))
  .map((f) => relative(root, f).split(sep).slice(0, -1).join('/'))
  .map((p) => (p ? `/${p}/` : '/'))
  .sort();
const neutral = [...new Set(pages.map((p) => p.replace(/^\/nl\//, '/')))];
const url = (p) => `${siteUrl}${p}`;
const entries = neutral.flatMap((en) => {
  const nl = en === '/' ? '/nl/' : `/nl${en}`;
  const alternates = [
    `<xhtml:link rel="alternate" hreflang="en" href="${url(en)}"/>`,
    ...(pages.includes(nl) ? [`<xhtml:link rel="alternate" hreflang="nl" href="${url(nl)}"/>`] : []),
    `<xhtml:link rel="alternate" hreflang="x-default" href="${url(en)}"/>`
  ].join('');
  return [en, nl].filter((p) => pages.includes(p)).map((p) => `  <url><loc>${url(p)}</loc>${alternates}</url>`);
});
writeFileSync(
  join(root, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`
);

// The service worker verifies cached files against ngsw.json; update the hashes of the pages changed above.
const ngswPath = join(root, 'ngsw.json');
const ngsw = JSON.parse(readFileSync(ngswPath, 'utf8'));
for (const file of changed) {
  const key = '/' + relative(root, file).split(sep).join('/');
  if (key in ngsw.hashTable) ngsw.hashTable[key] = createHash('sha1').update(readFileSync(file)).digest('hex');
}
writeFileSync(ngswPath, JSON.stringify(ngsw, null, 2));

console.log(`postbuild: CSP added to ${changed.size} pages, 404.html written, sitemap lists ${pages.length} pages`);
