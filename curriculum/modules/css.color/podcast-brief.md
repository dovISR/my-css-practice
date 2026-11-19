# Podcast brief: text color

Use this with [study-guide.md](study-guide.md). Do not read the slide outline aloud. The episode should leave the listener able to predict a computed color before they open the exercise.

## Conceptual questions

- If the author sets no color, why is the text still visible?
- Why does a test talk about `rgb(29, 78, 216)` when an author may have typed a hex color?
- What does black text imply about the rule that was supposed to match `.lead`?

## Explanations to keep

The `color` property paints glyphs. The selector decides which glyphs. Chromium stores the used color as red, green, and blue channels. `#1d4ed8` is those channels. The CSS keyword `blue` is a different, fully blue channel. Inheritance explains why a color on `body` would paint the paragraph too, and why this exercise still needs a rule the test can see on `.lead`.

## Practical example

A status line and a detail line sit in one notice. Only the status line has `class="status"`. The team sets `color` on `.status` to `#9a3412`, a brown-orange, and leaves the detail line alone. Ask the listener what the detail line's color is, and what they would look up in the computed style for `.status`. This example is not the harbor paragraph and not `#1d4ed8`.

## Misconceptions

- "Blue" in the assignment means the keyword `blue`.
- A color written in the HTML file changes the test even when `style.css` is still the starter.
- `color` fills the rectangle behind the words.
- Any rule that turns the sentence blue must be the rule the test reads. A `p` selector and a `.lead` selector are different matches.

## Debugging scene

The author wrote `p { color: #1d4ed8; }` and the paragraph looks right in the browser. The test still reports the default on `.lead` if no color was declared on that class. Walk through selector match first, then the computed value. Mention a missing semicolon as a second way to end up with black text even when the selector is right.

## Discussion prompts

- Where should a team put a brand blue so the next page can reuse it: on one paragraph, on a class, or on `body`?
- What would go wrong if every warning and every heading shared that same class?
- The later border exercise colors a line around a box. Why is that a different property?

## Exercise

[Text Color](../../../practices/lesson-01/01-color/01-text-color/README.md). The paragraph is "The morning harbor is calm." The passing computed color is `rgb(29, 78, 216)`.

## Takeaway

The property paints the text. The selector chooses the element. The computed `rgb()` value is the fact the browser and the test both use. Close by naming the exercise folder, then stop.
