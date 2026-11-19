# 01 — Inline Block

## 📚 Subject
The `display` property. Each item keeps the width and height already set on the page.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/display
- W3Schools: https://www.w3schools.com/css/css_display_visibility.asp

## 🎯 Task
Make each `.item` an inline block. Leave the HTML as it is.

North, South, and East should share a line and keep the 120 by 48 size the page already set. The test checks `display`, not the width.

The concept notes are in [the display study guide](../../../../curriculum/modules/css.display/study-guide.md).

## ✅ Requirements
- Edit `.item` in `style.css`.
- Set `display` to `inline-block` on every item.
- Leave `index.html` and the test files as they are.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-inline-block
```

`npm test` checks every practice.

## 🔧 Debugging
- `Found "block"` means `.item` is still the default `div`.
- `Found "inline"` puts the words on one line and gives up the set width.
- `Expected three items` means a box lost the class or was removed.
- A width you add in `style.css` can lose to the later `<style>` block, which uses the same `.item` selector. Set `display` only.
- Preview the row with Live Server after the test passes.

## ❓ Conceptual questions
1. Why does `inline` fail an exercise whose chapter talks about keeping a width?
2. Why can the test pass without measuring 120px?

## 🌱 Extension
In a scratch file, make three labels `inline-block` at a size this page does not use. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Saving `style.css` reloads the page. Install steps are in [extensions/README.md](../../../../extensions/README.md).
