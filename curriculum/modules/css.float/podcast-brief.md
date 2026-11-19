# Podcast brief: float aside

Use this with [study-guide.md](study-guide.md). Keep flex for the next episode. This one is about one pinned box and the text that wraps beside it.

## Conceptual questions

- What is the note doing before anyone sets `float`?
- Why does the right edge of the note meet the right edge of the section when the margin is 0?
- Why can the paragraph look correct beside the note while the test still fails?

## Explanations to keep

`float: right` takes `.note` out of the block stack and places it on the right of `.sheet`. The section is 640px. The note is 200 by 96. Margin 0 means the border edges touch. The test allows 1px. The paragraph wraps because it follows the float in the document. The test never queries the paragraph. `text-align` and `right: 0` do not set the `float` property.

## Practical example

A recipe floats a 160px tip to the left of the method so the steps run down the right of the tip. Ask which property and which side that is, and which edge would meet if the tip moved to the right instead. The graded page is the right-hand case.

## Misconceptions

- Aligning the words inside the note is the same as floating the note.
- Absolute positioning is an acceptable substitute because the pixels might match. The first test still wants `float: right`.
- The paragraph's position is part of the automated grade.
- Floating the section floats the note.

## Debugging scene

The computed float is `right`, and the message says the note's right edge is 624px while the section's right edge is 640px. Something inset the border box by about 16px. Talk through margin and padding before talking about the paragraph. On this fixture, the page's own `margin: 0` wins over a student margin of the same specificity, so an inset that survives is coming from a property the fixture does not reset, or from a change to the HTML. The task is to leave the HTML alone and set `float`.

## Discussion prompts

- Why is float a poor tool for the three equal cards in the next chapter?
- What happens to a float if the parent has no other in-flow content and no other way to grow? This page has the paragraph, so the section still has in-flow content.
- Where would a team still meet `float` in a stylesheet written years ago?

## Exercise

[Float Aside](../../../practices/lesson-01/04-float/01-float-aside/README.md). `float: right` on `.note`, right edges within 1px.

## Takeaway

Float pins a box to a side and lets following text wrap. The grade is the side and the shared right edge. The wrap is how you know the pin worked on the page.
