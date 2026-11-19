# 01 — Text Color

## 📚 Subject
The `color` property on a paragraph. The HTML page is already written.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color
- W3Schools: https://www.w3schools.com/css/css_colors.asp

## 🎯 Task
Make the paragraph blue. Leave `index.html` as it is and write the rule in `style.css`.

The computed color must be `rgb(29, 78, 216)`. `#1d4ed8` is that same color.

The sentence stays "The morning harbor is calm." After the rule applies, those words are that blue. Black text means the rule has not taken effect.

The concept notes are in [the color study guide](../../../../curriculum/modules/css.color/study-guide.md).

## ✅ Requirements
- Edit `.lead` in `style.css`.
- Set `color` so the computed value is `rgb(29, 78, 216)`.
- Leave `index.html` and the test files as they are.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-text-color
```

`npm test` checks every practice.

## 🔧 Debugging
- The failure names the color it found. `rgb(0, 0, 0)` is the default black text on this page.
- `color: blue` computes to `rgb(0, 0, 255)`, which is a different blue.
- A rule on `p` is not the same match as a rule on `.lead`.
- Edit `style.css` only. A missing semicolon drops the declaration.
- Open the page with Live Server, inspect `.lead`, and read the computed `color`.

## ❓ Conceptual questions
1. Why can `#1d4ed8` and `rgb(29, 78, 216)` pass the same check, while the keyword `blue` does not?
2. The paragraph is still black. Which file do you edit, and what does that tell you about whether `.lead` received a color?

## 🌱 Extension
In a scratch stylesheet, not in this exercise, set a heading to a red that is not this blue. Look up its computed color in the browser. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Saving `style.css` reloads the page. Install steps are in [extensions/README.md](../../../../extensions/README.md).
