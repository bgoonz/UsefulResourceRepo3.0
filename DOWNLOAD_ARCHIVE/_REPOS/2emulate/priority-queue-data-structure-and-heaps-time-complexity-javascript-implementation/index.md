<a href="/categories/programming/" class="category-link">Programming</a> &gt; <a href="/categories/programming/data-structures-and-algorithms-dsa/" class="category-link">Data Structures and Algorithms (DSA)</a>

# Priority Queue Data Structure and Heaps Implemented in JavaScript

<span title="Last time this post was updated"> Last updated July 5th 2021 </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/priority-queue-data-structure-and-heaps-time-complexity-javascript-implementation/">0</span>](#disqus_thread) </span>

- <a href="/tags/algorithms/" class="tag-list-link">algorithms</a><span class="tag-list-count">12</span>
- <a href="/tags/big-o-notation/" class="tag-list-link">big-o notation</a><span class="tag-list-count">3</span>
- <a href="/tags/tutorial-algorithms/" class="tag-list-link">tutorial_algorithms</a><span class="tag-list-count">10</span>

![Priority Queue Data Structure and Heaps Implemented in JavaScript](/images/priority-queue-pq-heaps-large.jpg)

A priority queue is a versatile data structure that is good to have under your algorithmic toolbelt. In this post, we discuss, what it is, real-world applications, and we explore two different implementations, the latter one being more robust.

<span id="more"></span>

## <a href="#What’s-a-Priority-Queue-PQ" class="headerlink" title="What’s a Priority Queue (PQ)?"></a>What’s a Priority Queue (PQ)?

A priority queue is a data structure that extends the queue by a priority dimension. Let’s expand both terms. The **queue** is a list of elements taken in the same order as they arrived. For instance, a line of people waiting to pay at the Supermarket behaves like a queue: first-in, first-served, or FIFO (first in, first out).

The _priority queue_ adds a priority to each element’s value. If we go back to the example of a line of people in a supermarket. You can add preferred lanes, for example, Seniors (65+ years old) and pregnant women. If you have Seniors in the line, you will take them first, even if other people arrived before them. That’s what a priority queue (PQ) does. If all elements in a PQ have the same priority, then it will behave like a regular queue.

![priority queue as line of people](/images/priority-queue-pq-heap.png)

Why a priority queue? Can’t we just have different queues for each priority? That only works if you have a few priorities, but sometimes you have infinite possibilities (e.g., the distance between two points, ETA, etc.). Later in this post, we will explore how we can implement an efficient solution for these cases.

## <a href="#What-is-a-priority-queue-good-for-Applications" class="headerlink" title="What is a priority queue good for? / Applications"></a>What is a priority queue good for? / Applications

There are many real-world applications for priority queues, such as:

- System to triage hospital patients and attend them by their severity order.
- Forward network packages in order of urgency (e.g., “real-time video call” should go before “time sync checks,” so to speak)
- Scheduling tasks in a system: “critical” goes before “shadow drawing” for instance.
- Asynchronous control flows like firing events (or notifying observers) in a certain order.
- Keeping track of top k elements efficiently
- Keeping track of median numbers in constant time
- Used in some graph algorithms like Dijkstra for finding the shortest path between two points. The distance among points is used as a priority.

Some priority queue JavaScript implementations on the wild:

- **closure-library**: [heap.js](https://github.com/google/closure-library/blob/master/closure/goog/structs/heap.js), [priorityqueue.js](https://github.com/google/closure-library/blob/master/closure/goog/structs/priorityqueue.js)
- **dsa.js**: [heap.js](https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/src/data-structures/heaps/heap.js), [priority-queue.js](https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/src/data-structures/heaps/priority-queue.js), [min-heap.js](https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/src/data-structures/heaps/min-heap.js), [max-heap.js](https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/src/data-structures/heaps/max-heap.js)
- **async** : [priorityQueue.js](https://github.com/caolan/async/blob/master/lib/priorityQueue.js), [Heap.js](https://github.com/caolan/async/blob/master/lib/internal/Heap.js).
- **datastructures-js**: [heap.js](https://github.com/datastructures-js/heap/blob/master/src/heap.js), [priorityQueue.js](https://github.com/datastructures-js/priority-queue/blob/master/src/priorityQueue.js)

This tutorial will start with a simple implementation and then build it to a robust implementation while making it easy to follow.

### <a href="#Implementing-a-Priority-Queue-PQ-in-JavaScript" class="headerlink" title="Implementing a Priority Queue (PQ) in JavaScript"></a>Implementing a Priority Queue (PQ) in JavaScript

JavaScript standard doesn’t provide a default implementation that we can use. So, we are going to define our own. But, even if you use another language that has it in their standard API, it’s still good to know how it works so you can reason about the time complexity of their operations.

Without any further ado, let’s get to it!

### <a href="#Priority-Queue-operations" class="headerlink" title="Priority Queue operations"></a>Priority Queue operations

As always, there are many ways to solve the same problem. We are going to brainstorm some approaches along with their pros and cons. Yes, there’s never a perfect approach. However, we can learn to analyze the trade-offs and how we can improve our algorithms better.

The essential operations of the priority queue are:

- enqueue: insert elements on the queue
- dequeue: remove elements from the queue in the same order they were inserted.

Priority queue usually has a comparison function. Since our data could be simple (just an array of numbers where the value and priority are the same) or compound, where we have multiple fields (e.g. the priority could be the age of a student object). The comparator function tells our PQ what we can use as a priority. Here’s an example:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>const pq= new PriorityQueue((x, y) =&gt; y.age - x.age);
pq.enqueue({ name: &#39;Maria&#39;, age: 23 });
pq.enqueue({ name: &#39;Nushi&#39;, age: 42 });
pq.enqueue({ name: &#39;Jose&#39;, age: 32 });

pq.dequeue(); // { name: &#39;Nushi&#39;, age: 42 }
pq.dequeue(); // { name: &#39;Jose&#39;, age: 32 }
pq.dequeue(); // { name: &#39;Maria&#39;, age: 23 }</code></pre></td></tr></tbody></table>

As you can see, the comparator function dequeue elements with the highest age first. This is called a Max-PQ. We can invert the minuend and subtrahend to get a Min-PQ. Another possibility to use the name as a priority.

Now that we have a general idea of how a PQ API works let’s explore how we can implement it.

#### <a href="#Naive-Priority-Queue-implemented-using-Array-Sorting" class="headerlink" title="Naive: Priority Queue implemented using Array + Sorting"></a>Naive: Priority Queue implemented using Array + Sorting

You can implement a regular queue using an array or linked list. However, priority queues have a new dimension: It needs to sort elements by priority. So, can we just sort a regular array queue every time we insert a new element? Yes, we can! But let’s see how it will perform.

**Enqueue**

Every time we insert a new element, we need to sort the elements. That’s **O(n log n)**.

Complexity

- Time: O(n log n), insertion into an array is constant but sorting takes n log n.
- Space: O(n), the space used in memory will grow proportionally to the number of elements in the queue.

Here’s the implementation of the Enqueue method:

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
18</code></pre></td><td><pre><code>class NaivePQ {
  constructor(comparator = (a, b) =&gt; a - b) {
    this.array = [];
    this.comparator = comparator;
  }

/\*\*

- Insert element
- @runtime O(n log n)
- @param {any} value
  \*/
  add(value) {
  this.array.push(value);
  this.array.sort(this.comparator);
  }

//...
}</code></pre></td></tr></tbody></table>

**Dequeue**

Dequeue removes elements from the PQ. We need to find the element with the highest priority and then return that. The highest number will be first element, so that’s O(1) operation. However, we need to move the rest of the elements to fill the gap. That’s **O(n)**.

Complexity

- Time: O(n), finding the top element.
- Space: O(n), space is technically O(n-1). However, we just care about the “higher order” term, so O(n).

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>/**
 * Retrieves and removes the head or returns null if this Heap is empty.
 * @runtime O(n)
 */
remove() {
  if (!this.size) return null;
  const value = this.array.shift(); // remove element
  return value;
}</code></pre></td></tr></tbody></table>

**Improving PQ implementation**

Can we do better? We could do nothing after insertion **O(1)** and then delegate the finding of the element with the highest priority to **dequeue** (if max-heap). That would be **O(n).**

**O(n)** as time complexity is not bad. It’s better than sorting all elements on every insertion **O(n log n)**. Still, how can we improve this? If we use a data structure that keeps the max element at the top in less than O(n), that would be great! Good news, that’s what a heap is for!

#### <a href="#Priority-Queue-implemented-using-a-Heap" class="headerlink" title="Priority Queue implemented using a Heap"></a>Priority Queue implemented using a Heap

A **heap** is a tree data structure that keeps to max or min element at the root. So you can have a max-heap or min-heap. Regardless, they have two basic operations: insert and remove.

Conceptually the heaps can be represented as a complete binary tree. With the following rules or invariants:

1.  The parent node should be smaller (or equal) than the two children for a Min-Heap. For a max-heap is the opposite, the parent node should be bigger (or equal) than the two children.
2.  The binary tree should be complete (all levels are completely filled. The only exception is the last level which might not be full, but the ones filled comes from left to right without gaps)

![Min-Heap vs Max-Heap](/images/min-heap-vs-max-heap.png)

Even though a heap is conceptually a binary tree, it can be implemented using an array since it’s a complete tree. The first element on the array is the **root**. The following two elements are the root’s children, the 4th and 5th elements are the 2nd element’s children, and so on.

![Tree/Heap to Array Representation](/images/tree-to-array-representation.png)

You can calculate the following formula to translate tree to array:

- parent(i) = Math.ceil(i / 2 - 1)
- leftChild(i) = 2 \* i + 1
- rightChild2(i) = 2 \* i + 1

**What’s the time complexity of heaps and Priority Queue?**

Again the PQ has two primary operations: enqueue and dequeue. So, let’s see how we can do this with a heap.

**Enqueue**

The algorithm to insert an element in a heap is as follows:

1.  Insert the element into the next empty position (tail).
2.  From that position, “bubble up” the element to keep the min-heap invariant “parent should be smaller than any children” (the opposite if max-heap). If the invariant is broken, fix it by swapping the node with its parent and repeat the process all the way to the root node if necessary.

Here’s an implementation of the Heap. Also we are using a comparator function so we can define the priority.

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
26
27
28
29</code></pre></td><td><pre><code>class Heap {
  constructor(comparator = (a, b) =&gt; a - b) {
    this.array = [];
    this.comparator = (i1, i2) =&gt; comparator(this.array[i1], this.array[i2]);
  }

/\*\*

- Insert element
- @runtime O(log n)
- @param {any} value
  \*/
  add(value) {
  this.array.push(value);
  this.bubbleUp();
  }

/\*\*

- Move new element upwards on the Heap, if it&#39;s out of order
- @runtime O(log n)
  \*/
  bubbleUp() {
  let index = this.size - 1;
  const parent = (i) =&gt; Math.ceil(i / 2 - 1);
  while (parent(index) &gt;= 0 &amp;&amp; this.comparator(parent(index), index) &gt; 0) {
  this.swap(parent(index), index);
  index = parent(index);
  }
  }
  }</code></pre></td></tr></tbody></table>

This algorithm can keep a heap sorted in O(**log n**) because it only visits half of the tree at most.

\*“Why **log n?**“\*\*\*,\*\* you asked.

Because that’s the maximum number of swaps that you would have to bubble up the newly inserted element.

I see, but where did you that _log n_ from?

![binary tree parts](/images/binary-tree-parts.png)

Well, in a complete binary tree, you double the number of nodes at each level. If you use some intuition and math you can find the following relationship:

- Level 0: 2<sup>0</sup> = 1 node (root)
- Level 1: 2<sup>1</sup> = 2 nodes
- Level 2: 2<sup>2</sup> = 4 nodes
- Level 3: 2<sup>3</sup> = 8 nodes
- …
- Level h: 2<sup>h</sup> = 2<sup>h</sup> nodes

---

- Total number of nodes, n: 1 + 2 + 4 + 8 + … + 2<sup>h</sup>

So, we have a formula that relates the total number of nodes with the tree’s height. The height is essential because that will be the maximum number of times we would swap nodes when we insert a new element in the Heap.

Using [geometric progression](https://en.wikipedia.org/wiki/Geometric_progression) and the total number of nodes formulas we have:

\` 2^{0}+2^{1}+2^{2}+2^{3}+\\cdots +2^{k-1} = \\sum \_{i=0}^{k-1}2^{i} = 2^{k}-1 \`

\` n = 2^{h + 1} - 1 \`

\` \\log \_{2}(n + 1) = h + 1 \`

\` h = \\log \_{2}(n + 1) - 1 \`

Well, there you have it. That’s where the **log n** comes from.

Complexity:

- Time: O(log n), in the worst case, you will have to bubble up the inserted element up to the root of the tree. These will involve log n swaps, where n is the total number of nodes.
- Space: O(n)

**Dequeue**

The algorithms for dequeuing an element from a PQ is the following:

1.  Remove the root element
2.  Since the root element is gone, you need to fill the hole by promoting a child to take its place. This process is called “heapify” or `bubbleDown`. You choose the child that has the min value for min-heap (or max value for max-heap). You do this recursively until you found a leaf (node without children).

Complexity:

- Time: O(log n), The maximum number of swaps is given by the tree’s height, which is log n.
- Space: O(n).

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
26
27
28
29</code></pre></td><td><pre><code>/**
 * Retrieves and removes the head of this Heap or returns null if this Heap is empty.
 * @runtime O(log n)
 */
remove(index = 0) {
  if (!this.size) return null;
  this.swap(index, this.size - 1); // swap with last
  const value = this.array.pop(); // remove element
  this.bubbleDown(index);
  return value;
}

/\*\*

- After removal, moves element downwards on the Heap, if it&#39;s out of order
- @runtime O(log n)
  _/
  bubbleDown(index = 0) {
  let curr = index;
  const left = (i) =&gt; 2 _ i + 1;
  const right = (i) =&gt; 2 \* i + 2;
  const getTopChild = (i) =&gt; (right(i) &lt; this.size
  &amp;&amp; this.comparator(left(i), right(i)) &gt; 0 ? right(i) : left(i));

while (left(curr) &lt; this.size &amp;&amp; this.comparator(curr, getTopChild(curr)) &gt; 0) {
const next = getTopChild(curr);
this.swap(curr, next);
curr = next;
}
}</code></pre></td></tr></tbody></table>

You can find the full implementation at: <https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/src/data-structures/heaps/heap.js>

## <a href="#Summary" class="headerlink" title="Summary"></a>Summary

In these post we learned about the usages of a priority queue and how to implement it with an array+sorting and using array-based heap. We also explored it’s time complexity for each implementation so we can verify that the heap implementation is more efficient.

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/priority-queue-data-structure-and-heaps-time-complexity-javascript-implementation.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/2020-recap-and-how-i-got-my-dream-job/" class="article-nav-older"><strong>older <em></em></strong></a>

2020 recap and how I got my dream job

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

1.  <a href="#What%E2%80%99s-a-Priority-Queue-PQ" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">What’s a Priority Queue (PQ)?</span></a>
2.  <a href="#What-is-a-priority-queue-good-for-Applications" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">What is a priority queue good for? / Applications</span></a>
    1.  <a href="#Implementing-a-Priority-Queue-PQ-in-JavaScript" class="toc-link"><span class="toc-number">2.1.</span> <span class="toc-text">Implementing a Priority Queue (PQ) in JavaScript</span></a>
    2.  <a href="#Priority-Queue-operations" class="toc-link"><span class="toc-number">2.2.</span> <span class="toc-text">Priority Queue operations</span></a>
        1.  <a href="#Naive-Priority-Queue-implemented-using-Array-Sorting" class="toc-link"><span class="toc-number">2.2.1.</span> <span class="toc-text">Naive: Priority Queue implemented using Array + Sorting</span></a>
        2.  <a href="#Priority-Queue-implemented-using-a-Heap" class="toc-link"><span class="toc-number">2.2.2.</span> <span class="toc-text">Priority Queue implemented using a Heap</span></a>
3.  <a href="#Summary" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Summary</span></a>
