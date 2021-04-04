const regex = require("./regex");

// toBeCloseTo

// test("JavaScript : 0.1 + 0.2 = ?", () => {
//   expect(regex.add(0.1, 0.2)).toBe(0.3); // 자바스크립트는 이진법이니까!
// });
// Expected: 0.3
// Received: 0.30000000000000004

// 소수점 검사할때는
test("JavaScript : 0.1 + 0.2 = ?", () => {
  expect(regex.add(0.1, 0.2)).toBeCloseTo(0.3); // 자바스크립트는 이진법이니까!
});

// Regex = toMatch

// test("Hello Jest Test FW", () => {
//   expect("Hello Jest Test FW").toMatch(/j/);  // Error
// });

test("Hello Jest Test FW", () => {
  expect("Hello Jest Test FW").toMatch(/J/);
});

test("Email Check!", () => {
  expect(regex.email).toMatch(/@/);
});

/**
 *   ✓ JavaScript : 0.1 + 0.2 = ? (1 ms)
  ✓ Hello Jest Test FW (1 ms)
  ✓ Email Check!
 */
