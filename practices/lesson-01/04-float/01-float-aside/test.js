'use strict';

const { check, expectComputed, expectBoxes, expectFloatRight } = require('../../../../lib/practice');

test('the aside floats right', async () => {
  await check(__dirname, async (page) => {
    await expectComputed(
      page,
      '.note',
      { float: 'right' },
      'the aside'
    );
  });
});

test('the aside meets the section right edge', async () => {
  await check(__dirname, async (page) => {
    await expectBoxes(
      page,
      '.note',
      (boxes) => expectFloatRight(boxes, 'aside'),
      'the aside'
    );
  });
});
