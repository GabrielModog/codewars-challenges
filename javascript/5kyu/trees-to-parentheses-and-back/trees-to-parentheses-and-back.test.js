it("example tests",()=>{
  testParensTreeParens("");
  testParensTreeParens("()");
  testParensTreeParens("(()(()))");
  testTreeParensTree( new Leaf );
  testTreeParensTree( new Branch( new Leaf, new Leaf ) );
});