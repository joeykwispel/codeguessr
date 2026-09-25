// Serves the production build the way GitHub Pages does: /path/ -> /path/index.html, unknown paths -> 404.html.
// Usage: npm run preview [-- --port 4173]
import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/codeguessr/browser/', import.meta.url));
const portArg = process.argv.indexOf('--port');
const port = Number(portArg > -1 ? process.argv[portArg + 1] : 4173);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8'
};

if (!existsSync(root)) {
  console.error('No build found. Run `npm run build` first.');
  process.exit(1);
}

createServer((req, res) => {
  const { pathname } = new URL(req.url ?? '/', 'http://localhost');
  let file = normalize(join(root, decodeURIComponent(pathname)));
  if (!file.startsWith(root)) {
    res.writeHead(403).end();
    return;
  }
  if (existsSync(file) && statSync(file).isDirectory()) {
    if (!pathname.endsWith('/')) {
      res.writeHead(301, { location: `${pathname}/` }).end();
      return;
    }
    file = join(file, 'index.html');
  }
  let status = 200;
  if (!existsSync(file) || statSync(file).isDirectory()) {
    status = 404;
    file = join(root, '404.html');
  }
  res.writeHead(status, { 'content-type': types[extname(file)] ?? 'application/octet-stream' });
  createReadStream(file).pipe(res);
}).listen(port, () => console.log(`Preview on http://localhost:${port}`));
