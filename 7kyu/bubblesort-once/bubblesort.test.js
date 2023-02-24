const Test = require("@codewars/test-compat");

const bubblesortOnce = require("./bubblesort-once");

describe("bubblesortOnce", function () {
  it("should work for an example assertion", function () {
    Test.assertDeepEquals(
      bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]),
      [7, 5, 3, 1, 2, 4, 6, 8, 9]
    );
  });
  it("should work for some fixed tests", function () {
    Test.assertDeepEquals(bubblesortOnce([1, 2]), [1, 2]);
    Test.assertDeepEquals(bubblesortOnce([2, 1]), [1, 2]);
    Test.assertDeepEquals(bubblesortOnce([1, 3]), [1, 3]);
    Test.assertDeepEquals(bubblesortOnce([3, 1]), [1, 3]);
    Test.assertDeepEquals(bubblesortOnce([24, 57]), [24, 57]);
    Test.assertDeepEquals(bubblesortOnce([89, 36]), [36, 89]);
    Test.assertDeepEquals(bubblesortOnce([1, 2, 3]), [1, 2, 3]);
    Test.assertDeepEquals(bubblesortOnce([2, 4, 1]), [2, 1, 4]);
    Test.assertDeepEquals(bubblesortOnce([17, 5, 11]), [5, 11, 17]);
    Test.assertDeepEquals(bubblesortOnce([25, 16, 9]), [16, 9, 25]);
    Test.assertDeepEquals(bubblesortOnce([103, 87, 113]), [87, 103, 113]);
    Test.assertDeepEquals(
      bubblesortOnce([1032, 3192, 2864]),
      [1032, 2864, 3192]
    );
    Test.assertDeepEquals(bubblesortOnce([1, 2, 3, 4]), [1, 2, 3, 4]);
    Test.assertDeepEquals(bubblesortOnce([2, 3, 4, 1]), [2, 3, 1, 4]);
    Test.assertDeepEquals(bubblesortOnce([3, 4, 1, 2]), [3, 1, 2, 4]);
    Test.assertDeepEquals(bubblesortOnce([4, 1, 2, 3]), [1, 2, 3, 4]);
    Test.assertDeepEquals(bubblesortOnce([7, 5, 3, 1]), [5, 3, 1, 7]);
    Test.assertDeepEquals(bubblesortOnce([5, 3, 7, 7]), [3, 5, 7, 7]);
    Test.assertDeepEquals(bubblesortOnce([3, 1, 8, 5]), [1, 3, 5, 8]);
    Test.assertDeepEquals(bubblesortOnce([1, 9, 5, 5]), [1, 5, 5, 9]);
    Test.assertDeepEquals(
      bubblesortOnce([6, 3, 4, 9, 1, 2, 7, 8, 5]),
      [3, 4, 6, 1, 2, 7, 8, 5, 9]
    );
    Test.assertDeepEquals(
      bubblesortOnce([6, 3, 4, 15, 14, 9, 1, 2, 7, 8, 5, 14, 11, 15, 17, 19]),
      [3, 4, 6, 14, 9, 1, 2, 7, 8, 5, 14, 11, 15, 15, 17, 19]
    );
  });
  it("should work for some edge assertions", function () {
    Test.assertDeepEquals(
      bubblesortOnce([42]),
      [42],
      "Your function should work on arrays containing exactly 1 integer"
    );
    Test.assertDeepEquals(
      bubblesortOnce([]),
      [],
      "Your function should be able to handle empty arrays"
    );
  });
  it("should be pure, i.e. not mutate the original array", function () {
    let a = [2, 5, 3, 7, 1, 10, 4, 6, 8, 9],
      result = bubblesortOnce(a);
    Test.assertDeepEquals(
      result,
      [2, 3, 5, 1, 7, 4, 6, 8, 9, 10],
      "Your function should produce the correct results"
    );
    Test.expect(
      a !== result,
      "Your function should return a new array instead of the original array"
    );
    Test.assertDeepEquals(
      a,
      [2, 5, 3, 7, 1, 10, 4, 6, 8, 9],
      "Your function should not mutate the input array"
    );
  });
  it("should work for random tests", function () {
    function solution(a) {
      a = a.slice();
      for (let i = 0; i < a.length - 1; i++)
        if (a[i] > a[i + 1]) [a[i], a[i + 1]] = [a[i + 1], a[i]];
      return a;
    }
    for (let i = 0; i < 100; i++) {
      let a = [],
        length = 10 + Math.floor(Math.random() * 90);
      for (let j = 0; j < length; j++) a.push(Math.floor(Math.random() * 1e3));
      let expected = solution(a),
        actual = bubblesortOnce(a);
      Test.assertDeepEquals(actual, expected);
    }
  });
});
