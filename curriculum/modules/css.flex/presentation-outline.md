# Presentation outline: card row

Matches [specification.md](specification.md).

## 1. Three stacked cards

| | |
| --- | --- |
| Objective | 4. Sizes stay in the page. |
| Explanation | The row is 640px. Each card is 160 by 96 with margin 0. They stack because `.cards` is not a flex container yet. |
| Visual | One, Two, and Three in a column. |
| Code | The fixture rules and the empty `.cards` block. |
| Interaction | Students point at the element that should become the container. |
| Exercise | [Card Row](../../../practices/lesson-01/05-flex/01-card-row/README.md) |

## 2. Container, direction, gap

| | |
| --- | --- |
| Objective | 1. |
| Explanation | `display: flex` creates the row context. `flex-direction: row` is also the initial value, so the brief asks for it explicitly. `gap: 16px` is not the initial value. |
| Visual | A horizontal axis arrow and a 16px spacer between boxes. |
| Code | The column example `.status-list { display: flex; flex-direction: column; gap: 8px; }`. |
| Interaction | Students say which of those three facts would fail if copied onto `.cards`. |
| Exercise | [Card Row](../../../practices/lesson-01/05-flex/01-card-row/README.md) |

## 3. One band, left to right

| | |
| --- | --- |
| Objective | 2. |
| Explanation | Shared tops, each card to the right of the previous one, 16px between border edges. 512px of cards and gaps fit inside 640px. |
| Visual | The three cards with the leftover space on the right called out. |
| Code | Students edit `.cards` in `style.css`. |
| Interaction | Run `npm test -- 01-card-row` and then preview the page. |
| Exercise | [Card Row](../../../practices/lesson-01/05-flex/01-card-row/README.md) |

## 4. Reading a bad gap

| | |
| --- | --- |
| Objective | 3. |
| Explanation | `Found "normal"` is a missing gap. A pixel sentence is the wrong length. "Starts below the first" is a column or a wrap. |
| Visual | The three failure sentences on a slide. |
| Code | `gap: 16` without a unit, marked invalid. |
| Interaction | Students match each message to a property before they edit. |
| Exercise | [Card Row](../../../practices/lesson-01/05-flex/01-card-row/README.md) |

## 5. A tighter row

| | |
| --- | --- |
| Objective | Reuse the same three properties with an 8px gap. |
| Explanation | A toolbar is the same pattern. It is not the graded 16px. |
| Visual | Three buttons with a narrower spacer. |
| Code | A scratch rule. Do not change the exercise gap. |
| Interaction | Students compute whether three 160px cards and two 8px gaps still fit in 640px. |
| Exercise | Ungraded. Graded work remains [Card Row](../../../practices/lesson-01/05-flex/01-card-row/README.md). |
