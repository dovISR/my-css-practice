# Study guide: text color

Module [css.color](specification.md). Exercise: [Text Color](../../../practices/lesson-01/01-color/01-text-color/README.md).

The page is already written. The paragraph says "The morning harbor is calm." and has `class="lead"`. The head already contains `<link rel="stylesheet" href="style.css">`. You edit `style.css`.

## What `color` is

`color` is the CSS property that sets the foreground color of text. On a paragraph it paints the glyphs. It does not paint the page behind the text, and it does not paint a border.

If no author rule sets `color`, Chromium uses the default text color. For this page that computed value is `rgb(0, 0, 0)`, black. The test reports that value when the starter stylesheet is still empty.

## Why it exists

The same words can be body text, a warning, or a link. `color` is how an author marks that difference without changing the HTML text. The browser already has a default so that a page with no stylesheet is still readable. An author rule replaces that default for the elements the selector matches.

## How a rule works

A rule has a selector and a declaration block:

```css
h1 {
  color: #b91c1c;
}
```

`h1` selects every heading at level 1. `color` is the property. `#b91c1c` is the specified value. This example is not the graded exercise. The exercise selector is already written in `style.css` as `.lead`.

The leading dot means "class". `.lead` matches an element whose `class` attribute contains the token `lead`. A rule written as `p` matches every paragraph, including one that has no class. The test for this exercise reads `.lead` only.

## How the browser computes the color

Authors write colors in several notations. The computed value this course checks is `rgb(red, green, blue)` with each channel from 0 to 255.

| Specified value | Computed value in Chromium | Same as the exercise target? |
| --- | --- | --- |
| `#1d4ed8` | `rgb(29, 78, 216)` | Yes. `1d` is 29, `4e` is 78, `d8` is 216. |
| `rgb(29, 78, 216)` | `rgb(29, 78, 216)` | Yes. |
| `blue` | `rgb(0, 0, 255)` | No. It is a different blue. |
| omitted | `rgb(0, 0, 0)` on this page | No. The text stays black. |

The exercise brief asks for computed `rgb(29, 78, 216)`. Either matching notation above satisfies that check. `color: blue` does not.

A missing semicolon before the closing brace makes the declaration invalid. The browser drops the broken declaration and the text stays at the default color.

## When to set it on a class

Set `color` on a class when one paragraph should differ from the others. Set it on `p` only when every paragraph should share that color. Set it on `body` when the whole page should inherit one text color. Children inherit `color` unless a more specific rule replaces it. This exercise has one paragraph, and the test looks up `.lead`, so the rule has to match that class.

## How it meets the rest of the page

The HTML course's stylesheet exercise adds the `<link>`. Without that link, rules in `style.css` are never applied. This page already has the link. Later, [css.border](../css.border/study-guide.md) uses a color on the border, which is `border-color`, not `color`. Text color does not move the paragraph and does not change its size.

The widths in later exercises are set in a `<style>` block in the HTML file. This color page has no such block. The only author stylesheet for `.lead` is `style.css`.

## A picture of the page

Before the rule applies, the sentence is black on the white page, left aligned, in the browser's default serif or the user agent's font. After the rule applies, the same sentence is a deep blue. The box around the text does not grow. Nothing else is on the page.

## Scenario

A harbor notice uses one paragraph for the status and another for the details. The status paragraph gets `class="lead"` so a single rule can recolor it when the status changes. The details stay at the inherited color. That is the same mechanism as this exercise, with a second paragraph the exercise does not include.

## Common mistakes

- Editing `index.html` and leaving the empty `.lead` rule in `style.css`. The test still reads the stylesheet.
- Writing the declaration on `p` or on `body`. The paragraph can look blue while a check of `.lead` still sees the default, if the class rule never set `color`. If both exist, the class rule and the element rule are compared by specificity. A single class beats a single element.
- Using the keyword `blue` because the brief said "blue" in the first sentence. The required computed color is the specific blue, not the keyword.
- Typing `#1D4ED8` with a missing character, or `rgb(29, 78, 216` without the closing parenthesis. An invalid color is dropped.
- Expecting `color` to fill the background. The area behind the glyphs stays the page background.

## How to debug

1. Run `npm test -- 01-text-color` from the repository root. The failure names the property and the value it found, for example `Found "rgb(0, 0, 0)"`.
2. `rgb(0, 0, 0)` means the `.lead` rule did not set a valid color. Open `style.css` and check the selector, the property name, and the semicolon.
3. A different `rgb(...)` means a color was applied and it is the wrong one. Compare it with `rgb(29, 78, 216)`.
4. `No element matched .lead` means the class disappeared from the HTML. Restore `index.html`.
5. Open `index.html` with Live Server. Inspect the paragraph, open the Computed pane, and read `color`. That is the same kind of value the test reads.

## Knowledge check

1. A site stylesheet contains `h2 { color: #991b1b; }`. What does `color` paint, and why is this not a rule for `.lead`?
2. Which of these computed colors is the keyword `blue`: `rgb(29, 78, 216)`, `rgb(0, 0, 255)`, or `rgb(0, 0, 0)`?
3. The paragraph is still black and the test found `rgb(0, 0, 0)`. Which file should you edit, and what does the black color tell you about the rule?
4. Why can two different specified values pass one computed-color check?

Answers worth being able to say aloud: `color` paints the heading text, and the selector is `h2` rather than `.lead`. The keyword `blue` is `rgb(0, 0, 255)`. Edit `style.css`; black means `.lead` did not receive a valid `color`. Two notations pass when they resolve to the same channels.

## References

- MDN: [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- Exercise brief: [Text Color](../../../practices/lesson-01/01-color/01-text-color/README.md)
- Presentation: [presentation-outline.md](presentation-outline.md)
- Discussion brief: [podcast-brief.md](podcast-brief.md)
