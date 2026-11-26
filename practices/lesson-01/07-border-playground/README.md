# 07 — Border Playground

Part of [01 — CSS fundamentals](../README.md).

## Difficulty

Beginner

## Estimated time

15–25 minutes

## Learning objectives

- `border-style` chooses solid, dashed, dotted, or double
- `border-width` changes how heavy the line is
- `border-color` chooses the line color
- `border` sets width, style, and color in one declaration
- `border-radius` rounds the corners
- `border-radius: 50%` on a square makes a circle

## What you edit

Edit only [css/practice.css](css/practice.css).

[css/base.css](css/base.css) already has the page color, the type, and a different background on every box. It does not draw the borders. Leave that file as it is. Leave `index.html` as it is.

## Expected visual result

Each box keeps its background and gains its own outline: solid, dashed, dotted, thick, rounded, and double. The yellow square becomes a circle. The boxes are already spaced apart, so the new lines have room.

The page before you start is [preview-start.png](preview-start.png). The finished boxes are [preview.png](preview.png).

## Student tasks

1. Add a solid border to `.solid`.
2. Add a dashed border to `.dashed`.
3. Add a dotted border to `.dotted`.
4. Make `.thick` use a much larger border width.
5. Set a border color you can see on each background.
6. Add a border and `border-radius` to `.rounded`.
7. Add a double border to `.double`.

## Helpful hints

- A border needs a style. `border-width` and `border-color` do not draw a line while the style is `none`.
- `border: 4px solid #1d4ed8` is width, style, and color in that order.
- `double` needs a width of about 8px. A 1px double border has no room for two lines.
- Round the teal box enough that the corner is obviously curved, around 24px.
- This follows the single solid border in [02 — Border](../02-border/README.md).

## Bonus challenge

The yellow shape is 140px wide and 140px tall. `border-radius: 50%` turns that square into a circle. The percentage is half of each side.

## How to run

1. Open `index.html` in this folder.
2. Start Live Server. Install steps are in [extensions/README.md](../../../extensions/README.md).
3. Edit `css/practice.css` and save. The browser reloads.
4. Leave `index.html` and `css/base.css` as they are.

The typefaces load from Google Fonts when you are online.

## Solution

The finished declarations are in [solution/practice.css](solution/practice.css). Open [solution/index.html](solution/index.html) to see them with the shared base styles. Read the solution after you have tried the tasks.

`npm test` does not grade this page.
