<a href="/categories/coding/" class="category-link">Coding</a> &gt; <a href="/categories/coding/data-structures-and-algorithms-dsa/" class="category-link">Data Structures and Algorithms (DSA)</a>

# 8 time complexities that every programmer should know

<span title="Last time this post was updated"> Last updated September 19th 2019 </span> <span class="m-x-2" title="Pageviews"> 274.5k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/">0</span>](#disqus_thread) </span>

- <a href="/tags/algorithms/" class="tag-list-link">algorithms</a><span class="tag-list-count">12</span>
- <a href="/tags/tutorial-algorithms/" class="tag-list-link">tutorial_algorithms</a><span class="tag-list-count">10</span>

![8 time complexities that every programmer should know](/images/data-structures-must-know-algorithms-running-time-complexity-large.jpg)

## <a href="#Summary" class="headerlink" title="Summary"></a>Summary

Learn how to compare algorithms and develop code that scales! In this post, we cover 8 Big-O notations and provide an example or 2 for each. We are going to learn the top algorithm’s running time that every developer should be familiar with. Knowing these time complexities will help you to assess if your code will scale. Also, it’s handy to compare multiple solutions for the same problem. By the end of it, you would be able to eyeball different implementations and know which one will perform better without running the code!

<span id="more"></span>

In the [previous post](/blog/2018/04/04/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/), we saw how Alan Turing saved millions of lives with an optimized algorithm. In most cases, faster algorithms can save you time, money and enable new technology. So, this is paramount to know how to measure algorithms’ performance.

### <a href="#What-is-time-complexity" class="headerlink" title="What is time complexity?"></a>What is time complexity?

To recap **time complexity** estimates how an algorithm performs regardless of the kind of machine it runs on. You can get the time complexity by “counting” the number of operations performed by your code. This time complexity is defined as a function of the input size `n` using Big-O notation. `n` indicates the input size, while O is the worst-case scenario growth rate function.

We use the Big-O notation to classify algorithms based on their running time or space (memory used) as the input grows. The `O` function is the growth rate in function of the input size `n`.

Here are the **big O cheatsheet** and examples that we will cover in this post before we dive in. **Click** on them to go to the implementation. 😉

<table><thead><tr class="header"><th>Big O Notation</th><th>Name</th><th>Example(s)</th></tr></thead><tbody><tr class="odd"><td><em>O(1)</em></td><td>Constant</td><td># <a href="#Odd-or-Even">Odd or Even number</a>,<br />
# <a href="#Look-up-table">Look-up table (on average)</a></td></tr><tr class="even"><td><em>O(log n)</em></td><td>Logarithmic</td><td># <a href="#Binary-search">Finding element on sorted array with <strong>binary search</strong></a></td></tr><tr class="odd"><td><em>O(n)</em></td><td>Linear</td><td># <a href="#The-largest-item-on-an-unsorted-array">Find max element in unsorted array</a>,<br />
# Duplicate elements in array with Hash Map</td></tr><tr class="even"><td><em>O(n log n)</em></td><td>Linearithmic</td><td># <a href="#Mergesort">Sorting elements in array with <strong>merge sort</strong></a></td></tr><tr class="odd"><td><em>O(n<sup>2</sup>)</em></td><td>Quadratic</td><td># <a href="#Has-duplicates">Duplicate elements in array **(naïve)**</a>,<br />
# <a href="#Bubble-sort">Sorting array with <strong>bubble sort</strong></a></td></tr><tr class="even"><td><em>O(n<sup>3</sup>)</em></td><td>Cubic</td><td># <a href="#Triple-nested-loops">3 variables equation solver</a></td></tr><tr class="odd"><td><em>O(2<sup>n</sup>)</em></td><td>Exponential</td><td># <a href="#Subsets-of-a-Set">Find all subsets</a></td></tr><tr class="even"><td><em>O(n!)</em></td><td>Factorial</td><td># <a href="#Permutations">Find all permutations of a given set/string</a></td></tr></tbody></table>

Now, Let’s go one by one and provide code examples!

You can find all these implementations and more in the Github repo: <https://github.com/amejiarosario/dsa.js>

---

This post is part of a tutorial series:

**Learning Data Structures and Algorithms (DSA) for Beginners**

1.  [Intro to algorithm’s time complexity and Big O notation](/blog/2018/04/04/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/)

2.  Eight time complexities that every programmer should know **👈 you are here**

3.  [Data Structures for Beginners: Arrays, HashMaps, and Lists](/blog/2018/04/28/Data-Structures-Time-Complexity-for-Beginners-Arrays-HashMaps-Linked-Lists-Stacks-Queues-tutorial/)

4.  [Graph Data Structures for Beginners](/blog/2018/05/14/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/)

5.  [Trees Data Structures for Beginners](/blog/2018/06/11/Data-Structures-for-Beginners-Trees-binary-search-tree-tutorial/)

6.  [Self-balanced Binary Search Trees](/blog/2018/07/16/Self-balanced-Binary-Search-Trees-with-AVL-tree-Data-Structure-for-beginners/)

7.  [Appendix I: Analysis of Recursive Algorithms](/blog/2018/04/24/Analysis-of-Recursive-Algorithms/)

---

## <a href="#O-1-Constant-time" class="headerlink" title="O(1) - Constant time"></a>O(1) - Constant time

`O(1)` describes algorithms that take the same amount of time to compute regardless of the input size.

For instance, if a function takes the same time to process ten elements and 1 million items, then we say that it has a constant growth rate or `O(1)`. Let’s see some cases.

**Examples of constant runtime algorithms**:

- Find if a number is even or odd.
- Check if an item on an array is null.
- Print the first element from a list.
- Find a value on a map.

For our discussion, we are going to implement the first and last example.

### <a href="#Odd-or-Even" class="headerlink" title="Odd or Even"></a>Odd or Even

Find if a number is odd or even.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>function isEvenOrOdd(n) {
  return n % 2 ? &#39;Odd&#39; : &#39;Even&#39;;
}

console.log(isEvenOrOdd(10)); // =&gt; Even
console.log(isEvenOrOdd(10001)); // =&gt; Odd</code></pre></td></tr></tbody></table>

**Advanced Note:** you could also replace _`n % 2`_ with the bit AND operator: _`n & 1`_. If the first bit (LSB) is `1` then is odd otherwise is even.

It doesn’t matter if n is `10` or `10,001`. It will execute line 2 one time.

> Do not be fooled by one-liners. They don’t always translate to constant times. You have to be aware of how they are implemented.

If you have a method like `Array.sort()` or any other array or object method, you have to look into the implementation to determine its running time.

Primitive operations like sum, multiplication, subtraction, division, modulo, bit shift, etc., have a constant runtime. Did you expect that? Let’s go into detail about why they are constant time. If you use the schoolbook long multiplication algorithm, it would take `O(n2)` to multiply two numbers. However, most programming languages limit numbers to max value (e.g. in JS: `Number.MAX_VALUE` is `1.7976931348623157e+308`). So, you cannot operate numbers that yield a result greater than the `MAX_VALUE`. So, primitive operations are bound to be completed on a fixed amount of instructions `O(1)` or throw overflow errors (in JS, `Infinity` keyword).

This example was easy. Let’s do another one.

### <a href="#Look-up-table" class="headerlink" title="Look-up table"></a>Look-up table

Given a string, find its word frequency data.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>const dictionary = {the: 22038615, be: 12545825, and: 10741073, of: 10343885, a: 10144200, in: 6996437, to: 6332195 /* ... */};

function getWordFrequency(dictionary, word) {
return dictionary[word];
}

console.log(getWordFrequency(dictionary, &#39;the&#39;));
console.log(getWordFrequency(dictionary, &#39;in&#39;));</code></pre></td></tr></tbody></table>

Again, we can be sure that even if the dictionary has 10 or 1 million words, it would still execute line 4 once to find the word. However, if we decided to store the dictionary as an array rather than a hash map, it would be a different story. In the next section, we will explore what’s the running time to find an item in an array.

> Only a hash table with a perfect _hash function_ will have a worst-case runtime of _O(1)_. The ideal hash function is not practical, so some collisions and workarounds lead to a worst-case runtime of _O(n)_. Still, on _average_, the lookup time is _O(1)_.

## <a href="#O-n-Linear-time" class="headerlink" title="O(n) - Linear time"></a>O(n) - Linear time

Linear running time algorithms are widespread. These algorithms imply that the program visits every element from the input.

Linear time complexity _`O(n)`_ means that the algorithms take proportionally longer to complete as the input grows.

**Examples of linear time algorithms**:

- Get the max/min value in an array.
- Find a given element in a collection.
- Print all the values in a list.

Let’s implement the first example.

### <a href="#The-largest-item-on-an-unsorted-array" class="headerlink" title="The largest item on an unsorted array"></a>The largest item on an unsorted array

Let’s say you want to find the maximum value from an unsorted array.

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
14</code></pre></td><td><pre><code>function findMax(n) {
  let max;
  let counter = 0;

for (let i = 0; i &lt; n.length; i++) {
counter++;
if(max === undefined || max &lt; n[i]) {
max = n[i];
}
}

console.log(`n: ${n.length}, counter: ${counter}`);
return max;
}</code></pre></td></tr></tbody></table>

How many operations will the `findMax` function do?

Well, it checks every element from `n`. If the current item is more significant than `max` it will do an assignment.

Notice that we added a counter to count how many times the inner block is executed.

If you get the time complexity, it would be something like this:

- Line 2-3: 2 operations
- Line 4: a loop of size n
- Line 6-8: 3 operations inside the for-loop.

So, this gets us `3(n) + 2`.

Applying the Big O notation that we learn in the [previous post](https://master--bgoonz-blog.netlify.app/blog/2018/04/04/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/#Asymptotic-analysis), we only need the biggest order term, thus `O(n)`.

We can verify this using our `counter`. If `n` has 3 elements:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>findMax([3, 1, 2]);
// n: 3, counter: 3</code></pre></td></tr></tbody></table>

or if `n` has 9 elements:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>findMax([4,5,6,1,9,2,8,3,7])
// n: 9, counter: 9</code></pre></td></tr></tbody></table>

Now imagine that you have an array of one million items. Do you think it will take the same time? Of course not. It will take longer to the size of the input. If we plot `n` and `findMax` running time, we will have a linear function graph.

![](</images/linear-running-time-o(n).jpg> "Linear Running time O(n) example")

## <a href="#O-n-2-Quadratic-time" class="headerlink" title="O(n^2) - Quadratic time"></a>O(n^2) - Quadratic time

A function with a quadratic time complexity has a growth rate of n<sup>2</sup>. If the input is size 2, it will do four operations. If the input is size 8, it will take 64, and so on.

Here are some **examples of quadratic algorithms**:

- Check if a collection has duplicated values.
- Sorting items in a collection using bubble sort, insertion sort, or selection sort.
- Find all possible ordered pairs in an array.

Let’s implement the first two.

### <a href="#Has-duplicates" class="headerlink" title="Has duplicates"></a>Has duplicates

You want to find duplicate words in an array. A naïve solution will be the following:

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
19</code></pre></td><td><pre><code>function hasDuplicates(n) {
  const duplicates = [];
  let counter = 0; // debug

for (let outter = 0; outter &lt; n.length; outter++) {
for (let inner = 0; inner &lt; n.length; inner++) {
counter++; // debug

      if(outter === inner) continue;

      if(n[outter] === n[inner]) {
        return true;
      }
    }

}

console.log(`n: ${n.length}, counter: ${counter}`); // debug
return false;
}</code></pre></td></tr></tbody></table>

Time complexity analysis:

- Line 2-3: 2 operations
- Line 5-6: double-loop of size n, so `n^2`.
- Line 7-13: has ~3 operations inside the double-loop

We get `3n^2 + 2`.

When we have an asymptotic analysis, we drop all constants and leave the most critical term: `n^2`. So, in the big O notation, it would be `O(n^2)`.

We are using a counter variable to help us verify. The `hasDuplicates` function has two loops. If we have an input of 4 words, it will execute the inner block 16 times. If we have 9, it will perform counter 81 times and so forth.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>hasDuplicates([1,2,3,4]);
// n: 4, counter: 16</code></pre></td></tr></tbody></table>

and with n size 9:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>hasDuplicates([1,2,3,4,5,6,7,8,9]);
// n: 9, counter: 81</code></pre></td></tr></tbody></table>

Let’s see another example.

## <a href="#Bubble-sort" class="headerlink" title="Bubble sort"></a>Bubble sort

We want to sort the elements in an array. One way to do this is using bubble sort as follows:

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
19</code></pre></td><td><pre><code>function sort(n) {
  for (let outer = 0; outer &lt; n.length; outer++) {
    let outerElement = n[outer];

    for (let inner = outer + 1; inner &lt; n.length; inner++) {
      let innerElement = n[inner];

      if(outerElement &gt; innerElement) {
        // swap
        n[outer] = innerElement;
        n[inner] = outerElement;
        // update references
        outerElement = n[outer];
        innerElement = n[inner];
      }
    }

}
return n;
}</code></pre></td></tr></tbody></table>

You might also notice that for a very big `n`, the time it takes to solve the problem increases a lot. Can you spot the relationship between nested loops and the running time? When a function has a single loop, it usually translates into a running time complexity of O(n). Now, this function has 2 nested loops and quadratic running time: O(n<sup>2</sup>).

## <a href="#O-n-c-Polynomial-time" class="headerlink" title="O(n^c) - Polynomial time"></a>O(n^c) - Polynomial time

Polynomial running is represented as O(n<sup>c</sup>), when `c > 1`. As you already saw, two inner loops almost translate to O(n<sup>2</sup>) since it has to go through the array twice in most cases. Are three nested loops cubic? If each one visit all elements, then yes!

Usually, we want to stay away from polynomial running times (quadratic, cubic, n<sup>c</sup>, etc.) since they take longer to compute as the input grows fast. However, they are not the worst.

### <a href="#Triple-nested-loops" class="headerlink" title="Triple nested loops"></a>Triple nested loops

Let’s say you want to find the solutions for a multi-variable equation that looks like this:

> 3x + 9y + 8z = 79

This naïve program will give you all the solutions that satisfy the equation where `x`, `y`, and `z` &lt; `n`.

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
17</code></pre></td><td><pre><code>function findXYZ(n) {
  const solutions = [];

for(let x = 0; x &lt; n; x++) {
for(let y = 0; y &lt; n; y++) {
for(let z = 0; z &lt; n; z++) {
if( 3*x + 9*y + 8\*z === 79 ) {
solutions.push({x, y, z});
}
}
}
}

return solutions;
}

console.log(findXYZ(10)); // =&gt; [{x: 0, y: 7, z: 2}, ...]</code></pre></td></tr></tbody></table>

This algorithm has a cubic running time: `O(n^3)`.

\*\* Note:\*\* We could do a more efficient solution to solve multi-variable equations, but this works to show an example of a cubic runtime.

## <a href="#O-log-n-Logarithmic-time" class="headerlink" title="O(log n) - Logarithmic time"></a>O(log n) - Logarithmic time

Logarithmic time complexities usually apply to algorithms that divide problems in half every time. For instance, let’s say that we want to look for a book in a dictionary. As you know, this book has every word sorted alphabetically. If you are looking for a word, then there are at least two ways to do it:

Algorithm A:

1.  Start on the first page of the book and go word by word until you find what you are looking for.

Algorithm B:

1.  Open the book in the middle and check the first word on it.
2.  If the word you are looking for is alphabetically more significant, then look to the right. Otherwise, look in the left half.
3.  Divide the remainder in half again, and repeat step \#2 until you find the word you are looking for.

Which one is faster? The first algorithms go word by word _O(n)_, while the algorithm B split the problem in half on each iteration _O(log n)_. This 2nd algorithm is a **binary search**.

### <a href="#Binary-search" class="headerlink" title="Binary search"></a>Binary search

Find the index of an element in a sorted array.

If we implement (Algorithm A) going through all the elements in an array, it will take a running time of `O(n)`. Can we do better? We can try using the fact that the collection is already sorted. Later, we can divide it in half as we look for the element in question.

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
21</code></pre></td><td><pre><code>function indexOf(array, element, offset = 0) {
  // split array in half
  const half = parseInt(array.length / 2);
  const current = array[half];

if(current === element) {
return offset + half;
} else if(element &gt; current) {
const right = array.slice(half);
return indexOf(right, element, offset + half);
} else {
const left = array.slice(0, half)
return indexOf(left, element, offset);
}
}

// Usage example with a list of names in ascending order:
const directory = [&quot;Adrian&quot;, &quot;Bella&quot;, &quot;Charlotte&quot;, &quot;Daniel&quot;, &quot;Emma&quot;, &quot;Hanna&quot;, &quot;Isabella&quot;, &quot;Jayden&quot;, &quot;Kaylee&quot;, &quot;Luke&quot;, &quot;Mia&quot;, &quot;Nora&quot;, &quot;Olivia&quot;, &quot;Paisley&quot;, &quot;Riley&quot;, &quot;Thomas&quot;, &quot;Wyatt&quot;, &quot;Xander&quot;, &quot;Zoe&quot;];
console.log(indexOf(directory, &#39;Hanna&#39;)); // =&gt; 5
console.log(indexOf(directory, &#39;Adrian&#39;)); // =&gt; 0
console.log(indexOf(directory, &#39;Zoe&#39;)); // =&gt; 18</code></pre></td></tr></tbody></table>

Calculating the time complexity of `indexOf` is not as straightforward as the previous examples. This function is recursive.

There are several ways to analyze recursive algorithms. For simplicity, we are going to use the `Master Method`.

### <a href="#Master-Method-for-recursive-algorithms" class="headerlink" title="Master Method for recursive algorithms"></a>Master Method for recursive algorithms

Finding the runtime of recursive algorithms is not as easy as counting the operations. This method helps us to determine the runtime of recursive algorithms. We are going to explain this solution using the `indexOf` function as an illustration.

When analyzing recursive algorithms, we care about these three things:

- The runtime of the work done outside the recursion (line 3-4): `O(1)`
- How many recursive calls the problem is divided (line 11 or 14): `1` recursive call. Notice only one or the other will happen, never both.
- How much `n` is reduced on each recursive call (line 10 or 13): `1/2`. Every recursive call cuts `n` in half.

1.  The Master Method formula is the following:

> T(n) = a T(n/b) + f(n)

where:

- `T`: time complexity function in terms of the input size `n`.
- `n`: the size of the input. duh? :)
- `a`: the number of sub-problems. For our case, we only split the problem into one subproblem. So, `a=1`.
- `b`: the factor by which `n` is reduced. For our example, we divide `n` in half each time. Thus, `b=2`.
- `f(n)`: the running time outside the recursion. Since dividing by 2 is constant time, we have `f(n) = O(1)`.

1.  Once we know the values of `a`, `b` and `f(n)`. We can determine the runtime of the recursion using this formula:

> n<sup>log<sub>b</sub>a</sup>

This value will help us to find which master method case we are solving.

For binary search, we have:

n<sup>log<sub>b</sub>a</sup> = n<sup>log<sub>2</sub>1</sup> = n<sub>0</sub> = 1

1.  Finally, we compare the recursion runtime from step 2) and the runtime `f(n)` from step 1). Based on that, we have the following cases:

**_Case 1_: Most of the work done in the recursion.**

If `nlogba` &gt; `f(n)`,

**then** runtime is:

> _O(n<sup>log<sub>b</sub>a</sup>)_

**_Case 2_: The runtime of the work done in the recursion and outside is the same**

If `nlogba` === `f(n)`,

**then** runtime is:

> _O(n<sup>log<sub>b</sub>a</sup> log(n))_

**_Case 3_: Most of the work is done outside the recursion**

If `nlogba` &lt; `f(n)`,

**then** runtime is:

> _O(f(n))_

Now, let’s combine everything we learned here to get the running time of our binary search function `indexOf`.

### <a href="#Master-Method-for-Binary-Search" class="headerlink" title="Master Method for Binary Search"></a>Master Method for Binary Search

The binary search algorithm slit `n` in half until a solution is found or the array is exhausted. So, using the Master Method:

> T(n) = a T(n/b) + f(n)

1.  Find `a`, `b` and `f(n)` and replace it in the formula:

- `a`: the number of sub-problems. For our example, we only split the problem into another subproblem. So `a=1`.
- `b`: the factor by which `n` is reduced. For our case, we divide `n` in half each time. Thus, `b=2`.
- `f(n)`: the running time outside the recursion: `O(1)`.

Thus,

> T(n) = T(n/2) + O(1)

1.  Compare the runtime executed inside and outside the recursion:

- Runtime of the work done **outside** the recursion: `f(n)`. E.g. `O(1)`.
- Runtime of work done **inside** the recursion given by this formula `nlogba`. E.g. O(`nlog21`) = O(`n0`) = `O(1)`.

1.  Finally, getting the runtime. Based on the comparison of the expressions from the previous steps, find the case it matches.

As we saw in the previous step, the work outside and inside the recursion has the same runtime, so we are in **case 2**.

> O(n<sup>log<sub>b</sub>a</sup> log(n))

Making the substitution, we get:

O(n<sup>log<sub>2</sub>1</sup> log(n))

O(n<sup>0</sup> log(n))

O(log(n)) **👈 this is the running time of a binary search**

## <a href="#O-n-log-n-Linearithmic" class="headerlink" title="O(n log n) - Linearithmic"></a>O(n log n) - Linearithmic

Linearithmic time complexity it’s slightly slower than a linear algorithm. However, it’s still much better than a quadratic algorithm (you will see a graph at the very end of the post).

**Examples of Linearithmic algorithms:**

- Efficient sorting algorithms like merge sort, quicksort, and others.

### <a href="#Mergesort" class="headerlink" title="Mergesort"></a>Mergesort

What’s the best way to sort an array? Before, we proposed a solution using bubble sort that has a time complexity of O(n<sup>2</sup>). Can we do better?

We can use an algorithm called `mergesort` to improve it. This is how mergesort works:

1.  We are going to divide the array recursively until the elements are two or less.
2.  We know how to sort two items, so we sort them iteratively (base case).
3.  The final step is merging: we merge in taking one by one from each array such that they are in ascending order.

Here’s the code for merge sort:

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
36
37
38
39
40
41
42
43
44
45
46</code></pre></td><td><pre><code>/**
 * Sort array in asc order using merge-sort
 * @example
 *    sort([3, 2, 1]) =&gt; [1, 2, 3]
 *    sort([3]) =&gt; [3]
 *    sort([3, 2]) =&gt; [2, 3]
 * @param {array} array
 */
function sort(array = []) {
  const size = array.length;
  // base case
  if (size &lt; 2) {
    return array;
  }
  if (size === 2) {
    return array[0] &gt; array[1] ? [array[1], array[0]] : array;
  }
  // slit and merge
  const mid = parseInt(size / 2, 10);
  return merge(sort(array.slice(0, mid)), sort(array.slice(mid)));
}

/\*\*

- Merge two arrays in asc order
- @example
- merge([2,5,9], [1,6,7]) =&gt; [1, 2, 5, 6, 7, 9]
- @param {array} array1
- @param {array} array2
- @returns {array} merged arrays in asc order
  \*/
  function merge(array1 = [], array2 = []) {
  const merged = [];
  let array1Index = 0;
  let array2Index = 0;
  // merge elements on a and b in asc order. Run-time O(a + b)
  while (array1Index &lt; array1.length || array2Index &lt; array2.length) {
  if (array1Index &gt;= array1.length || array1[array1Index] &gt; array2[array2Index]) {
  merged.push(array2[array2Index]);
  array2Index += 1;
  } else {
  merged.push(array1[array1Index]);
  array1Index += 1;
  }
  }
  return merged;
  }</code></pre></td></tr></tbody></table>

As you can see, it has two functions, `sort` and `merge`. Merge is an auxiliary function that runs once through the collection `a` and `b`, so it’s running time is O(n). Let’s apply the Master Method to find the running time.

### <a href="#Master-Method-for-Mergesort" class="headerlink" title="Master Method for Mergesort"></a>Master Method for Mergesort

We are going to apply the [Master Method that we explained above](#Master-Method-for-recursive-algorithms) to find the runtime:

1.  Let’s find the values of: `T(n) = a T(n/b) + f(n)`

    - `a`: The number of sub-problems is 2 (line 20). So, `a = 2`.
    - `b`: Each of the sub-problems divides `n` in half. So, `b = 2`
    - `f(n)`: The work done outside the recursion is the function `merge`, which has a runtime of `O(n)` since it visits all the elements on the given arrays.

Substituting the values:

> T(n) = 2 T(n/2) + O(n)

1.  Let’s find the work done in the recursion: `nlogba`.

n<sup>log<sub>2</sub>2</sup>

n<sup>1</sup> = n

1.  Finally, we can see that recursion runtime from step 2) is O(n) and also the non-recursion runtime is O(n). So, we have the [case 2](#Case-2-The-runtime-of-the-work-done-in-the-recursion-and-outside-is-the-same) : `O(nlogba log(n))`

_O(n<sup>log<sub>2</sub>2</sup> log(n))_

_O(n<sup>1</sup> log(n))_

_O(n log(n))_ **👈 this is running time of the merge sort**

## <a href="#O-2-n-Exponential-time" class="headerlink" title="O(2^n) - Exponential time"></a>O(2^n) - Exponential time

Exponential (base 2) running time means that the calculations performed by an algorithm double every time as the input grows.

**Examples of exponential runtime algorithms:**

- Power Set: finding all the subsets on a set.
- Fibonacci.
- Travelling salesman problem using dynamic programming.

### <a href="#Power-Set" class="headerlink" title="Power Set"></a>Power Set

To understand the power set, let’s imagine you are buying a pizza. The store has many toppings that you can choose from, like pepperoni, mushrooms, bacon, and pineapple. Let’s call each topping A, B, C, D. What are your choices? You can select no topping (you are on a diet ;), you can choose one topping, or two or three or all of them, and so on. The power set gives you all the possibilities (BTW, there 16 with four toppings, as you will see later)

Finding all distinct subsets of a given set. For instance, let’s do some examples to try to come up with an algorithm to solve it:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>powerset(&#39;&#39;) // =&gt;  [&#39;&#39;]
powerset(&#39;a&#39;) // =&gt; [&#39;&#39;, &#39;a&#39;]
powerset(&#39;ab&#39;) // =&gt; [&#39;&#39;, &#39;a&#39;, &#39;b&#39;, &#39;ab&#39;]</code></pre></td></tr></tbody></table>

Did you notice any pattern?

- The first returns an empty element.
- The second case returns the empty element + the 1st element.
- The 3rd case returns precisely the results of the 2nd case + the same array with the 2nd element `b` appended to it.

What if you want to find the subsets of `abc`? Well, it would be precisely the subsets of ‘ab’ and again the subsets of `ab` with `c` appended at the end of each element.

As you noticed, every time the input gets longer, the output is twice as long as the previous one. Let’s code it up:

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
13</code></pre></td><td><pre><code>function powerset(n = &#39;&#39;) {
  const array = Array.from(n);
  const base = [&#39;&#39;];

const results = array.reduce((previous, element) =&gt; {
const previousPlusElement = previous.map(el =&gt; {
return `${el}${element}`;
});
return previous.concat(previousPlusElement);
}, base);

return results;
}</code></pre></td></tr></tbody></table>

If we run that function for a couple of cases we will get:

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
12</code></pre></td><td><pre><code>powerset(&#39;&#39;) // ...
// n = 0, f(n) = 1;
powerset(&#39;a&#39;) // , a...
// n = 1, f(n) = 2;
powerset(&#39;ab&#39;) // , a, b, ab...
// n = 2, f(n) = 4;
powerset(&#39;abc&#39;) // , a, b, ab, c, ac, bc, abc...
// n = 3, f(n) = 8;
powerset(&#39;abcd&#39;) // , a, b, ab, c, ac, bc, abc, d, ad, bd, abd, cd, acd, bcd...
// n = 4, f(n) = 16;
powerset(&#39;abcde&#39;) // , a, b, ab, c, ac, bc, abc, d, ad, bd, abd, cd, acd, bcd...
// n = 5, f(n) = 32;</code></pre></td></tr></tbody></table>

As expected, if you plot `n` and `f(n)`, you will notice that it would be exactly like the function `2^n`. This algorithm has a running time of `O(2^n)`.

\*\* Note:\*\* You should avoid functions with exponential running times (if possible) since they don’t scale well. The time it takes to process the output doubles with every additional input size. But exponential running time is not the worst yet; others go even slower. Let’s see one more example in the next section.

## <a href="#O-n-Factorial-time" class="headerlink" title="O(n!) - Factorial time"></a>O(n!) - Factorial time

Factorial is the multiplication of all positive integer numbers less than itself. For instance:

> 5! = 5 x 4 x 3 x 2 x 1 = 120

It grows pretty quickly:

> 20! = 2,432,902,008,176,640,000

As you might guess, you want to stay away, if possible, from algorithms that have this running time!

**Examples of O(n!) factorial runtime algorithms**:

- Permutations of a string.
- Solving the traveling salesman problem with a brute-force search

Let’s solve the first example.

### <a href="#Permutations" class="headerlink" title="Permutations"></a>Permutations

Write a function that computes all the different words that can be formed given a string. E.g.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>getPermutations(&#39;a&#39;) // =&gt; [ &#39;a&#39;]
getPermutations(&#39;ab&#39;) // =&gt;  [ &#39;ab&#39;, &#39;ba&#39;]
getPermutations(&#39;abc&#39;) // =&gt; [ &#39;abc&#39;, &#39;acb&#39;, &#39;bac&#39;, &#39;bca&#39;, &#39;cab&#39;, &#39;cba&#39; ]</code></pre></td></tr></tbody></table>

How would you solve that?

A straightforward way will be to check if the string has a length of 1. If so, return that string since you can’t arrange it differently.

For strings with a length bigger than 1, we could use recursion to divide the problem into smaller problems until we get to the length 1 case. We can take out the first character and solve the problem for the remainder of the string until we have a length of 1.

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
11</code></pre></td><td><pre><code>function getPermutations(string, prefix = &#39;&#39;) {
  if(string.length &lt;= 1) {
    return [prefix + string];
  }

return Array.from(string).reduce((result, char, index) =&gt; {
const reminder = string.slice(0, index) + string.slice(index+1);
result = result.concat(getPermutations(reminder, prefix + char));
return result;
}, []);
}</code></pre></td></tr></tbody></table>

If print out the output, it would be something like this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>getPermutations(&#39;ab&#39;) // ab, ba...
// n = 2, f(n) = 2;
getPermutations(&#39;abc&#39;) // abc, acb, bac, bca, cab, cba...
// n = 3, f(n) = 6;
getPermutations(&#39;abcd&#39;) // abcd, abdc, acbd, acdb, adbc, adcb, bacd...
// n = 4, f(n) = 24;
getPermutations(&#39;abcde&#39;) // abcde, abced, abdce, abdec, abecd, abedc, acbde...
// n = 5, f(n) = 120;</code></pre></td></tr></tbody></table>

I tried with a string with a length of 10. It took around 8 seconds!

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>time node ./lib/permutations.js
## getPermutations(&#39;abcdefghij&#39;) // =&gt; abcdefghij, abcdefghji, abcdefgihj, abcdefgijh, abcdefgjhi, abcdefgjih, abcdefhgij...
## // n = 10, f(n) = 3,628,800;
## ./lib/permutations.js  8.06s user 0.63s system 101% cpu 8.562 total</code></pre></td></tr></tbody></table>

I have a little homework for you:

> Can you try with a permutation with 11 characters? ;) Comment below on what happened to your computer!

## <a href="#All-running-complexities-graphs" class="headerlink" title="All running complexities graphs"></a>All running complexities graphs

We explored the most common algorithms running times with one or two examples each! They should give you an idea of how to calculate your running times when developing your projects. Below you can find a chart with a graph of all the time complexities that we covered:

![](/images/big-o-running-time-complexity.png "Big o running time complexities")

Mind your time complexity!

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2018-04-23-most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/Analysis-of-Recursive-Algorithms/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Analysis of Recursive Algorithms

<a href="/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/" class="article-nav-older"><strong>older <em></em></strong></a>

How you can change the world by learning Data Structures and Algorithms

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

1.  <a href="#Summary" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Summary</span></a>
    1.  <a href="#What-is-time-complexity" class="toc-link"><span class="toc-number">1.1.</span> <span class="toc-text">What is time complexity?</span></a>
2.  <a href="#O-1-Constant-time" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">O(1) - Constant time</span></a>
    1.  <a href="#Odd-or-Even" class="toc-link"><span class="toc-number">2.1.</span> <span class="toc-text">Odd or Even</span></a>
    2.  <a href="#Look-up-table" class="toc-link"><span class="toc-number">2.2.</span> <span class="toc-text">Look-up table</span></a>
3.  <a href="#O-n-Linear-time" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">O(n) - Linear time</span></a>
    1.  <a href="#The-largest-item-on-an-unsorted-array" class="toc-link"><span class="toc-number">3.1.</span> <span class="toc-text">The largest item on an unsorted array</span></a>
4.  <a href="#O-n-2-Quadratic-time" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">O(n^2) - Quadratic time</span></a>
    1.  <a href="#Has-duplicates" class="toc-link"><span class="toc-number">4.1.</span> <span class="toc-text">Has duplicates</span></a>
5.  <a href="#Bubble-sort" class="toc-link"><span class="toc-number">5.</span> <span class="toc-text">Bubble sort</span></a>
6.  <a href="#O-n-c-Polynomial-time" class="toc-link"><span class="toc-number">6.</span> <span class="toc-text">O(n^c) - Polynomial time</span></a>
    1.  <a href="#Triple-nested-loops" class="toc-link"><span class="toc-number">6.1.</span> <span class="toc-text">Triple nested loops</span></a>
7.  <a href="#O-log-n-Logarithmic-time" class="toc-link"><span class="toc-number">7.</span> <span class="toc-text">O(log n) - Logarithmic time</span></a>
    1.  <a href="#Binary-search" class="toc-link"><span class="toc-number">7.1.</span> <span class="toc-text">Binary search</span></a>
    2.  <a href="#Master-Method-for-recursive-algorithms" class="toc-link"><span class="toc-number">7.2.</span> <span class="toc-text">Master Method for recursive algorithms</span></a>
    3.  <a href="#Master-Method-for-Binary-Search" class="toc-link"><span class="toc-number">7.3.</span> <span class="toc-text">Master Method for Binary Search</span></a>
8.  <a href="#O-n-log-n-Linearithmic" class="toc-link"><span class="toc-number">8.</span> <span class="toc-text">O(n log n) - Linearithmic</span></a>
    1.  <a href="#Mergesort" class="toc-link"><span class="toc-number">8.1.</span> <span class="toc-text">Mergesort</span></a>
    2.  <a href="#Master-Method-for-Mergesort" class="toc-link"><span class="toc-number">8.2.</span> <span class="toc-text">Master Method for Mergesort</span></a>
9.  <a href="#O-2-n-Exponential-time" class="toc-link"><span class="toc-number">9.</span> <span class="toc-text">O(2^n) - Exponential time</span></a>
    1.  <a href="#Power-Set" class="toc-link"><span class="toc-number">9.1.</span> <span class="toc-text">Power Set</span></a>
10. <a href="#O-n-Factorial-time" class="toc-link"><span class="toc-number">10.</span> <span class="toc-text">O(n!) - Factorial time</span></a>
    1.  <a href="#Permutations" class="toc-link"><span class="toc-number">10.1.</span> <span class="toc-text">Permutations</span></a>
11. <a href="#All-running-complexities-graphs" class="toc-link"><span class="toc-number">11.</span> <span class="toc-text">All running complexities graphs</span></a>
