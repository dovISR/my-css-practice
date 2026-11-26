# Learning path

HTML teaches the document. CSS teaches how that document is presented. The stylesheet link in the HTML course is the handoff: the student attaches `style.css` and does not write rules there. Every module in this repo assumes that link already exists.

The sequence index for both courses is also in the HTML repository: [html-practice curriculum](https://github.com/morbargig/html-practice/blob/main/curriculum/README.md). Folder names there and here stay as they are. A proposed module is not a lesson yet.

## HTML, existing

These modules are graded in [html-practice](https://github.com/morbargig/html-practice). Finish them in this order.

| ID | What the student learns | Where it lives |
| --- | --- | --- |
| `html.text` | One heading, one paragraph, then both | `practices/lesson-01/01-text/` |
| `html.images-links` | An image, an absolute link, a relative link | `practices/lesson-01/02-images-and-links/` |
| `html.tables-forms` | A two-column table, then a labeled email form | `practices/lesson-01/03-tables-and-forms/` |
| `html.document-head` | Charset, title, meta, a comment, and the stylesheet link | `practices/lesson-01/04-head-and-metadata/` |
| `html.profile` | A list, page regions, and a combined profile | `practices/lesson-01/05-personal-profile/` |
| `html.text-meaning` | `em`, `strong`, and heading levels that do not skip | `practices/lesson-02/01-text/` |
| `html.meaningful-links` | Link text that names the destination | `practices/lesson-02/02-links/` |
| `html.lists` | One unordered list and one ordered list | `practices/lesson-02/03-lists/` |
| `html.semantics` | `article`, `aside`, and a landmark page | `practices/lesson-02/04-semantic-structure/` |
| `html.media` | Video, audio, captions, and a titled iframe | `practices/lesson-02/05-media-and-embeds/` |
| `html.forms-complete` | A form that posts named, typed controls | `practices/lesson-02/06-forms/` |
| `html.about-me` | A combined About Me page | `practices/lesson-02/07-pages/` |
| `html.lab-fundamentals` | The lesson 01 Colab notebook | `labs/lesson-01/` |
| `html.lab-interactivity` | The lesson 02 Colab notebook | `labs/lesson-02/` |

`html.lists` and `html.semantics` revisit the list and the landmarks from `html.profile`. The later modules add ordered lists, `article`, and `aside`. They are not a second introduction.

`html.lab-interactivity` covers `fieldset`, `datalist`, `details`, popover, `dialog`, `progress`, and `meter`. Those controls are not Jest exercises. New HTML exercises for them wait until that overlap is approved.

## CSS, existing

Graded in this repo, in folder order. Study notes are in [curriculum/README.md](README.md).

| ID | What the student learns | Exercises |
| --- | --- | --- |
| [css.color](modules/css.color/specification.md) | Computed text color on a class | [Text Color](../practices/lesson-01/01-color/01-text-color/README.md) |
| [css.border](modules/css.border/specification.md) | A solid border on every side | [Solid Border](../practices/lesson-01/02-border/01-solid-border/README.md) |
| [css.display](modules/css.display/specification.md) | `inline-block` on items that already have a size | [Inline Block](../practices/lesson-01/03-display/01-inline-block/README.md) |
| [css.float](modules/css.float/specification.md) | A right-floated aside whose right edge meets the section | [Float Aside](../practices/lesson-01/04-float/01-float-aside/README.md) |
| [css.flex](modules/css.flex/specification.md) | A row of cards with a 16px gap | [Card Row](../practices/lesson-01/05-flex/01-card-row/README.md) |

This order is the graded order. It is not the ideal prerequisite order. Color is graded before any exercise on selectors, the cascade, or the box model. The color study guide teaches the minimum of those ideas that the exercise already assumes. Chapters 06–15 are the ungraded pages in this same lesson. The proposed modules further down are not exercises yet.

## CSS, visual pages in lesson 01

These sit in [lesson 01](../practices/lesson-01/README.md) after Card Row. They are not graded modules and they have no `test.js`. Chapters 06–10 practice one idea on a page that is already colored. Chapters 11–15 build a whole website from those ideas.

| Chapter | What the student builds |
| --- | --- |
| [06 — Dog Gallery](../practices/lesson-01/06-dog-gallery/README.md) | Block, inline, inline-block, flex, and gap on one set of cards |
| [07 — Borders](../practices/lesson-01/07-border-playground/README.md) | Solid, dashed, dotted, thick, rounded, and double borders |
| [08 — Frames](../practices/lesson-01/08-picture-frames/README.md) | Padding inside a frame and margin outside it |
| [09 — Alignment](../practices/lesson-01/09-animal-alignment/README.md) | Main axis and cross axis with three animals |
| [10 — Mini Profiles](../practices/lesson-01/10-profile-cards/README.md) | A small row of cards that combines the ideas above |
| [11 — Travel](../practices/lesson-01/11-travel-explorer/README.md) | A destination row with flex, gap, and cropped photographs |
| [12 — Cinema](../practices/lesson-01/12-movie-gallery/README.md) | A wrapping poster shelf with a hover scale |
| [13 — Profile](../practices/lesson-01/13-profile-dashboard/README.md) | A centered profile made of nested flex containers |
| [14 — Restaurant](../practices/lesson-01/14-restaurant-landing/README.md) | A navigation row, a split hero, and a dish row |
| [15 — Store](../practices/lesson-01/15-urban-store/README.md) | A wrapping product gallery |

## CSS, proposed

These become a later lesson only after that lesson is approved. They are not exercises today.

| ID | Why it is next | Depends on |
| --- | --- | --- |
| `css.rules` | A selector, a declaration, and the difference between a specified value and a computed value | `html.document-head` |
| `css.cascade` | Why a later rule, or the `<style>` block in a fixture, wins | `css.rules` |
| `css.box-model` | Content, padding, border, margin, and `box-sizing` | `css.cascade` |
| `css.typography` | Family, size, weight, and line height | `css.color`, `css.box-model` |
| `css.background` | Background color and image on a box | `css.box-model` |
| `css.position` | Static, relative, and absolute, separate from float | `css.box-model` |
| `css.grid` | Rows and columns after flex | `css.flex` |
| `css.responsive` | Layout that changes with the viewport | `css.flex`, `css.grid` |

## What a finished module lets a student do

1. Say what the concept is.
2. Explain why the browser behaves that way.
3. Implement it in the exercise.
4. Debug a wrong computed value or a wrong box position.
5. Use the same concept on a different element, outside the graded file.
