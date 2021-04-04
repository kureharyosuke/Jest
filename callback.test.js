const callback = require("./callback");

test("3ms => name", () => {
  function callback(name) {
    expect(name).toBe("Mike");
  }
  callback.getName(callback);
});

//  ✓ 3ms => name (1 ms) // 3ms | 1ms

test("3ms => name", (done) => {
  function callback(name) {
    expect(name).toBe("Mike");
    done();
  }
  callback.getName(callback);
});

// test("3ms => name", () => {
//   function callback(name) {
//     expect(name).toBe("Tom");
//   }
//   callback.getName(callback);
// }); //이것때문에 error

test("3ms => name", (done) => {
  function callback(name) {
    expect(name).toBe("Mike");
    done();
  }
  callback.getName(callback); // 3ms => name (3004 ms)
});

/**
 *  ✓ 3ms => name (1 ms)
  ✓ 3ms => name
  ✕ 3ms => name (3025 ms) => ?

  ● 3ms => name
 */

//
// API Error Test
//

test("apierror", (done) => {
  function callback(apierror) {
    try {
      expect(apierror).toBe("apierr");
      done();
    } catch (error) {
      done();
    }
  }
  callback.getApi(callback); // 3ms => name (3004 ms)
});

/**
 * ✓ 3ms => name (3006 ms)
  ✓ 3ms => name (3005 ms)
  ✕ apierror (3023 ms)

  ● apierror

    SERVER ERROR: 서버에러

      20 |     setTimeout(() => {
      21 |       //   callback(name);
    > 22 |       throw new Error("SERVER ERROR: 서버에러");
         |             ^
      23 |     }, 3000);
      24 |   },
      25 | };
 */
