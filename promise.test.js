const promi = require("./promise");

// test(" 3ms => Age 30", () => {
//   promi.getAge().then((age) => {
//     expect(age).toBe(31);
//   });
// });

// 3ms => Age 30 (1 ms) : error 3ms & 31

// return 빼먹으면 코드는 그냥 종료된다. / callback done() 꼭 사용해야한다.

// test(" 3ms => Age 30", () => {
//   return promi.getAge().then((age) => {
//     expect(age).toBe(31);
//   });
// });

//    Expected: 31
// Received: 30

test(" 3ms => Age 30", () => {
  return promi.getAge().then((age) => {
    // 꼭 return!!
    expect(age).toBe(30);
  });
});

//  ✓  3ms => Age 30 (3006 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        3.919 s, estimated 4 s

// * resolves, rejects

test("resolves: 3ms => Age 30", () => {
  //   return promi.getAge().then((age) => {
  //     expect(age).toBe(30);
  //   });
  return expect(promi.getAge()).resolves.toBe(30);
});

/** PASS  ./promise.test.js (6.397 s)
  ✓  3ms => Age 30 (3003 ms)
  ✓ resolves: 3ms => Age 30 (3001 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        6.927 s */

// test("rejects: 3ms => Age 30", () => {
//   //   return promi.getAge().then((age) => {
//   //     expect(age).toBe(30);
//   //   });
//   return expect(promi.getAgeRej()).rejects.toBe(30);
// });
/**
 * FAIL  ./promise.test.js (9.46 s)
  ✓  3ms => Age 30 (3006 ms)
  ✓ resolves: 3ms => Age 30 (3001 ms)
  ✕ rejects: 3ms => Age 30 (3007 ms)

  ● rejects: 3ms => Age 30

    expect(received).rejects.toBe(expected) // Object.is equality

    Expected: 30
    Received: "error"
 */

test("rejects: 3ms => Age 30", () => {
  //   return promi.getAge().then((age) => {
  //     expect(age).toBe(30);
  //   });
  return expect(promi.getAgeRej()).rejects.toMatch("error");
});

/**
 *  PASS  ./promise.test.js (9.391 s)
  ✓  3ms => Age 30 (3008 ms)
  ✓ resolves: 3ms => Age 30 (3004 ms)
  ✓ rejects: 3ms => Age 30 (3005 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        9.906 s, estimated 10 s
 */
