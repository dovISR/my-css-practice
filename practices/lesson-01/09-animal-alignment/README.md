# 09 — Animal Alignment Playground

Part of [01 — CSS fundamentals](../README.md).

## Difficulty

Beginner

## Estimated time

15–25 minutes

## Learning objectives

- `display: flex` on the parent lays the animals out in a row
- The main axis is the direction they line up in
- `justify-content` moves animals along the main axis
- The cross axis crosses the main axis
- `align-items` moves animals along the cross axis
- `flex-direction: column` swaps the axes
- `gap` is the space between the animals

## What you edit

Edit only [css/practice.css](css/practice.css).

[css/base.css](css/base.css) already has the blue parent boxes, the photographs, and the card colors. The parents are tall so a vertical move has room to show. Leave that file as it is. Leave `index.html` as it is.

## Expected visual result

Each blue box shows one idea. The first is a row packed to the left. The second row sits in the horizontal center. The third row pins the cat and the rabbit to the outer edges. The fourth row sits in the vertical center, with blue above and below. The fifth box stacks the animals. Every box has space between the cards.

The page before you start is [preview-start.png](preview-start.png). The finished playgrounds are [preview.png](preview.png).

## Student tasks

1. Set `display: flex` on `.playground-row`.
2. Set `display: flex` and `justify-content: center` on `.playground-center`.
3. Set `display: flex` and `justify-content: space-between` on `.playground-between`.
4. Set `display: flex` and `align-items: center` on `.playground-align`.
5. Set `display: flex` and `flex-direction: column` on `.playground-column`.
6. Add `gap: 16px` on `.playground` so every box gets the space.

Each playground has its own rule. Leave them all on the page. Do not keep replacing one declaration and losing the previous result.

## Helpful hints

- Before you add flex, the animals stack and the blue box grows with them. After you add flex, the box stays at least 250px tall and the animals share a row.
- `justify-content` does nothing useful until the parent is a flex container.
- `align-items: center` is the up-and-down move while the direction is a row. Look at the blue padding above the cards.
- After `flex-direction: column`, the main axis runs downward. `justify-content` would then move the stack up and down, and `align-items` would move it left and right.
- This is the same parent-and-children idea as [05 — Flex](../05-flex/README.md). [06 — The Dog Gallery](../06-dog-gallery/README.md) introduces `display` and `gap`.

## Bonus challenge

On `.playground-evenly`, try `justify-content: space-around` and then `justify-content: space-evenly`. Space-between puts no extra gap outside the first and last animals. Space-evenly makes the outer gaps match the inner ones. Leave the space-between playground as it is, so the two boxes stay easy to compare.

## How to run

1. Open `index.html` in this folder.
2. Start Live Server. Install steps are in [extensions/README.md](../../../extensions/README.md).
3. Edit `css/practice.css` and save. The browser reloads.
4. Leave `index.html` and `css/base.css` as they are.

The photographs are in `assets/images/`, so the pictures do not need a network connection. The typefaces load from Google Fonts when you are online.

## Solution

The finished declarations are in [solution/practice.css](solution/practice.css). Open [solution/index.html](solution/index.html) to see them with the shared base styles. Read the solution after you have tried the tasks.

`npm test` does not grade this page.
