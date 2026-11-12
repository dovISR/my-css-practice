'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('playwright');

function repoRoot(start) {
  let dir = start;
  while (dir !== path.dirname(dir)) {
    if (fs.existsSync(path.join(dir, 'package.json')) && fs.existsSync(path.join(dir, 'practices'))) {
      return dir;
    }
    dir = path.dirname(dir);
  }
  throw new Error('Could not find the practice repository root.');
}

function stylesheetPath(callerDir) {
  if (process.env.SOLUTIONS === '1') {
    const root = repoRoot(callerDir);
    const cssPath = path.join(root, 'solutions', path.relative(root, callerDir), 'style.css');
    if (!fs.existsSync(cssPath)) {
      throw new Error(`Could not find the reference stylesheet at ${cssPath}.`);
    }
    return cssPath;
  }
  const cssPath = path.join(callerDir, 'style.css');
  if (!fs.existsSync(cssPath)) {
    throw new Error(`Could not find style.css at ${cssPath}.`);
  }
  return cssPath;
}

async function openPage(callerDir) {
  const htmlPath = path.join(callerDir, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    throw new Error(`Could not find index.html at ${htmlPath}.`);
  }
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'css-practice-'));
  let browser;
  try {
    fs.copyFileSync(htmlPath, path.join(dir, 'index.html'));
    fs.copyFileSync(stylesheetPath(callerDir), path.join(dir, 'style.css'));
    browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 800, height: 600 } });
    await page.goto(pathToFileURL(path.join(dir, 'index.html')).href);
    return {
      page,
      async close() {
        await browser.close();
        fs.rmSync(dir, { recursive: true, force: true });
      },
    };
  } catch (error) {
    if (browser) {
      await browser.close();
    }
    fs.rmSync(dir, { recursive: true, force: true });
    throw error;
  }
}

async function check(callerDir, fn) {
  const session = await openPage(callerDir);
  try {
    await fn(session.page);
  } finally {
    await session.close();
  }
}

async function matchedStyles(page, selector, names) {
  const rows = await page.locator(selector).evaluateAll((elements, propertyNames) => {
    return elements.map((element) => {
      const style = getComputedStyle(element);
      const found = {};
      propertyNames.forEach((name) => {
        found[name] = style.getPropertyValue(name).trim();
      });
      return found;
    });
  }, names);
  return rows;
}

function asRgb(value) {
  const match = String(value).trim().match(
    /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+)\s*)?\)$/
  );
  if (!match) {
    return String(value).trim();
  }
  const alpha = match[4];
  if (alpha === undefined || Number(alpha) === 1) {
    return `rgb(${match[1]}, ${match[2]}, ${match[3]})`;
  }
  return String(value).trim();
}

function normalizeValue(name, value) {
  const trimmed = String(value).trim();
  if (name === 'color' || name.endsWith('color')) {
    return asRgb(trimmed);
  }
  if (name === 'gap') {
    const parts = trimmed.split(/\s+/);
    if (parts.length === 2 && parts[0] === parts[1]) {
      return parts[0];
    }
  }
  return trimmed;
}

async function expectComputed(page, selector, expected, description) {
  const names = Object.keys(expected);
  const rows = await matchedStyles(page, selector, names);
  if (rows.length === 0) {
    throw new Error(`Expected ${description}. No element matched ${selector}.`);
  }
  rows.forEach((actual, index) => {
    const which = rows.length === 1 ? description : `${description} (item ${index + 1})`;
    names.forEach((name) => {
      const expectedValue = normalizeValue(name, expected[name]);
      const actualValue = normalizeValue(name, actual[name]);
      if (actualValue !== expectedValue) {
        const found = actualValue ? `"${actualValue}"` : 'no value';
        throw new Error(`Expected ${which} to have ${name}: ${expectedValue}. Found ${found}.`);
      }
    });
  });
}

async function expectBoxes(page, selector, checkLayout, description) {
  const boxes = await page.locator(selector).evaluateAll((elements) => {
    return elements.map((element) => {
      const box = element.getBoundingClientRect();
      const parent = element.parentElement.getBoundingClientRect();
      return {
        top: box.top,
        right: box.right,
        bottom: box.bottom,
        left: box.left,
        width: box.width,
        height: box.height,
        parentTop: parent.top,
        parentRight: parent.right,
        parentBottom: parent.bottom,
        parentLeft: parent.left,
      };
    });
  });
  if (boxes.length === 0) {
    throw new Error(`Expected ${description}. No element matched ${selector}.`);
  }
  checkLayout(boxes);
}

function expectFloatRight(boxes, description) {
  if (boxes.length !== 1) {
    throw new Error(`Expected one ${description}. Found ${boxes.length}.`);
  }
  const box = boxes[0];
  if (Math.abs(box.right - box.parentRight) > 1) {
    throw new Error(
      `Expected the ${description} to sit on the right. Its right edge is ${box.right.toFixed(0)}px and the section's right edge is ${box.parentRight.toFixed(0)}px.`
    );
  }
}

function expectRow(boxes, gap, description) {
  if (boxes.length < 2) {
    throw new Error(`Expected the ${description} to sit in one row. Found ${boxes.length}.`);
  }
  const top = boxes[0].top;
  boxes.forEach((box, index) => {
    if (Math.abs(box.top - top) > 1) {
      throw new Error(
        `Expected the ${description} to share one row. Item ${index + 1} starts below the first.`
      );
    }
    if (index === 0) {
      return;
    }
    const previous = boxes[index - 1];
    if (box.left <= previous.left) {
      throw new Error(
        `Expected the ${description} to sit from left to right. Item ${index + 1} does not start after item ${index}.`
      );
    }
    const actualGap = box.left - previous.right;
    if (Math.abs(actualGap - gap) > 1) {
      throw new Error(
        `Expected a ${gap}px gap in the ${description}. Found ${actualGap.toFixed(0)}px before item ${index + 1}.`
      );
    }
  });
}

module.exports = {
  check,
  expectComputed,
  expectBoxes,
  expectFloatRight,
  expectRow,
};
