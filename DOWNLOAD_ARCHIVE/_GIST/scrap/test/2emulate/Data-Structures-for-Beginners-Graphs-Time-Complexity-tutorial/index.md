<a href="/categories/coding/" class="category-link">Coding</a> &gt; <a href="/categories/coding/data-structures-and-algorithms-dsa/" class="category-link">Data Structures and Algorithms (DSA)</a>

# Graph Data Structures in JavaScript for Beginners

<span title="Last time this post was updated"> Last updated December 15th 2020 </span> <span class="m-x-2" title="Pageviews"> 52.8k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/">0</span>](#disqus_thread) </span>

- <a href="/tags/algorithms/" class="tag-list-link">algorithms</a><span class="tag-list-count">12</span>
- <a href="/tags/tutorial-algorithms/" class="tag-list-link">tutorial_algorithms</a><span class="tag-list-count">10</span>

![Graph Data Structures in JavaScript for Beginners](/images/graph-data-structures-time-complexity-large.jpg)

In this post, we are going to explore non-linear data structures like graphs. Also, we’ll cover the central concepts and typical applications.

You are probably using programs with graphs and trees. For instance, let’s say that you want to know the shortest path between your workplace and home. You can use graph algorithms to get the answer! We are going to look into this and other fun challenges.

<span id="more"></span>

In the previous post, we explore linear data structures like arrays, linked lists, sets, stacks, etc. This one builds on top of what we learned.

You can find all these implementations and more in the Github repo: <https://github.com/amejiarosario/dsa.js>

---

This post is part of a tutorial series:

**Learning Data Structures and Algorithms (DSA) for Beginners**

1.  [Intro to algorithm’s time complexity and Big O notation](/blog/2018/04/04/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/)

2.  [Eight time complexities that every programmer should know](/blog/2018/04/05/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/)

3.  [Data Structures for Beginners: Arrays, HashMaps, and Lists](/blog/2018/04/28/Data-Structures-Time-Complexity-for-Beginners-Arrays-HashMaps-Linked-Lists-Stacks-Queues-tutorial/)

4.  Graph Data Structures for Beginners **👈 you are here**

5.  [Trees Data Structures for Beginners](/blog/2018/06/11/Data-Structures-for-Beginners-Trees-binary-search-tree-tutorial/)

6.  [Self-balanced Binary Search Trees](/blog/2018/07/16/Self-balanced-Binary-Search-Trees-with-AVL-tree-Data-Structure-for-beginners/)

7.  [Appendix I: Analysis of Recursive Algorithms](/blog/2018/04/24/Analysis-of-Recursive-Algorithms/)

---

Here is the summary of the operations that we are going to cover on this post:

<table><thead><tr class="header"><th> </th><th>Adjacency List</th><th>Adjacency Matrix</th></tr></thead><tbody><tr class="odd"><td>Space</td><td><a href="#List.space">O(|V| + |E|)</a></td><td><a href="#Matrix.space">O(|V|<sup>2</sup>)</a></td></tr><tr class="even"><td>addVertex</td><td><a href="#Graph.addVertex">O(1)</a></td><td><a href="#Matrix.addVertex">O(|V|<sup>2</sup>)</a></td></tr><tr class="odd"><td>removeVertex</td><td><a href="#Graph.removeVertex">O(|V| + |E|)</a></td><td><a href="#Matrix.addVertex">O(|V|<sup>2</sup>)</a></td></tr><tr class="even"><td>addEdge</td><td><a href="#Graph.addEdge">O(1)</a></td><td><a href="#Matrix.addVertex">O(1)</a></td></tr><tr class="odd"><td>removeEdge (using Array)</td><td><a href="#Graph.removeEdge">O(|E|)</a></td><td><a href="#Matrix.addVertex">O(1)</a></td></tr><tr class="even"><td>removeEdge (using HashSet)</td><td>O(1)</td><td><a href="#Matrix.addVertex">O(1)</a></td></tr><tr class="odd"><td>getAdjacents</td><td><a href="#Node.getAdjacents">O(|E|)</a></td><td><a href="#Matrix.getAdjacents">O(|V|)</a></td></tr><tr class="even"><td>isAdjacent (using Array)</td><td><a href="#Node.getAdjacents">O(|E|)</a></td><td><a href="#Matrix.getAdjacents">O(1)</a></td></tr><tr class="odd"><td>isAdjacent (using HashSet)</td><td>O(1)</td><td><a href="#Matrix.getAdjacents">O(1)</a></td></tr></tbody></table>

## <a href="#Graphs-Basics" class="headerlink" title="Graphs Basics"></a>Graphs Basics

Before we dive into interesting graph algorithms, let’s first clarify the naming conventions and graph properties.

A graph is a data structure where a **node** can have zero or more adjacent elements.

The connection between two nodes is called **edge**. Nodes can also be called **vertices**.

![](/images/graph-parts.jpg "Graph is composed of vertices and edges")

The **degree** is the number of edges connected to a vertex. E.g., the `purple` vertex has a degree of 3 while the `blue` one has a degree of 1.

If the edges are bi-directional, then we have an **undirected graph**. If the edges have a direction, then we have a **directed graph** or **di-graph** for short. You can think of it as a one-way street (directed) or two-way street (undirected).

![](/images/directed-vs-undirected-graph.jpg "Directed vs Undirected graph")

Vertex can have edges that go to itself (e.g., `blue` node). This is called **self-loop**.

A graph can have **cycles**, which means you could get the same node more than once. The graph without cycles is called **acyclic graph**.

![](/images/cyclic-vs-acyclic-directed-graph.jpg "Cyclic vs Acyclic directed graph")

Also, acyclic undirected graphs are called **tree**. We are going to cover trees in-depth in the next post.

Not all vertices have to be connected in the graph. You might have isolated nodes or even separated subgraphs. If all nodes have at least one edge, then we have a **connected graph**. When all nodes are connected to all other nodes, then we have a **complete graph**.

![](/images/connected-vs-complete-graph.jpg "Complete vs Connected graph")

For a complete graph, each node should have `#nodes - 1` edges. In the previous example, we have seven vertices, so each node has six edges.

## <a href="#Graph-Applications" class="headerlink" title="Graph Applications"></a>Graph Applications

When edges have values/cost assigned to them, we say we have a **weighted graph**. If the weight is absent, we can assume it’s 1.

![](/images/airports-weighted-graph.jpg "Airports weighted graph")

Weighted graphs have many applications depending on the domain where you need to solve a problem. To name a few:

- Airline Traffic (image above)

  - Node/vertex = Airport
  - Edges = direct flights between two airports
  - Weight = miles between two airports

- GPS Navigation

  - Node = road intersection
  - Edge = road
  - Weight = time required to go from one intersection to another

- Networks routing

  - Node = server
  - Edge = data link
  - Weight = connection speed

In general, graphs have many real-world applications like:

- Electronic circuits
- Flight reservations
- Driving directions
- Telcom: Cell tower frequency planning
- Social networks. E.g., Facebook uses a graph for suggesting friends
- Recommendations: Amazon/Netflix uses graphs to make suggestions for products/movies
- Graphs help to plan the logistics of delivering goods

![](/images/map-graph.jpg "Graph applications: pathfinder")

We just learned the basics of graphs and some applications. Let’s cover how to represent graphs in JavaScript.

## <a href="#Representing-graphs" class="headerlink" title="Representing graphs"></a>Representing graphs

There are two primary ways of representing a graph:

1.  Adjacency list
2.  Adjacency Matrix

Let’s explain it with the following directed graph (digraph) as an example:

![](/images/digraph.png "digraph")

We digraph with 4 nodes. When a vertex has a link to itself (e.g. `a`) is called **self-loop**.

### <a href="#Adjacency-Matrix" class="headerlink" title="Adjacency Matrix"></a>Adjacency Matrix

The adjacency matrix is one way of representing a graph using a two-dimensional array (NxN matrix). In the intersection of nodes, we add 1 (or other weight) if they are connected and `0` or `-` if they are not connected.

Using the same example as before, we can build the following adjacency matrix:

Adjacency Matrix

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>  a b c d e
a 1 1 - - -
b - - 1 - -
c - - - 1 -
d - 1 1 - -</code></pre></td></tr></tbody></table>

As you can see, the matrix list all nodes horizontally and vertically. If there are a few connections, we call it a **sparse graph**. If there are many connections (close to the max number of links), we call it a **dense graph**. If all possible connections are reached, then we have a **complete graph**.

It’s important to notice that the adjacency matrix will **always** be symmetrical by the diagonal for undirected graphs. However, that’s not always the case on a digraph (like our example).

What is the time complexity of finding connections of two vertices?

> Querying if two nodes are connected in an adjacency matrix takes a constant time or _O(1)_.

<span id="Matrix.space"></span>

What is the space complexity?

> Storing a graph as an adjacency matrix has a space complexity of _O(n<sup>2</sup>)_, where `n` is the number of vertices. Also, represented as _O(|V|<sup>2</sup>)_

<span id="Matrix.addVertex"></span>

What is the runtime to add a vertex?

The vertices are stored as a *`V`*x*`V`* matrix. So, every time a vertex is added, the matrix needs to be reconstructed to a *`V+1`*x*`V+1`*.

> Adding a vertex on an adjacency matrix is _O(|V|<sup>2</sup>)_

<span id="Matrix.getAdjacents"></span>

What about getting the adjacent nodes?

Since the matrix has a VxV matrix, we would have to go to the node row to get all the adjacent nodes to a given vertex and get all its edges with the other nodes.

In our previous example, let’s say we want all the adjacent nodes to `b`. We have to get the full row where b is with all the other nodes.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>  a b c d e
b - - 1 - -</code></pre></td></tr></tbody></table>

We have to visit all nodes so,

> Getting adjacent nodes on an adjacency matrix is _O(|V|)_

Imagine that you need to represent the Facebook network as a graph. You would have to create a matrix of 2 billion x 2 billion, where most of it would be empty! Nobody would know everybody else, just a few thousand at most.

In general, we deal with sparse graphs so that the matrix will waste a lot of space. That’s why, in most implementations, we would use an adjacency list rather than the matrix.

### <a href="#Adjacency-List" class="headerlink" title="Adjacency List"></a>Adjacency List

Adjacency List is one of the most common ways to represent graphs. Each node has a list of all the nodes connected to it.

Graphs can be represented as an adjacency list using an Array (or HashMap) containing the nodes. Each node includes a list (Array, linked list, set, etc.) that lists its adjacent nodes.

For instance, in the graph above we have that `a` has a connection to `b` and also a self-loop to itself. In turn, `b` has a connection to `c` and so on:

Adjacency List

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>a -&gt; { a b }
b -&gt; { c }
c -&gt; { d }
d -&gt; { b c }</code></pre></td></tr></tbody></table>

As you can imagine, if you want to know if a node is connected to another node, you would have to go through the list.

> Querying if two nodes are connected in an adjacency list is _O(n)_, where `n` is the number of vertices. Also represented as _O(|V|)_

<span id="List.space"></span>

What about space complexity?

> Storing a graph as an adjacency list has a space complexity of _O(n)_, where `n` is the sum of vertices and edges. Also, represented as _O(|V| + |E|)_

## <a href="#Adjacency-List-Graph-HashMap-Implementation" class="headerlink" title="Adjacency List Graph HashMap Implementation"></a>Adjacency List Graph HashMap Implementation

The adjacency list is the most common way of representing graphs. There are several ways to implement the adjacency list:

One of them is using a HashMap. The `key` is the node’s value, and the `value` is an array of adjacency.

Adjacency List as a Hashmap

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>const graph = {
  a: [&#39;a&#39;, &#39;b&#39;],
  b: [&#39;c&#39;],
  c: [&#39;d&#39;],
  d: [&#39;b&#39;, &#39;c&#39;]
}</code></pre></td></tr></tbody></table>

Graph usually needs the following operations:

- Add and remove vertices
- Add and remove edges

Adding and removing vertices involves updating the adjacency list.

Let’s say that we want to remove the vertex `b`. We could do `delete graph['b'];`. However, we still have to remove the references on the adjacency list on `d` and `a`.

Every time we remove a node, we would have to iterate through all the nodes’ list _O(|V| + |E|)_. Can we do better? We will answer that soon, but first, let’s \*implement our list in a more object-oriented way to swap implementations easily.

## <a href="#Adjacency-List-Graph-OO-Implementation" class="headerlink" title="Adjacency List Graph OO Implementation"></a>Adjacency List Graph OO Implementation

Let’s start with the `Node` class that holds the vertex’s value and adjacent vertices. We can also have helper functions for adding and removing adjacent nodes from the list.

<span id="Node.getAdjacents"></span>

Node[Commented Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/graphs/node.js)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26</code></pre></td><td><pre><code>class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = []; // adjacency list
  }

addAdjacent(node) {
this.adjacents.push(node);
}

removeAdjacent(node) {
const index = this.adjacents.indexOf(node);
if(index &gt; -1) {
this.adjacents.splice(index, 1);
return node;
}
}

getAdjacents() {
return this.adjacents;
}

isAdjacent(node) {
return this.adjacents.indexOf(node) &gt; -1;
}
}</code></pre></td></tr></tbody></table>

Notice that `adjacent` runtime is _O(1)_, while `remove adjacent` is _O(|E|)_. What if, instead of an array, use a HashSet 🧐? It could be _O(1)_. But, let first get it working, and later we can make it faster.

> Make it work. Make it right. Make it faster.

Ok, now that we have the `Node` class, let’s build the Graph class to perform operations such as adding/removing vertices and edges.

**Graph.constructor**

Graph.constructor[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/graphs/graph.js)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10</code></pre></td><td><pre><code>class Graph {
  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new Map();
    this.edgeDirection = edgeDirection;
  }
  // ...
}

Graph.UNDIRECTED = Symbol(&#39;directed graph&#39;); // two-ways edges
Graph.DIRECTED = Symbol(&#39;undirected graph&#39;); // one-way edges</code></pre></td></tr></tbody></table>

The first thing that we need to know is if the graph is directed or undirected. That makes a difference when we are adding edges.

<span id="Graph.addEdge"></span>

**Graph.addEdge**

To add an edge, we need two nodes. One is the source, and the other is the destination.

Graph.addEdge[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/graphs/graph.js)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12</code></pre></td><td><pre><code>addEdge(source, destination) {
  const sourceNode = this.addVertex(source);
  const destinationNode = this.addVertex(destination);

sourceNode.addAdjacent(destinationNode);

if(this.edgeDirection === Graph.UNDIRECTED) {
destinationNode.addAdjacent(sourceNode);
}

return [sourceNode, destinationNode];
}</code></pre></td></tr></tbody></table>

We add an edge from the source vertex to the destination. If we have an undirected graph, we also add from target node to source since it’s bidirectional.

> The runtime of adding an edge from a graph adjacency list is: _O(1)_

If we try to add an edge and the nodes don’t exist, we need to create them first. Let’s do that next!

<span id="Graph.addVertex"></span>

**Graph.addVertex**

The way we create a node is that we add it to the `this.nodes` Map. The map store a key/value pair, where the `key` is the vertex’s value while the map `value` is the instance of the node class. Take a look at line 5-6:

Graph.addVertex[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/graphs/graph.js)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>addVertex(value) {
  if(this.nodes.has(value)) {
    return this.nodes.get(value);
  } else {
    const vertex = new Node(value);
    this.nodes.set(value, vertex);
    return vertex;
  }
}</code></pre></td></tr></tbody></table>

If the node already exists, we don’t want to overwrite it. So, we first check if it already exists, and if it doesn’t, then we create it.

> The runtime of adding a vertex from a graph adjacency list is: _O(1)_

<span id="Graph.removeVertex"></span>

**Graph.removeVertex**

Removing a node from the graph, it’s a little bit more involved. We have to check if the node to be deleted it’s in use as an adjacent node.

Graph.removeVertex[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/graphs/graph.js)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>removeVertex(value) {
  const current = this.nodes.get(value);
  if(current) {
    for (const node of this.nodes.values()) {
      node.removeAdjacent(current);
    }
  }
  return this.nodes.delete(value);
}</code></pre></td></tr></tbody></table>

We have to go through each vertex and then each adjacent node (edges).

> The runtime of removing a vertex from a graph adjacency list is _O(|V| + |E|)_

Finally, let’s remove implement removing an edge!

<span id="Graph.removeEdge"></span>

**Graph.removeEdge**

Removing an edge is pretty straightforward and similar to `addEdge`.

Graph.removeVertex[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/graphs/graph.js)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14</code></pre></td><td><pre><code>removeEdge(source, destination) {
  const sourceNode = this.nodes.get(source);
  const destinationNode = this.nodes.get(destination);

if(sourceNode &amp;&amp; destinationNode) {
sourceNode.removeAdjacent(destinationNode);

    if(this.edgeDirection === Graph.UNDIRECTED) {
      destinationNode.removeAdjacent(sourceNode);
    }

}

return [sourceNode, destinationNode];
}</code></pre></td></tr></tbody></table>

The main difference between `addEdge` and `removeEdge` is that:

- If the vertices don’t exist, we won’t create them.
- We use `Node.removeAdjacent` instead of `Node.addAdjacent`.

Since `removeAdjacent` has to go through all the adjacent vertices, we have the following runtime:

> The runtime of removing an edge from a graph adjacency list is _O(|E|)_

We are going to explore how to search for values from a node.

## <a href="#Breadth-first-search-BFS-Graph-search" class="headerlink" title="Breadth-first search (BFS) - Graph search"></a>Breadth-first search (BFS) - Graph search

Breadth-first search is a way to navigate a graph from an initial vertex by visiting all the adjacent nodes first.

![](https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif "Breadth-First Search in a graph")

Let’s see how we can accomplish this in code:

Graph.bfs[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/graphs/graph.js)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15</code></pre></td><td><pre><code>*bfs(first) {
  const visited = new Map();
  const visitList = new Queue();

visitList.add(first);

while(!visitList.isEmpty()) {
const node = visitList.remove();
if(node &amp;&amp; !visited.has(node)) {
yield node;
visited.set(node);
node.getAdjacents().forEach(adj =&gt; visitList.add(adj));
}
}
}</code></pre></td></tr></tbody></table>

As you can see, we are using a `Queue` where the first node is also the first node to be visited (FIFO). You can find the [Queue implementation here](https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/5628a2772513a05ceb3f088976b81914c9951fd2/src/data-structures/queues/queue.js#L47).

We are using [JavaScript generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator), notice the `*` in front of the function. This generator iterates one value at a time. That’s useful for large graphs (millions of nodes) because you don’t need to visit every single node in most cases.

This an example of how to use the BFS that we just created:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19</code></pre></td><td><pre><code>const graph = new Graph(Graph.UNDIRECTED);

const [first] = graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(5, 2);
graph.addEdge(6, 3);
graph.addEdge(7, 3);
graph.addEdge(8, 4);
graph.addEdge(9, 5);
graph.addEdge(10, 6);

bfsFromFirst = graph.bfs(first);

bfsFromFirst.next().value.value; // 1
bfsFromFirst.next().value.value; // 2
bfsFromFirst.next().value.value; // 3
bfsFromFirst.next().value.value; // 4
// ...</code></pre></td></tr></tbody></table>

You can find more illustrations of usage in the [test cases](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/graphs/graph.spec.js). Let’s move on to the DFS!

## <a href="#Depth-first-search-DFS-Graph-search" class="headerlink" title="Depth-first search (DFS)  - Graph search"></a>Depth-first search (DFS) - Graph search

Depth-first search is another way to navigate a graph from an initial vertex by recursively the first adjacent node of each vertex found.

![](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif "Depth First Search in a graph")

The iterative implementation of a DFS is identical to the BFS, but instead of using a `Queue` you use a `Stack`:

NOTE: [stack implementation](https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/src/data-structures/stacks/stack.js)

Graph.dfs[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/graphs/graph.js)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15</code></pre></td><td><pre><code>*dfs(first) {
  const visited = new Map();
  const visitList = new Stack();

visitList.add(first);

while(!visitList.isEmpty()) {
const node = visitList.remove();
if(node &amp;&amp; !visited.has(node)) {
yield node;
visited.set(node);
node.getAdjacents().forEach(adj =&gt; visitList.add(adj));
}
}
}</code></pre></td></tr></tbody></table>

We can test our graph as follow.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16</code></pre></td><td><pre><code>const graph = new Graph(Graph.UNDIRECTED);

const [first] = graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(5, 2);
graph.addEdge(6, 3);
graph.addEdge(7, 3);
graph.addEdge(8, 4);
graph.addEdge(9, 5);
graph.addEdge(10, 6);

dfsFromFirst = graph.dfs(first);
visitedOrder = Array.from(dfsFromFirst);
const values = visitedOrder.map(node =&gt; node.value);
console.log(values); // [1, 4, 8, 3, 7, 6, 10, 2, 5, 9]</code></pre></td></tr></tbody></table>

As you can see, the graph is the same on BFS and DFS. However, the order of how the nodes were visited is very different. BFS went from 1 to 10 in that order, while DFS went as deep as it could on each node.

## <a href="#Graph-Time-and-Space-Complexity" class="headerlink" title="Graph Time and Space Complexity"></a>Graph Time and Space Complexity

We have seen some of the basic operations of a Graph. How to add and remove vertices and edges. Here’s a summary of what we have covered so far:

<table><thead><tr class="header"><th> </th><th>Adjacency List</th><th>Adjacency Matrix</th></tr></thead><tbody><tr class="odd"><td>Space</td><td><a href="#List.space">O(|V| + |E|)</a></td><td><a href="#Matrix.space">O(|V|<sup>2</sup>)</a></td></tr><tr class="even"><td>addVertex</td><td><a href="#Graph.addVertex">O(1)</a></td><td><a href="#Matrix.addVertex">O(|V|<sup>2</sup>)</a></td></tr><tr class="odd"><td>removeVertex</td><td><a href="#Graph.removeVertex">O(|V| + |E|)</a></td><td><a href="#Matrix.addVertex">O(|V|<sup>2</sup>)</a></td></tr><tr class="even"><td>addEdge</td><td><a href="#Graph.addEdge">O(1)</a></td><td><a href="#Matrix.addVertex">O(1)</a></td></tr><tr class="odd"><td>removeEdge (using Array)</td><td><a href="#Graph.removeEdge">O(|E|)</a></td><td><a href="#Matrix.addVertex">O(1)</a></td></tr><tr class="even"><td>removeEdge (using HashSet)</td><td>O(1)</td><td><a href="#Matrix.addVertex">O(1)</a></td></tr><tr class="odd"><td>getAdjacents</td><td><a href="#Node.getAdjacents">O(|E|)</a></td><td><a href="#Matrix.getAdjacents">O(|V|)</a></td></tr><tr class="even"><td>isAdjacent (using Array)</td><td><a href="#Node.getAdjacents">O(|E|)</a></td><td><a href="#Matrix.getAdjacents">O(1)</a></td></tr><tr class="odd"><td>isAdjacent (using HashSet)</td><td>O(1)</td><td><a href="#Matrix.getAdjacents">O(1)</a></td></tr></tbody></table>

As you can see, an adjacency list is faster in almost all operations. The only action that the adjacency matrix will outperform the adjacency list is checking if a node is adjacent to another. However, if we change our implementation from Array to a HashSet, we can get it in constant time.

## <a href="#Summary" class="headerlink" title="Summary"></a>Summary

As we saw, Graphs can help to model many real-life scenarios such as airports, social networks, the internet, and so on. We covered some of the most fundamental algorithms, such as Breadth-First Search (BFS) and Depth-First Search (DFS). Also, we studied implementation trade-offs such as adjacency lists and matrix. Subscribe to my newsletter and don’t miss any of my posts because there are many other applications that we will learn soon, such as finding the shortest path between nodes and different exciting graph algorithms!

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2018-06-12-Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/Data-Structures-for-Beginners-Trees-binary-search-tree-tutorial/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Tree Data Structures in JavaScript for Beginners

<a href="/Data-Structures-Time-Complexity-for-Beginners-Arrays-HashMaps-Linked-Lists-Stacks-Queues-tutorial/" class="article-nav-older"><strong>older <em></em></strong></a>

Data Structures in JavaScript: Arrays, HashMaps, and Lists

Subscribe & stay up to date!



# tutorial algorithms Series

[<img src="/images/from-code-to-big-o-algorithms-small.png" width="300" height="250" />](/how-to-find-time-complexity-of-an-algorithm-code-big-o-notation/)

### How to find time complexity of an algorithm?

[<img src="/images/graph-interview-questions-small.png" width="300" height="250" />](/how-to-solve-any-graph-2d-arrays-maze-interview-questions-in-javascript-dfs-vs-bfs/)

### How to solve any graph/Maze interview questions in JavaScript? DFS vs. BFS

[<img src="/images/priority-queue-pq-heaps-small.png" width="300" height="250" />](/priority-queue-data-structure-and-heaps-time-complexity-javascript-implementation/)

### Priority Queue Data Structure and Heaps Implemented in JavaScript

[<img src="/images/data-structures-algorithms-time-complexity-big-o-notation-small.jpg" width="300" height="250" />](/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/)

### How you can change the world by learning Data Structures and Algorithms

[<img src="/images/data-structures-must-know-algorithms-running-time-complexity-small.jpg" width="300" height="250" />](/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/)

### 8 time complexities that every programmer should know

[<img src="/images/data-structures-time-complexity-lists-arrays-stacks-queues-hash-maps-sets-small.jpg" width="300" height="250" />](/Data-Structures-Time-Complexity-for-Beginners-Arrays-HashMaps-Linked-Lists-Stacks-Queues-tutorial/)

### Data Structures in JavaScript: Arrays, HashMaps, and Lists

[<img src="/images/graph-data-structures-time-complexity-small.jpg" width="300" height="250" />](/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/)

### Graph Data Structures in JavaScript for Beginners

[<img src="/images/data-structures-for-beginners-trees-binary-search-tree-small.jpg" width="300" height="250" />](/Data-Structures-for-Beginners-Trees-binary-search-tree-tutorial/)

### Tree Data Structures in JavaScript for Beginners

[<img src="/images/data-structures-algorithms-avl-binary-search-trees-small.jpg" width="300" height="250" />](/Self-balanced-Binary-Search-Trees-with-AVL-tree-Data-Structure-for-beginners/)

### Self-balanced Binary Search Trees with AVL in JavaScript

[<img src="/images/data-structures-analysis-of-recursive-algorithms-small.jpg" width="300" height="250" />](/Analysis-of-Recursive-Algorithms/)

### Analysis of Recursive Algorithms

[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents

1.  <a href="#Graphs-Basics" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Graphs Basics</span></a>
2.  <a href="#Graph-Applications" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Graph Applications</span></a>
3.  <a href="#Representing-graphs" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Representing graphs</span></a>
    1.  <a href="#Adjacency-Matrix" class="toc-link"><span class="toc-number">3.1.</span> <span class="toc-text">Adjacency Matrix</span></a>
    2.  <a href="#Adjacency-List" class="toc-link"><span class="toc-number">3.2.</span> <span class="toc-text">Adjacency List</span></a>
4.  <a href="#Adjacency-List-Graph-HashMap-Implementation" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">Adjacency List Graph HashMap Implementation</span></a>
5.  <a href="#Adjacency-List-Graph-OO-Implementation" class="toc-link"><span class="toc-number">5.</span> <span class="toc-text">Adjacency List Graph OO Implementation</span></a>
6.  <a href="#Breadth-first-search-BFS-Graph-search" class="toc-link"><span class="toc-number">6.</span> <span class="toc-text">Breadth-first search (BFS) - Graph search</span></a>
7.  <a href="#Depth-first-search-DFS-Graph-search" class="toc-link"><span class="toc-number">7.</span> <span class="toc-text">Depth-first search (DFS) - Graph search</span></a>
8.  <a href="#Graph-Time-and-Space-Complexity" class="toc-link"><span class="toc-number">8.</span> <span class="toc-text">Graph Time and Space Complexity</span></a>
9.  <a href="#Summary" class="toc-link"><span class="toc-number">9.</span> <span class="toc-text">Summary</span></a>
