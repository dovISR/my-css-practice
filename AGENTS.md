# Agent notes

The root [README.md](README.md) is the map of this repository. Keep that file short, and keep the detail in the README that sits next to the files it describes.

## How the READMEs connect

| Topic | File | What belongs there |
| --- | --- | --- |
| Course map | [README.md](README.md) | Table of contents, one-paragraph summaries, install, tests, and CI |
| Practices | [practices/README.md](practices/README.md) | The lesson list |
| A lesson | `practices/lesson-NN/README.md` | That lesson's chapters |
| A chapter | `practices/lesson-NN/NN-topic/README.md` | That chapter's exercises |
| An exercise | the exercise folder's `README.md` | The student brief |
| Extensions | [extensions/README.md](extensions/README.md) | VS Code extensions, including Live Server install and how to preview a page |

Link with a relative path to the `README.md` file, for example [practices/README.md](practices/README.md). A link to the folder is not a substitute. GitHub renders each folder's README when the link target is `README.md`.

Do not embed a README in an iframe. GitHub removes iframe tags, so the link is the page.

## When you add or rename something

1. Write or update the README in that folder.
2. Link it from the parent README: exercise from chapter, chapter from lesson, lesson from [practices/README.md](practices/README.md).
3. Add a row to the contents table in the root [README.md](README.md) when the new page is a lesson or another top-level README.
4. Leave exercise lists out of the root README. The root page keeps a short topic line, then sends the reader to [practices/README.md](practices/README.md).

Follow the "Add a lesson" steps in the root README when a lesson or chapter is new. Do not copy a solution stylesheet into a practice while moving folders. Reference stylesheets stay on `student/answers`.
