<a href="/categories/coding/" class="category-link">Coding</a> &gt; <a href="/categories/coding/data-structures-and-algorithms-dsa/" class="category-link">Data Structures and Algorithms (DSA)</a>

# How you can change the world by learning Data Structures and Algorithms

<span title="Last time this post was updated"> Last updated April 5th 2019 </span> <span class="m-x-2" title="Pageviews"> 63.9k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/">0</span>](#disqus_thread) </span>

- <a href="/tags/algorithms/" class="tag-list-link">algorithms</a><span class="tag-list-count">12</span>
- <a href="/tags/tutorial-algorithms/" class="tag-list-link">tutorial_algorithms</a><span class="tag-list-count">10</span>

![How you can change the world by learning Data Structures and Algorithms](/images/data-structures-algorithms-time-complexity-big-o-notation-large.jpg)

As a developer, you have the power to change the world! You can write programs that enable new technologies. For instance, develop software to find an earlier diagnosis of diseases. But that’s not the only way. You might do it indirectly by creating projects that make people more productive and help them free up time to do other amazing things. Whatever you do, it has the potential to impact the community who use it.

However, these accomplishments are only possible if we write software that is fast and can scale. Learning how to measure your code performance is the goal of this post.

<span id="more"></span>

---

This post is part of a tutorial series:

**Learning Data Structures and Algorithms (DSA) for Beginners**

1.  Intro to Algorithm’s Time Complexity and Big O Notation **👈 you are here**

2.  [Eight-time complexities that every programmer should know](/blog/2018/04/05/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/)

3.  [Data Structures for Beginners: Arrays, HashMaps, and Lists](/blog/2018/04/28/Data-Structures-Time-Complexity-for-Beginners-Arrays-HashMaps-Linked-Lists-Stacks-Queues-tutorial/)

4.  [Graph Data Structures for Beginners](/blog/2018/05/14/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/)

5.  [Trees Data Structures for Beginners](/blog/2018/06/11/Data-Structures-for-Beginners-Trees-binary-search-tree-tutorial/)

6.  [Self-balanced Binary Search Trees](/blog/2018/07/16/Self-balanced-Binary-Search-Trees-with-AVL-tree-Data-Structure-for-beginners/)

7.  [Appendix I: Analysis of Recursive Algorithms](/blog/2018/04/24/Analysis-of-Recursive-Algorithms/)

---

We will explore how you can measure your code performance using analysis of algorithms: **time complexity** and **big O notation**.

First, let’s see a real story to learn why this is important.

## <a href="#An-algorithm-that-saved-millions-of-lives" class="headerlink" title="An algorithm that saved millions of lives"></a>An algorithm that saved millions of lives

During World War II, the Germans used AM radio signals to communicate with troops around Europe. Anybody with an AM frequency radio and some knowledge of Morse code could intercept the message. However, the information was encoded! All the countries that were under attack tried to decode it. Sometimes, they got lucky and could make sense of a couple of messages at the end of the day. Unfortunately, the Nazis changed the encoding every single day!

A brilliant mathematician called Alan Turing joined the British military to crack the German “Enigma” code. He knew they would never get ahead if they keep doing the calculations by pen and paper. So after many months of hard work, they built a machine. Unfortunately, the first version of the device took too long to decode a message! So, it was not very useful.

Alan’s team found out that every encrypted message ended with the same string: “Heil Hitler” Aha! After changing the algorithm, the machine was able to decode transmissions a lot faster! They used the info to finish the war quicker and save millions of lives!

_The same machine that was going to get shut down as a failure became a live saver. Likewise, you can do way more with your computing resources when you write efficient code. That is what we are going to learn in this post series!_

Another popular algorithm is `PageRank` developed in 1998 by Sergey Brin and Larry Page (Google founders). This algorithm was (and is) used by a Google search engine to make sense of trillions of web pages. Google was not the only search engine. However, since their algorithm returned better results, most of the competitors faded away. Today it powers most of 3 billion daily searches very quickly. That is the power of algorithms that scale! 🏋🏻‍

## <a href="#So-why-should-you-learn-to-write-efficient-algorithms" class="headerlink" title="So, why should you learn to write efficient algorithms?"></a>So, why should you learn to write efficient algorithms?

There are many advantages; these are just some of them:

- You would become a much better software developer (and get better jobs/income).
- Spend less time debugging, optimizing, and re-writing code.
- Your software will run faster with the same hardware (cheaper to scale).
- Your programs might be used to aid discoveries that save lives (maybe?).

Without further ado, let’s step up our game!

## <a href="#What-are-algorithms" class="headerlink" title="What are algorithms?"></a>What are algorithms?

Algorithms (as you might know) are steps of how to do some task. For example, when you cook, you follow a **recipe** to prepare a dish. If you play a game, you are devising **strategies** to help you win. Likewise, algorithms in computers are a set of instructions used to solve a problem.

> Algorithms are instructions to perform a task

There are “good” and “bad” algorithms. The good ones are fast; the bad ones are slow. Slow algorithms cost more money and make some calculations impossible in our lifespan!

We are going to explore the basic concepts of algorithms. Also, we are going to learn how to distinguish “fast” from “slow” ones. Even better, you will be able to “measure” your algorithms’ performance and improve them!

## <a href="#How-to-improve-your-coding-skills" class="headerlink" title="How to improve your coding skills?"></a>How to improve your coding skills?

The first step to improving something is to measure it.

> Measurement is the first step that leads to control and eventually to improvement. If you can’t measure something, you can’t understand it. If you can’t understand it, you can’t control it. If you can’t control it, you can’t improve it.
>
> **H. J. Harrington**

How do you do “measure” your code? Would you clock “how long” it takes to run? What if you are running the same program on a mobile device or a quantum computer? The same code will give you different results.

To answer these questions, we need to nail some concepts first, like **time complexity**!

### <a href="#Time-complexity" class="headerlink" title="Time complexity"></a>Time complexity

Time complexity (or **running time**) is the estimated time an algorithm takes to run. However, you do not measure time complexity in seconds, but as a **function** of the input. (I know it’s weird but bear with me).

> The **time complexity** is not about timing how long the algorithm takes. Instead, _how many operations_ are executed. The number of instructions executed by a program is affected by the input’s size and how their elements are arranged.

Why is that the time complexity is expressed as a function of the input? Well, let’s say you want to sort an array of numbers. If the elements are already sorted, the program will perform fewer operations. On the contrary, if the items are in reverse order, it will require more time to get them sorted. The time a program takes to execute is directly related to the input size and its arrangement.

We can say for each algorithm have the following running times:

- Worst-case time complexity (e.g., input elements in reversed order)
- Best-case time complexity (e.g., already sorted)
- Average-case time complexity (e.g., elements in random order)

We usually care more about the **worst-case time complexity** (We hope for the best but preparing for the _worst_).

## <a href="#Calculating-time-complexity" class="headerlink" title="Calculating time complexity"></a>Calculating time complexity

Here’s a code example of how you can calculate the time complexity: _Find the smallest number in an array_.

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
15</code></pre></td><td><pre><code>/**
 * Get the smallest number on an array of numbers
 * @param {Array} n array of numbers
 */
function getMin(n) {
  const array = Array.from(n);
  let min;

array.forEach(element =&gt; {
if(min === undefined || element &lt; min) {
min = element;
}
});
return min;
}</code></pre></td></tr></tbody></table>

We can represent `getMin` as a function of the size of the input `n` based on the number of operations it has to perform. For simplicity, let’s assume that each line of code takes the same amount of time in the CPU to execute. Let’s make the sum:

- Line 6: 1 operation
- Line 7: 1 operation
- Line 9-13: it is a loop that executes `n` times
  - Line 10: 1 operation
  - Line 11: this one is tricky. It is inside a conditional. We will assume the worst case where the array is sorted in descending order. The condition (`if` block) will be executed each time. Thus, one operation
- Line 14: 1 operation

All in all, we have `3` operations outside the loop and `2` inside the `forEach` block. Since the loop goes for the size of `n`, this leaves us with `2(n) + 3`.

However, this expression is somewhat too specific, and hard to compare algorithms with it. We are going to apply the **asymptotic analysis** to simplify this expression further.

### <a href="#Asymptotic-analysis" class="headerlink" title="Asymptotic analysis"></a>Asymptotic analysis

Asymptotic analysis is just evaluating functions as their value approximate to the infinite. In our previous example `2(n) + 3`, we can generalize it as `k(n) + c`. As the value of `n` grows, the value `c` is less and less significant, as you can see in the following table:

<table><thead><tr class="header"><th>n (size)</th><th>operations</th><th>result</th></tr></thead><tbody><tr class="odd"><td>1</td><td>2(1) + 3</td><td>5</td></tr><tr class="even"><td>10</td><td>2(10) + 3</td><td>23</td></tr><tr class="odd"><td>100</td><td>2(100) + 3</td><td>203</td></tr><tr class="even"><td>1,000</td><td>2(1,000) + 3</td><td>2,003</td></tr><tr class="odd"><td>10,000</td><td>2(10,000) + 3</td><td>20,003</td></tr></tbody></table>

Believe it or not, the constant `k` wouldn’t make too much of a difference. Using this kind of asymptotic analysis, we take the higher-order element, in this case: `n`.

Let’s do another example so we can get this concept. Let’s say we have the following function: \`3 n^2 + 2n + 20\`. What would be the result of using the asymptotic analysis?

> \`3 n^2 + 2n + 20\` as \`n\` grows bigger and bigger; the term that will make the most difference is \`n^2\`.

Going back to our example, `getMin`, we can say that this function has a time complexity of `n`. As you can see, we could approximate it as `2(n)` and drop the `+3` since it does not add too much value as \`n\` keep getting bigger.

We are interested in the big picture here, and we are going to use the asymptotic analysis to help us with that. With this framework, comparing algorithms is much more comfortable. We can compare running times with their most crucial term: \`n^2\` or \`n\` or \`2^n\`.

### <a href="#Big-O-notation-and-Growth-rate-of-Functions" class="headerlink" title="Big-O notation and Growth rate of Functions"></a>Big-O notation and Growth rate of Functions

The Big O notation combines what we learned in the last two sections about **worst-case time complexity** and **asymptotic analysis**.

> The letter \`O\` refers to the **order** of a function.

The Big O notation is used to classify algorithms by their worst running time. Also known as the upper bound of the growth rate of a function.

In our previous example with `getMin` function, we can say it has a running time of `O(n)`. There are many different running times. Here are the most common that we are going to cover in the next post and their relationship with time:

Growth rates vs. `n` size:

<table><thead><tr class="header"><th>n</th><th>O(1)</th><th>O(log n)</th><th>O(n)</th><th>O(n log n)</th><th>O(n<sup>2</sup>)</th><th>O(2<sup>n</sup>)</th><th>O(n!)</th></tr></thead><tbody><tr class="odd"><td>1</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td></tr><tr class="even"><td>10</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>4 sec</td></tr><tr class="odd"><td>100</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>40170 trillion years</td><td>&gt; vigintillion years</td></tr><tr class="even"><td>1,000</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&gt; vigintillion years</td><td>&gt; centillion years</td></tr><tr class="odd"><td>10,000</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>2 min</td><td>&gt; centillion years</td><td>&gt; centillion years</td></tr><tr class="even"><td>100,000</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>1 sec</td><td>3 hours</td><td>&gt; centillion years</td><td>&gt; centillion years</td></tr><tr class="odd"><td>1,000,000</td><td>&lt; 1 sec</td><td>&lt; 1 sec</td><td>1 sec</td><td>20 sec</td><td>12 days</td><td>&gt; centillion years</td><td>&gt; centillion years</td></tr></tbody></table>

Assuming: 1 GHz CPU and that it can execute on average one instruction in 1 nanosecond (usually takes more time). Also, bear in mind that each line might be translated into dozens of CPU instructions depending on the programming language

As you can see, some algorithms are very time-consuming. It is impossible to compute an input size as little as 100 even if we had a supercomputer!! Hardware does not scale as well as software.

In the next post, we will explore all of these time complexities with a code example or two! Are you ready to become a super programmer and scale your code?! <img src="/images/superman_shield.svg" alt="superman shield" width="25" height="25" />

**Continue with the next part 👉** [Eight running times that every programmer should know](/blog/2018/04/05/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/)

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2018-04-18-how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/" class="article-nav-newer"><strong><em></em> newer</strong></a>

8 time complexities that every programmer should know

<a href="/Overview-of-JavaScript-ES6-features-a-k-a-ECMAScript-6-and-ES2015/" class="article-nav-older"><strong>older <em></em></strong></a>

Overview of JavaScript ES6 features (a.k.a ECMAScript 6 and ES2015+)

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

1.  <a href="#An-algorithm-that-saved-millions-of-lives" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">An algorithm that saved millions of lives</span></a>
2.  <a href="#So-why-should-you-learn-to-write-efficient-algorithms" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">So, why should you learn to write efficient algorithms?</span></a>
3.  <a href="#What-are-algorithms" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">What are algorithms?</span></a>
4.  <a href="#How-to-improve-your-coding-skills" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">How to improve your coding skills?</span></a>
    1.  <a href="#Time-complexity" class="toc-link"><span class="toc-number">4.1.</span> <span class="toc-text">Time complexity</span></a>
5.  <a href="#Calculating-time-complexity" class="toc-link"><span class="toc-number">5.</span> <span class="toc-text">Calculating time complexity</span></a>
    1.  <a href="#Asymptotic-analysis" class="toc-link"><span class="toc-number">5.1.</span> <span class="toc-text">Asymptotic analysis</span></a>
    2.  <a href="#Big-O-notation-and-Growth-rate-of-Functions" class="toc-link"><span class="toc-number">5.2.</span> <span class="toc-text">Big-O notation and Growth rate of Functions</span></a>
