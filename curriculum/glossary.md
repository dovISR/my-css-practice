# Glossary

The practice folders keep their current names. This page maps the words used in the docs and in GitHub Actions.

| Word in the docs | Folder | Word in Actions |
| --- | --- | --- |
| Lesson, also "course presentation" | `practices/lesson-NN/` | Presentation, or Group in the root README |
| Chapter | `NN-topic/` | Topic |
| Exercise | `NN-slug/` | Exercise |
| Practice stylesheet | `style.css` next to `test.js` | The file the practice mode grades |
| Reference stylesheet | `solutions/practices/.../style.css` on `student/answers` | Solutions mode, and only when that file exists |

**Not started.** GitHub Actions hashes `style.css`. An untouched starter matches `scripts/starter-hashes.json`, so the progress report says the exercise is not started. The chapter still fails until a real stylesheet passes. Local `npm test` does not read those hashes. An untouched starter fails there with the computed-style message.

**Practice mode and solutions mode.** Practice mode opens the exercise `index.html` with the exercise `style.css`. Solutions mode uses the reference stylesheet when `solutions/` contains one. `main` has no `solutions/` directory, so a student fork is graded from the stylesheet they edit.

**Difficulty marks.** Chapter tables use green for the first three chapters and yellow for float and flex. The mark is a teaching hint. The test does not read it.

**Computed value.** The value the browser reports after it resolves the specified value. The CSS tests read computed style in Chromium. A keyword, a hex color, and an `rgb()` function can specify the same computed color, or three different ones.
