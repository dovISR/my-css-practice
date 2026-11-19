# Assessment: text color

Passing the exercise meets objective 1. Objectives 2, 3, and 4 are the knowledge-check questions in the study guide and the questions on slides 3, 5, and 6. This module does not add a test.

The automated check opens the exercise page in Chromium and reads the computed `color` of `.lead`. The expected value is `rgb(29, 78, 216)`. An empty starter fails that check. That failure is the unfinished exercise, not a broken test run.

The ungraded extension is a different color on a different selector in a scratch file. It is not part of `npm test`.

## Traceability

| Objective | Study section | Exercise | Check | Slide | Podcast prompt |
| --- | --- | --- | --- | --- | --- |
| 1. Computed `rgb(29, 78, 216)` on `.lead` | How the browser computes the color | [01-text-color](../../../practices/lesson-01/01-color/01-text-color/README.md) | `test.js` expects `color: rgb(29, 78, 216)` on `.lead` | 4. The graded target | Why the test speaks rgb |
| 2. A name and a hex can differ | The comparison table | Same exercise, plus the scratch extension | Knowledge check 2. No extra automated test | 3 and 6 | The keyword `blue` misconception |
| 3. Read black or wrong blue | How to debug | Same exercise | Failure text names the found color. DevTools shows the same computed value | 5. Black text, or the wrong blue | The `p` versus `.lead` scene |
| 4. Edit `style.css` only | How it meets the rest of the page | Same exercise | The test loads `index.html` and `style.css` from the exercise folder. Changing the HTML is outside the task | 1. Where CSS meets this page | Where a team should set a brand blue |

## Criteria

- The computed color matches. A near blue does not.
- The student can say which file they changed.
- The student can explain one failed run without being told the finished rule.
