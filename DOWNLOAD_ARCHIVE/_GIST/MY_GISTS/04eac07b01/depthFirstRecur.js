function depthFirstRecur(root) {
  if (!root) return;
  console.log(root.val);
  depthFirstRecur(root.left);
  depthFirstRecur(root.right);
}
