//
const promise = {
  add: (num1, num2) => num1 + num2, // * 해서 에러남....
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  id: "lucky",
  password: "12345678",
  email: "asdf@gmail.com",
  number: [1, 2, 3, 152, 345, 37],
  throwErr: () => {
    throw new Error("X");
  },
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    });
  },
  getAgeRej: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        // res(age);
        rej("error");
      }, 3000);
    });
  },
  getApi: (callback) => {
    const apierror = "apierr";
    setTimeout(() => {
      //   callback(name);
      throw new Error("SERVER ERROR: 서버에러");
    }, 3000);
  },
};

module.exports = promise;
