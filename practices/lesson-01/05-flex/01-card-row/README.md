# 01 — Card Row

## 📚 Subject
A flex row. The cards already have their size. You set the row.

## 📖 Read About It
- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
- W3Schools: https://www.w3schools.com/css/css3_flexbox.asp

## 🎯 Task
Lay the three cards out in one horizontal row with `16px` between them.

One, Two, and Three share a top edge, sit from left to right, and keep 16px between them. The row is 640px wide. Each card is already 160 by 96.

The concept notes are in [the flex study guide](../../../../curriculum/modules/css.flex/study-guide.md).

## ✅ Requirements
- Edit `.cards` in `style.css`.
- Set `display` to `flex`.
- Set `flex-direction` to `row`.
- Set `gap` to `16px`.
- The three cards share one top edge, sit from left to right, and keep a 16px gap.
- Leave `index.html` and the test files as they are.

## 🧪 Testing
From the repository root, run:

```bash
npm test -- 01-card-row
```

`npm test` checks every practice.

## 🔧 Debugging
- Set `display`, `flex-direction`, and `gap` on `.cards`, the parent. Flex on `.card` does not make the row.
- `Found "normal"` on `gap` means the 16px value is missing or has no unit.
- `Item 2 starts below the first` means the cards are in a column or have wrapped.
- A message such as `Found 8px before item 2` is the wrong gap. The test allows 1px.
- Card margins in `style.css` lose to the page's `margin: 0`. Use `gap` on the container.
- The initial `flex-direction` is already `row`. The brief still asks you to set it.

## ❓ Conceptual questions
1. Why does the row declaration go on `.cards` rather than on each card?
2. Why can an omitted `flex-direction` still compute to `row`, while an omitted `gap` cannot pass as `16px`?

## 🌱 Extension
In a scratch stylesheet, build a row with an 8px gap and different labels. Leave this exercise at 16px. The extension is not graded.

## 👀 Preview
Open `index.html` with Live Server and review the page in the browser. Saving `style.css` reloads the page. Install steps are in [extensions/README.md](../../../../extensions/README.md).
