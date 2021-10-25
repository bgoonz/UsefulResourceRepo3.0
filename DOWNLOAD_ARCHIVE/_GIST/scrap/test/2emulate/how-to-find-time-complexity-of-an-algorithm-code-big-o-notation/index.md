<a href="/categories/programming/" class="category-link">Programming</a> &gt; <a href="/categories/programming/data-structures-and-algorithms-dsa/" class="category-link">Data Structures and Algorithms (DSA)</a>

# How to find time complexity of an algorithm?

<span title="Last time this post was updated"> Last updated October 3rd 2020 </span> <span class="m-x-2" title="Pageviews"> 34.5k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/how-to-find-time-complexity-of-an-algorithm-code-big-o-notation/">0</span>](#disqus_thread) </span>

- <a href="/tags/algorithms/" class="tag-list-link">algorithms</a><span class="tag-list-count">12</span>
- <a href="/tags/big-o-notation/" class="tag-list-link">big-o notation</a><span class="tag-list-count">3</span>
- <a href="/tags/tutorial-algorithms/" class="tag-list-link">tutorial_algorithms</a><span class="tag-list-count">10</span>

![How to find time complexity of an algorithm?](/images/from-code-to-big-o-algorithms-large.png)

Finding out the time complexity of your code can help you develop better programs that run faster. Some functions are easy to analyze, but when you have loops, and recursion might get a little trickier when you have recursion. After reading this post, you are able to derive the time complexity of any code.

<span id="more"></span>

In general, you can determine the time complexity by analyzing the program’s statements (go line by line). However, you have to be mindful how are the statements arranged. Suppose they are inside a loop or have function calls or even recursion. All these factors affect the runtime of your code. Let’s see how to deal with these cases.

## <a href="#Big-O-Notation" class="headerlink" title="Big O Notation"></a>Big O Notation

How to calculate time complexity of any algorithm or program? The most common metric it’s using Big O notation.

Here are some highlights about Big O Notation:

- Big O notation is a framework to analyze and compare algorithms.
- Amount of work the CPU has to do (time complexity) as the input size grows (towards infinity).
- Big O = Big Order function. Drop constants and lower order terms. E.g. `O(3*n^2 + 10n + 10)` becomes `O(n^2)`.
- Big O notation cares about the worst-case scenario. E.g., when you want to sort and elements in the array are in reverse order for some sorting algorithms.

For instance, if you have a function that takes an array as an input, if you increase the number of elements in the collection, you still perform the same operations; you have a constant runtime. On the other hand, if the CPU’s work grows proportionally to the input array size, you have a linear runtime `O(n)`.

If we plot the [most common Big O notation examples](/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/), we would have graph like this:

![](/images/time-complexity-examples.png "Time Complexity")

As you can see, you want to lower the time complexity function to have better performance.

Let’s take a look, how do we translate code into time complexity.

## <a href="#Sequential-Statements" class="headerlink" title="Sequential Statements"></a>Sequential Statements

If we have statements with basic operations like comparisons, assignments, reading a variable. We can assume they take constant time each `O(1)`.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>statement1;
statement2;
...
statementN;</code></pre></td></tr></tbody></table>

If we calculate the total time complexity, it would be something like this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>total = time(statement1) + time(statement2) + ... time (statementN)</code></pre></td></tr></tbody></table>

Let’s use `T(n)` as the total time in function of the input size `n`, and `t` as the time complexity taken by a statement or group of statements.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>T(n) = t(statement1) + t(statement2) + ... + t(statementN);</code></pre></td></tr></tbody></table>

If each statement executes a basic operation, we can say it takes constant time `O(1)`. As long as you have a fixed number of operations, it will be constant time, even if we have 1 or 100 of these statements.

Example:

Let’s say we can compute the square sum of 3 numbers.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>function squareSum(a, b, c) {
  const sa = a * a;
  const sb = b * b;
  const sc = c * c;
  const sum = sa + sb + sc;
  return sum;
}</code></pre></td></tr></tbody></table>

As you can see, each statement is a basic operation (math and assignment). Each line takes constant time `O(1)`. If we add up all statements’ time it will still be `O(1)`. It doesn’t matter if the numbers are `0` or `9,007,199,254,740,991`, it will perform the same number of operations.

> ⚠️ Be careful with function calls. You will have to go to the implementation and check their run time. More on that later.

## <a href="#Conditional-Statements" class="headerlink" title="Conditional Statements"></a>Conditional Statements

Very rarely, you have a code without any conditional statement. How do you calculate the time complexity? Remember that we care about the worst-case with Big O so that we will take the maximum possible runtime.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>if (isValid) {
  statement1;
  statement2;
} else {
  statement3;
}</code></pre></td></tr></tbody></table>

Since we are after the worst-case we take whichever is larger:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>T(n) = Math.max([t(statement1) + t(statement2)], [time(statement3)])</code></pre></td></tr></tbody></table>

Example:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>if (isValid) {
  array.sort();
  return true;
} else {
  return false;
}</code></pre></td></tr></tbody></table>

What’s the runtime? The `if` block has a runtime of `O(n log n)` (that’s common runtime for [efficient sorting algorithms](/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/#Mergesort)). The `else` block has a runtime of `O(1)`.

So we have the following:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>O([n log n] + [n]) =&gt; O(n log n)</code></pre></td></tr></tbody></table>

Since `n log n` has a higher order than `n`, we can express the time complexity as `O(n log n)`.

## <a href="#Loop-Statements" class="headerlink" title="Loop Statements"></a>Loop Statements

Another prevalent scenario is loops like for-loops or while-loops.

### <a href="#Linear-Time-Loops" class="headerlink" title="Linear Time Loops"></a>Linear Time Loops

For any loop, we find out the runtime of the block inside them and multiply it by the number of times the program will repeat the loop.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>for (let i = 0; i &lt; array.length; i++) {
  statement1;
  statement2;
}</code></pre></td></tr></tbody></table>

For this example, the loop is executed `array.length`, assuming `n` is the length of the array, we get the following:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>T(n) = n * [ t(statement1) + t(statement2) ]</code></pre></td></tr></tbody></table>

All loops that grow proportionally to the input size have a linear time complexity `O(n)`. If you loop through only half of the array, that’s still `O(n)`. Remember that we drop the constants so `1/2 n => O(n)`.

### <a href="#Constant-Time-Loops" class="headerlink" title="Constant-Time Loops"></a>Constant-Time Loops

However, if a constant number bounds the loop, let’s say 4 (or even 400). Then, the runtime is constant `O(4) -> O(1)`. See the following example.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>for (let i = 0; i &lt; 4; i++) {
  statement1;
  statement2;
}</code></pre></td></tr></tbody></table>

That code is `O(1)` because it no longer depends on the input size. It will always run statement 1 and 2 four times.

### <a href="#Logarithmic-Time-Loops" class="headerlink" title="Logarithmic Time Loops"></a>Logarithmic Time Loops

Consider the following code, where we divide an array in half on each iteration (binary search):

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
12</code></pre></td><td><pre><code>function fn1(array, target, low = 0, high = array.length - 1) {
  let mid;
  while ( low &lt;= high ) {
    mid = ( low + high ) / 2;
    if ( target &lt; array[mid] )
      high = mid - 1;
    else if ( target &gt; array[mid] )
      low = mid + 1;
    else break;
  }
  return mid;
}</code></pre></td></tr></tbody></table>

This function divides the array by its `mid`dle point on each iteration. The while loop will execute the amount of times that we can divide `array.length` in half. We can calculate this using the `log` function. E.g. If the array’s length is 8, then we the while loop will execute 3 times because `log2(8) = 3`.

## <a href="#Nested-loops-statements" class="headerlink" title="Nested loops statements"></a>Nested loops statements

Sometimes you might need to visit all the elements on a 2D array (grid/table). For such cases, you might find yourself with two nested loops.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>for (let i = 0; i &lt; n; i++) {
  statement1;

for (let j = 0; j &lt; m; j++) {
statement2;
statement3;
}
}</code></pre></td></tr></tbody></table>

For this case, you would have something like this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>T(n) = n * [t(statement1) + m * t(statement2...3)]</code></pre></td></tr></tbody></table>

Assuming the statements from 1 to 3 are `O(1)`, we would have a runtime of `O(n * m)`. If instead of `m`, you had to iterate on `n` again, then it would be `O(n^2)`. Another typical case is having a function inside a loop. Let’s see how to deal with that next.

## <a href="#Function-call-statements" class="headerlink" title="Function call statements"></a>Function call statements

When you calculate your programs’ time complexity and invoke a function, you need to be aware of its runtime. If you created the function, that might be a simple inspection of the implementation. If you are using a library function, you might need to check out the language/library documentation or source code.

Let’s say you have the following program:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>for (let i = 0; i &lt; n; i++) {
  fn1();
  for (let j = 0; j &lt; n; j++) {
    fn2();
    for (let k = 0; k &lt; n; k++) {
      fn3();
    }
  }
}</code></pre></td></tr></tbody></table>

Depending on the runtime of fn1, fn2, and fn3, you would have different runtimes.

- If they all are constant `O(1)`, then the final runtime would be `O(n^3)`.
- However, if only `fn1` and `fn2` are constant and `fn3` has a runtime of `O(n^2)`, this program will have a runtime of `O(n^5)`. Another way to look at it is, if `fn3` has two nested and you replace the invocation with the actual implementation, you would have five nested loops.

In general, you will have something like this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>T(n) = n * [ t(fn1()) + n * [ t(fn2()) + n * [ t(fn3()) ] ] ]</code></pre></td></tr></tbody></table>

## <a href="#Recursive-Functions-Statements" class="headerlink" title="Recursive Functions Statements"></a>Recursive Functions Statements

Analyzing the runtime of recursive functions might get a little tricky. There are different ways to do it. One intuitive way is to explore the recursion tree.

Let’s say that we have the following program:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>function fn(n) {
  if (n &lt; 0) return 0;
  if (n &lt; 2) return n;

return fn(n - 1) + fn(n - 2);
}</code></pre></td></tr></tbody></table>

You can represent each function invocation as a bubble (or node).

Let’s do some examples:

- When you n = 2, you have 3 function calls. First `fn(2)` which in turn calls `fn(1)` and `fn(0)`.
- For `n = 3`, you have 5 function calls. First `fn(3)`, which in turn calls `fn(2)` and `fn(1)` and so on.
- For `n = 4`, you have 9 function calls. First `fn(4)`, which in turn calls `fn(3)` and `fn(2)` and so on.

Since it’s a binary tree, we can sense that every time `n` increases by one, we would have to perform at most the double of operations.

Here’s the graphical representation of the 3 examples:

![](/images/big-o-recursive-example.png "recursive-function-example")

If you take a look at the generated tree calls, the leftmost nodes go down in descending order: `fn(4)`, `fn(3)`, `fn(2)`, `fn(1)`, which means that the height of the tree (or the number of levels) on the tree will be `n`.

The total number of calls, in a complete binary tree, is `2^n - 1`. As you can see in `fn(4)`, the tree is not complete. The last level will only have two nodes, `fn(1)` and `fn(0)`, while a complete tree would have 8 nodes. But still, we can say the runtime would be exponential `O(2^n)`. It won’t get any worst because `2^n` is the upper bound.

## <a href="#Summary" class="headerlink" title="Summary"></a>Summary

In this chapter, we learned how to calculate the time complexity of our code when we have the following elements:

- Basic operations like assignments, bit, and math operators.
- Loops and nested loops
- Function invocations and recursions.

If you want to see more code examples for `O(n log n)`, `O(n^2)`, `O(n!)`, check out the [most common time complexities that every developer should know](/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course).

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/how-to-find-time-complexity-of-an-algorithm-code-big-o-notation.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/2020-recap-and-how-i-got-my-dream-job/" class="article-nav-newer"><strong><em></em> newer</strong></a>

2020 recap and how I got my dream job

<a href="/how-to-solve-any-graph-2d-arrays-maze-interview-questions-in-javascript-dfs-vs-bfs/" class="article-nav-older"><strong>older <em></em></strong></a>

How to solve any graph/Maze interview questions in JavaScript? DFS vs. BFS

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

1.  <a href="#Big-O-Notation" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Big O Notation</span></a>
2.  <a href="#Sequential-Statements" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Sequential Statements</span></a>
3.  <a href="#Conditional-Statements" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Conditional Statements</span></a>
4.  <a href="#Loop-Statements" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">Loop Statements</span></a>
    1.  <a href="#Linear-Time-Loops" class="toc-link"><span class="toc-number">4.1.</span> <span class="toc-text">Linear Time Loops</span></a>
    2.  <a href="#Constant-Time-Loops" class="toc-link"><span class="toc-number">4.2.</span> <span class="toc-text">Constant-Time Loops</span></a>
    3.  <a href="#Logarithmic-Time-Loops" class="toc-link"><span class="toc-number">4.3.</span> <span class="toc-text">Logarithmic Time Loops</span></a>
5.  <a href="#Nested-loops-statements" class="toc-link"><span class="toc-number">5.</span> <span class="toc-text">Nested loops statements</span></a>
6.  <a href="#Function-call-statements" class="toc-link"><span class="toc-number">6.</span> <span class="toc-text">Function call statements</span></a>
7.  <a href="#Recursive-Functions-Statements" class="toc-link"><span class="toc-number">7.</span> <span class="toc-text">Recursive Functions Statements</span></a>
8.  <a href="#Summary" class="toc-link"><span class="toc-number">8.</span> <span class="toc-text">Summary</span></a>
