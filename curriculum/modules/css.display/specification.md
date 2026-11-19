# css.display — Inline block

| | |
| --- | --- |
| Status | Existing |
| Repository | css-practice |
| Lesson | [01 — CSS fundamentals](../../../practices/lesson-01/README.md) |
| Chapter | [03 — Display](../../../practices/lesson-01/03-display/README.md) |
| Exercise | [Inline Block](../../../practices/lesson-01/03-display/01-inline-block/README.md) |

## Prerequisites

[css.border](../css.border/specification.md). The student can add one declaration to a class. The three items already have a width and a height in the page.

## Required prior knowledge

- A `div` is `display: block` by default. Block boxes stack downward and take the available width unless a width is set.
- `inline` boxes sit in a line. Width and height on a non-replaced inline box do not size it the way they size a block.
- `inline-block` sits in a line and uses the given width and height.

## Learning objectives

1. Set `display` to `inline-block` on `.item`.
2. Explain why the three items then share a line while keeping the 120 by 48 size the page already set.
3. Predict that `display: block` stacks them and that `display: inline` does not honor that width.
4. Leave `index.html` unchanged, including the three labels North, South, and East.

## Core concepts

- Outer display: block versus inline versus inline-block.
- The page's width and height are the fixture. The student supplies the display mode that makes those sizes meaningful in a row.

## Exercises

| Role | Path |
| --- | --- |
| Graded | `practices/lesson-01/03-display/01-inline-block/` |
| Guided example | A price tag using `inline-block` in the study guide |
| Ungraded extension | The same three labels as `block` in a scratch file, observed only |

## Outcomes

A student can choose `inline-block` when items must sit side by side and keep a set size, and can read a failure that says the computed `display` is still `block`.

The automated test checks the computed `display` and that three `.item` elements exist. It does not measure the 120px width. The width is still part of the lesson because the page sets it and the chapter is about keeping that width on a shared line.
