# 01 — Solid Border

## 📚 Subject
A solid border on every side of a box. The panel's size is already set in the page.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/border
- W3Schools: https://www.w3schools.com/css/css_border.asp

## 🎯 Task
Give `.panel` a 4px solid border. The computed color on every side must be `rgb(17, 17, 17)`. `#111111` is that same color.

The panel reads "A bordered panel." After the rule applies, a solid line runs around all four sides. The page already sets the box to 240 by 120.

The concept notes are in [the border study guide](../../../../curriculum/modules/css.border/study-guide.md).

## ✅ Requirements
- Edit `.panel` in `style.css`.
- Set a `4px` `solid` border on the top, right, bottom, and left.
- The computed border color on every side is `rgb(17, 17, 17)`.
- Leave `index.html` and the test files as they are.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-solid-border
```

`npm test` checks every practice.

## 🔧 Debugging
- The failure names the side and the longhand. `0px` means that side was never set.
- A style of `none` means the width may be set and the line is still invisible.
- `rgb(0, 0, 0)` on the border color means the line is using the text color. `#111111` is `rgb(17, 17, 17)`.
- Put the border in `style.css`. The page's `<style>` block already owns the size.
- Inspect `.panel` and read the four widths, four styles, and four colors.

## ❓ Conceptual questions
1. Why does a 4px width fail when the border style is still `none`?
2. Why is setting `color` on the panel not the same as setting the border color?

## 🌱 Extension
In a scratch stylesheet, draw only the top edge of a box. Say which three sides would fail the exercise check. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Saving `style.css` reloads the page. Install steps are in [extensions/README.md](../../../../extensions/README.md).
