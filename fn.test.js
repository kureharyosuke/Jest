const fn = require("./fn");
// 임포트해오고,

test("1 + 1 ", () => {
  expect(1).toBe(1);
});
// expect = 검증할 값
// toBe = 기대하는 값

test("2 + 3 = 5", () => {
  expect(fn.add(2, 3)).toBe(5); // **괄호 주의
});

test("3 + 3 = 5", () => {
  expect(fn.add(3, 3)).toBe(5); // **괄호 주의
});

// npm test or yarn test

/**
 *  ✓ 1 + 1  (5 ms)
  ✓ 2 + 3 = 5
  ✕ 3 + 3 = 5 (3 ms)

  ● 3 + 3 = 5

    expect(received).toBe(expected) // Object.is equality

    Expected: 5
    Received: 6

      13 |
      14 | test("3 + 3 = 5", () => {
    > 15 |   expect(fn.add(3, 3)).toBe(5); // **괄호 주의
         |                        ^
      16 | });
      17 |

      at Object.<anonymous> (fn.test.js:15:24)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 passed, 3 total
Snapshots:   0 total
Time:        1.054 s
 */

test("3 + 3 = 5", () => {
  expect(fn.add(3, 3)).not.toBe(5); // **괄호 주의
});

/**
 * 
 PASS  ./fn.test.js
  ✓ 1 + 1  (2 ms)
  ✓ 2 + 3 = 5
  ✓ 3 + 3 = 5

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.976 s, estimated 1 s
 */
