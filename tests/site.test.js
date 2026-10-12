
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('homepage contains the expected heading', () => {
  const html = readFileSync(
    new URL('../site/index.html', import.meta.url),
    'utf8'
  );

  assert.match(html, /My GitHub Actions Project/);
});

test('homepage contains the correct page title', () => {
  const html = readFileSync(
    new URL('../site/index.html', import.meta.url),
    'utf8'
  );

  assert.match(html, /<title>OIDC Practice Site<\/title>/);
});
