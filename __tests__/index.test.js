/* global test, expect */

import animateValue from '../src';

test(`Animates value with easing function`, async () => {
  const accum = [];

  await animateValue({
    easing: t => t < 0.5 ? 0 : 1,
    duration: 100,
    change: v => accum.push(v)
  });

  const unique = Array.from(new Set(accum));

  expect(unique.length < accum.length).toBe(true);
  expect(unique).toEqual([0, 1]);
});
