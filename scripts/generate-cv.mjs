/**
 * CV PDF generator
 * Serves the built /cv page via a local HTTP server,
 * captures it with puppeteer, and writes the PDF to public/documents/cv.pdf
 *
 * Usage: node scripts/generate-cv.mjs
 * (runs `astro build` before every capture)
 */

import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFile, mkdir } from 'fs/promises';
import { resolve, extname, join } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = resolve(fileURLToPath(import.meta.url), '..');
const root = resolve(__dirname, '..');
const distDir = join(root, 'dist');
const outputDir = join(root, 'public', 'documents');
const outputPath = join(outputDir, 'cv.pdf');

// ── Build the latest CV ─────────────────────────────────────────────────────

console.log('Building the site before generating the CV...');
execSync('npm run build', { cwd: root, stdio: 'inherit' });

// ── Minimal static file server ──────────────────────────────────────────────

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.mjs':  'application/javascript',
  '.json': 'application/json',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.txt':  'text/plain',
  '.xml':  'application/xml',
};

const server = createServer(async (req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath.endsWith('/')) urlPath += 'index.html';

  const filePath = join(distDir, urlPath);

  try {
    const data = await readFile(filePath);
    const ext = extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] ?? 'application/octet-stream' });
    res.end(data);
  } catch {
    // Try appending /index.html for directory routes
    try {
      const indexPath = join(distDir, urlPath, 'index.html');
      const data = await readFile(indexPath);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  }
});

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const { port } = server.address();
const cvUrl = `http://127.0.0.1:${port}/cv/`;

console.log(`Serving dist/ on port ${port}`);
console.log(`Capturing ${cvUrl} ...`);

// ── Puppeteer ───────────────────────────────────────────────────────────────

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();

// Wait for fonts and layout to settle
await page.goto(cvUrl, { waitUntil: 'networkidle0', timeout: 30_000 });

// Let web fonts render
await new Promise((r) => setTimeout(r, 500));

// Strip screen chrome; puppeteer margins own all whitespace
await page.evaluate(() => {
  const nav = document.querySelector('.site-nav');
  if (nav) nav.style.display = 'none';
  const pageEl = document.querySelector('.page');
  if (pageEl) {
    pageEl.style.margin = '0';
    pageEl.style.padding = '0';
    pageEl.style.boxShadow = 'none';
    pageEl.style.width = '100%';
    pageEl.style.minHeight = 'unset';
  }
  document.body.style.background = '#fff';
});

await mkdir(outputDir, { recursive: true });

await page.pdf({
  path: outputPath,
  format: 'A4',
  scale: 0.8,
  printBackground: true,
  margin: { top: '16mm', right: '16mm', bottom: '16mm', left: '16mm' },
  displayHeaderFooter: false,
});

await browser.close();
server.close();

console.log(`\n✓  CV PDF written to ${outputPath.replace(root + '/', '')}`);
