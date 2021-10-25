<a href="/categories/coding/" class="category-link">Coding</a> &gt; <a href="/categories/coding/data-structures-and-algorithms-dsa/" class="category-link">Data Structures and Algorithms (DSA)</a>

# Analysis of Recursive Algorithms

<span title="Last time this post was updated"> Last updated April 24th 2018 </span> <span class="m-x-2" title="Pageviews"> 19.5k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/Analysis-of-Recursive-Algorithms/">0</span>](#disqus_thread) </span>

- <a href="/tags/algorithms/" class="tag-list-link">algorithms</a><span class="tag-list-count">12</span>
- <a href="/tags/tutorial-algorithms/" class="tag-list-link">tutorial_algorithms</a><span class="tag-list-count">10</span>

![Analysis of Recursive Algorithms](/images/data-structures-analysis-of-recursive-algorithms-large.jpg)

Analyzing the running time of non-recursive algorithms is pretty straightforward. You count the lines of code, and if there are any loops, you multiply by the length. However, recursive algorithms are not that intuitive. They divide the input into one or more subproblems. On this post, we are going to learn how to get the big O notation for most recursive algorithms.

<span id="more"></span>

We are going to explore how to obtain the time complexity of recursive algorithms. For that, we are going to use the **Master Theorem** (or master method).

---

This post is part of a tutorial series:

**Learning Data Structures and Algorithms (DSA) for Beginners**

1.  [Intro to algorithm’s time complexity and Big O notation](/blog/2018/04/04/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/)

2.  [Eight time complexities that every programmer should know](/blog/2018/04/05/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/)

3.  [Data Structures for Beginners: Arrays, HashMaps, and Lists](/blog/2018/04/28/Data-Structures-Time-Complexity-for-Beginners-Arrays-HashMaps-Linked-Lists-Stacks-Queues-tutorial/)

4.  [Graph Data Structures for Beginners](/blog/2018/05/14/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/)

5.  [Trees Data Structures for Beginners](/blog/2018/06/11/Data-Structures-for-Beginners-Trees-binary-search-tree-tutorial/)

6.  [Self-balanced Binary Search Trees](/blog/2018/07/16/Self-balanced-Binary-Search-Trees-with-AVL-tree-Data-Structure-for-beginners/)

7.  Appendix I: Analysis of Recursive Algorithms **👈 you are here**

---

## <a href="#Master-Theorem" class="headerlink" title="Master Theorem"></a>Master Theorem

The Master Theorem is the easiest way of obtaining runtime of recursive algorithms. First, you need to identify three elements:

- _`a`_: Subproblems. How many recursion (split) functions are there? E.g., the Binary search has 1 split, Merge Sort has 2 split, etc.
- _`b`_: Relative subproblem size. What rate is the input reduced? E.g., Binary search and Merge sort cut input in half.
- _`f(n)`_ Runtime of the work done outside the recursion? E.g. \`O(n)\` or \`O(1)\`

The general formula for the Master Theorem is:

> \` T(n) = a \* T(n / b) + f(n) \`

Once, we have `a`, `b` and `f(n)` we can determine the runtime of the work done by the recursion. That is given by:

> \` O(n^(log_b a)) \`

Finally, we compare the runtime of the split/recursion functions and _`f(n)`_. There are 3 possible cases:

**Case 1** Recursion/split runtime is higher: \`n^(log_b a) &gt; f(n)\`

> Final runtime: \`O(n^(log_b a))\`

**Case 2** Same runtime inside and outside recursion: \`n^(log_b a) ~~ f(n)\`

> Final runtime: \`O(n^(log_b a) log n)\`

**Case 3:** Recursion/split runtime is lower: \`n^(log_b a) &lt; f(n)\`

> Final runtime: \`O(f(n))\`

These 3 cases might see a little abstract at first, but after a few examples, it will be more evident.

## <a href="#Master-Theorem-Examples" class="headerlink" title="Master Theorem Examples"></a>Master Theorem Examples

In the \[previous post\])(/blog/2018/04/05/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/) we used Master Method to get the time complexity for the [binary search](/blog/2018/04/05/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/#Binary-search) and [merge sort](/blog/2018/04/05/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/#Mergesort). Both of them fall into the case 2. Let’s explore some other examples.

### <a href="#Case-1-Example" class="headerlink" title="Case 1 Example"></a>Case 1 Example

What’s the runtime of this recursion?

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>function recursiveFn1(n) {
 if(!n) {
 return 1;
  }
 return recursiveFn1(n/4) + recursiveFn1(n/4)
}</code></pre></td></tr></tbody></table>

**1)** Let’s identify `a`, `b` and `f(n)` from the Master Theorem

- Sub-problems? 2, so `a=2`
- Sub-problems size? it’s 1/4 of the original `n` size, thus `b=4`
- Runtime without recursion? Constant, therefore `f(n) = 1`.

Substituting the values we get:

\` T(n) = a \* T(n / b) + f(n) \`

\` T(n) = 2 \* T(n / 4) + 1 \`

**2)** What’s the runtime of the recursion by itself? Using the formula, we get:

\` n^(log_b a) \`

\` n^(log_4 2) = n^0.5 = sqrt(n)\`

**3)** Comparing `f(n)` with the result in step 2, we see that it matches case 1.

Since \`O(n^0.5) &gt; O(1)\` then the runtime is:

\` O(n^(log_b a)) \`

\` O(n^(log_4 2)) \`

> \` O(sqrt(n)) \`

### <a href="#Case-2-Example" class="headerlink" title="Case 2 Example"></a>Case 2 Example

What would be the runtime of the mergesort if instead of splitting the array in 2 we split it up in 3?

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
29
30
31
32
33
34
35
36</code></pre></td><td><pre><code>function sort(n) {
 const length = n.length;
 // base case
 if(length === 1) {
 return n;
  }
 if(length === 2) {
 return n[0] &gt; n[1] ? [n[1], n[0]] : [n[0], n[1]];
  }
 // slit and merge
 const third = length/3;
 return merge(
 sort(n.slice(0, third)),
 sort(n.slice(third, 2 * third)),
 sort(n.slice(2 * third))
 );
}

function merge(a = [], b = [], c = []) {
const merged = [];

for (let ai = 0, bi = 0, ci = 0; ai &lt; a.length || bi &lt; b.length || ci &lt; c.length;) {
const nonNullValues = [a[ai], b[bi], c[ci]].filter(x =&gt; x === 0 || x );
const min = Math.min.apply(null, nonNullValues);

if(min === a[ai]) {
merged.push(a[ai++]);
} else if(min === b[bi]) {
merged.push(b[bi++]);
} else {
merged.push(c[ci++]);
}
}

return merged;
}</code></pre></td></tr></tbody></table>

So, this new implementation divides the input into 3 subproblems (`a = 3`). The input size is divided by 3 (`b=3`). The work to `merge` the 3 sub-problems is still `O(n)`.

**1)** Using the Master Theorem, we get:

\` T(n) = a \* T(n / b) + f(n) \`

\` T(n) = 3 \* T(n / 3) + n \`

**2)** Let’s compute the amount of work done in the recursion:

\` n^(log_b a) \`

\` n^(log_3 3) = n \`

**3)** Since `f(n)` and the recursive work is the same: `n`, we are looking at the _case 2_. Thus, the runtime is:

\`O(n^(log_b a) log n)\`

\`O(n^(log_3 3) log n)\`

> \`O(n log n)\`

It’s the same as merge sort dividing the input into 2 subproblems and half `n`.

### <a href="#Case-3-Example" class="headerlink" title="Case 3 Example"></a>Case 3 Example

The case 3 of the Master Method is not very common in real life. It implies that most of the work is done in the base case of the recursion. If most work is done outside the recursion, it means that we can re-write the code in a non-recursive way.

Anyways, let’s solve this example:

**1)** \` T(n) = 3 \* T(n / 2) + n^2 \`

- a=3
- b=2
- f(n) = n^2

**2)** Calculate recursive work:

\` n^(log_2 3) \`

\` n^(1.48) \`

**3)** Since _`f(n)`_ is bigger than the recursive work we have:

> \` O(n^2) \`

## <a href="#Master-Method-Exceptions" class="headerlink" title="Master Method Exceptions"></a>Master Method Exceptions

The master method is handy but there are certain cases when you cannot use it.

- _`T(n)`_ is not monotone. E.g. \` T(n) = sin n\`.
- _`f(n)`_ is not polynomial. E.g. \` T(n) = 2 \* T(n/2) + 2^n \`.
- _`b`_ cannot be expressed as a constant. E.g. \` T(n) = 2 \* T(sqrt(n)) + n \`.

For these cases, you would have to recursion tree method or substitution method. We are going to explore these methods in future posts after covering the fundamentals.

## <a href="#Summary" class="headerlink" title="Summary"></a>Summary

On this post, we provided the tools to quickly obtain the runtime of recursive algorithms that split input by a constant factor. We covered the Master Method and provided examples for each one of its possible cases.

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2018-04-28-Analysis-of-Recursive-Algorithms.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/Data-Structures-Time-Complexity-for-Beginners-Arrays-HashMaps-Linked-Lists-Stacks-Queues-tutorial/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Data Structures in JavaScript: Arrays, HashMaps, and Lists

<a href="/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/" class="article-nav-older"><strong>older <em></em></strong></a>

8 time complexities that every programmer should know

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

1.  <a href="#Master-Theorem" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Master Theorem</span></a>
2.  <a href="#Master-Theorem-Examples" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Master Theorem Examples</span></a>
    1.  <a href="#Case-1-Example" class="toc-link"><span class="toc-number">2.1.</span> <span class="toc-text">Case 1 Example</span></a>
    2.  <a href="#Case-2-Example" class="toc-link"><span class="toc-number">2.2.</span> <span class="toc-text">Case 2 Example</span></a>
    3.  <a href="#Case-3-Example" class="toc-link"><span class="toc-number">2.3.</span> <span class="toc-text">Case 3 Example</span></a>
3.  <a href="#Master-Method-Exceptions" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Master Method Exceptions</span></a>
4.  <a href="#Summary" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">Summary</span></a>
