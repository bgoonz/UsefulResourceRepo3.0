<a href="/categories/coding/" class="category-link">Coding</a> &gt; <a href="/categories/coding/data-structures-and-algorithms-dsa/" class="category-link">Data Structures and Algorithms (DSA)</a>

# Algorithms for dummies (Part 1): Big-O Notation and Sorting

<span title="Last time this post was updated"> Last updated February 13th 2014 </span> <span class="m-x-2" title="Pageviews"> 98.9k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/algorithms-for-dummies-part-1-sorting/">0</span>](#disqus_thread) </span>

- <a href="/tags/algorithms/" class="tag-list-link">algorithms</a><span class="tag-list-count">12</span>

![Algorithms for dummies (Part 1): Big-O Notation and Sorting](/images/AlgorithmsForDummies_large.png)

After being developing software for a while, I realized that there is a couple of ways to become better at it. One it’s through your experience: writing code, working on projects, getting hands dirty… Other one it’s learning algorithms and design patterns. In other words through leveraging the experience of other computer scientists. Learning to use algorithms efficiently can instantly add to you the equivalent of 10 years of experience or more. Let’s get started and add new tools to our arsenal!

<span id="more"></span>

How do you know a piece of code that you just wrote is good enough? When you modify a program, how do you know if it is better as you found it? How do scale programs to handle huge amount of data? In fact, You cannot improve what you can’t measure.

How to measure them? We could count the number of seconds it takes to execute and compare it with other one. However, it’s not just troublesome to timers around code but if we run it in different hardware (e.g. supercomputer) it will seem like more efficient when indeed it’s exactly the same program. Let’s illustrate a better way with an example. Let’s say you want to sort an array of n integers.

## <a href="#Sorting-Algorithms" class="headerlink" title="Sorting Algorithms"></a>Sorting Algorithms

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>void sort(int[] arr){
  for(int x=1; x &lt; arr.length; x++)
    for(int y=x; y &gt; 0 &amp;&amp; arr[y-1] &gt; arr[y]; y--){
        int t = arr[y];
        arr[y] = arr[y-1];
        arr[y-1] = t;
      }
}</code></pre></td></tr></tbody></table>

Do you recognize this algorithm? It’s called Insertion sort. It has two nested loops, which means that as the number of elements n in the array `arr` grows it will take approximately n \* n longer to perform the sorting. In big-O notation, this will be represented like O(n^2). More on this notation later.

What would happen if the array arr is already sorted? That would be the best-case scenario. The inner for loop will never go through all the elements in the array then (because `arr[y-1] > arr[y]` won’t be met). So the algorithm in run in O(n).

We are not living in an ideal world. So O(n^2) will be probably the average time complexity. Can you think a better way of sorting an array of elements?

Take some minutes to think and come back…

### <a href="#Merge-Sort" class="headerlink" title="Merge Sort"></a>Merge Sort

A more efficient algorithm is the Merge sort. It uses the principle of divide and conquer to solve the problem faster. The idea is the follows:

![](/images/mergesort.gif)

- Divide the array in half
- Divide the halves by half until 2 or 3 elements are remaining
- Sort each of these halves
- Merge them back together

Can you determine the time complexity of mergesort?

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
33</code></pre></td><td><pre><code>void sort(int[] arr){
  int[] helper = new int[arr.length];
  mergesort(arr, helper, 0, arr.length-1);
}

void mergesort(int[] arr, int[] helper, int low, int high){
if(low &lt; high){
int middle = (high+low)/2;
mergesort(arr, helper, low, middle);
mergesort(arr, helper, middle+1, high);
merge(arr, helper, low, middle, high);
}
}

void merge(int[] arr, int[] helper, int low, int middle, int high){
for (int x=low; x &lt;= high; x++) {
helper[x] = arr[x];
}

int left = low;
int curr = low;
int right = middle+1;

while(left &lt;= middle &amp;&amp; right &lt;= high) {
if(helper[right] &gt; helper[left])
arr[curr++] = helper[left++];
else
arr[curr++] = helper[right++];
}

while(left &lt;= middle)
arr[curr++] = helper[left++];
}</code></pre></td></tr></tbody></table>

Even though the code is much longer, the algorithm is much more efficient.

![](/images/insertion_vs_mergsort.png)

It would take some more knowledge to derive the running time mathematically, and we haven’t covered that yet. However, bear with me, it’s O(n log(n)). Let’s sum up:

Algorithm | best | average | worst | space complexity Insertion Sort | O(n) | O(n^2) | O(n^2) | O(1) Merge sort | O(n log(n)) | O(n log(n)) | O(n log(n)) | O(n)

Notice that the table has also the space complexity. How much space does the algorithms take is also an important parameter to compare algorithms. The merge sort uses an additional array that’s way its space complexity is `O(n)`, however, the insertion sort uses `O(1)` because it does the sorting in-place.

## <a href="#Big-O-Notation" class="headerlink" title="Big O Notation"></a>Big O Notation

Big O is defined as the asymptotic upper limit of a function. In plain english, it means that is a function that cover the maximum values a function could take. As we saw a little earlier this notation help us to predict performance and compare algorithms.

<table><thead><tr class="header"><th>Growth Rate</th><th>Name</th></tr></thead><tbody><tr class="odd"><td>1</td><td>Constant</td></tr><tr class="even"><td>log(n)</td><td>Logarithmic</td></tr><tr class="odd"><td>n</td><td>Linear</td></tr><tr class="even"><td>n log(n)</td><td>Linearithmic</td></tr><tr class="odd"><td>n^2</td><td>Quadratic</td></tr><tr class="even"><td>n^3</td><td>Cubic</td></tr><tr class="odd"><td>2^n</td><td>Exponential</td></tr></tbody></table>

This is kinda abstract let’s see what it means in code:

<table><colgroup><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /></colgroup><thead><tr class="header"><th>Growth Rate</th><th>Name</th><th>Code Example</th><th>description</th></tr></thead><tbody><tr class="odd"><td>1</td><td>Constant</td><td><pre><code>a= b + 1;</code></pre></td><td>statement (one line of code)</td></tr><tr class="even"><td>log(n)</td><td>Logarithmic</td><td><pre><code>      while(n&gt;1){
        n=n/2;
      }
      </code></pre></td><td>Divide in half (binary search)</td></tr><tr class="odd"><td>n</td><td>Linear</td><td><pre><code>for(c=0; c&lt;n; c++){
  a+=1;
}</code></pre></td><td>Loop</td></tr><tr class="even"><td>n*log(n)</td><td>Linearithmic</td><td>Mergesort, Quicksort, ...</td><td>Effective sorting algorithms</td></tr><tr class="odd"><td>n^2</td><td>Quadratic</td><td><pre><code>for(c=0; c&lt;n; c++){
  for(i=0; i&lt;n; i++){
    a+=1;
  }
}</code></pre></td><td>Double loop</td></tr><tr class="even"><td>n^3</td><td>Cubic</td><td><pre><code>for(c=0; c&lt;n; c++){
  for(i=0; i&lt;n; i++){
    for(x=0; x&lt;n; x++){
      a+=1;
    }
  }
}</code></pre></td><td>Triple loop</td></tr><tr class="odd"><td>2^n</td><td>Exponential</td><td>Trying to braeak a password generating all possible combinations</td><td>Exhaustive search</td></tr></tbody></table>

That’s all for this first part 1. I will continue publishing this tutorials every week or so. Stay tune!

---

\*\*Update\*\*

Checkout out the next post clicking here: [Data Structures and Algorithms (DSA) for Beginners](/blog/2018/04/04/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/)

---

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2014-02-13-algorithms-for-dummies-part-1-sorting.markdown).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/cheap-airplay-receiver-with-raspberry-pi/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Cheap Airplay receiver with Raspberry Pi

<a href="/backbone-js-for-absolute-beginners-getting-started-part-4/" class="article-nav-older"><strong>older <em></em></strong></a>

Backbone.js for absolute beginners - getting started (part 4: Routers)

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents

1.  <a href="#Sorting-Algorithms" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Sorting Algorithms</span></a>
    1.  <a href="#Merge-Sort" class="toc-link"><span class="toc-number">1.1.</span> <span class="toc-text">Merge Sort</span></a>
2.  <a href="#Big-O-Notation" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Big O Notation</span></a>
