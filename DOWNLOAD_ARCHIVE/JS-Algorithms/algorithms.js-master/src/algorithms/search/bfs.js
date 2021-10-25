import Queue from "../../data_structures/queue.js";

/**
 * Breadth-first search for binary trees
 */
const bfs = (root, callback) => {
  const q = new Queue();
  q.push(root);
  let node;
  while (!q.isEmpty()) {
    node = q.pop();
    callback(node.value);
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
};

export default bfs;
