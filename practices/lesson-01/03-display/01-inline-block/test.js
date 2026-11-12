'use strict';

const { check, expectComputed } = require('../../../../lib/practice');

test('each item is display inline-block', async () => {
  await check(__dirname, async (page) => {
    const count = await page.locator('.item').count();
    if (count !== 3) {
      throw new Error(`Expected three items. Found ${count}.`);
    }
    await expectComputed(
      page,
      '.item',
      { display: 'inline-block' },
      'each item'
    );
  });
});
