const { assert } = require('chai');

const { solve } = require("./array-element-parity")

describe('solve', () => {
  it('Sample tests', () => {
    tester([1,-1,2,-2,3]                        , 3  , 'solve([1,-1,2,-2,3])'                        );
    tester([-3,1,2,3,-1,-4,-2]                  , -4 , 'solve([-3,1,2,3,-1,-4,-2])'                  );
    tester([1,-1,2,-2,3,3]                      , 3  , 'solve([1,-1,2,-2,3,3])'                      );
    tester([-110,110,-38,-38,-62,62,-38,-38,-38], -38, 'solve([-110,110,-38,-38,-62,62,-38,-38,-38])');
    tester([-9,-105,-9,-9,-9,-9,105]            , -9 , 'solve([-9,-105,-9,-9,-9,-9,105])'            );
  });
});

function tester(array, expected, err_msg) {
  const actual = solve(array);
  assert.strictEqual(actual, expected, err_msg + "\n\n");
}