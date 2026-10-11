import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const origin = 'https://dolapasistan.net';
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URL');
const titles = new Set();
const descriptions = new Set();
let links = 0;
for (const url of urls) {
  assert(url.startsWith(origin + '/'), 'Unexpected sitemap origin');
  const route = new URL(url).pathname;
  const html = fs.readFileSync(path.join(root, route, 'index.html'), 'utf8');
  assert(html.includes('<html lang="tr">'), 'Missing Turkish language');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Expected one H1: ' + route);
  assert(!/name="robots" content="[^"]*noindex/.test(html), 'Indexed page has noindex');
  assert.equal(html.match(/rel="canonical" href="([^"]+)"/)?.[1], url, 'Wrong canonical');
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = html.match(/name="description" content="([^"]+)"/)?.[1];
  assert(title && !titles.has(title), 'Missing/duplicate title');
  assert(description && !descriptions.has(description), 'Missing/duplicate description');
  titles.add(title); descriptions.add(description);
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  const graph = schema['@graph'];
  assert(graph.some(n => n['@id'] === url + '#webpage'), 'Missing page entity');
  const faq = graph.find(n => n['@type'] === 'FAQPage');
  if (faq) assert.equal(faq.mainEntity.length, (html.match(/<details\b/g) || []).length, 'FAQ mismatch');
  const article = graph.find(n => n['@type'] === 'Article');
  if (article) {
    assert.equal(article.dateModified, html.match(/<time datetime="([^"]+)"/)[1], 'Date mismatch');
    assert.equal(article.author.url, origin + '/hakkinda/');
  }
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const target = new URL(match[1], url);
    if (target.origin !== origin) continue;
    const file = path.join(root, target.pathname, target.pathname.endsWith('/') ? 'index.html' : '');
    assert(fs.existsSync(file), 'Broken internal link: ' + target.href);
    if (target.hash) {
      const id = decodeURIComponent(target.hash.slice(1));
      assert(fs.readFileSync(file, 'utf8').includes('id="' + id + '"'), 'Missing anchor: ' + target.href);
    }
    links++;
  }
}
const notFound = fs.readFileSync(path.join(root, '404.html'), 'utf8');
assert(notFound.includes('content="noindex, follow"'), '404 must not be indexed');
assert(!urls.some(url => url.endsWith('/404.html')), '404 must not be in sitemap');
assert(!notFound.includes('"@type":"Article"'), '404 must not be an article');
console.log('SEO checks passed: ' + urls.length + ' indexable pages, ' + links + ' internal links, unique metadata, schema and root 404.');
