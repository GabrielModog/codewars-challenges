const { assert } = require("chai");
const fibonacci = require("./fibonacci");

const test = (input, expected) => {
  assert.strictEqual(
    fibonacci(input),
    expected,
    `Test failed for fibonacci(${input})`
  );
};

describe("Tests", () => {
  describe("Fixed Tests", () => {
    it("Small Numbers", () => {
      test(0, 0);
      test(1, 1);
      test(5, 5);
      test(10, 55);
      test(15, 610);
      test(20, 6765);
    });

    it("Large Numbers", () => {
      test(30, 832040);
      test(40, 102334155);
      test(50, 12586269025);
      test(60, 1548008755920);
      test(70, 190392490709135);
    });
  });

  describe("Random tests", () => {
    const randomInt = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
    const solve = (
      (c) => (n) =>
        (c[n] = n in c ? c[n] : solve(n - 1) + solve(n - 2))
    )({ 0: 0, 1: 1 });

    it("Small Numbers", () => {
      for (let i = 0; i < 20; i++) {
        const input = randomInt(0, 20);
        const expected = solve(input);
        test(input, expected);
      }
    });

    it("Large Numbers", () => {
      for (let i = 0; i < 80; i++) {
        const input = randomInt(21, 78);
        const expected = solve(input);
        test(input, expected);
      }
    });
  });
});
