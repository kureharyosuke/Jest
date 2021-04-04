const etc = require("./etc");

// toBeNull
// toBeUndefined
// toBeDefined

test("null is null", () => {
  expect(null).toBeNull();
});

// toBeTruthy
// toBeFalsy

test("0 is false", () => {
  expect(etc.add(1, -1)).toBeFalsy();
});

/**
 *   ● 0 is false

    expect(received).toBeFalsy()

    Received: -1 
 */

// ?: 1 + -1 = 0?

// test("0 is false", () => {
//   expect(etc.add(0, 1)).toBeFalsy();
// });

// test("hello jest", () => {
//   expect(etc.add("hello", "jest")).toBeFalsy();
// });

/**
 *   expect(received).toBeFalsy()

    Received: "hellojest"
 */

test("hello jest", () => {
  expect(etc.add("hello", "jest")).toBeTruthy();
});
