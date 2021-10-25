<a href="/categories/coding/" class="category-link">Coding</a> &gt; <a href="/categories/coding/data-structures-and-algorithms-dsa/" class="category-link">Data Structures and Algorithms (DSA)</a>

# Learning Algorithms from Scratch / Algorithms for Dummies

<span title="Last time this post was updated"> Last updated December 22nd 2011 </span> <span class="m-x-2" title="Pageviews"> 43.3k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/learning-algorithms-from-scratch-algorithms-for-dummies/">0</span>](#disqus_thread) </span>

- <a href="/tags/algorithms/" class="tag-list-link">algorithms</a><span class="tag-list-count">12</span>

When you are programming you face challenges all the way. Getting the problems solved is just the tip of the iceberg, getting it done efficiently is the rest.

<span id="more"></span>

---

\*\*Update\*\*

Graphs are gone in this post. I re-made this post and added more information and images. Checkout it out clicking here: [Data Structures and Algorithms (DSA) for Beginners](/blog/2018/04/04/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/)

---

**Why should you care for efficiency?**

Solutions to the same problem might take years with certain algorithm, and just minutes using efficient algorithms. For instance, if you have applications that are used for thousands of people over internet, every fraction of second counts. Therefore, efficient algorithms is a must.

**How I do my algorithms more efficient?**

To improve something you first need to know the actual state. In this case you need to measure the actual effectiveness of your algorithm in other to improve it. It's very common to use running time analysis to measure the speed of algorithms independently from the hardware used (old pc, supercomputer it doesn't matter).

**Run-time analysis**

A common way to analyze the algorithms is using the big-O notation. The good thing about this notation is that is independent from the computer used to run the algorithm. You know that if you use a very slow computer (e.g. pentium I) v.s. a supercomputer use in NASA, the latter will run the program much faster. Big-O notation abstract the hardware and just focus in the algorithm per se. The only variable in the big-O notation gives the relative time needed to process an algorithm in function of the input n. Let's clarify this with an example.

**Ex.1** - You want to sort an array A of n integers.

Depending in the algorithm used to do that you may have:

- **selection** sort has a running time of O(n^2);
- **merge sort** --&gt; O(n log n)

Right now, it doesn't matter if are not familiar with these algorithms (we will cover this the next lessons), the point here is that we have n integer and big-O notations give us a mathematical expression that is in function of the input n. If you [<span class="s1">plot in a graph n^2 and n log n</span>](http://fooplot.com/index.php?&type0=0&type1=0&type2=0&type3=0&type4=0&y0=x%5E2&y1=x*log%28x%29&y2=&y3=&y4=&r0=&r1=&r2=&r3=&r4=&px0=&px1=&px2=&px3=&px4=&py0=&py1=&py2=&py3=&py4=&smin0=0&smin1=0&smin2=0&smin3=0&smin4=0&smax0=2pi&smax1=2pi&smax2=2pi&smax3=2pi&smax4=2pi&thetamin0=0&thetamin1=0&thetamin2=0&thetamin3=0&thetamin4=0&thetamax0=2pi&thetamax1=2pi&thetamax2=2pi&thetamax3=2pi&thetamax4=2pi&ipw=0&ixmin=-5&ixmax=5&iymin=-3&iymax=3&igx=1&igy=1&igl=1&igs=0&iax=1&ila=1&xmin=-5&xmax=5&ymin=-3&ymax=3). You'll see that n^2 grows much faster than n log(n). That means that the algorithm n^2 will take longer than n\*log(n) to process as the size of the array n increases.

**Common order of Growth**

To give you an idea of the common order of growth of runtime expressions. Take a look at the following graph and table. The slower the function growth the better is the algorithm. In order from better performance to worst is:

1 -- log n -- n -- n log n -- n^2 -- n^3 -- 2^n -- n! ...

**Approximate growth rate from code.**

There are a whole theory and math behind the Big-O notation and other notations related. At this time, just take a look of the typical code and its growth order.

**Cases (the good, the bad, and the ugly)**

Remember that n is the number of elements in the input. All this runtime growth rate are in function of the input elements. There is another important thing to consider about the input elements: the order! The order of the input elements matters, and that's why algorithms are analyzed in 3 different cases:

1.  Worst-case performance: the input is distributed as worst as it could be for an algorithm.
2.  Average-case scenario: approximation of the most common arrange of inputs.
3.  Best-case scenario: most favorable distribution of the inputs.
4.  One more: Space. this is how much space the algorithm cosume to execute.

If you want more depth in these topic read here:

- Analysis ([pdf](http://gcu.googlecode.com/files/02Analysis.pdf)) ([keynote](http://gcu.googlecode.com/files/02Analysis.key.zip))
- Algorithm @ ocw.mit.edu: lectures [1](http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/video-lectures/lecture-1-administrivia-introduction-analysis-of-algorithms-insertion-sort-mergesort) and [2](http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/video-lectures/lecture-2-asymptotic-notation-recurrences-substitution-master-method)
- http://algs4.cs.princeton.edu/home/



### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2011-12-22-learning-algorithms-from-scratch-algorithms-for-dummies.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/concentration-problems-procastination-youre-not-the-only-one/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Concentration problems? Procastination? You're not the only one.

<a href="/regular-expressions-in-c-and-java-csv-example/" class="article-nav-older"><strong>older <em></em></strong></a>

Regular Expressions in C\# and Java - CSV Example

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>
