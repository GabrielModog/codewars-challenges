const { assert } = require("chai");

const strCount = require("./all-star-code-18");

describe("testing strCount()", function () {
  const letters = "abcdefghijklz".split("");

  function doTest(str, letter, expected) {
    assert.strictEqual(
      strCount(str, letter),
      expected,
      `Incorrect answer for input:\nstr='${str}'\nletter='${letter}'\n`
    );
  }

  it("should correctly return the correct count", function () {
    doTest("Hello", "o", 1);
    doTest("Hello", "l", 2);

    doTest("abcedfghijklmnopqrstuvwxyz", "z", 1);
  });

  it("should return 0 when no occurrence found", function () {
    doTest("ww234n", "z", 0);
  });

  it("should be able to handle an empty string", function () {
    doTest("", "k", 0);
  });

  it("should be able to handle random tests", function () {
    function genCount() {
      let letter = letters[(Math.random() * letters.length) | 0];
      let count = 0;
      let str = "";
      let length = (Math.random() * 300 + 20) | 0;
      for (let i = 0; i < length; ++i) {
        let l = letters[(Math.random() * letters.length) | 0];
        str += l;
        count += l == letter;
      }
      return [str, letter, count];
    }

    function genZero() {
      let letter = letters[(Math.random() * letters.length) | 0];
      let str = genCount()[0]
        .split("")
        .filter((l) => l != letter)
        .join("");
      return [str, letter, 0];
    }

    let cases = Array.from({ length: 100 }, (_, i) =>
      [genCount, genZero][i % 2]()
    )
      .map((e) => [e, Math.random()])
      .sort((e1, e2) => e1[1] - e2[1])
      .map((e) => e[0]);

    for (let [str, letter, expected] of cases) {
      doTest(str, letter, expected);
    }
  });
});
