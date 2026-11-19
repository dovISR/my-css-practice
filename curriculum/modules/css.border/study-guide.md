# Study guide: solid border

Module [css.border](specification.md). Exercise: [Solid Border](../../../practices/lesson-01/02-border/01-solid-border/README.md).

The page shows one box, `.panel`, with the text "A bordered panel." The page already sets the box to 240px by 120px, margin 0, and `box-sizing: border-box`. Those rules live in a `<style>` block after the link to `style.css`. You add the border in `style.css` and you leave that block alone.

## What a border is

A border is a line drawn along the edge of an element's box. Each side has a width, a style, and a color. Width is how thick the line is. Style is the pattern, such as `solid`. Color is the paint of the line, not the paint of the text.

The initial border style is `none`. A width with no visible style draws nothing. That is why "add a border" always needs a style.

## Why it exists

Authors use a border to show that a region is a unit: a card, a field, a selected item. The HTML element is still a `div`. The border is presentation. The same box can lose the line without losing its text.

## How the shorthand maps to four sides

```css
.note-card {
  border: 2px dashed #9a3412;
}
```

That one declaration sets the top, right, bottom, and left width to 2px, the style on every side to `dashed`, and the color on every side to a brown-orange. It is a teaching example. The exercise asks for a different width, style, and color on `.panel`.

The test does not read the shorthand. It reads the computed longhands:

- `border-top-width`, `border-right-width`, `border-bottom-width`, `border-left-width` are `4px`
- each `border-*-style` is `solid`
- each `border-*-color` is `rgb(17, 17, 17)`

`border: 4px solid #111111` on `.panel` sets those longhands. `#111111` computes to `rgb(17, 17, 17)`, the same way `#1d4ed8` computed to a specific blue in the color chapter. Writing the three facts as separate longhands on every side also passes, if all twelve values match.

`border-bottom: 4px solid #111111` sets only the bottom. The other three widths stay `0px` and the test fails on those sides.

## When to use it

Use the shorthand when every side shares one width, one style, and one color. Use a longhand such as `border-bottom` when only one edge should be marked. Use `outline` when the line must not take up box space. This exercise wants the border, on every side, so the line is part of the box.

## How it interacts with the page

The `<style>` block in `index.html` comes after `<link rel="stylesheet">`. For `width`, `height`, `margin`, and `box-sizing`, that later block wins against an equal selector in `style.css`. Both rules use `.panel`. Do not restate those four properties in the exercise. The border is not set in the page, so the student rule is the one that applies.

`box-sizing: border-box` means the 240 by 120 measurement includes the border. A 4px border on every side leaves less room for the words. The test does not measure the inner text box. It measures the border longhands.

`color` from the previous chapter paints text. If the border color is omitted, CSS uses the element's `color` as the border color. This page's text is still the default black, which happens to be close to `#111111` but is not the same computed value. Set the border color explicitly. `rgb(0, 0, 0)` fails a check for `rgb(17, 17, 17)`.

## A picture of the page

The box is a wide, short rectangle. Before the rule, it has no visible edge. After the rule, a dark solid line runs around all four sides and the words sit inside it. The line does not move the box to the center of the window. Margin stays 0.

## Scenario

A receipt summary uses a 1px solid line on the top only, so the total is separated from the rows above it. That is a one-side border. The exercise is the other case: a panel that should read as a closed box, so all four sides match.

## Common mistakes

- Setting `border-width: 4px` and forgetting `border-style`. The computed style stays `none`.
- Coloring the text with `color: #111111` and expecting a frame.
- Using `#111`, which is a valid shorthand for `#111111`, or using `rgb(17, 17, 17)`. Both can pass. `gray` does not. `gray` computes to `rgb(128, 128, 128)`.
- Setting the border in the HTML `<style>` block. The task says to edit `.panel` in `style.css`. The page block is part of the fixture.
- Assuming the border grows the 240px width. With `border-box`, the outer width stays 240px.

## How to debug

1. Run `npm test -- 01-solid-border`. The message names the longhand that failed and the value it found.
2. `border-left-width` of `0px` means that side was never set. Check for a side-specific property.
3. `border-top-style` of `none` means the width may be present and the style is missing.
4. A color such as `rgb(0, 0, 0)` means the line is using the text color. Set the border color to `#111111` or `rgb(17, 17, 17)`.
5. In Live Server, inspect `.panel` and open the computed border properties. There are four widths, four styles, and four colors.

## Knowledge check

1. Why does a 4px width with style `none` fail this exercise?
2. The top and bottom pass, and the left width is `0px`. What kind of declaration produced that?
3. Why is `color: #111111` not a border?
4. The page already sets `box-sizing: border-box`. Does the 4px line sit inside the 240px width or outside it?

The style `none` draws no line. A left width of `0px` comes from a declaration that skipped that side. `color` paints glyphs. Under `border-box`, the line is inside the stated width.

## References

- MDN: [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
- Exercise brief: [Solid Border](../../../practices/lesson-01/02-border/01-solid-border/README.md)
