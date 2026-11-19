# Assessment: float aside

Two tests run. The first expects computed `float` on `.note` to be `right`. The second compares border-box right edges and fails when they differ by more than 1px. The paragraph is not queried. Do not add a paragraph assertion in this module, and do not drop the edge check.

## Traceability

| Objective | Study section | Exercise | Check | Slide | Podcast prompt |
| --- | --- | --- | --- | --- | --- |
| 1. `float: right` on `.note` | What `float` is | [01-float-aside](../../../practices/lesson-01/04-float/01-float-aside/README.md) | Computed `float` is `right` | 3. The graded edges | Why a good-looking paragraph can still fail |
| 2. Right edges meet | How the edges meet | Same exercise | Right edges within 1px | 3 | Why margin 0 meets the section |
| 3. Left float and inset miss | Common mistakes | Same exercise | `Found "left"` or the pixel sentence | 4. A pin that misses the edge | The 624 versus 640 scene |
| 4. Widths stay in the page | The opening fixture | Same exercise | The test does not grade 640 or 200. Changing the HTML changes the boxes the test measures | 1. The note is in normal flow | The recipe tip as a different side |

## Criteria

- Both tests pass. A correct side with a separated edge is still a fail.
- The student can say the paragraph wrap is visible and not what the second test measures.
- The left-floated recipe example is discussion, not a second exercise.
