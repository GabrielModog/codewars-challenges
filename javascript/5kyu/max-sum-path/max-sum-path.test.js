const chai = require("chai");
const assert = chai.assert;

describe("Tests", function() {
  it("Sample tests", function() {
        assert.strictEqual(maxSumPath([2, 3, 7, 10, 12],[1, 5, 7, 8]), 35)
        assert.strictEqual(maxSumPath([1,2,3], [3,4,5]), 15)
        assert.strictEqual(maxSumPath([1,4,5,8,9,11,19], [2,3,4,11,12]), 61)
        assert.strictEqual(maxSumPath([1,2,3], [4,5,6]), 15)
        assert.strictEqual(maxSumPath([],[]),0)
  });
});
