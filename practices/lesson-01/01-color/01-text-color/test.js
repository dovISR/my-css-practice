'use strict';

const { check, expectComputed } = require('../../../../lib/practice');

test('the paragraph color is rgb(29, 78, 216)', async () => {
  await check(__dirname, async (page) => {
    await expectComputed(
      page,
      '.lead',
      { color: 'rgb(29, 78, 216)' },
      'the paragraph color'
    );
  });
});
