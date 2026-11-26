# 10 — Mini Profile Card Designer

Part of [01 — CSS fundamentals](../README.md).

## Difficulty

Beginner

## Estimated time

15–25 minutes

## Learning objectives

- `border` draws the edge of a card
- `padding` keeps the words off that edge
- `width` gives each card a size that can sit in a row
- `display: flex` on the parent lays the cards out side by side
- `justify-content` centers the row
- `gap` spaces the cards without margin on each one
- `border-radius` rounds the card
- `background-color` fills the contact button

## What you edit

Edit only [css/practice.css](css/practice.css).

[css/base.css](css/base.css) already has the page color, the type, and the circular portraits. The portraits are already circles. You round the card. Leave that file as it is. Leave `index.html` as it is.

## Expected visual result

Three white cards sit in a centered row on the cream page. Each card has a light border, space inside the border, and rounded corners. The portrait, the name, the job, and a short biography stay easy to read. The contact link is a filled button.

The page before you start is [preview-start.png](preview-start.png). The finished cards are [preview.png](preview.png).

This page is a small combination of the borders, the spacing, and the flex row from chapters 06–09. [13 — Professional Profile Dashboard](../13-profile-dashboard/README.md) is a full profile page later in the lesson. Stay with one row of cards here.

## Student tasks

1. Add a border to `.card`.
2. Add about 20px of padding to `.card`.
3. Set the card width to 280px, with `max-width: 100%`.
4. Set `display: flex` on `.roster`.
5. Set `justify-content: center` on `.roster`.
6. Add `gap: 24px` on `.roster`.
7. Add `border-radius` to `.card`.
8. Style `.button` with a background color, white text, padding, and rounded corners.

## Helpful hints

- Several tasks share `.card`, and several share `.roster`. Properties on the same selector combine. You do not need a new class.
- `gap` works once `.roster` is a flex container. Margin on every card is the other way to separate them. Gap is the one to use here.
- `flex-wrap: wrap` on `.roster` lets the cards stack again when the window is narrower than three cards. It belongs on the parent.
- A button color needs a readable text color. White text on `#0f766e` is a pair that stays easy to read.
- The names on the cards are fictional. The note at the bottom of the page says so.

## Bonus challenge

Add a `.button:hover` rule that darkens the background. Move the pointer over a button and the fill should change.

## How to run

1. Open `index.html` in this folder.
2. Start Live Server. Install steps are in [extensions/README.md](../../../extensions/README.md).
3. Edit `css/practice.css` and save. The browser reloads.
4. Leave `index.html` and `css/base.css` as they are.

The photographs are in `assets/images/`, so the pictures do not need a network connection. The typefaces load from Google Fonts when you are online.

## Solution

The finished declarations are in [solution/practice.css](solution/practice.css). Open [solution/index.html](solution/index.html) to see them with the shared base styles. Read the solution after you have tried the tasks.

`npm test` does not grade this page.
