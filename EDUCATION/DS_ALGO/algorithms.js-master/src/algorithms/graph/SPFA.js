/**
 * Calculates the shortest paths in a graph to every node from the node s
 * with SPFA(Shortest Path Faster Algorithm) algorithm
 *
 * @param {Object} graph An adjacency list representing the graph
 * @param {string} start the starting node
 *
 */
function spfa(graph, s) {
  const distance = {};
  const previous = {};
  const queue = {};
  const isInQue = {};
  const cnt = {};
  let head = 0;
  let tail = 1;
  // initialize
  distance[s] = 0;
  queue[0] = s;
  isInQue[s] = true;
  cnt[s] = 1;
  graph.vertices.forEach((v) => {
    if (v !== s) {
      distance[v] = Infinity;
      isInQue[v] = false;
      cnt[v] = 0;
    }
  });

  let currNode;
  while (head !== tail) {
    currNode = queue[head++];
    isInQue[currNode] = false;
    const neighbors = graph.neighbors(currNode);

    for (const v of neighbors) {
      // relaxation
      const newDistance = distance[currNode] + graph.edge(currNode, v);
      if (newDistance < distance[v]) {
        distance[v] = newDistance;
        previous[v] = currNode;
        if (!isInQue[v]) {
          queue[tail++] = v;
          isInQue[v] = true;
          cnt[v]++;
          if (cnt[v] > graph.vertices.size) {
            // indicates negative-weighted cycle
            return {
              distance: {},
            };
          }
        }
      }
    }
  }

  return {
    distance,
    previous,
  };
}

export default spfa;
