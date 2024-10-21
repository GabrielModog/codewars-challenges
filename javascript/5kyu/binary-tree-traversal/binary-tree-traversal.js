/*
A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
*/

// 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.
export function preOrder(node) {
  if(!node) return []
  return [node.data, ...preOrder(node.left), ...preOrder(node.right)]
}

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
export function inOrder(node) {
  if(!node) return []
  return [...inOrder(node.left), node.data, ...inOrder(node.right)]
}

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
export function postOrder(node){
  if(!node) return []
  return [...postOrder(node.left), ...postOrder(node.right), node.data]
}