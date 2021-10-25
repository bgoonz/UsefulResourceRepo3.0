import Stack from "../../data_structures/stack";
import depthFirstSearch from "../../algorithms/graph/depth_first_search";

/**
 * Sorts the edges of the DAG topologically
 *
 *  (node1) -> (node2) -> (node4)
 *     \-> (node3)^
 *
 * Meaning that:
 * - "node2" and "node3" depend on "node1"
 * - "node4" depend on node2
 * - "node2" depend on "node3"
 *
 * @param {Graph}
 * @return Stack
 */
const topologicalSort = (graph) => {
  const stack = new Stack();
  const firstHit = {};
  let time = 0;

  graph.vertices.forEach((node) => {
    if (!firstHit[node]) {
      depthFirstSearch(graph, node, {
        allowTraversal(node, neighbor) {
          return !firstHit[neighbor];
        },
        enterVertex(node) {
          firstHit[node] = ++time;
        },
        leaveVertex(node) {
          stack.push(node);
        },
      });
    }
  });

  return stack;
};

export default topologicalSort;
