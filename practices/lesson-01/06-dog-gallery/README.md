# 06 — The Dog Gallery

Part of [01 — CSS fundamentals](../README.md).

## Difficulty

Beginner

## Estimated time

15–25 minutes

## Learning objectives

- `display: block` puts each card on its own line and honors its width
- `display: inline-block` keeps that width and still sits cards side by side
- `display: inline` ignores the width and height of the card
- `display: flex` belongs on the parent, not on the cards
- `gap` is the space between flex items

## What you edit

Edit only [css/practice.css](css/practice.css).

[css/base.css](css/base.css) already has the colors, the type, the photographs, and the card size. Leave that file as it is. Leave `index.html` as it is.

## Expected visual result

The Block lab is a stack of peach, blue, and pink cards. The Inline-block lab is those same cards in a row, still 200px wide. The Inline lab shows the photographs without the 200px card box. The dashed tray holds all six dogs in a wrapping row with space between the cards.

The page before you start is [preview-start.png](preview-start.png). The finished tray is [preview.png](preview.png).

## Student tasks

1. Make the cards in the Block lab `display: block`.
2. Make the cards in the Inline-block lab `display: inline-block`.
3. Set the Inline lab to `display: inline` and compare it with the row above.
4. Set `display: flex` on `.gallery`.
5. Add `gap: 16px` on `.gallery`.

Each lab has its own selector. Leave all four results on the page so you can see them together. Do not put `block`, `inline`, and `flex` on the same element.

## Helpful hints

- The lab cards are `<span>` elements. A span is inline until you change it, so width and min-height do nothing yet.
- The photograph has its own width and height. That is why the picture stays visible in the Inline lab while the colored card does not.
- In the Inline lab the name can sit beside the photo. In the Inline-block lab the 200px card pushes the name underneath it.
- The six gallery cards are `<div>` elements. They already stack. You change their parent.
- `gap` has no effect until the parent is a flex container.

This exercise follows [03 — Display](../03-display/README.md). The flex row is the same idea as [05 — Flex](../05-flex/README.md), on a page you can see.

## Bonus challenge

Add `flex-wrap: wrap` to `.gallery`. Narrow the window. The dogs move to a second row instead of slipping out of the tray.

## How to run

1. Open `index.html` in this folder.
2. Start Live Server. Install steps are in [extensions/README.md](../../../extensions/README.md).
3. Edit `css/practice.css` and save. The browser reloads.
4. Leave `index.html` and `css/base.css` as they are.

The photographs are in `assets/images/`, so the pictures do not need a network connection. The typefaces load from Google Fonts when you are online.

## Solution

The finished declarations are in [solution/practice.css](solution/practice.css). Open [solution/index.html](solution/index.html) to see them with the shared base styles. Read the solution after you have tried the tasks.

`npm test` does not grade this page.
