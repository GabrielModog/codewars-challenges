describe("Animal sorting test", function () {
  const chai = require('chai'), { deepEqual } = chai.assert;
  chai.config.truncateThreshold = 0;

  function doTest(input, expected) {
    const inputCopy = input.slice();
    const actual = sortAnimal(input);
    deepEqual(actual, expected, `for animals = ${JSON.stringify(inputCopy)}\n`);
    deepEqual(input, inputCopy, 'you should not mutate the input, return a new array instead\n');
  }

  it("sample tests", function () {
    doTest([
      { name: "Cat", numberOfLegs: 4 },
      { name: "Snake", numberOfLegs: 0 },
      { name: "Dog", numberOfLegs: 4 },
      { name: "Pig", numberOfLegs: 4 },
      { name: "Human", numberOfLegs: 2 },
      { name: "Bird", numberOfLegs: 2 }
    ], [
      { name: 'Snake', numberOfLegs: 0 },
      { name: 'Bird', numberOfLegs: 2 },
      { name: 'Human', numberOfLegs: 2 },
      { name: 'Cat', numberOfLegs: 4 },
      { name: 'Dog', numberOfLegs: 4 },
      { name: 'Pig', numberOfLegs: 4 }
    ]);

    doTest([
      { name: "Centipede", numberOfLegs: 100 },
      { name: "Snail", numberOfLegs: 0 },
      { name: "Lizard", numberOfLegs: 4 },
      { name: "Dog", numberOfLegs: 4 },
      { name: "Human", numberOfLegs: 2 },
      { name: "Bird", numberOfLegs: 2 }
    ], [
      { name: 'Snail', numberOfLegs: 0 },
      { name: 'Bird', numberOfLegs: 2 },
      { name: 'Human', numberOfLegs: 2 },
      { name: 'Dog', numberOfLegs: 4 },
      { name: 'Lizard', numberOfLegs: 4 },
      { name: 'Centipede', numberOfLegs: 100 }
    ]);

    doTest([], []);

  });
});