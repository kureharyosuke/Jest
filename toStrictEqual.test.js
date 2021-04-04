const toStrictEqual = require("./toStrictEqual"); // ** test Import

// test("Name & Age => Object", () => {
//   expect(objectJest.makeUser("Mike", 30)).toBe({
//     name: "Mike",
//     age: 30,
//   });
// });

//   If it should pass with deep equality, replace "toBe" with "toStrictEqual"
//   Expected: {"age": 30, "name": "Mike"}
//   Received: serializes to the same string

test("toEqual: Name & Age => Object", () => {
  expect(toStrictEqual.makeUser("Mike", 30)).toEqual({
    name: "Mike",
    age: 30,
  });
});

/**
 *   ✓ Name & Age => Object (3 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.937 s, estimated 1 s 
*/

test("toStrictEqual: Name & Age => Object", () => {
  expect(toStrictEqual.makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
  });
});

/**
 *   ✓ Name & Age => Object (2 ms)
  ✓ Name & Age => Object

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.829 s
 */

//* toEqual 보다 엄격하게 검사할때는 toStrictEqual

/**
 * 
    - Expected  - 0  // toEqual
    + Received  + 1  // toStrictEqual

      Object {
        "age": 30,
    +   "gender": undefined,
        "name": "Mike",
      }

 */
