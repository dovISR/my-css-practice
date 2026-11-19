# Presentation outline: float aside

Matches [specification.md](specification.md).

## 1. The note is in normal flow

| | |
| --- | --- |
| Objective | 4. Widths stay in the page. |
| Explanation | The sheet is 640px. The note is 200 by 96, margin 0, and it sits above the paragraph because it is a block. |
| Visual | The stacked fixture, note on the left, paragraph underneath. |
| Code | The existing `<style>` rules. The empty `.note` rule. |
| Interaction | Students identify the containing block. |
| Exercise | [Float Aside](../../../practices/lesson-01/04-float/01-float-aside/README.md) |

## 2. Float pins a side

| | |
| --- | --- |
| Objective | 1. `float: right` is a side, not a text alignment. |
| Explanation | The note leaves the stack and attaches to the right of the section. Following text wraps if the line has room. |
| Visual | A diagram of the note against the section's right edge, text on the left. |
| Code | `float: left` on a figure, as the mirror example. |
| Interaction | Students predict which edge the exercise measures. |
| Exercise | [Float Aside](../../../practices/lesson-01/04-float/01-float-aside/README.md) |

## 3. The graded edges

| | |
| --- | --- |
| Objective | 1 and 2. |
| Explanation | The test reads computed `float` and compares the note's right edge with the section's right edge, with 1px of tolerance. |
| Visual | Two vertical lines that coincide on the right of the sheet. |
| Code | Students set `float` on `.note` only. |
| Interaction | Run `npm test -- 01-float-aside`. |
| Exercise | [Float Aside](../../../practices/lesson-01/04-float/01-float-aside/README.md) |

## 4. A pin that misses the edge

| | |
| --- | --- |
| Objective | 3. |
| Explanation | `left` fails the property. An inset right edge fails the pixel check even when the property is `right`. The fixture's later margin wins if the student also sets margin. |
| Visual | The failure sentence with two pixel numbers. |
| Code | `text-align: right` shown as a rule that does not change `float`. |
| Interaction | Students say which of the two tests a wrong side fails. |
| Exercise | [Float Aside](../../../practices/lesson-01/04-float/01-float-aside/README.md) |

## 5. What the paragraph is doing

| | |
| --- | --- |
| Objective | See the wrap without treating it as a graded assertion. |
| Explanation | The sentence beside the note is the float's effect on later line boxes. The test does not measure that sentence. |
| Visual | Live Server with the note on the right and the sentence on the left. |
| Code | No second rule. |
| Interaction | Students describe the paragraph in their own words. |
| Exercise | [Float Aside](../../../practices/lesson-01/04-float/01-float-aside/README.md), observation only. |
