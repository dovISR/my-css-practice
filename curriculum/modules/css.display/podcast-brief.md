# Podcast brief: inline block

Use this with [study-guide.md](study-guide.md). Spend the time on the difference between the three display values, not on flex.

## Conceptual questions

- Why do three `div` elements stack before the student writes anything?
- What does "sit inline and still keep a set width" rule out?
- Why can the test pass on `display` without measuring 120px?

## Explanations to keep

`block` breaks the line. `inline` joins the line and sizes to the text when the element is not replaced. `inline-block` joins the line and uses the fixture's 120 by 48. The HTML source may insert a space between inline-level boxes. The test ignores that space. The later `<style>` block wins width and height because it uses the same selector and comes after the linked sheet.

## Practical example

Filter chips labeled Small, Medium, and Large are 80 by 32. Ask which display value keeps those pixels in one row, and which value would turn them into ordinary words. Do not use the North, South, and East labels.

## Misconceptions

- `inline` is what the test wants because the chapter says "inline".
- Setting `display` on the parent `.items` changes the computed `display` of `.item` to `inline-block`. It does not.
- A student width in `style.css` replaces the fixture because stylesheets always override HTML. Order and specificity decide, and here the later page rule wins.
- A passing test proves the boxes are 120px wide. It proves the display value and the count.

## Debugging scene

The test finds `display: inline`. The row looks like words, not rectangles. The author stopped at the first half of the chapter sentence. The computed value is the thing to change. A second scene: the author set `width: 200px` in `style.css` and the boxes stayed 120px. That is the fixture winning, and it is not the property this exercise grades.

## Discussion prompts

- When is a shared line of fixed boxes enough, and when does a row need a gap you can name?
- What breaks if these items become `inline-block` inside a sentence of body text?
- Why leave the labels in the HTML?

## Exercise

[Inline Block](../../../practices/lesson-01/03-display/01-inline-block/README.md). Three items, computed `display: inline-block`.

## Takeaway

`display` chooses the box. `inline-block` is the value that honors a width while staying on the line. The test checks that value. The eye checks that the rectangles survived.
