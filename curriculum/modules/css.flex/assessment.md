# Assessment: card row

The first test expects computed `display: flex`, `flex-direction: row`, and `gap: 16px` on `.cards`. The second test expects three `.card` boxes on one top edge, ordered left to right, with a 16px gap and 1px tolerance. An unfinished starter fails both. Do not remove `flex-direction` from the test. The initial value is `row`, and the assertion still documents the contract the brief states.

## Traceability

| Objective | Study section | Exercise | Check | Slide | Podcast prompt |
| --- | --- | --- | --- | --- | --- |
| 1. Flex row with a 16px gap | How this row is measured | [01-card-row](../../../practices/lesson-01/05-flex/01-card-row/README.md) | Computed `display`, `flex-direction`, and `gap` on `.cards` | 2 and 3 | Why direction can compute to `row` |
| 2. Shared top, left to right, 16px | The rectangle list in that section | Same exercise | `expectRow` on `.card` with gap 16 | 3. One band, left to right | Leftover space on the right |
| 3. Debug column, wrap, and bad gap | How to debug | Same exercise | "starts below", a found gap in pixels, or `Found "normal"` | 4. Reading a bad gap | The passing first test and a stacked second card |
| 4. Sizes stay in the page | The opening fixture | Same exercise | Widths are not assertions. The HTML fixture supplies 640 and 160 | 1. Three stacked cards | Why sizes stay in the fixture |

## Criteria

- Both tests pass.
- The student can say that gap is not margin, and that the parent is the container.
- The 8px toolbar example is not graded.
