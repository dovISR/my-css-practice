# Assessment: solid border

The automated check reads twelve computed longhands on `.panel`: width `4px`, style `solid`, and color `rgb(17, 17, 17)` for the top, right, bottom, and left. An empty starter fails. Do not change the test to accept a one-sided border.

## Traceability

| Objective | Study section | Exercise | Check | Slide | Podcast prompt |
| --- | --- | --- | --- | --- | --- |
| 1. 4px solid on every side | How the shorthand maps to four sides | [01-solid-border](../../../practices/lesson-01/02-border/01-solid-border/README.md) | Each `border-*-width` is `4px` and each `border-*-style` is `solid` | 3. Four sides, one shorthand | Why twelve properties |
| 2. Computed color `rgb(17, 17, 17)` | The color paragraph in that section | Same exercise | Each `border-*-color` is `rgb(17, 17, 17)` | 2. Width, style, and color | Border color versus text color |
| 3. Explain a one-sided or unstyled border | Common mistakes and debug | Same exercise | The failure names the longhand and the found value | 4. A failed side | Left width still `0px` |
| 4. Size stays in the page | How it interacts with the page | Same exercise | The fixture sets width, height, margin, and `box-sizing`. The test does not grade those | 1. The panel is already sized | Why the size stays in the fixture |

## Criteria

- All four sides match. Three sides are a fail.
- The student can separate `color` from border color.
- The student does not need a new test for the scratch one-edge example.
