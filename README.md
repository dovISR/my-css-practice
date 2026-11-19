# CSS Practice

Hands-on CSS exercises for students who are learning to style a page. Each practice is a finished HTML page, a `style.css` file you edit, a short brief, and an automated test. The test opens the page in Chromium and reads the computed style, so a passing result means the browser applied the color, border, or layout the brief describes.

## Contents

| | Where to go |
| --- | --- |
| [Practices](#practices) | [practices/README.md](practices/README.md) |
| [Curriculum](#curriculum) | [curriculum/README.md](curriculum/README.md) |
| [Lesson 01 practices](#practices) | [practices/lesson-01/README.md](practices/lesson-01/README.md) |
| [Extensions](#extensions) | [extensions/README.md](extensions/README.md) |
| [Repository structure](#repository-structure) | Folders in this repo |
| [Who it is for](#who-it-is-for) | |
| [How a practice works](#how-a-practice-works) | |
| [Install](#install) | |
| [Run the tests](#run-the-tests) | |
| [Work on one exercise](#work-on-one-exercise) | |
| [GitHub Actions](#github-actions) | |
| [Add a lesson](#add-a-lesson) | |

Each linked README continues the map. A lesson README links its chapters. A chapter README links its exercises. Layout rules for later edits are in [AGENTS.md](AGENTS.md).

## Curriculum

[curriculum/README.md](curriculum/README.md) is the learning pathway, the study guides, and the classroom outlines. The exercises stay in [practices/README.md](practices/README.md).

## Practices

You edit `style.css` in an exercise folder, read that folder's `README.md`, and run its test. Leave `index.html` as it is. The lesson list is in [practices/README.md](practices/README.md).

| Lesson | README |
| --- | --- |
| 01 — CSS fundamentals | [practices/lesson-01/README.md](practices/lesson-01/README.md) |

## Extensions

[extensions/README.md](extensions/README.md) lists the VS Code extensions for this course. Install Live Server there, then open a practice `index.html` and review the page in the browser. Saving `style.css` reloads the page.

## Repository structure

```text
curriculum/
  README.md     Learning pathway and module study materials
practices/
  README.md     Practice lesson list
  lesson-01/    CSS fundamentals
extensions/
  README.md     VS Code extensions, including how to install Live Server
```

## Who it is for

Students who are new to CSS and can open a folder in VS Code. You edit `style.css`. The HTML page, including the class names and box sizes the test depends on, is already written. Use Live Server, listed in [extensions/README.md](extensions/README.md), when you want to review the page.

## How a practice works

1. Open the lesson at [01 — CSS fundamentals](practices/lesson-01/README.md).
2. Open the next chapter in that lesson, starting at [01 — Color](practices/lesson-01/01-color/README.md).
3. Open the next exercise, starting at [Text Color](practices/lesson-01/01-color/01-text-color/README.md).
4. Read that folder's `README.md`.
5. Edit `style.css`. The selectors are already listed. Leave `index.html` as it is.
6. Run the test for that exercise.
7. Read the failure message, change the stylesheet, and run the test again.
8. Open `index.html` with Live Server and review the page. Install steps are in [extensions/README.md](extensions/README.md).

Finish each chapter before the next one: color, border, display, float, then flex.

Leave these files as they are:

- `index.html` in each practice
- `test.js` in each practice
- `lib/`
- `package.json`, `package-lock.json`, and `jest.config.js`
- `.github/workflows/`
- `scripts/`

Finished stylesheets are not in this branch. They stay on `student/answers`.

## Install

You need Node.js 20 or newer. The GitHub Action uses Node.js 24.

```bash
npm install
npx playwright install chromium
```

Install Live Server in VS Code before you preview a page. The steps are in [extensions/README.md](extensions/README.md).

## Run the tests

Every practice:

```bash
npm test
```

One exercise:

```bash
npm test -- 01-text-color
```

One chapter:

```bash
npm test -- 01-color
```

One presentation:

```bash
npm test -- practices/lesson-01
```

A failing practice test means that stylesheet is not finished. The message names the property and the value it found, for example: `Expected the paragraph color to have color: rgb(29, 78, 216). Found "rgb(0, 0, 0)".`

## Work on one exercise

```bash
cd practices/lesson-01/01-color/01-text-color
```

Edit `style.css`, then from the repository root:

```bash
npm test -- 01-text-color
```

Open that same `index.html` with Live Server to review the page. Install steps are in [extensions/README.md](extensions/README.md).

## GitHub Actions

`.github/workflows/exercise-tests.yml` runs when a practice stylesheet, a test, or the workflow changes. It reads `practices/lesson-NN/` and tests each topic's `style.css` files in Chromium. `main` has no `solutions/` stylesheets, so your fork is graded from the stylesheet you edit.

Each push tests every practice `style.css`. A stylesheet you have not edited is **not started** and fails that topic. A stylesheet you edited is tested, and a wrong answer fails that topic. The check is green only when every practice stylesheet passes. Open **Progress report** to see which stylesheets passed, which failed, and which are still not started.

| Group | Topics |
| --- | --- |
| 01 · CSS fundamentals | 01 · Color, 02 · Border, 03 · Display, 04 · Float, 05 · Flex |

A topic runs again when a stylesheet or test in that topic changes. An unchanged topic reuses its cached result. Each topic job installs Chromium before it runs the tests.

## Add a lesson

1. Create `practices/lesson-NN/README.md` and link it from [practices/README.md](practices/README.md) and from the contents table in this file.
2. Add chapters as `NN-topic/NN-exercise/`, each with `index.html`, `style.css`, `README.md`, and `test.js`. Leave `index.html` as the finished fixture and `style.css` as the starter with empty rule bodies. Link each new README from its parent README. End each exercise README with a Live Server preview step that links to [extensions/README.md](extensions/README.md), so the student can review the page after the test.
3. Put the finished reference stylesheet on `student/answers`, under `solutions/practices/lesson-NN/.../style.css`. Leave the practice `style.css` on `main` as the unfinished starter.
4. Add a short title to `LESSON_TITLES` in `scripts/ci_discover_matrix.py` when the Actions check should use a course name.
5. Regenerate the starter hashes from the repository root:

```bash
npm run hashes
```

The workflow already watches `practices/**`. A new `practices/lesson-NN` folder with a README and tested chapters is picked up on the next run.
