const err = require("./error");

// Error = toThrow();

test("This is Error ?", () => {
  expect(() => err.throwErr()).toThrow();
});

/**
 * ✓ This is Error ? (6 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
 */

// test("This is Error ?", () => {
//   expect(() => err.throwErr()).toThrow("O");
// });

//    Expected substring: "O"
//    Received message:   "X"

test("This is Error ?", () => {
  expect(() => err.throwErr()).toThrow("X");
});
