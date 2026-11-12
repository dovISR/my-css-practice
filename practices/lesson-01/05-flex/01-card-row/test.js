'use strict';

const { check, expectComputed, expectBoxes, expectRow } = require('../../../../lib/practice');

test('the card row is a horizontal flex container with a 16px gap', async () => {
  await check(__dirname, async (page) => {
    await expectComputed(
      page,
      '.cards',
      {
        display: 'flex',
        'flex-direction': 'row',
        gap: '16px',
      },
      'the card row'
    );
  });
});

test('the three cards share one row with a 16px gap', async () => {
  await check(__dirname, async (page) => {
    await expectBoxes(page, '.card', (boxes) => {
      if (boxes.length !== 3) {
        throw new Error(`Expected three cards in the row. Found ${boxes.length}.`);
      }
      expectRow(boxes, 16, 'cards');
    }, 'the cards');
  });
});
