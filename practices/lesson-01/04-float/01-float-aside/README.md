# 01 — Float Aside

## 📚 Subject
`float` on an aside. The section and the note already have their widths.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/float
- W3Schools: https://www.w3schools.com/css/css_float.asp

## 🎯 Task
Float the note to the right side of the section. Its right edge should meet the section's right edge.

The section is 640px wide and the note is 200 by 96. The sentence can sit beside the note. The test checks the float and the right edges. It does not measure the sentence.

The concept notes are in [the float study guide](../../../../curriculum/modules/css.float/study-guide.md).

## ✅ Requirements
- Edit `.note` in `style.css`.
- Set `float` to `right`.
- The note's right edge meets the section's right edge.
- Leave `index.html` and the test files as they are.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-float-aside
```

`npm test` checks every practice.

## 🔧 Debugging
- `Found "none"` means `.note` is not floated. `text-align: right` does not set `float`.
- `Found "left"` is the wrong side.
- The edge message prints both pixel positions. A gap between them means the note's border box is inset from the section.
- Leave the widths in the page. Set `float` on `.note` in `style.css`.
- Look at the page with Live Server. The sentence beside the note is the wrap. The second test is the edges.

## ❓ Conceptual questions
1. Why does `float: right` move the note when `text-align: right` only moves the words inside it?
2. What does a passing float test still refuse to prove about the paragraph?

## 🌱 Extension
Describe where a left-floated tip would sit beside a column of steps. Do not change this exercise's side. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Saving `style.css` reloads the page. Install steps are in [extensions/README.md](../../../../extensions/README.md).
