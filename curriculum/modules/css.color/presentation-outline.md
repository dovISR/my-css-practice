# Presentation outline: text color

Matches [specification.md](specification.md). Six slides. Do not add topics that this module does not assess.

## 1. Where CSS meets this page

| | |
| --- | --- |
| Objective | 4. The rule lives in `style.css`. `index.html` stays as written. |
| Explanation | The head already links `style.css`. The body is one paragraph with `class="lead"`. The stylesheet has an empty `.lead` block. |
| Visual | The HTML file on the left, the empty rule on the right, the black sentence in a browser. |
| Code | The existing `<link rel="stylesheet" href="style.css">` and the empty `.lead` rule. Do not fill the rule in. |
| Interaction | Students open `practices/lesson-01/01-color/01-text-color/` and name the file they are allowed to edit. |
| Exercise | [Text Color](../../../practices/lesson-01/01-color/01-text-color/README.md) |

## 2. A rule is a selector and a declaration

| | |
| --- | --- |
| Objective | Prior knowledge the exercise assumes. |
| Explanation | The selector chooses elements. The declaration sets one property. A dot begins a class selector. |
| Visual | A diagram: `.lead` points at `class="lead"`, and `color` points at the glyphs. |
| Code | `h1 { color: #b91c1c; }` as a shape example, then the empty `.lead` block from the exercise. |
| Interaction | Students point at the selector that is already in `style.css` and say which element it matches. |
| Exercise | [Text Color](../../../practices/lesson-01/01-color/01-text-color/README.md) |

## 3. Specified color and computed color

| | |
| --- | --- |
| Objective | 1 and 2. The check is a computed `rgb()` color, so notations are not interchangeable. |
| Explanation | `#1d4ed8` and `rgb(29, 78, 216)` compute to the same channels. The keyword `blue` computes to `rgb(0, 0, 255)`. |
| Visual | Three swatches labeled with the specified value and the computed value. |
| Code | The three specified values side by side. None of them is pasted into the exercise file during the slide. |
| Interaction | Ask which swatches compute to `rgb(29, 78, 216)`. |
| Exercise | [Text Color](../../../practices/lesson-01/01-color/01-text-color/README.md) |

## 4. The graded target

| | |
| --- | --- |
| Objective | 1. `.lead` computes to `rgb(29, 78, 216)`. |
| Explanation | The paragraph must become that blue. The HTML text stays "The morning harbor is calm." |
| Visual | The sentence before and after, same words, different glyph color. |
| Code | Students write the declaration in the existing `.lead` rule. The teacher does not project the finished file. |
| Interaction | Students edit only `style.css`, then run `npm test -- 01-text-color` from the repository root. |
| Exercise | [Text Color](../../../practices/lesson-01/01-color/01-text-color/README.md) |

## 5. Black text, or the wrong blue

| | |
| --- | --- |
| Objective | 3. Read the computed color and connect it to the failure. |
| Explanation | `Found "rgb(0, 0, 0)"` means no valid `color` matched `.lead`. Any other `rgb()` means a color matched and it is not the target. |
| Visual | DevTools Computed pane with `color` highlighted. |
| Code | A rule on `p` next to a check that queries `.lead`, used as a debugging picture. |
| Interaction | Students say whether `.lead` matched before they change the notation. |
| Exercise | [Text Color](../../../practices/lesson-01/01-color/01-text-color/README.md) |

## 6. The same property, a different element

| | |
| --- | --- |
| Objective | 2 applied outside the graded selector. |
| Explanation | `color` is not special to `.lead`. A heading can carry a different specified color. |
| Visual | A heading in `#991b1b` beside the harbor sentence, on a scratch page. |
| Code | `h2 { color: #991b1b; }` in a file that is not the exercise. |
| Interaction | Students name the computed channels they would expect to look up. No test is run for this slide. |
| Exercise | Ungraded. The graded work remains [Text Color](../../../practices/lesson-01/01-color/01-text-color/README.md). |
