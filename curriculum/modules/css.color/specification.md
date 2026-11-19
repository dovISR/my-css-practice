# css.color — Text color

| | |
| --- | --- |
| Status | Existing |
| Repository | css-practice |
| Lesson | [01 — CSS fundamentals](../../../practices/lesson-01/README.md) |
| Chapter | [01 — Color](../../../practices/lesson-01/01-color/README.md) |
| Exercise | [Text Color](../../../practices/lesson-01/01-color/01-text-color/README.md) |

## Prerequisites

The page already contains `<p class="lead">The morning harbor is calm.</p>` and already links `style.css`. Building that page is `html.document-head` in [html-practice](https://github.com/morbargig/html-practice). This module does not grade HTML.

## Required prior knowledge

This course does not grade the following yet. The study guide teaches the part the exercise needs.

- A CSS rule is a selector and a declaration block.
- A class selector starts with `.`. The selector `.lead` matches `class="lead"`.
- The browser turns the specified color into a computed `rgb()` value.
- `#1d4ed8` and `rgb(29, 78, 216)` are the same computed color. The keyword `blue` is `rgb(0, 0, 255)`.

## Learning objectives

1. Write a rule that sets `color` on `.lead` so the computed value is `rgb(29, 78, 216)`.
2. Explain why a named color and a hex color can compute to different `rgb()` values.
3. Read the computed color when the paragraph is still black or is the wrong blue.
4. State that the rule belongs in `style.css` and that `index.html` stays as it is.

## Core concepts

- The `color` property paints text, not the border and not the background.
- Specified value versus computed value.
- Class selector versus element selector.
- The stylesheet the page already links.

## Exercises

| Role | Path |
| --- | --- |
| Graded | `practices/lesson-01/01-color/01-text-color/` |
| Guided example | The study guide's heading example, which uses a different color |
| Ungraded extension | A different color on a different selector, in a scratch file |

## Outcomes

A student can say what `color` paints, why `blue` is not this exercise's blue, make `.lead` the required color, explain a black or wrong-blue result, and reuse `color` on another element.
