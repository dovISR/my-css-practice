# css.border — Solid border

| | |
| --- | --- |
| Status | Existing |
| Repository | css-practice |
| Lesson | [01 — CSS fundamentals](../../../practices/lesson-01/README.md) |
| Chapter | [02 — Border](../../../practices/lesson-01/02-border/README.md) |
| Exercise | [Solid Border](../../../practices/lesson-01/02-border/01-solid-border/README.md) |

## Prerequisites

[css.color](../css.color/specification.md). The student can set one property on a class and can read a computed `rgb()` color. The panel's width, height, margin, and `box-sizing` are already in the page.

## Required prior knowledge

- A shorthand can set several longhand properties at once.
- Border width, border style, and border color are three different facts. A missing style leaves the border invisible, because the initial style is `none`.
- `box-sizing: border-box` is already set on `.panel` in the page's `<style>` block. This module does not ask the student to change it.

## Learning objectives

1. Give `.panel` a solid border that is 4px wide on the top, right, bottom, and left.
2. Make every side's computed border color `rgb(17, 17, 17)`.
3. Explain why a border on one side, or a border with no style, fails a check of all four sides.
4. Leave the page's size rules in `index.html` and write the border in `style.css`.

## Core concepts

- The `border` shorthand and the longhands `border-*-width`, `border-*-style`, and `border-*-color`.
- A transparent or `none` style versus a visible solid line.
- Border color versus the `color` property from the previous chapter.

## Exercises

| Role | Path |
| --- | --- |
| Graded | `practices/lesson-01/02-border/01-solid-border/` |
| Guided example | A card with a different width and color in the study guide |
| Ungraded extension | A bottom-only border on a scratch element |

## Outcomes

A student can describe the three parts of a border, put a 4px solid `#111111` line on every side of `.panel`, and tell a one-sided border from a full box.
