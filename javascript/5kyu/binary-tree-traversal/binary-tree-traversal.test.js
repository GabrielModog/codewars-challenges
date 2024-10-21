const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
var a = new Node(5);
var b = new Node(10);
var c = new Node(2);
a.left = b;
a.right = c;

Test.assertSimilar(preOrder(a), [a.data, b.data, c.data], "preOrder failed, expected " + [a.data, b.data, c.data].toString());
Test.assertSimilar(preOrder(b), [b.data], "preOrder failed, expected " + [b.data].toString());
Test.assertSimilar(preOrder(c), [c.data], "preOrder failed, expected " + [c.data].toString());

Test.assertSimilar(inOrder(a), [b.data, a.data, c.data], "inOrder failed, expected " + [b.data, a.data, c.data].toString());
Test.assertSimilar(inOrder(b), [b.data], "inOrder failed, expected " + [b.data].toString());
Test.assertSimilar(inOrder(c), [c.data], "inOrder failed, expected " + [c.data].toString());

Test.assertSimilar(postOrder(a), [b.data, c.data, a.data], "postOrder failed, expected " + [b.data, c.data, a.data].toString());
Test.assertSimilar(postOrder(b), [b.data], "postOrder failed, expected " + [b.data].toString());
Test.assertSimilar(postOrder(c), [c.data], "postOrder failed, expected " + [c.data].toString());
  });
});
