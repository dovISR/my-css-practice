# Study guide: card row

Module [css.flex](specification.md). Exercise: [Card Row](../../../practices/lesson-01/05-flex/01-card-row/README.md).

`.cards` contains three `article` elements with `class="card"` and the words One, Two, and Three. The page sets `.cards` to 640px wide and each card to 160 by 96, with margin 0. Those rules are in the `<style>` block. The starter rule for `.cards` is empty, so the articles stack as blocks.

## What flex is

`display: flex` makes an element a flex container. Its child elements become flex items and are laid out in one flex line unless they wrap. `flex-direction: row` lays that line out horizontally, from left to right in this page's left-to-right document. `gap` inserts space between items. It does not add space before the first item or after the last item.

## Why it exists

The float chapter pinned one note and let text wrap beside it. These three cards are peers. None of them is a sidebar for the others. Flex is the layout that treats them as items in a row and gives you a gap you can name.

## How this row is measured

Set the properties on `.cards`, the parent:

```css
.status-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
```

That example is a column with 8px between status lines. It is not the exercise. The exercise direction is `row` and the exercise gap is `16px`.

The first test reads computed style on `.cards`:

- `display` is `flex`
- `flex-direction` is `row`
- `gap` is `16px`

The initial `flex-direction` is `row`. If the author sets `display: flex` and `gap: 16px` and never mentions direction, the computed direction is still `row`, so that part of the check passes. The brief still asks for `flex-direction: row` so the rule documents the choice. Write it. The property that does not have a passing initial value is `gap`. `normal` does not satisfy `16px`.

The second test reads the three card rectangles:

- there are three `.card` boxes
- each top edge matches the first card's top edge, within 1px
- each card starts to the right of the previous card
- the gap between one card's right edge and the next card's left edge is 16px, within 1px

Three times 160px plus two 16px gaps is 512px. The row is 640px wide, so the cards fit on one line without shrinking. `flex-wrap` stays at its initial value, `nowrap`. A `column` direction stacks the cards, the tops differ, and the row test fails. `gap: 8px` fails the pixel sentence, which names the gap it found.

The card widths live in the later `<style>` block. A student `width` on `.card` loses to that block. `gap` on `.cards` is not in the fixture, so the student rule applies. Card margins are 0 in the fixture. A student margin on `.card` loses to `margin: 0`. The gap you want is `gap` on the container.

## When to use it

Use a row flex container for a single line of peer boxes with a shared gap. Use `flex-direction: column` for a stack with that same gap. Use float when text must wrap beside one box. Use grid, which this course does not grade yet, when the design is both rows and columns.

## A picture of the page

Before the rule, three 160 by 96 rectangles stack at the left. After the rule, One, Two, and Three share one horizontal band. A 16px strip of page background shows between One and Two, and between Two and Three. Empty space remains on the right of Three, because 512px is less than 640px. The cards do not stretch to fill that leftover unless `flex-grow` is set. The exercise does not set `flex-grow`.

## Scenario

A toolbar of three actions needs 8px between buttons and must stay on one line. That is the same parent-and-gap pattern, with a smaller gap and different labels. The graded cards use 16px and the words One, Two, and Three.

## Common mistakes

- Setting `display: flex` on `.card`. Each card becomes a container for its own text. `.cards` is still a block, so the cards stack, and the computed display of `.cards` is not `flex`.
- Setting `float: right` on the cards. They are not a flex row, and the gap test is not a float test.
- Using margin on the articles to fake the gap. The fixture resets margin to 0 later in the document.
- Writing `gap: 16` without a unit. The declaration is invalid and the used gap stays `normal`.
- Setting `flex-direction: column` out of habit from a mobile stack. The tops will not match.

## How to debug

1. Run `npm test -- 01-card-row`.
2. `Found "block"` on `display` means `.cards` is not a flex container.
3. `Found "normal"` on `gap` means the 16px declaration is missing or invalid. The message quotes the found value.
4. `Item 2 starts below the first` means the cards wrapped or the direction is `column`.
5. `Found 8px before item 2` means a gap exists and it is the wrong length.
6. In Live Server, inspect `.cards` and read `display`, `flex-direction`, and `gap` in the computed pane. Then look at the boxes. The eye should see one band and two equal gaps.

## Knowledge check

1. Why does the direction declaration belong on `.cards` rather than on `.card`?
2. What is the computed `flex-direction` when a flex container never sets it, and why does the brief still ask you to set `row`?
3. The cards stack and the failure says item 2 starts below the first. Which property do you check first?
4. Why does `margin-right: 16px` on `.card` fail to create the gap on this page?

The container is the flex formatting context. The initial direction is `row`, and the declaration records that choice for the next reader. A lower second item means the main axis is vertical or the items wrapped. The fixture's later `margin: 0` wins over a student margin on `.card`.

## References

- MDN: [Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- Exercise brief: [Card Row](../../../practices/lesson-01/05-flex/01-card-row/README.md)
