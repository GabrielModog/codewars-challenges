export function treeToParens(tree) {
  if(tree instanceof Leaf) return ""
  
  const left = treeToParens(tree.left)
  const right = treeToParens(tree.right)
  const branch = `(${left})${right}`
  
  return branch
}

function parensToTree(parens) {
  let i = 0
  const loop = () => parens[i] === "(" 
    ? new Branch(loop(i++), loop(i++))
    : new Leaf
  
  result = loop()
  
  return result
}