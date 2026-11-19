# css.float — Float aside

| | |
| --- | --- |
| Status | Existing |
| Repository | css-practice |
| Lesson | [01 — CSS fundamentals](../../../practices/lesson-01/README.md) |
| Chapter | [04 — Float](../../../practices/lesson-01/04-float/README.md) |
| Exercise | [Float Aside](../../../practices/lesson-01/04-float/01-float-aside/README.md) |

## Prerequisites

[css.display](../css.display/specification.md). The student can set one property on a class and can compare a computed value with the value the test names. The section and the note already have widths.

## Required prior knowledge

- In normal flow, the aside is a block inside the section, so it sits above the paragraph and stretches according to its width.
- `float` takes a box out of that stack and pins it to the left or right of its containing block. Later content in normal flow wraps beside it when there is room.
- This chapter does not teach positioning. Absolute positioning is a proposed later module.

## Learning objectives

1. Set `float: right` on `.note`.
2. Place the note so its right edge meets the section's right edge, within the test's 1px tolerance.
3. Explain why `float: left`, or a right margin, moves that edge away from the section's edge.
4. Leave the 640px section and the 200 by 96 note in the page.

## Core concepts

- `float: right` and the containing block's right edge.
- Margin on a float changes where that edge lands.
- The paragraph beside the note is a consequence of wrapping. The current test does not measure the paragraph.

## Exercises

| Role | Path |
| --- | --- |
| Graded | `practices/lesson-01/04-float/01-float-aside/` |
| Guided example | A left-floated figure in the study guide |
| Ungraded extension | Describe where the paragraph sits. Do not add a second graded assertion |

## Outcomes

A student can float a note to the right, account for the right edges, and tell float from the flex row in the next chapter.
