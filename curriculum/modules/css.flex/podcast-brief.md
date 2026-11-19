# Podcast brief: card row

Use this with [study-guide.md](study-guide.md). Contrast the row with the float from the previous episode in one minute, then stay on the container.

## Conceptual questions

- Why is the flex declaration on the parent?
- Why can `flex-direction` compute to `row` when the author never typed it?
- Why is the leftover space on the right of the third card not a bug on this page?

## Explanations to keep

Flex items are the children of a flex container. The initial direction is a row. The initial gap does not satisfy `16px`. The layout test uses the border boxes: same top, increasing left, 16px of space, 1px tolerance. Three 160px cards and two gaps need 512px. The container is 640px, and nothing in the exercise tells the cards to grow. Margin on `.card` loses to the fixture's `margin: 0`.

## Practical example

A toolbar puts Save, Preview, and Close in one line with 8px between them. Ask where `display`, `flex-direction`, and `gap` go, and what the computed gap is if the author writes `gap: 8` with no unit. That toolbar is not the graded card row.

## Misconceptions

- Each card should be `display: flex` so that the row exists.
- Float is a fine way to line the cards up because the previous chapter just taught it.
- Omitting `flex-direction` is required for the test to pass. The computed value can still be `row`, and the brief still wants the declaration.
- The cards should stretch across the 640px. They stay 160px unless `flex-grow` changes.

## Debugging scene

The first test passes and the second says item 2 starts below the first. Direction or wrap put the cards in a column even though `display` is `flex`. A second scene: the message found 0px before item 2, with computed gap `normal`. The author remembered direction and forgot a unit on `gap`.

## Discussion prompts

- What would the row need before it could become a grid of cards, and why is that a later module?
- When is `column` the right direction for these same three articles?
- Why keep card sizes in the HTML fixture while the student writes the row?

## Exercise

[Card Row](../../../practices/lesson-01/05-flex/01-card-row/README.md). `.cards` is a flex row with a 16px gap. The three cards share one top edge.

## Takeaway

The parent becomes the row. Gap is the space between peers. The computed direction has a default, and the measured gap does not.
