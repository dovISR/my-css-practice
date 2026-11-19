# Podcast brief: solid border

Use this with [study-guide.md](study-guide.md). Talk about the three facts on one edge, then about why four edges are a different choice.

## Conceptual questions

- Why is a border missing when the author only set a width?
- Why does the test list twelve properties when the author wrote one declaration?
- How is border color different from the text `color` in the previous episode?

## Explanations to keep

Each side stores width, style, and color. The initial style is `none`. The shorthand copies one triplet onto every side. `#111111` is `rgb(17, 17, 17)`. The page already chose `border-box`, so the line is inside the 240 by 120 size. The later `<style>` block owns width and height for this exercise.

## Practical example

A packing slip prints a dashed brown line around the address and a single solid line above the total. Ask which one is a shorthand on all sides, and which one is `border-top` only. Use 2px and `#9a3412` for the address so the example is not the graded panel.

## Misconceptions

- The text color and the border color are the same property.
- `gray` is close enough to `#111111`.
- Putting the border in the HTML `<style>` block is what the exercise asked for.
- The border always adds to the element's stated width. On this page `box-sizing` is `border-box`, so it does not.

## Debugging scene

The top and bottom are 4px solid and the left width is still `0px`. The author used `border-top` and `border-bottom` because the mock looked like a horizontal rule. The test names `border-left-width`. The fix is a declaration that includes the missing sides, not a change to the HTML size.

## Discussion prompts

- When would a team want the border outside the stated width instead?
- Why keep the size in the fixture and the line in `style.css` for this lesson?
- What happens to the words inside a short panel when the border gets thicker under `border-box`?

## Exercise

[Solid Border](../../../practices/lesson-01/02-border/01-solid-border/README.md). The box is 240 by 120. The passing line is 4px solid `rgb(17, 17, 17)` on every side.

## Takeaway

A border is three facts, repeated for each side you mean to draw. The shorthand is a convenience. The computed longhands are what the browser and the test compare.
