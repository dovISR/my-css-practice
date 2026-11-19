# css.flex — Card row

| | |
| --- | --- |
| Status | Existing |
| Repository | css-practice |
| Lesson | [01 — CSS fundamentals](../../../practices/lesson-01/README.md) |
| Chapter | [05 — Flex](../../../practices/lesson-01/05-flex/README.md) |
| Exercise | [Card Row](../../../practices/lesson-01/05-flex/01-card-row/README.md) |

## Prerequisites

[css.float](../css.float/specification.md). The student can place one box against a side and can tell that from a row of peers. The cards already have a size. The student styles the row.

## Required prior knowledge

- A flex container is the element whose `display` is `flex`. Its children are flex items.
- The initial `flex-direction` is `row`. The computed value is `row` even when the author omits the property. The exercise still asks for the declaration so the stylesheet states the direction.
- The initial `gap` is `normal`, which computes to `0px` for this check. The 16px gap has to be set. The layout test measures that gap.

## Learning objectives

1. Make `.cards` a row flex container with a 16px gap.
2. Explain that the three cards then share a top edge and sit from left to right with 16px between them.
3. Debug a wrap onto a second line, a column direction, or a gap of the wrong size.
4. Leave each card's 160 by 96 size, and the row's 640px width, in the page.

## Core concepts

- `display: flex` on the parent, not on each card.
- `flex-direction: row` and its initial value.
- `gap` as the space between items, distinct from margin on the cards.
- The layout check: shared top, left-to-right order, 16px gap, 1px tolerance.

## Exercises

| Role | Path |
| --- | --- |
| Graded | `practices/lesson-01/05-flex/01-card-row/` |
| Guided example | A column of two status lines in the study guide |
| Ungraded extension | A 8px gap on a scratch row |

## Outcomes

A student can build a horizontal flex row, predict the default direction, and use the pixel gap message to correct `gap`.
