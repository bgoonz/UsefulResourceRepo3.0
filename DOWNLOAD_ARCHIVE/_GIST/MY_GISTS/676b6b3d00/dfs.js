function depthFirst(root) {
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    console.log(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}
function depthFirst(root) {
  // initialize the stack with the root node
  let stack = [root];

  // continue running the algorithm while there are still nodes on the stack
  while (stack.length) {
    // pop the top node from the stack
    let node = stack.pop();

    // we consider a node visited once we pop it,
    // so we should print the node's value now
    console.log(node.val);

    // add the node's left and right children, if they exist
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);

    // IMPORTANT: do not print out the children yet; they must wait their turn to be popped first
  }
}
