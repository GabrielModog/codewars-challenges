const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const Test = require("@codewars/test-compat");

const repeatStr = require("./string-repeat");

const solution = (n, s) => Array.from({ length: n + 1 }).join(s);

describe("Tests", function () {
  it("Basic tests", function () {
    assert.strictEqual(repeatStr(3, "*"), "***");
    assert.strictEqual(repeatStr(5, "#"), "#####");
    assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
    assert.strictEqual(repeatStr(5, ">"), ">>>>>");
    assert.strictEqual(repeatStr(10, "!"), "!!!!!!!!!!");
    assert.strictEqual(repeatStr(3, "hello "), "hello hello hello ");
    assert.strictEqual(repeatStr(3, "$"), "$$$");
    assert.strictEqual(repeatStr(5, "a"), "aaaaa");
    assert.strictEqual(repeatStr(6, "A"), "AAAAAA");
    assert.strictEqual(repeatStr(7, "aA"), "aAaAaAaAaAaAaA");
  });
  it("Random tests", function () {
    for (let i = 0; i < 10; i++) {
      let num = Test.randomNumber();
      let s = Test.randomToken()[0];
      assert.strictEqual(repeatStr(num, s), solution(num, s));
    }
  });
});
