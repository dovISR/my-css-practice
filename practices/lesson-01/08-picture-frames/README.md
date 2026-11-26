# 08 — The Picture Frame Studio

Part of [01 — CSS fundamentals](../README.md).

## Difficulty

Beginner

## Estimated time

15–25 minutes

## Learning objectives

- Padding is space inside the border
- Margin is space outside the border
- `padding` sets every side at once
- `padding-top`, `padding-right`, `padding-bottom`, and `padding-left` set one side
- `margin-top` and `margin-bottom` open a gap between blocks
- `margin-left: auto` and `margin-right: auto` center a block that has a width

## What you edit

Edit only [css/practice.css](css/practice.css).

[css/base.css](css/base.css) already has the photographs, the dark frame, and the mat color. The mat stays hidden until you add padding. Leave that file as it is. Leave `index.html` as it is.

## Expected visual result

The lake photo has a slim blue mat. The hills photo has a wider green mat. The beach photo has an uneven pink mat, obviously thicker on two sides. Gray wall shows between the dark frames. The bonus note sits in the center of the page.

The page before you start is [preview-start.png](preview-start.png). The finished frames are [preview.png](preview.png).

## Student tasks

1. Add `padding: 20px` to the lake frame.
2. Add about 40px of padding to the hills frame.
3. Add margin above and below every frame.
4. Change those margin values and watch the gray gap.
5. Set a different padding on each side of the beach frame.

## Helpful hints

- If the colored mat is missing, the padding is still 0. The photo is covering it.
- The dark line is already drawn. You do not add the border in this exercise.
- The frames are already centered left-to-right. Set `margin-top` and `margin-bottom`, or use `margin: 28px auto`, so you do not undo that.
- A bigger padding value makes a wider mat. Compare frame 1 with frame 2 before you start frame 3.
- The beach frame should look lopsided on purpose.

## Bonus challenge

`.centerpiece` has a width and no auto margins yet, so it sits on the left. Center it with `margin-left: auto` and `margin-right: auto`, or with `margin: 0 auto`.

## How to run

1. Open `index.html` in this folder.
2. Start Live Server. Install steps are in [extensions/README.md](../../../extensions/README.md).
3. Edit `css/practice.css` and save. The browser reloads.
4. Leave `index.html` and `css/base.css` as they are.

The photographs are in `assets/images/`, so the pictures do not need a network connection. The typefaces load from Google Fonts when you are online.

## Solution

The finished declarations are in [solution/practice.css](solution/practice.css). Open [solution/index.html](solution/index.html) to see them with the shared base styles. Read the solution after you have tried the tasks.

`npm test` does not grade this page.
