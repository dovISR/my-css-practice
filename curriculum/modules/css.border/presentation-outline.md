# Presentation outline: solid border

Matches [specification.md](specification.md).

## 1. The panel is already sized

| | |
| --- | --- |
| Objective | 4. Size stays in the page. The border is written in `style.css`. |
| Explanation | `.panel` is 240 by 120, margin 0, `border-box`, in a `<style>` block that follows the stylesheet link. The student rule does not replace those properties. |
| Visual | The fixture block highlighted, the empty `.panel` rule beside it. |
| Code | The existing `<style>` rules, not a border. |
| Interaction | Students name one property they must not copy into `style.css`. |
| Exercise | [Solid Border](../../../practices/lesson-01/02-border/01-solid-border/README.md) |

## 2. Width, style, and color

| | |
| --- | --- |
| Objective | 1 and 2. A visible border has all three. |
| Explanation | Style `none` is the initial value, so width alone is invisible. Color paints the line. `#111111` computes to `rgb(17, 17, 17)`. |
| Visual | One edge labeled with the three facts. |
| Code | `.note-card { border: 2px dashed #9a3412; }` as the shape, not the answer. |
| Interaction | Students say which fact is missing if the computed style is `none`. |
| Exercise | [Solid Border](../../../practices/lesson-01/02-border/01-solid-border/README.md) |

## 3. Four sides, one shorthand

| | |
| --- | --- |
| Objective | 1. Every side is 4px and solid. |
| Explanation | The shorthand writes all four sides. The test reads `border-top-*` through `border-left-*`. |
| Visual | A rectangle with four equal edges, then a second rectangle with only the bottom edge. |
| Code | Students add the border to `.panel` in `style.css`. |
| Interaction | Run `npm test -- 01-solid-border`. |
| Exercise | [Solid Border](../../../practices/lesson-01/02-border/01-solid-border/README.md) |

## 4. A failed side

| | |
| --- | --- |
| Objective | 3. Read which longhand failed. |
| Explanation | `0px` on one width means that side was skipped. `rgb(0, 0, 0)` means the border borrowed the text color. |
| Visual | Computed pane showing twelve border longhands, one of them wrong. |
| Code | A `border-bottom` declaration next to the four-side check. |
| Interaction | Students point at the side named in the failure before they edit. |
| Exercise | [Solid Border](../../../practices/lesson-01/02-border/01-solid-border/README.md) |

## 5. A line that is not a box

| | |
| --- | --- |
| Objective | Apply the same properties with a different shape. |
| Explanation | One edge is a normal design. The graded panel is the closed box. |
| Visual | A total row with a single top rule. |
| Code | `border-top: 1px solid #111111` in a scratch file. |
| Interaction | Students say which three sides would fail if this rule were used on `.panel`. No test. |
| Exercise | Ungraded. Graded work remains [Solid Border](../../../practices/lesson-01/02-border/01-solid-border/README.md). |
