# Assessment: inline block

The test counts `.item` elements and expects exactly three. It then expects each computed `display` to be `inline-block`. It does not assert width, height, or position. The study guide still teaches those sizes, because the chapter's point is that `inline-block` keeps them. Do not weaken the test to accept `inline` or `block`.

## Traceability

| Objective | Study section | Exercise | Check | Slide | Podcast prompt |
| --- | --- | --- | --- | --- | --- |
| 1. `display: inline-block` on `.item` | How the three values behave | [01-inline-block](../../../practices/lesson-01/03-display/01-inline-block/README.md) | Computed `display` is `inline-block` for each `.item` | 3. Inline-block keeps both | Which value keeps the pixels |
| 2. Shared line, set size | Same section, and the picture | Same exercise | Count is 3. Width is fixture-only, checked by eye in Live Server | 3 | Why the test can pass without measuring 120px |
| 3. `block` stacks, `inline` drops the size | What `display` is | Same exercise | A found value of `block` or `inline` fails the display check | 1 and 2 | The near-miss scene |
| 4. HTML stays put | How it interacts with the fixture | Same exercise | Removing an item fails the count. The test loads the exercise `index.html` | 4 | Why a student width can lose |

## Criteria

- The computed display matches on every item.
- The student can say what the test does not measure.
- The scratch chip example is discussed, not graded.
