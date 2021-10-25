<a href="/categories/programming/" class="category-link">Programming</a> &gt; <a href="/categories/programming/data-structures-and-algorithms-dsa/" class="category-link">Data Structures and Algorithms (DSA)</a>

# How to solve any graph/Maze interview questions in JavaScript? DFS vs. BFS

<span title="Last time this post was updated"> Last updated August 6th 2020 </span> <span class="m-x-2" title="Pageviews"> 5.2k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/how-to-solve-any-graph-2d-arrays-maze-interview-questions-in-javascript-dfs-vs-bfs/">0</span>](#disqus_thread) </span>

- <a href="/tags/algorithms/" class="tag-list-link">algorithms</a><span class="tag-list-count">12</span>
- <a href="/tags/big-o-notation/" class="tag-list-link">big-o notation</a><span class="tag-list-count">3</span>
- <a href="/tags/tutorial-algorithms/" class="tag-list-link">tutorial_algorithms</a><span class="tag-list-count">10</span>

![How to solve any graph/Maze interview questions in JavaScript? DFS vs. BFS](/images/graph-interview-questions-large.png)

Graphs are one of my favorite data structures because you can model many real-life situations with them. Such problems involve finding the shortest paths between 2 or more locations, scheduling courses, finding relationships in family trees, solving mazes, and many more! As a result, it’s ubiquitous in tech interview questions. In this article, we are going to demystify it.

<span id="more"></span>

**In this article you will learn:**

1.  10 steps to avoid getting stuck during coding questions in interviews
2.  How to translate a maze or some “real life” problems into a graph.
3.  How to solve problems using Graph traversing algorithms such as Breadth-First Search (BFS) or Depth-First Search.
4.  When can you use only BFS or DFS or both?

## <a href="#Graph-Representations" class="headerlink" title="Graph Representations"></a>Graph Representations

A Graph can be represented in many ways depending on the problem as a class, Map + Array/Set, implicit graph or adjacency matrix.

**TL;DR**: _When building reusable libraries, you can go with the Graph class implementation. However, when solving a problem quickly (during interviews or one-off problems), go with the implicit implementation if possible or Map+Array representation if you need to build the graph upfront. Don’t use [adjacency matrix](https://master--bgoonz-blog.netlify.app/data-structures-for-beginners-graphs-time-complexity-tutorial/#Adjacency-Matrix) since it usually uses more memory than other alternatives._

### <a href="#Graph-as-a-Class" class="headerlink" title="Graph as a Class"></a>Graph as a Class

You can use OOP to represent graphs, like this:

Graph Class[Full Implementation](https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/src/data-structures/graphs/graph.js)

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
13</code></pre></td><td><pre><code>class Graph {
  constructor() { /* ... */ }

addVertex(value) { /_ ... _/ }
removeVertex(value) { /_ ... _/ }
addEdge(source, destination) { /_ ... _/ }
removeEdge(source, destination) { /_ ... _/ }

areAdjacents(source, destination) { /_ ... _/ }
areConnected(source, destination) { /_ ... _/ }
findPath(source, destination, path = new Map()) { /_ ... _/ }
findAllPaths(source, destination, path = new Map()) { /_ ... _/ }
}</code></pre></td></tr></tbody></table>

**Graph as a class:**

- Very useful for creating libraries or reusable algorithms (find a path, are connected, etc.).
- OOP Style.
- Might be time consuming to implement during coding interviews.

### <a href="#Graph-as-Map-Array" class="headerlink" title="Graph as Map + Array"></a>Graph as Map + Array

Other way to represent graph is like an Map + Array:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>const graph = {
  a: [&#39;b&#39;, &#39;c&#39;],
  b: [&#39;c&#39;],
  c: [],
};</code></pre></td></tr></tbody></table>

ES6+ Map:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>const graph = new Map([
  [&#39;a&#39;, [&#39;b&#39;, &#39;c&#39;]],
  [&#39;b&#39;, [&#39;c&#39;]],
  [&#39;c&#39;, []],
]);</code></pre></td></tr></tbody></table>

**Graph as a HashMap:**

- Very quick to implement
- Might not be reusable since it’s tailor to the specific problem in hand.
- Build the entire graph before solving the problem.

### <a href="#Implicit-Graph" class="headerlink" title="Implicit Graph"></a>Implicit Graph

Some times you don’t have to build a graph upfront. You can calculate adjacent nodes as you go.

For instance, this a template for finding a node in an implicit graph using BFS:

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
19</code></pre></td><td><pre><code>function bfs(target) {
  const queue = [[0, 0]]; // 1. Initialize queue with Node and current distance 0
  const seen = new Set(0); // 2. Initialize set

for (const [current, distance] of queue) { // 3. Loop until the queue is empty
if (current === target) return distance; // 4. Check dequeued is solution
for (const [neighbor, currDist] of getNeighbors(node)) { // 5. Get next possible moves (neighbor nodes)
if (seen.has(neighbor) continue; // 6. Skip seen nodes
seen.add(neighbor); // 7. Mark next node as seen.
queue.push([neighbor, currDist + 1]); // 8. Add neighbor to queue and increase the distance.
}
}

return -1; // 9. If you didn&#39;t find the answer, return something like -1/null/undefined.
}

function getNeighbors(node) {
// TODO: implement based on the problem.
}</code></pre></td></tr></tbody></table>

**Graph on the go**:

- Quick to implement
- Might not be reusable since it’s tailor to the specific problem in hand.
- It doesn’t need to build the complete graph up-front; it will discover adjacent nodes as it goes.

Let’s do some examples of each one so we can drive these concepts home!

## <a href="#Solving-graph-problems" class="headerlink" title="Solving graph problems"></a>Solving graph problems

Let’s see how you can use the afore mention implementations to solve real interview questions.

### <a href="#Explicit-Graph-Structure-Map-Array" class="headerlink" title="Explicit Graph Structure (Map + Array)"></a>Explicit Graph Structure (Map + Array)

Let’s say you are working for a genealogy company, and you need to find if two people are related given a family tree (graph).

In this case, we can translate the family tree into a graph, where the nodes are the people, and the edges are their relationships (Father/Mother, Son/Daugther, etc.)

Let’s take a family for instance and represent it as a graph:

The Simpson Family Tree Example

![](/images/the-simpsons-family-tree.png "The Simpsons Family Tree")

This might be something like this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>// people:
nodes = [&quot;Bart&quot;, &quot;Homer&quot;, &quot;Marge&quot;, &quot;Lisa&quot;, &quot;Moe&quot;, &quot;Herb&quot;, &quot;Abraham&quot;, &quot;Mona&quot;, &quot;Selma&quot;, &quot;Clancy&quot;, &quot;Jackie&quot;, &quot;Bob&quot;];
// relationships:
edges = [[&quot;Bart&quot;,&quot;Homer&quot;],[&quot;Bart&quot;,&quot;Marge&quot;],[&quot;Lisa&quot;,&quot;Homer&quot;],[&quot;Lisa&quot;,&quot;Marge&quot;],[&quot;Herb&quot;,&quot;Abraham&quot;],[&quot;Herb&quot;,&quot;Mona&quot;],[&quot;Homer&quot;,&quot;Abraham&quot;],[&quot;Homer&quot;,&quot;Mona&quot;],[&quot;Selma&quot;,&quot;Clancy&quot;],[&quot;Selma&quot;,&quot;Jackie&quot;],[&quot;Marge&quot;,&quot;Clancy&quot;],[&quot;Marge&quot;,&quot;Jackie&quot;],[&quot;Bob&quot;,&quot;Herb&quot;]];</code></pre></td></tr></tbody></table>

**Interview Question**: Given a graph (nodes and edges) and queries return for each query element `true` if they are related or false if they are not.

Example 1:

- Input:

  <table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
  2
  3</code></pre></td><td><pre><code>nodes = [&quot;Bart&quot;, &quot;Homer&quot;, &quot;Moe&quot;]
  edges = [[&quot;Bart&quot;,&quot;Homer&quot;]]
  queries = [[&quot;Bart&quot;,&quot;Homer&quot;], [&quot;Bart&quot;,&quot;Moe&quot;]];</code></pre></td></tr></tbody></table>

- Output:

  <table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>[true, false]</code></pre></td></tr></tbody></table>

  Bart and Homer are related, so the first element is `true`; Bart and Moe are NOT related, so the 2nd element is `false`.

- Function signature:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>function findRelated(nodes: any[], edges: [any, any][], queries: [any, any][]): boolean[] {
  // TODO: Implement
}</code></pre></td></tr></tbody></table>

Here are some ideas on how to solve this problem:

- We need to traverse the graph from a starting point to a destination.
- If there’s a path, the two people are related (e.g., Home and Bart)
- If no path is found, then the two people are NOT related (e.g., Bart and Moe).
- We can solve this problem by using DFS or BFS.

Do you want to give it a try before looking at the solution? When you are ready, hit `run`!

    function findRelated(nodes, edges, queries) {
      // Write your code here
    }

    // or here ;)

    // ---------------------
    // ------- Tests -------
    // ---------------------
    const assert = require('assert');
    let nodes, edges, queries, expected;

    // TEST 1
    nodes = ["Bart", "Homer", "Marge", "Lisa", "Moe"]; // people
    edges = [["Bart","Homer"],["Bart","Marge"],["Lisa","Homer"],["Lisa","Marge"]]; // relationships
    queries = [['Bart', 'Lisa'], ['Homer', 'Moe']]; // questions
    expected = [true, false];
    assert.deepEqual(findRelated(nodes, edges, queries), expected);

    // TEST 2
    nodes = [1,2,3,4,5];
    edges = [[1,2],[1,3],[2,5]];
    queries = [[1, 1], [1, 2], [1, 4], [1, 5]];
    expected = [true, true, false, true];
    assert.deepEqual(findRelated(nodes, edges, queries), expected);

    // TEST 3
    nodes = ["Bart", "Homer", "Marge", "Lisa", "Moe", "Herb", "Abraham", "Mona", "Selma", "Clancy", "Jackie", "Bob"];
    edges = [["Bart","Homer"],["Bart","Marge"],["Lisa","Homer"],["Lisa","Marge"],["Herb","Abraham"],["Herb","Mona"],["Homer","Abraham"],["Homer","Mona"],["Selma","Clancy"],["Selma","Jackie"],["Marge","Clancy"],["Marge","Jackie"],["Bob","Herb"]];
    queries = [['Bart', 'Lisa'], ['Homer', 'Moe'], ['Lisa', 'Bob'], ['Bart', 'Selma'], ['Moe', 'Lisa']];
    expected = [true, false, true, true, false];
    assert.deepEqual(findRelated(nodes, edges, queries), expected);

    console.log('All tests passed! 👏 🎂');

Here’s my solution to this problem…

Solution and Explanation for find related

The very first thing that we need to do is to build the graph.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>function findRelated(nodes, edges, queries) {
  const graph = nodes.reduce((map, node) =&gt; map.set(node, []), new Map());
  edges.forEach(([u, v]) =&gt; {
    graph.get(u).push(v);
    graph.get(v).push(u); // undirected graph (2-ways)
  });

return queries.map(([u, v]) =&gt; isRelated(graph, u, v));
}</code></pre></td></tr></tbody></table>

How does it work?

- The first function, `findRelated` builds the graph. We are using an undirected graph, so we have to add the relationship both ways
- After creating the graph, we iterate over each query and use the helper function `isRelated` to test if connected.

The `isRelated` function can be implemented as a BFS or DFS.

Let’s see BFS first:

- The helper function `isRelated`, have a start and destination node. We use a `Queue` to navigate the graph.
- We also need a `Set` to keep track of the visited nodes, otherwise, we can fall into an infinite loop.

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
14</code></pre></td><td><pre><code>function isRelated (graph, start, target) {
    const queue = [start];
    const seen = new Set([start]);

    for (let node of queue) {
        if (node === target) return true;
        graph.get(node).forEach(adj =&gt; {
            if (seen.has(adj)) return;
            seen.add(adj);
            queue.push(adj);
        });
    }
    return false;

}</code></pre></td></tr></tbody></table>

Using DFS:

- Usually, DFS is implemented using a Stack, we are using a recursive call which makes use the call stack.
- Notice that we also keep track of the `seen` nodes using a set.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>function isRelated (graph, node, target, seen = new Set()) {
    if (node === target) return true;
    if (seen.has(node)) return false;
    seen.add(node);
    return graph.get(node).some(adj =&gt; isRelated(graph, adj, target, seen));
}</code></pre></td></tr></tbody></table>

As you can see, we can either use a BFS or DFS approach to solve the problem. Not all questions are like that. In the next example, you will see that one of them leads to a more optimal solution than the other.

### <a href="#Implicit-Graph-Build-and-Traverse-as-you-go" class="headerlink" title="Implicit Graph: Build and Traverse as you go"></a>Implicit Graph: Build and Traverse as you go

Let’s solve this example of a combination lock.

> ![Padlock Problem](/images/padlock.png)
>
> You have a combination lock. It has 4 wheels that go from `0` to `9`. Your job is to **find the minimum amount of wheel turns to get to a target combination**. The starting point is always `0000`. However, there are several combinations that you have to avoid: deadends. If you get into a dead-end, the wheels will not turn anymore. If the target combination is impossible to reach return `-1`, otherwise return the minimum number of wheel turns.

Examples 1:

- **Input**: _deadends_ = \[“8888”\], _target_ = “0109”
- **Output**: `2`
- **Explanation**: `0000 -> 0009 -> 0109`

Examples 2:

- **Input**: _deadends_ = \[“8887”,”8889”,”8878”,”8898”,”8788”,”8988”,”7888”,”9888”\], _target_ = “8888”
- **Output**: `-1`
- **Explanation**: We can’t reach without crossing a deadend.

Do you want to give it a try?

    function openLock(deadends, target) {
      // your code goes here!
    }

    // ---------------------
    // ------- Tests -------
    // ---------------------
    const assert = require('assert');
    let deadends, target;

    deadends = ['8888'];
    target = '0109';
    assert.deepEqual(openLock(deadends, target), 2, 'Test #1');

    deadends = ['8887','8889','8878','8898','8788','8988','7888']
    target = '8888';
    assert.deepEqual(openLock(deadends, target), 8, 'Test #2');

    console.log('All tests passed! 👏 🥦');

Solution for open the lock

We could solve the problem using DFS or BFS. However, BFS is much more performant… why? We are looking for a minimum amount of turns. As soon as BFS found the target, that is guaranteed to be the minimum. However, that’s not the case for DFS. It goes deep and might found a solution quicker, but it might not be the minimum amount of turns. With DFS, we have to traverse ALL possibilities to see which path to the target is the shortest.

Here’s the BFS solution

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
25</code></pre></td><td><pre><code>function openLock(deadends, target) {
  const stop = new Set(deadends);
  const queue = [[&#39;0000&#39;, 0]];
  const seen = new Set([&#39;0000&#39;]);

for (const [current, turns] of queue) {
if (stop.has(current)) continue;
if (current === target) return turns;

    for (const next of getNextTurns(current)) {
      if (seen.has(next)) continue;
      seen.add(next);
      queue.push([next, turns + 1]);
    }

}

return -1;
};

function getNextTurns (str) {
return Array.from(str).reduce((arr, char, i) =&gt; arr.concat(
`${ str.slice(0, i) }${ (Number(char) + 1) % 10 }${ str.slice(i+1) }`,
`${ str.slice(0, i) }${ (Number(char) + 9) % 10 }${ str.slice(i+1) }`,
), []);
}</code></pre></td></tr></tbody></table>

We will generate around 8 combinations on each step, and these 8 combinations create 7 more each one (we skip seen nodes) and so on.

![](/images/padlock-combinaitons-graph.svg "combinations graph")

If you want to see more levels of combination take a look here: [combinations graph up to 3 levels](/images/padlock-combinaitons-graph-2.svg)

## <a href="#Breadth-First-Search-BFS-vs-Depth-First-Search-DFS" class="headerlink" title="Breadth-First-Search (BFS) vs Depth-First-Search (DFS)"></a>Breadth-First-Search (BFS) vs Depth-First-Search (DFS)

The most common graph traversal algorithms are breadth-first-search (BFS) and depth-first-search (DFS). BFS covers all cases adjacent paths nearby and then expand, while DFS goes deep on one way and only comes back when there’s nowhere else to go.

![](https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif)

![](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

Breadth-First-Search (BFS)

Depth-First-Search (DFS)

In the pictures above, you can see that BFS goes level by level, while DFS goes as deep as it can in a branch.

In general, you want to use DFS when…

- The solutions are far away from the starting point.
- If the graph/tree/maze might be wide but not too deep (e.g., graph is finite).
- There are too many adjacent nodes to be practical for BFS.
- Usually used for game simulations where the number of possible moves is massive. DFS make a decision, then explore all paths through this decision. And if this decision leads to a win situation, we stop.
- **Real-world applications of DFS**: topological sorting (use for scheduling a sequence of jobs or tasks based on their dependencies), spreadsheets, build systems, data serialization, etc.

You want to use BFS when…

- The solution is near to the starting point.
- If the graph/tree/maze is extremely deep but not too wide (e.g., the graph might be infinite).
- The number of adjacent nodes is limited. (e.g., for our case, each cell has 8 next possible moves)
- Usually used for finding the shortest path between two nodes.
- **Real-world applications of BFS**: anything that can benefit from finding the shortest path, such as GPS Navigation systems (Google Maps), Peer to peer (P2P) applications such as the torrent clients. Other usages are web crawlers, social networks, etc.

Since the board is infinite, DFS won’t work for us. If it chooses a path that doesn’t contain the target location, it will never find an end. So, BFS is the right approach here!

## <a href="#Steps-to-solve-algorithmic-questions-on-interviews" class="headerlink" title="Steps to solve algorithmic questions on interviews"></a>Steps to solve algorithmic questions on interviews

In these section, we are going to practice some real interview questions. First, we are going to introduce 10 steps to avoid you getting in stuck in an interview. Finally, we are going to cover some examples. The only way to get better at it is through Practice, Practice, and more Practice.

### <a href="#Ten-steps-to-avoid-getting-stuck" class="headerlink" title="Ten steps to avoid getting stuck"></a>Ten steps to avoid getting stuck

1.  👂 Listen/read carefully and repeat the question out loud (in your own words).
2.  🗣 Ask clarifying questions to help understand the problem better.
3.  🎨 Create 2-3 examples and draw diagrams about the problem.
4.  💪 Find a brute force solution as soon as possible (how would you do it manually). But don’t implement it yet!
5.  🎯 Determine what’s the best time complexity, theoretically. E.g. `O(n)` or `O(m * n)`, etc.
6.  🧠 Brainstorm different approaches (Think out loud). State the runtime (Big O) of each one.
7.  📝 Let’s CODE: Implement the best approach you have so far (or the brute force, better something than nothing) while following a **simple and short** example. You can write the code while testing multiple cases at once to save time.
8.  🏃‍♂️ DRY RUN: Test your implementation **on your mind.** Imagine you are the compiler, and you have to tell the output of EACH LINE. Make fixes as needed. (For some companies, the code execution is disabled (Facebook), and others use a Google Doc (Google), so it’s vital to learn to test the code in your mind.)
9.  💻 RUN YOUR CODE if allowed
10. 🐛 Fix issues as they emerge and repeat previews steps if necessary.

### <a href="#Interview-Questions-for-Practice" class="headerlink" title="Interview Questions for Practice"></a>Interview Questions for Practice

Here are some exercises for you to practice the ten steps and the solutions to some. These steps are especially necessary when you are not given the function signature nor examples. Sometimes, you have to figure them out by asking questions.

Let’s do a simulation!

#### <a href="#Chess-Knight-Problem-♞" class="headerlink" title="Chess Knight Problem ♞"></a>Chess Knight Problem ♞

> Given an **infinite** chessboard, find out how many moves does the knight needs to reach a given square on the board.

**Asking Clarifying questions**

Once you understand the statement, the first thing you need to do before doing any code is to **ask clarifying questions**. Try to come up with some questions you would ask before looking at my clarifying questions below.

Examples of clarifying questions...

What do you mean by infinite board?  
A regular chess board it's an 8x8 grid but for this questions we have a infinite board (very big limits 1M+ x 1M+). This means the solution better be efficient.

<!-- -->

How do we know the initial position of the knight?  
Let's say it starts in the coordinates 0,0.

<!-- -->

How does the knight moves again? Is like an \`L\`, right?  
Yes, It may move two squares vertically and one square horizontally, or two squares horizontally and one square vertically (with both forming the shape of an L)

<!-- -->

Given enough movements does the knight reach every point in the board?  
Yes ![](https://upload.wikimedia.org/wikipedia/commons/c/ca/Knights-Tour-Animation.gif)

<!-- -->

How's the target location given? As an x, y coordinates?  
Yes, coordinates relative to the starting point.

After you ask some clarifying questions, the next step is to come up with some examples. Before you write any code, try to identify edge cases and possible scalability problems. Examples are critical to your success! Let’s draw a board with some possible target positions.

![](/images/infinite-chessboard.png "infinite chessboard")

The first case, T1, is in the best-case scenario. It’s just one hop away; the second case is compelling because you have to move away from the starting point and then come back. The other two cases are just far away destinations.

Now that you have some examples, it’s time to brainstorm approaches! No coding yet!

If you are familiar with graphs, you might notice that this can be seen as a graph problem. The starting position can be seen as a node, and then each of the next 8 locations are the adjacent nodes.

![](/images/chessboard-knight-next-moves.png "chessboard knight next moves")

So basically, once we have a starting point and adjacent nodes that we can visit, this can be solved using a graph traversal algorithm.

**Solution**

First, give it a try yourself before looking at my answer, but don’t spin your wheels for too long. If you haven’t get it working after 35 minutes, take a peek at the answer. Then try again on your own.

    /**
     * Given an infinite chessboard, find out how many moves does
     * the knight needs to reach a given square coordinate on the board.
     *
     * @param {Number} dx - Destination x coordinate
     * @param {Number} dy - Destination y coordinate
     * @returns {Number} minimum number of moves to reach target
     */
    function knightMoves(dx, dy) {
        // write your awesome code here!
    }

    // ---------------------
    // ------- Tests -------
    // ---------------------
    const assert = require('assert');

    assert.equal(knightMoves(0, 0), 0, 'finds t0');
    assert.equal(knightMoves(1, 2), 1, 'finds t1');
    assert.equal(knightMoves(0, 1), 3, 'finds t2');
    assert.equal(knightMoves(6, -6), 4, 'finds t3');
    assert.equal(knightMoves(0, 7), 5, 'finds t4');
    assert.equal(knightMoves(170, 123), 99, 'finds far far away galaxies');

    console.log('Congrats! 👏👏👏  All tests passed! 🎂');

My answer (click to expand)

Here’s an interview friendly solution:

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
16</code></pre></td><td><pre><code>function knightMoves(dx, dy) { // destination x and y
  const queue = [[[0, 0], 0]];
  const seen = new Set([0, 0].toString());

for (const [[x, y], moves] of queue) { // current x and y
    if (x === dx &amp;&amp; y === dy) return moves;
    const next = [1, -1].map((i) =&gt; [2, -2].map((j) =&gt; [[x + i, y + j], [x + j, y + i]])).flat(2);
for (const [nx, ny] of next) { // next x and y
if (seen.has([nx, ny].toString())) continue;
seen.add([nx, ny].toString());
queue.push([[nx, ny], moves + 1]);
}
}

return -1;
}</code></pre></td></tr></tbody></table>

What??? No fancy `Graph` nor `Queue` class? And less than 20 lines of code?! Yep 😉

We have an old-school array as a Queue, where we store 3 values: the `[x, y]` coordinate and the number of `moves` so far. We initialized everything to `0`.

It’s vital to keep track of the positions that you have “seen.” Otherwise, you will repeat visited places and make your program very slow or run out of memory! For that, we have a `Set`.

GOTCHA: the `Set` in JavaScript for Array values works by reference and not by value. To overcome this issue, we have to convert the array to a string.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>const s = new Set();

s.add([0, 0]);
console.log(s.has([0, 0])); // false 🙀

s.add([0, 0].toString());
console.log(s.has([0, 0].toString())); // true 👍</code></pre></td></tr></tbody></table>

Ok, moving on, We reach the `for...of` loop. Here we dequeue values. Notice that we are NOT using `queue.shift()`, to take values from the front of the queue. This is because `shift` has a time complexity of `O(n)`. It will take the first element from the array and then “shift” all the other elements one position. Imagine that you have an array of millions of items. It will move all of them! There are two ways to avoid that overhead; we iterate the queue or implement a queue using a LinkedList.

After we dequeue an element, the first thing we do is to check if it is a solution. If it is, we return the number of movements that took us to get there, and we are done!

If the dequeued element didn’t match the target, we need to calculate the next eight possible positions given the current x and y. Remember a knight moves in L, so it will be translated to `1` position on `x` and `2` on `y` or vice-versa:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>const next = [[x + 1, y + 2], [x + 2, y + 1], [x + 2, y - 1], [x + 1, y - 2], [x - 1, y - 2], [x - 2, y - 1], [x - 2, y + 1], [x - 1, y + 2]];
// for x=0, y=0: [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]]</code></pre></td></tr></tbody></table>

You can also get fancy and calculate it using two `Array.map`s

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>const next = [1, -1].map((i) =&gt; [2, -2].map((j) =&gt; [[x + i, y + j], [x + j, y + i]])).flat(2);
// for x=0, y=0: [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]]</code></pre></td></tr></tbody></table>

Or also, using two `Array.reduce`s

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>const next = [1, -1].reduce((a, i) =&gt; [2, -2].reduce((b, j) =&gt; [...b, [x + i, y + j], [x + j, y + i]], a), []);
// for x=0, y=0: [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]]</code></pre></td></tr></tbody></table>

Once you generate the 8 next positions, you need to add them all to the queue and add `+1` to the current place. Finally, we don’t add a location to the queue if we have already seen it before.

That’s it!

How did you do? Paste your solution and questions in the comments section!

Most BFS problems follow the same pattern:

1.  Initialize queue
2.  Initialize set to keep track of the visited positions.
3.  Loop until the queue is empty or you find a solution.
4.  Dequeue element from the queue and check if it’s a solution.
5.  If it’s not part of the solution, move to get the next possible moves (neighbor nodes).
6.  Skip seen nodes.
7.  Mark the next node, as seen.
8.  Add neighbors to queue and increase the distance.
9.  If you didn’t find the answer, return something like -1/null/undefined.

#### <a href="#BFS-Template" class="headerlink" title="BFS Template"></a>BFS Template

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
19</code></pre></td><td><pre><code>function bfs(target) {
  const queue = [[0, 0]]; // 1. Initialize queue with Node and current distance 0
  const seen = new Set(0); // 2. Initialize set

for (const [current, distance] of queue) { // 3. Loop until the queue is empty
if (current === target) return distance; // 4. Check dequeued is solution
for (const [neighbor, currDist] of getNeighbors(node)) { // 5. Get next possible moves (neighbor nodes)
if (seen.has(neighbor) continue; // 6. Skip seen nodes
seen.add(neighbor); // 7. Mark next node as seen.
queue.push([neighbor, currDist + 1]); // 8. Add neighbor to queue and increase the distance.
}
}

return -1; // 9. If you didn&#39;t find the answer, return something like -1/null/undefined.
}

function getNeighbors(node) {
// TODO: implement based on the problem.
}</code></pre></td></tr></tbody></table>

Here’s another exercise to practice

#### <a href="#Maze-Path" class="headerlink" title="Maze Path"></a>Maze Path

> You have a ball at a starting point, that can roll up, down, left and right. However, the ball won’t stop rolling until it hits a wall. Your task is to check if there’s a path from start to destination. You may assume that the borders of the maze are all walls.
>
> The maze is represented in a grid (2d array):
>
> - Walls are represented as `1`.
> - Empty spaces are `0`.
>
> E.g.:
>
> ![maze ball game](/images/maze-ball-game-by-me2.png)
>
>     start = [ 0, 4 ]
>     end = [ 4, 4 ]
>     maze = [
>       [ 0, 0, 1, 0, 0 ],
>       [ 0, 0, 0, 0, 0 ],
>       [ 0, 0, 0, 1, 0 ],
>       [ 1, 1, 0, 1, 1 ],
>       [ 0, 0, 0, 0, 0 ]
>     ]

Give it a try!

    /**
     * You have a ball at a starting point that can roll up, down, left and right.
     * However, the ball won't stop rolling until it hits a wall.
     * Your tasks is to check if there's a path from start to destination
     * You may assume that the borders of the maze are all walls.
     *
     * @param {number[][]} maze - 2D array where 1 = wall and 0 = empty.
     * @param {number[]} start - [row, col] of the starting point
     * @param {number[]} destination - [row, col] target destination
     * @return {boolean}
     */
    function hasPath(maze, start, destination) {

    };

    // --- testing ---

    const assert = require('assert');

    assert.equal(hasPath([
      [ 0 ]
    ], [0, 0], [0, 0]), true, 'should pass case #1');

    assert.equal(hasPath([
      [ 1 ]
    ], [0, 0], [0, 0]), false, 'should pass case #2');

    assert.equal(hasPath([
      [ 0, 0, 0 ]
    ], [0, 0], [0, 2]), true, 'should pass case #3');

    assert.equal(hasPath([
        [ 0, 0, 0 ],
    ], [0, 0], [0, 1]), false, 'should pass case #4');

    assert.equal(hasPath([
      [ 0, 1, 0 ],
    ], [0, 0], [0, 2]), false, 'should pass case #5');

    assert.equal(hasPath([
      [ 0, 1, 0 ],
      [ 0, 0, 0 ],
    ], [0, 2], [0, 0]), true, 'should pass case #6');

    assert.equal(hasPath([
      [ 0, 0, 1, 0, 0 ],
      [ 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 1, 0 ],
      [ 1, 1, 0, 1, 1 ],
      [ 0, 0, 0, 0, 0 ]
    ], [ 0, 4 ], [ 3, 2 ]), false, 'should pass case #7');

    assert.equal(hasPath([
      [ 0, 0, 1, 0, 0 ],
      [ 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 1, 0 ],
      [ 1, 1, 0, 1, 1 ],
      [ 0, 0, 0, 0, 0 ]
    ], [ 0, 4 ], [ 4, 4 ]), true, 'should pass case #8');

    console.log('Congrats! 👏👏👏  All tests passed! 🍎');

My answer to the maze problem

We can solve this problem using the BFS template. The tricky part is to know that the ball is going to roll until it hit a wall. So, we have to roll in one direction until we hit a wall (1) or end.

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
22</code></pre></td><td><pre><code>function hasPath(maze, start, dest) {
  const queue = [[start, 0]];
  const seen = new Set([start.join()]);
  const directions = [[0,1], [0,-1], [1,0], [-1,0]]; // right, left, down and up.

for (let [[r, c], dist] of queue) {
if (r === dest[0] &amp;&amp; c === dest[1] &amp;&amp; maze[r] &amp;&amp; maze[r][c] === 0) return true;

    for (let [dr, dc] of directions) {
      let nr = r, nc = c; // IMPORTANT: reset coordinates
      while (maze[nr + dr] &amp;&amp; maze[nr + dr][nc + dc] === 0) {
          nr += dr;
          nc += dc;
      }
      if (seen.has([nr, nc].join())) continue;
      seen.add([nr, nc].join());
      queue.push([[nr, nc], dist + 1]);
    }

}

return false;
};</code></pre></td></tr></tbody></table>

How did you do? Feel free to ask me any questions below!

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/how-to-solve-any-graph-2d-arrays-maze-interview-questions-in-javascript-dfs-vs-bfs.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/how-to-find-time-complexity-of-an-algorithm-code-big-o-notation/" class="article-nav-newer"><strong><em></em> newer</strong></a>

How to find time complexity of an algorithm?

<a href="/angular-todo-mean-stack-node-mongodb-typescript-tutorial/" class="article-nav-older"><strong>older <em></em></strong></a>

Modern MEAN Stack Tutorial with Docker (Angular, Node, Typescript and Mongodb)

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

1.  <a href="#Graph-Representations" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Graph Representations</span></a>
    1.  <a href="#Graph-as-a-Class" class="toc-link"><span class="toc-number">1.1.</span> <span class="toc-text">Graph as a Class</span></a>
    2.  <a href="#Graph-as-Map-Array" class="toc-link"><span class="toc-number">1.2.</span> <span class="toc-text">Graph as Map + Array</span></a>
    3.  <a href="#Implicit-Graph" class="toc-link"><span class="toc-number">1.3.</span> <span class="toc-text">Implicit Graph</span></a>
2.  <a href="#Solving-graph-problems" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Solving graph problems</span></a>
    1.  <a href="#Explicit-Graph-Structure-Map-Array" class="toc-link"><span class="toc-number">2.1.</span> <span class="toc-text">Explicit Graph Structure (Map + Array)</span></a>
    2.  <a href="#Implicit-Graph-Build-and-Traverse-as-you-go" class="toc-link"><span class="toc-number">2.2.</span> <span class="toc-text">Implicit Graph: Build and Traverse as you go</span></a>
3.  <a href="#Breadth-First-Search-BFS-vs-Depth-First-Search-DFS" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Breadth-First-Search (BFS) vs Depth-First-Search (DFS)</span></a>
4.  <a href="#Steps-to-solve-algorithmic-questions-on-interviews" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">Steps to solve algorithmic questions on interviews</span></a>
    1.  <a href="#Ten-steps-to-avoid-getting-stuck" class="toc-link"><span class="toc-number">4.1.</span> <span class="toc-text">Ten steps to avoid getting stuck</span></a>
    2.  <a href="#Interview-Questions-for-Practice" class="toc-link"><span class="toc-number">4.2.</span> <span class="toc-text">Interview Questions for Practice</span></a>
        1.  <a href="#Chess-Knight-Problem-%E2%99%9E" class="toc-link"><span class="toc-number">4.2.1.</span> <span class="toc-text">Chess Knight Problem ♞</span></a>
        2.  <a href="#BFS-Template" class="toc-link"><span class="toc-number">4.2.2.</span> <span class="toc-text">BFS Template</span></a>
        3.  <a href="#Maze-Path" class="toc-link"><span class="toc-number">4.2.3.</span> <span class="toc-text">Maze Path</span></a>
