const fn = require("./function");

// toBeGreaterThan > 크다
// toBeGreaterThanOrEqual >= 크거나 같다
// toBeLessThan < 작다
// toBeLessThanOrEqual <= 작거나 같다

/**
 * ex) 사용자가 입력아이디를 길이를 제한하거나, 업로드된 파일의 크기가 적당하지 할때, 사용
 */

test("ID는 10자 이하여야 합니다.", () => {
  const id = "TheBLACK";
  expect(id.length).toBeLessThanOrEqual(10);
});

/**
 *   ✓ ID는 10자 이하여야 합니다. (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.841 s
 */

test("PassWord is 4", () => {
  const pw = "1234";
  expect(pw.length).toBe(4);
});

test("PassWord is 4", () => {
  const pw = "1234";
  expect(pw.length).toEqual(4);
});

// test("PassWord is 4", () => {
//   const pw = 1234;
//   expect(pw.length).toStrictEqual(4);
//   //    Received: undefined obeejct 엄격검사
// });

//

test("ID is 10", () => {
  expect(fn.id.length).toBeLessThanOrEqual(10);
});

test("PASSWORD is 10", () => {
  expect(fn.password.length).toBeLessThanOrEqual(10);
});

/**
 *   ✓ ID는 10자 이하여야 합니다. (2 ms)
  ✓ PassWord is 4
  ✓ PassWord is 4 (1 ms)
  ✓ ID is 10 (1 ms)
  ✓ PASSWORD is 10
 */
