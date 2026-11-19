# Study guide: float aside

Module [css.float](specification.md). Exercise: [Float Aside](../../../practices/lesson-01/04-float/01-float-aside/README.md).

The page is a `section` with `class="sheet"` and, inside it, an `aside` with `class="note"` followed by a paragraph: "The main text stays beside the note." The page sets the section to 640px wide and the note to 200px by 96px, both with margin 0. Those rules are in the `<style>` block. The note comes first in the HTML, which matters once it floats.

## What `float` is

`float` removes a box from the normal block stack and places it against the left or right side of its containing block. Content that follows in normal flow flows along the other side when the line has room. `float: right` pins the box to the right. `float: left` pins it to the left. `none` is the initial value, and it is what the empty starter computes to.

## Why it exists

Printed pages and early web layouts used a float to park a note, a pull-quote, or an image beside a column of text. Flex and grid are the better tools for a row of cards. Float remains the tool this chapter grades, and it still shows up in older stylesheets. The behavior to understand is the pin plus the wrap, not a general page layout system.

## How the edges meet

The section is the containing block. It is 640px wide and has no padding in the fixture. The note is 200px wide, margin 0. After `float: right`, the note's right margin edge meets the section's right content edge. The test measures the border boxes with `getBoundingClientRect` and allows a 1px difference. With margin 0 and no padding, the right edges match.

The paragraph is in normal flow, and its line boxes shorten beside the 200px float. Visually, the note sits on the right and the sentence runs on the left. The test does not read the paragraph's rectangle. It checks two facts only:

- computed `float` on `.note` is `right`
- the note's right edge is within 1px of its parent's right edge

`float: left` fails the first check. It can also fail the second, because the note's right edge then sits about 200px from the section's right edge, not on it.

`margin-right: 16px` on a right float pulls the note's border edge inward. The test then reports the two pixel positions. The fixture already sets `margin: 0` on `.note` in the later `<style>` block, so a student margin in `style.css` loses to that fixture rule for the same reason a student width lost in the display chapter. Do not fight that margin. Set `float` only.

## When to use it

Use a float for a small box that text should wrap around, when you are maintaining a page that already uses floats. Use flex or grid for a row of equal cards. Use `float` on the note, not on the section. Floating the section would pin the whole sheet, and the test looks at `.note`.

## A picture of the page

The sheet is a 640px column. Before the float, the 200px note sits at the top left and the paragraph starts below it. After `float: right`, the note is at the top right of the sheet. The paragraph's first lines begin at the left and stop before the note. Below the 96px note, if the paragraph is long enough, the text can use the full width again. This paragraph is one short sentence, so it stays beside the note.

## Scenario

A recipe page floats a 160px tip to the left of the method. The method text wraps on the right of the tip. That is `float: left`. The exercise is the mirror: the tip is on the right, and the text wraps on the left. The graded edges are the right edges.

## Common mistakes

- Setting `float: right` on `.sheet` or on the paragraph.
- Using `text-align: right`, which moves the line of text inside the note and leaves the note's box on the left. The computed `float` stays `none`.
- Using `position: absolute; right: 0` on the note. The box may look pinned, and the computed `float` is still `none`, so the first test fails.
- Adding padding to the section in `style.css`. The fixture does not set padding. Extra padding on `.sheet` can move the parent's content edge relative to the border box the test compares. Leave the section alone.

## How to debug

1. Run `npm test -- 01-float-aside`.
2. `Found "none"` means `.note` is not floated. Check the selector and the spelling of `right`.
3. `Found "left"` means the side is reversed.
4. The edge message prints both pixel values. A note whose right edge is smaller than the section's right edge is not against that side. Left float and extra inset both look like this.
5. In Live Server, look at the note before you trust the wrap of the paragraph. The test's second check is the edges, not the sentence.

## Knowledge check

1. Why does the note's place in the HTML, above the paragraph, matter for wrapping?
2. The computed `float` is `right` and the edge test still fails. What else could have moved the border edge?
3. Why does `text-align: right` fail the first test even if the words inside the note sit on the right?
4. What does the test refuse to prove about the paragraph?

The note is taken from the flow before the paragraph is laid out, so the paragraph can wrap beside it. A failing edge with `float: right` means the border box is inset from the parent's right border edge. `text-align` does not set `float`. The paragraph's position is visible and ungraded.

## References

- MDN: [float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- Exercise brief: [Float Aside](../../../practices/lesson-01/04-float/01-float-aside/README.md)
