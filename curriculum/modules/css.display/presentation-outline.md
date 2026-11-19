# Presentation outline: inline block

Matches [specification.md](specification.md).

## 1. Three blocks in a column

| | |
| --- | --- |
| Objective | 3. The default for these `div` elements is `block`. |
| Explanation | North, South, and East each start on a new line. The page already sets 120 by 48. |
| Visual | The stacked rectangles before any student rule. |
| Code | The fixture's width and height. No student declaration yet. |
| Interaction | Students say why a `div` stacks. |
| Exercise | [Inline Block](../../../practices/lesson-01/03-display/01-inline-block/README.md) |

## 2. Inline keeps the line and drops the size

| | |
| --- | --- |
| Objective | 2 and 3. `inline` is only half of the chapter sentence. |
| Explanation | The words share a line. The 120px width does not size a non-replaced inline box. |
| Visual | Three words in a line, no empty rectangle. |
| Code | `display: inline` shown as the near miss, not as the solution to leave on screen. |
| Interaction | Students predict the computed `display` the test would find. |
| Exercise | [Inline Block](../../../practices/lesson-01/03-display/01-inline-block/README.md) |

## 3. Inline-block keeps both

| | |
| --- | --- |
| Objective | 1 and 2. |
| Explanation | The boxes share a line and stay 120 by 48. The test reads `display` on `.item` and counts three elements. |
| Visual | Three equal rectangles in a row. |
| Code | Students set `display` on `.item` in `style.css`. |
| Interaction | Run `npm test -- 01-inline-block`, then look at the page with Live Server. |
| Exercise | [Inline Block](../../../practices/lesson-01/03-display/01-inline-block/README.md) |

## 4. The size rule can hide a student width

| | |
| --- | --- |
| Objective | 4. The fixture's later `.item` rule owns width and height. |
| Explanation | Same selector, later in the document, so the `<style>` block wins those properties. `display` is only in `style.css`. |
| Visual | DevTools showing the fixture rule struck through a student `width`, with `display` still applied. |
| Code | A student `width: 40px` that does not win. |
| Interaction | Students name the property they are supposed to set, and one property they should leave alone. |
| Exercise | [Inline Block](../../../practices/lesson-01/03-display/01-inline-block/README.md) |

## 5. A chip that is not this exercise

| | |
| --- | --- |
| Objective | Reuse `inline-block` on a different size. |
| Explanation | Small, Medium, and Large can be 80 by 32 chips. Flex is a later tool for the same row. |
| Visual | Three chips that are not labeled North, South, and East. |
| Code | A scratch rule with `display: inline-block` and a width the fixture does not own. |
| Interaction | Discussion only. |
| Exercise | Ungraded. Graded work remains [Inline Block](../../../practices/lesson-01/03-display/01-inline-block/README.md). |
