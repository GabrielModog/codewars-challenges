describe("toString() for arrays", () => {
  it("should work for my example test cases", () => {
    Test.assertEquals([].toString(), "[]", "Should be able to handle empty arrays");
    Test.assertEquals([[[[[[]]],[]]]].toString(), "[[[[[[]]],[]]]]", "Should be able to handle empty nested arrays");
    Test.assertEquals([1.545,[2,4,[23532],55,2.3,[15.22,0.3,[],[[72,3],5]]]].toString(), "[1.545,[2,4,[23532],55,2.3,[15.22,0.3,[],[[72,3],5]]]]", "Should work with nested arrays");
    Test.assertEquals(["foobar",[["hello"]]].toString(), "['foobar',[['hello']]]", "Should enclose strings with single quotes");
    // Feel free to add your own test cases here :)
  });
});