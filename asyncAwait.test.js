const asyncAwait = require("./asyncAwait");

test("3ms => Age 30", async () => {
  const age = await asyncAwait.getAge();
  expect(age).toBe(30);
});

/**
 * PASS  ./asyncAwait.test.js
  ✓ 3ms => Age 30 (3004 ms)
 */

test("3ms => Age 30", async () => {
  await expect(asyncAwait.getAge()).resolves.toBe(30);
});

/**
 *  PASS  ./asyncAwait.test.js (6.373 s)
  ✓ 3ms => Age 30 (3007 ms)
  ✓ 3ms => Age 30 (3003 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        6.841 s
 */

test("3ms => Age 30", async () => {
  await expect(asyncAwait.getAgeRej()).rejects.toMatch("error");
});

/**
 * PASS  ./asyncAwait.test.js (9.401 s)
  ✓ 3ms => Age 30 (3005 ms)
  ✓ 3ms => Age 30 (3002 ms)
  ✓ 3ms => Age 30 (3005 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        9.895 s, estimated 10 s
 */
