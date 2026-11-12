'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const practices = path.join(root, 'practices');

function walk(dir, found) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, found);
      return;
    }
    if (entry.name === 'style.css' && fs.existsSync(path.join(dir, 'test.js'))) {
      found.push(full);
    }
  });
}

const files = [];
walk(practices, files);
files.sort();

const hashes = {};
files.forEach((file) => {
  const rel = path.relative(root, file).split(path.sep).join('/');
  hashes[rel] = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
});

const target = path.join(root, 'scripts', 'starter-hashes.json');
fs.writeFileSync(target, `${JSON.stringify(hashes, null, 2)}\n`);
console.log(`Wrote ${Object.keys(hashes).length} stylesheet hashes to ${path.relative(root, target)}.`);
