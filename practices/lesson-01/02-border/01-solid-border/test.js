'use strict';

const { check, expectComputed } = require('../../../../lib/practice');

function borderSides(color) {
  const expected = {};
  ['top', 'right', 'bottom', 'left'].forEach((edge) => {
    expected[`border-${edge}-width`] = '4px';
    expected[`border-${edge}-style`] = 'solid';
    expected[`border-${edge}-color`] = color;
  });
  return expected;
}

test('the panel has a 4px solid border on every side', async () => {
  await check(__dirname, async (page) => {
    await expectComputed(
      page,
      '.panel',
      borderSides('rgb(17, 17, 17)'),
      'the panel border'
    );
  });
});
