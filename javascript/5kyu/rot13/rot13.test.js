const assert = require("chai").assert;

describe("Sample tests", () => {
  it("should work for 'EBG13 rknzcyr.'", () => 
    assert.strictEqual(rot13("EBG13 rknzcyr."), "ROT13 example.")
  );
  it("should work for 'This is my first ROT13 excercise!'", () => 
    assert.strictEqual(rot13("This is my first ROT13 excercise!"), "Guvf vf zl svefg EBG13 rkprepvfr!")
  );
});
