const { assert } = require ('chai');

describe( "maxSequence", function(){
  it("should work on an empty array",function(){
    assert.strictEqual(maxSequence([]), 0);
  });
  it("should work on the example",function(){
    assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });
});