const arr = require("./array");

// toContain

test("유저리스트에 Mike가 있는지?", () => {
  const user = "Mike";
  const userList = ["Tom", "Jane", "Lucky", "Mike"];
  expect(userList).toContain(user);
});

test("Number : 152?", () => {
  expect(arr.number).toContain(152);
});

/**
 *   ✓ 유저리스트에 Mike가 있는지? (2 ms)
  ✓ Number : 152?

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
 */
