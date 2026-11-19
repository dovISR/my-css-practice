# Study guide: inline block

Module [css.display](specification.md). Exercise: [Inline Block](../../../practices/lesson-01/03-display/01-inline-block/README.md).

Three `div` elements sit in `.items`. Their text is North, South, and East. Each has `class="item"`. The page sets every item to 120px wide and 48px tall, with margin 0. That rule is in a `<style>` block after the stylesheet link. The starter `.item` rule in `style.css` is empty, so each item is still a block.

## What `display` is

`display` chooses the kind of box an element generates. `block` generates a box that starts on a new line. `inline` generates a box that stays in the line of text. `inline-block` generates a box that stays in the line and still accepts a width and a height.

## Why it exists

A navigation chip, a price, or a legend swatch is often a small rectangle in a sentence-like row. A block would put each chip on its own line. An inline box would ignore the height the design asked for. `inline-block` is the older, direct answer to that pair of constraints. Flex and grid, later in the course, are usually clearer for full rows. This chapter exists so the student can see the box type itself.

## How the three values behave on these items

The fixture already says:

```css
.item {
  width: 120px;
  height: 48px;
  margin: 0;
}
```

That is the page, not the student file. With the default `display: block`, each `div` starts on a new line. The width of 120px applies, and the leftover space on the row stays empty.

`display: inline` puts North, South, and East in one line. The width and height in the fixture stop sizing the box, because a non-replaced inline box sizes to its text.

`display: inline-block` puts them in one line and keeps the 120 by 48 boxes. A gap can appear between them from the line break in the HTML source, which is a space between inline-level boxes. The test does not measure that space.

The check looks up every `.item` and expects computed `display` to be `inline-block`. It also expects exactly three matches. It does not read `width`.

## When to use it

Use `inline-block` for a few fixed-size boxes that should share a line and do not need the alignment tools of flex. Use `block` when each region should stack. Use flex, in [css.flex](../css.flex/study-guide.md), when the row needs a controlled gap and a shared top edge. Do not use `inline-block` to float a sidebar. That is the next chapter's tool, and it has different wrapping rules.

## How it interacts with the fixture

The `<style>` block and a student rule both use `.item`. They have the same specificity. The block comes later in the document, so it wins for `width`, `height`, and `margin`. A student `width` in `style.css` does not replace 120px. `display` is absent from the fixture, so the student declaration applies.

## A picture of the page

Before the change, three short rectangles stack down the left side. After `inline-block`, the same three rectangles sit in a horizontal run: North, then South, then East. Each is still 120 by 48. They do not stretch to fill the window.

## Scenario

A filter bar shows Small, Medium, and Large as fixed 80 by 32 chips. `inline-block` keeps each chip at that size in one row. A later redesign may move the bar to flex. The display value is what made the widths visible in a line.

## Common mistakes

- Setting `display: inline` because the chapter said "sit inline". The test asks for `inline-block`.
- Setting `display: flex` on `.items`. The test reads `.item`, and the children would still be blockified flex items only if the parent is the flex container. The required value is on the item itself.
- Editing the HTML to put the words in `<span>` elements. The three `div` elements have to stay.
- Expecting the test to fail when the boxes wrap. It will not. The check is the computed display, not the coordinates.

## How to debug

1. Run `npm test -- 01-inline-block`.
2. `Found "block"` means `.item` is still at the default. The declaration is missing, misspelled, or on another selector.
3. `Found "inline"` means the width-keeping half of the value was dropped.
4. `Expected three items. Found 2.` means an element lost the class or was removed.
5. In Live Server, the boxes should share a line. Inspect one item and confirm both the fixture width and the student display. If the width looks unchanged after you set a different width in `style.css`, the later `<style>` block is winning. Put `display` in `style.css` and leave the size in the page.

## Knowledge check

1. Why does the page set a width if the test never reads `width`?
2. What computed `display` do you expect before any student rule, and why?
3. North, South, and East are on one line but only as tall as the words. Which value was used?
4. Why can a `width` you add in `style.css` lose to the page?

The width is there so `inline-block` has a size to keep. The default is `block` because the elements are `div`s. Text-sized boxes mean `inline`. The page's `.item` rule comes later and matches the same selector.

## References

- MDN: [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- Exercise brief: [Inline Block](../../../practices/lesson-01/03-display/01-inline-block/README.md)
