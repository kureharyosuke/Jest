const toEqual = require("./toEqual");

test("1 + 2 = 3", () => {
  expect(toEqual.add(1, 2)).toBe(3);
});

/** npm test toEqual
 * 
 *  PASS  ./toEqual.test.js
  ✓ 1 + 2 = 3 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.865 s
 */

test("3 + 4 = 7", () => {
  expect(toEqual.add(3, 4)).toEqual(7);
});

/** npm test toEqual
 * 
 *  ✓ 1 + 2 = 3 (1 ms)
  ✓ 3 + 4 = 7 (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.87 s, estimated 1 s
 */
