const toContainArray = {
  add: (num1, num2) => num1 + num2, // * 해서 에러남....
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  id: "lucky",
  password: "12345678",
  email: "asdf@gmail.com",
  number: [1, 2, 3, 152, 345, 37],
};

module.exports = toContainArray;
