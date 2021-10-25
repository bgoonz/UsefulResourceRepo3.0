<a href="/categories/coding/" class="category-link">Coding</a> &gt; <a href="/categories/coding/data-structures-and-algorithms-dsa/" class="category-link">Data Structures and Algorithms (DSA)</a>

# Data Structures in JavaScript: Arrays, HashMaps, and Lists

<span title="Last time this post was updated"> Last updated December 15th 2020 </span> <span class="m-x-2" title="Pageviews"> 101.6k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/Data-Structures-Time-Complexity-for-Beginners-Arrays-HashMaps-Linked-Lists-Stacks-Queues-tutorial/">0</span>](#disqus_thread) </span>

- <a href="/tags/algorithms/" class="tag-list-link">algorithms</a><span class="tag-list-count">12</span>
- <a href="/tags/tutorial-algorithms/" class="tag-list-link">tutorial_algorithms</a><span class="tag-list-count">10</span>

![Data Structures in JavaScript: Arrays, HashMaps, and Lists](/images/data-structures-time-complexity-lists-arrays-stacks-queues-hash-maps-sets-large.jpg)

When we are developing software, we have to store data in memory. However, many types of data structures, such as arrays, maps, sets, lists, trees, graphs, etc., and choosing the right one for the task can be tricky. This series of posts will help you know the trade-offs so that you can use the right tool for the job!

<span id="more"></span>

This section will focus on linear data structures: Arrays, Lists, Sets, Stacks, and Queues.

You can find all these implementations and more in the Github repo: <https://github.com/amejiarosario/dsa.js>

---

This post is part of a tutorial series:

**Learning Data Structures and Algorithms (DSA) for Beginners**

1.  [Intro to algorithm’s time complexity and Big O notation](/blog/2018/04/04/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/)

2.  [Eight time complexities that every programmer should know](/blog/2018/04/05/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/)

3.  Data Structures for Beginners: Arrays, HashMaps, and Lists **👈 you are here**

4.  [Graph Data Structures for Beginners](/blog/2018/05/14/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/)

5.  [Trees Data Structures for Beginners](/blog/2018/06/11/Data-Structures-for-Beginners-Trees-binary-search-tree-tutorial/)

6.  [Self-balanced Binary Search Trees](/blog/2018/07/16/Self-balanced-Binary-Search-Trees-with-AVL-tree-Data-Structure-for-beginners/)

7.  [Appendix I: Analysis of Recursive Algorithms](/blog/2018/04/24/Analysis-of-Recursive-Algorithms/)

---

## <a href="#Data-Structures-Big-O-Cheatsheet" class="headerlink" title="Data Structures Big-O Cheatsheet"></a>Data Structures Big-O Cheatsheet

The following table is a summary of everything that we are going to cover.

> Bookmark it, pin it, or share it, so you have it at hand when you need it.

_Click on the **name** to go to the section or click on the **runtime** to go to the implementation_

`*` = Amortized runtime

<table><thead><tr class="header"><th>Name</th><th>Insert</th><th>Access</th><th>Search</th><th>Delete</th><th>Comments</th></tr></thead><tbody><tr class="odd"><td><a href="#Array">Array</a></td><td><a href="#Insert-element-on-an-array">O(n)</a></td><td><a href="#Access-an-element-in-an-array">O(1)</a></td><td><a href="#Search-an-element-in-an-array">O(n)</a></td><td><a href="#Deleting-elements-from-an-array">O(n)</a></td><td>Insertion to the end is <code>O(1)</code>. <a href="#Array-operations-time-complexity">Details here.</a></td></tr><tr class="even"><td><a href="#HashMaps">HashMap</a></td><td><a href="#Insert-element-on-a-HashMap-runtime">O(1)</a></td><td><a href="#Search-Access-an-element-on-a-HashMap-runtime">O(1)</a></td><td><a href="#Search-Access-an-element-on-a-HashMap-runtime">O(1)</a></td><td><a href="#Edit-Delete-element-on-a-HashMap-runtime">O(1)</a></td><td>Rehashing might affect insertion time. <a href="#HashMap-operations-time-complexity">Details here.</a></td></tr><tr class="odd"><td>Map (using Binary Search Tree)</td><td>O(log(n))</td><td>-</td><td>O(log(n))</td><td>O(log(n))</td><td>Implemented using Binary Search Tree</td></tr><tr class="even"><td><a href="#Sets">Set (using HashMap)</a></td><td><a href="#Set-Implementation">O(1)</a></td><td>-</td><td><a href="#Set-Implementation">O(1)</a></td><td><a href="#Set-Implementation">O(1)</a></td><td>Set using a HashMap implementation. <a href="#Set-Operations-runtime">Details here.</a></td></tr><tr class="odd"><td>Set (using list)</td><td><a href="https://www.ecma-international.org/ecma-262/6.0/#sec-set.prototype.add">O(n)</a></td><td>-</td><td><a href="https://www.ecma-international.org/ecma-262/6.0/#sec-set.prototype.has">O(n)</a></td><td><a href="https://www.ecma-international.org/ecma-262/6.0/#sec-set.prototype.delete">O(n)</a></td><td>Implemented using Binary Search Tree</td></tr><tr class="even"><td>Set (using Binary Search Tree)</td><td>O(log(n))</td><td>-</td><td>O(log(n))</td><td>O(log(n))</td><td>Implemented using Binary Search Tree</td></tr><tr class="odd"><td><a href="#Singly-Linked-Lists">Linked List (singly)</a></td><td><a href="#SinglyLinkedList.addLast">O(n)</a></td><td>-</td><td><a href="#LinkedList.contains">O(n)</a></td><td><a href="#LinkedList.remove">O(n)</a></td><td>Adding/Removing to the start of the list is <code>O(1)</code>. <a href="#Singly-Linked-Lists-time-complexity">Details here</a>.</td></tr><tr class="even"><td><a href="#Doubly-Linked-Lists">Linked List (doubly)</a></td><td><a href="#DoublyLinkedList.add">O(n)</a></td><td>-</td><td><a href="#LinkedList.contains">O(n)</a></td><td><a href="#LinkedList.remove">O(n)</a></td><td>Adding/Deleting from the beginning/end is <code>O(1)</code>. But, deleting/adding from the middle is <code>O(n)</code>. <a href="#Doubly-Linked-Lists-time-complexity">Details here</a></td></tr><tr class="odd"><td><a href="#Stacks">Stack (array implementation)</a></td><td><a href="#Stacks">O(1)</a></td><td>-</td><td>-</td><td><a href="#Stacks">O(1)</a></td><td>Insert/delete is last-in, first-out (LIFO)</td></tr><tr class="even"><td><a href="#QueueNaiveImpl">Queue (naïve array impl.)</a></td><td><a href="#QueueNaiveImpl">O(1)</a></td><td>-</td><td>-</td><td><a href="#QueueNaiveImpl">O(n)</a></td><td>Remove (<code>Array.shift</code>) is <em>O(n)</em></td></tr><tr class="odd"><td><a href="#QueueArrayImpl">Queue (array implementation)</a></td><td><a href="#QueueArrayImpl">O(1)</a></td><td>-</td><td>-</td><td><a href="#QueueArrayImpl">O(1)</a></td><td>Worst time insert is O(n). However amortized is O(1)</td></tr><tr class="even"><td><a href="#QueueListImpl">Queue (list implementation)</a></td><td><a href="#QueueListImpl">O(1)</a></td><td>-</td><td>-</td><td><a href="#QueueListImpl">O(1)</a></td><td>Using Doubly Linked List with reference to the last element.</td></tr></tbody></table>

Note: **Binary search trees** and trees, in general, will be cover in the next post. Also, graph data structures.

## <a href="#Primitive-Data-Types" class="headerlink" title="Primitive Data Types"></a>Primitive Data Types

Primitive data types are the most basic elements, where all the other data structures are built upon. Some primitives are:

- Integers. E.g., `1`, `2`, `3`, …
- Characters. E.g., `a`, `b`, `"1"`, `"*"`
- Booleans. E.g., `true` or `false`.
- Float (floating points) or doubles. E.g., `3.14159`, `1483e-2`.
- Null values. E.g. `null`

JavaScript specific primitives:

- `undefined`
- `Symbol`
- `Number`

_Note_: Objects are not primitive since they are composed of zero or more primitives and other objects.

## <a href="#Array" class="headerlink" title="Array"></a>Array

Arrays are collections of zero or more elements. Arrays are one of the most used data structures because of their simplicity and fast way of retrieving information.

You can think of an array as a drawer where you can store things in the bins.

**Array is like a drawer that stores things on bins**

![](/images/array-drawer.jpg "Array is like a drawer that stores things on bins")

When you want to search for something, you can go directly to the bin number. That’s a constant time operation (_`O(1)`_). However, if you forgot what cabinet had, you will have to open one by one (_`O(n)`_) to verify its content until you find what you are looking for. That same happens with an array.

Depending on the programming language, arrays have some differences. For some dynamic languages like JavaScript and Ruby, an array can contain different data types: numbers, strings, words, objects, and even functions. In typed languages like Java/C/C++, you have to predefine the Array size and the data type. In JavaScript, it would automatically increase the size of the Array when needed.

### <a href="#Arrays-built-in-operations" class="headerlink" title="Arrays built-in operations"></a>Arrays built-in operations

Depending on the programming language, the implementation would be slightly different.

For instance, in JavaScript, we can accomplish append to end with `push` and append to the beginning with `unshift`. But also, we have `pop` and `shift` to remove from an array. Let’s describe some everyday operations that we are going to use through this post.

**Common JS Array built-in functions**

<table><thead><tr class="header"><th>Function</th><th>Runtime</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push">array.push</a></td><td>O(1)</td><td>Insert element to the end of the array</td></tr><tr class="even"><td><a href="http://devdocs.io/javascript/global_objects/array/pop">array.pop</a></td><td>O(1)</td><td>Remove element to the end of the array</td></tr><tr class="odd"><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift">array.shift</a></td><td>O(n)</td><td>Remove element to the beginning of the array</td></tr><tr class="even"><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift">array.unshift</a></td><td>O(n)</td><td>Insert element(s) to the beginning of the array</td></tr><tr class="odd"><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">array.slice</a></td><td>O(n)</td><td>Returns a copy of the array from <code>beginning</code> to <code>end</code>.</td></tr><tr class="even"><td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice">array.splice</a></td><td>O(n)</td><td>Changes (add/remove) the array</td></tr></tbody></table>

### <a href="#Insert-element-on-an-array" class="headerlink" title="Insert element on an array"></a>Insert element on an array

There are multiple ways to insert elements into an array. You can append new data to the end or add it to the beginning of the collection.

Let’s start with append to tail:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>function insertToTail(array, element) {
  array.push(element);
  return array;
}

const array = [1, 2, 3];
console.log(insertToTail(array, 4)); // =&gt; [ 1, 2, 3, 4 ]</code></pre></td></tr></tbody></table>

Based on the [language specification](https://tc39.github.io/ecma262/#sec-array.prototype.push), push just set the new value at the end of the Array. Thus,

> The `Array.push` runtime is a _O(1)_

Let’s now try appending to head:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>function insertToHead(array, element) {
  array.unshift(element);
  return array;
}

const array = [1, 2, 3];
console.log(insertToHead(array, 0)); // =&gt; [ 0, 1, 2, 3 ]</code></pre></td></tr></tbody></table>

What do you think is the runtime of the `insertToHead` function? It looks the same as the previous one, except that we are using `unshift` instead of `push`. But there’s a catch! [unshift algorithm](https://tc39.github.io/ecma262/#sec-array.prototype.unshift) makes room for the new element by moving all existing ones to the next position in the Array. So, it will iterate through all the elements.

> The `Array.unshift` runtime is an _O(n)_

### <a href="#Access-an-element-in-an-array" class="headerlink" title="Access an element in an array"></a>Access an element in an array

If you know the index for the element that you are looking for, then you can access the element directly like this:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>function access(array, index) {
  return array[index];
}

const array = [1, &#39;word&#39;, 3.14, {a: 1}];
access(array, 0); // =&gt; 1
access(array, 3); // =&gt; {a: 1}</code></pre></td></tr></tbody></table>

As you can see in the code above, accessing an element on an array has a constant time:

> Array access runtime is _O(1)_

_Note: You can also change any value at a given index in constant time._

### <a href="#Search-an-element-in-an-array" class="headerlink" title="Search an element in an array"></a>Search an element in an array

Suppose you don’t know the index of the data that you want from an array. You have to iterate through each element on the Array until we find what we are looking for.

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
11</code></pre></td><td><pre><code>function search(array, element) {
  for (let index = 0; index &lt; array.length; index++) {
    if(element === array[index]) {
      return index;
    }
  }
}

const array = [1, &#39;word&#39;, 3.14, {a: 1}];
console.log(search(array, &#39;word&#39;)); // =&gt; 1
console.log(search(array, 3.14)); // =&gt; 2</code></pre></td></tr></tbody></table>

Given the for-loop, we have:

> Array search runtime is _O(n)_

### <a href="#Deleting-elements-from-an-array" class="headerlink" title="Deleting elements from an array"></a>Deleting elements from an array

What do you think is the running time of deleting an element from an array?

Well, let’s think about the different cases:

1.  You can delete from the end of the Array, which might be constant time. _O(1)_
2.  However, you can also remove it from the beginning or middle of the collection. In that case, you would have to move all the following elements to close the gap. _O(n)_

Talk is cheap. Let’s do the code!

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>function remove(array, element) {
  const index = search(array, element);
  array.splice(index, 1);
  return array;
}

const array1 = [0, 1, 2, 3];
console.log(remove(array1, 1)); // =&gt; [ 0, 2, 3 ]</code></pre></td></tr></tbody></table>

So we are using our `search` function to find the elements’ index _O(n)_. Then we use the [JS built-in `splice`](https://tc39.github.io/ecma262/#sec-array.prototype.splice) function, which has a running time of _O(n)_. What’s the total _O(2n)_? Remember, we constants don’t matter as much.

We take the worst-case scenario:

> Deleting an item from an array is _O(n)_.

### <a href="#Array-operations-time-complexity" class="headerlink" title="Array operations time complexity"></a>Array operations time complexity

We can sum up the arrays time complexity as follows:

**Array Time Complexities**

<table><thead><tr class="header"><th>Operation</th><th>Worst</th></tr></thead><tbody><tr class="odd"><td>Access (<code>Array.[]</code>)</td><td><em><code>O(1)</code></em></td></tr><tr class="even"><td>Insert head (<code>Array.unshift</code>)</td><td><em><code>O(n)</code></em></td></tr><tr class="odd"><td>Insert tail (<code>Array.push</code>)</td><td><em><code>O(1)</code></em></td></tr><tr class="even"><td>Search (for value)</td><td><em><code>O(n)</code></em></td></tr><tr class="odd"><td>Delete (<code>Array.splice</code>)</td><td><em><code>O(n)</code></em></td></tr></tbody></table>

## <a href="#HashMaps" class="headerlink" title="HashMaps"></a>HashMaps

Maps, dictionaries, and associative arrays all describe the same abstract data type. But hash map implementations are distinct from treemap implementations in that one uses a hash table and one uses a binary search tree.

> Hashtable is a data structure that **maps** keys to values

Going back to the drawer analogy, bins have a label rather than a number.

**HashMap is like a drawer that stores things on bins and labels them**

![](/images/hashmap-drawer.jpg "HashMap is like a drawer that stores things on bins and labels them")

In this example, if you are looking for the book, you don’t have to open bin 1, 2, and 3. You go directly to the container labeled as “books”. That’s a huge gain! Search time goes from _O(n)_ to _O(1)_.

In arrays, the data is referenced using a numeric index (relatively to the position). However, HashMaps uses labels that could be a string, number, Object, or anything. Internally, the HashMap uses an Array, and it maps the labels to array indexes using a _hash function_.

There are at least two ways to implement hashmap:

1.  **Array**: Using a hash function to map a key to the array index value. Worst: `O(n)`, Average: `O(1)`
2.  **Binary Search Tree**: using a self-balancing binary search tree to look up for values (more on this later). Worst: _`O(log n)`_, Average: _`O(log n)`_.

We will cover Trees & Binary Search Trees, so don’t worry about it for now. The most common implementation of Maps is using an **array** and `hash` function. So, that’s the one we are going to focus on.

**HashMap implemented with an array**

![](/images/hash-map.jpg "HashMap: hash function translates keys into bucket (array) indexes")

As you can see in the image, each key gets translated into a **hash code**. Since the array size is limited (e.g., 10), we have to loop through the available buckets using the modulus function. In the buckets, we store the key/value pair, and if there’s more than one, we use a collection to hold them.

Now, What do you think about covering each of the HashMap components in detail? Let’s start with the **hash function**.

### <a href="#HashMap-vs-Array" class="headerlink" title="HashMap vs. Array"></a>HashMap vs. Array

Why go through the trouble of converting the key into an index and not using an array directly, you might ask. The main difference is that Array’s index doesn’t have any relationship with the data. You have to know where your data is.

Let’s say you want to count how many times words are used in a text. How would you implement that?

1.  You can use two arrays (let’s call it `A` and `B`). One for storing the word and another for storing how many times they have seen (frequency).
2.  You can use a HashMap. They _`key`_ is the word, and the _`value`_ is the word’s frequency.

What is the runtime of approach \#1 using **two arrays**? If we say, the number of words in the text is _`n`_. Then we have to `search` if the word in the array `A` and then increment the value on array `B` matching that index. For every word on `n`, we have to test if it’s already on array `A`. This double loop leave use with a runtime of `O(n2)`.

What is the runtime of approach \#2 using a **HashMap**? We iterate through each word on the text once and increment the value if there is something there or set it to 1 if that word is seen for the first time. The runtime would be `O(n)`, which is much more performant than approach \#1.

Differences between HashMap and Array

- Search on an array is _O(n)_ while on a HashMap is _O(1)_
- Arrays can have duplicate values, while HashMap cannot have duplicated keys (but they can have identical values.)
- The Array has a key (index) that is always a number from 0 to max value, while in a HashMap, you have control of the key, and it can be whatever you want: number, string, or symbol.

### <a href="#Hash-Function" class="headerlink" title="Hash Function"></a>Hash Function

The first step to implement a HashMap is to have a hash function. This function will map every key to its value.

> The **perfect hash function** is the one that for every key, it assigns a unique index.

Ideal hashing algorithms allow _constant time_ access/lookup. However, it’s hard to achieve a perfect hashing function in practice. You might have the case where two different keys yields on the same index, causing a _collision_.

Collisions in HashMaps are unavoidable when using an array-like underlying data structure. At some point, data that can’t fit in a HashMap will reuse data slots. One way to deal with collisions is to store multiple values in the same bucket using a linked list or another array (more on this later). When we try to access the key’s value and found various values, we iterate over the values _O(n)_. However, in most implementations, the hash adjusts the size dynamically to avoid too many collisions. We can say that the **amortized** lookup time is _O(1)_. We are going to explain what we mean by amortized runtime later in this post with an example.

### <a href="#Naive-HashMap-implementation" class="headerlink" title="Naïve HashMap implementation"></a>Naïve HashMap implementation

<span id="NaiveHashMap"></span> A simple (and bad) hash function would be this one:

Naive HashMap Implementation[full code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/maps/hash-maps/hash-map-1.js)

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
26</code></pre></td><td><pre><code>class NaiveHashMap {

constructor(initialCapacity = 2) {
this.buckets = new Array(initialCapacity);
}

set(key, value) {
const index = this.getIndex(key);
this.buckets[index] = value;
}

get(key) {
const index = this.getIndex(key);
return this.buckets[index];
}

hash(key) {
return key.toString().length;
}

getIndex(key) {
const indexHash = this.hash(key);
const index = indexHash % this.buckets.length;
return index;
}
}</code></pre></td></tr></tbody></table>

We are using `buckets` rather than drawer/bins, but you get the idea :)

We have an initial capacity of 2 (two buckets). But, we want to store any number of elements on them. We use modulus `%` to loop through the number of available buckets.

Take a look at our hash function in line 18. We are going to talk about it in a bit. First, let’s use our new HashMap!

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
19</code></pre></td><td><pre><code>// Usage:
const assert = require(&#39;assert&#39;);
const hashMap = new NaiveHashMap();

hashMap.set(&#39;cat&#39;, 2);
hashMap.set(&#39;rat&#39;, 7);
hashMap.set(&#39;dog&#39;, 1);
hashMap.set(&#39;art&#39;, 8);

console.log(hashMap.buckets);
/_
bucket #0: &lt;1 empty item&gt;,
bucket #1: 8
_/

assert.equal(hashMap.get(&#39;art&#39;), 8); // this one is ok
assert.equal(hashMap.get(&#39;cat&#39;), 8); // got overwritten by art 😱
assert.equal(hashMap.get(&#39;rat&#39;), 8); // got overwritten by art 😱
assert.equal(hashMap.get(&#39;dog&#39;), 8); // got overwritten by art 😱</code></pre></td></tr></tbody></table>

This `Map` allows us to `set` a key and a value and then `get` the value using a `key`. The key part is the `hash` function. Let’s see multiple implementations to see how it affects the Map’s performance.

Can you tell what’s wrong with `NaiveHashMap` before expanding the answer below?

What is wrong with \`NaiveHashMap\` is that...

**1)** **Hash function** generates many duplicates. E.g.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>hash(&#39;cat&#39;) // 3
hash(&#39;dog&#39;) // 3</code></pre></td></tr></tbody></table>

This hash implementation will cause a lot of collisions.

**2)** **Collisions** are not handled at all. Both `cat` and `dog` will overwrite each other on position 3 of the Array (bucket\#1).

**3)** **Size of the Array** even if we get a better hash function, we will get duplicates because the Array has a size of 3, which less than the number of elements that we want to fit. We want to have an initial capacity that is well beyond what we need to fit.

Did you guess any? ☝️

### <a href="#Improving-Hash-Function" class="headerlink" title="Improving Hash Function"></a>Improving Hash Function

> The primary purpose of a HashMap is to reduce the search/access time of an Array from _`O(n)`_ to _`O(1)`_.

For that, we need:

1.  A proper hash function that produces as few collisions as possible.
2.  An array big enough to hold all the required values.

Let’s give it another shot at our hash function. Instead of using the string’s length, let’s sum each character [ascii code](https://simple.wikipedia.org/wiki/ASCII).

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
11</code></pre></td><td><pre><code>hash(key) {
  let hashValue = 0;
  const stringKey = key.toString();

for (let index = 0; index &lt; stringKey.length; index++) {
const charCode = stringKey.charCodeAt(index);
hashValue += charCode;
}

return hashValue;
}</code></pre></td></tr></tbody></table>

Let’s try again:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>hash(&#39;cat&#39;) // 312  (c=99 + a=97 + t=116)
hash(&#39;dog&#39;) // 314 (d=100 + o=111 + g=103)</code></pre></td></tr></tbody></table>

This one is better! Because words with the same length have different codes.

Howeeeeeeeeever, there’s still an issue! Because `rat` and `art` are both 327, **collision!** 💥

We can fix that by offsetting the sum with the position:

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
11</code></pre></td><td><pre><code>hash(key) {
  let hashValue = 0;
  const stringKey = `${key}`;

for (let index = 0; index &lt; stringKey.length; index++) {
const charCode = stringKey.charCodeAt(index);
hashValue += charCode &lt;&lt; (index \* 8);
}

return hashValue;
}</code></pre></td></tr></tbody></table>

Now let’s try again, this time with hex numbers so we can see the offset.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3</code></pre></td><td><pre><code>// r = 114 or 0x72; a = 97 or 0x61; t = 116 or 0x74
hash(&#39;rat&#39;); // 7,627,122 (r: 114 * 1 + a: 97 * 256 + t: 116 * 65,536) or in hex: 0x746172 (r: 0x72 + a: 0x6100 + t: 0x740000)
hash(&#39;art&#39;); // 7,631,457 or 0x747261</code></pre></td></tr></tbody></table>

What about different types?

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>hash(1); // 49
hash(&#39;1&#39;); // 49

hash(&#39;1,2,3&#39;); // 741485668
hash([1,2,3]); // 741485668

hash(&#39;undefined&#39;) // 3402815551
hash(undefined) // 3402815551</code></pre></td></tr></tbody></table>

Houston, we still have a problem!! Different value types shouldn’t return the same hash code!

How can we solve that?

One way is taking into account the key `type` into the hash function.

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
11</code></pre></td><td><pre><code>hash(key) {
  let hashValue = 0;
  const stringTypeKey = `${key}${typeof key}`;

for (let index = 0; index &lt; stringTypeKey.length; index++) {
const charCode = stringTypeKey.charCodeAt(index);
hashValue += charCode &lt;&lt; (index \* 8);
}

return hashValue;
}</code></pre></td></tr></tbody></table>

Let’s test that again:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>console.log(hash(1)); // 1843909523
console.log(hash(&#39;1&#39;)); // 1927012762

console.log(hash(&#39;1,2,3&#39;)); // 2668498381
console.log(hash([1,2,3])); // 2533949129

console.log(hash(&#39;undefined&#39;)); // 5329828264
console.log(hash(undefined)); // 6940203017</code></pre></td></tr></tbody></table>

<span id="DecentHashMap"></span> Yay!!! 🎉 We have a much better hash function!

We also can change the initial capacity of the Array to minimize collisions. Let’s put all of that together in the next section.

### <a href="#Decent-HashMap-Implementation" class="headerlink" title="Decent HashMap Implementation"></a>Decent HashMap Implementation

Using our optimized hash function, we can now do much better.

We could still have collisions, so let’s implement something to handle them.

Let’s make the following improvements to our HashMap implementation:

- **Hash function** that checks types and character orders to minimize collisions.
- **Handle collisions** by appending values to a list. We also added a counter to keep track of them.

Decent HashMap Implementation[full code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/maps/hash-maps/hash-map-2.js)

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
46</code></pre></td><td><pre><code>class DecentHashMap {

constructor(initialCapacity = 2) {
this.buckets = new Array(initialCapacity);
this.collisions = 0;
}

set(key, value) {
const bucketIndex = this.getIndex(key);
if(this.buckets[bucketIndex]) {
this.buckets[bucketIndex].push({key, value});
if(this.buckets[bucketIndex].length &gt; 1) { this.collisions++; }
} else {
this.buckets[bucketIndex] = [{key, value}];
}
return this;
}

get(key) {
const bucketIndex = this.getIndex(key);
for (let arrayIndex = 0; arrayIndex &lt; this.buckets[bucketIndex].length; arrayIndex++) {
const entry = this.buckets[bucketIndex][arrayindex];
if(entry.key === key) {
return entry.value
}
}
}

hash(key) {
let hashValue = 0;
const stringTypeKey = `${key}${typeof key}`;

    for (let index = 0; index &lt; stringTypeKey.length; index++) {
      const charCode = stringTypeKey.charCodeAt(index);
      hashValue += charCode &lt;&lt; (index * 8);
    }

    return hashValue;

}

getIndex(key) {
const indexHash = this.hash(key);
const index = indexHash % this.buckets.length;
return index;
}
}</code></pre></td></tr></tbody></table>

Let’s use it and see how it perform:

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
20</code></pre></td><td><pre><code>// Usage:
const assert = require(&#39;assert&#39;);
const hashMap = new DecentHashMap();

hashMap.set(&#39;cat&#39;, 2);
hashMap.set(&#39;rat&#39;, 7);
hashMap.set(&#39;dog&#39;, 1);
hashMap.set(&#39;art&#39;, 8);

console.log(&#39;collisions: &#39;, hashMap.collisions); // 2
console.log(hashMap.buckets);
/_
bucket #0: [ { key: &#39;cat&#39;, value: 2 }, { key: &#39;art&#39;, value: 8 } ]
bucket #1: [ { key: &#39;rat&#39;, value: 7 }, { key: &#39;dog&#39;, value: 1 } ]
_/

assert.equal(hashMap.get(&#39;art&#39;), 8); // this one is ok
assert.equal(hashMap.get(&#39;cat&#39;), 2); // Good. Didn&#39;t got overwritten by art
assert.equal(hashMap.get(&#39;rat&#39;), 7); // Good. Didn&#39;t got overwritten by art
assert.equal(hashMap.get(&#39;dog&#39;), 1); // Good. Didn&#39;t got overwritten by art</code></pre></td></tr></tbody></table>

This `DecentHashMap` gets the job done, but there are still some issues. We are using a decent hash function that doesn’t produce duplicate values, and that’s great. However, we have two values in `bucket#0` and two more in `bucket#1`. How is that possible?

Since we are using a limited bucket size of 2, we use modulus `%` to loop through the number of available buckets. So, even if the hash code is different, all values will fit on the Array size: bucket\#0 or bucket\#1.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>hash(&#39;cat&#39;) =&gt; 3789411390; bucketIndex =&gt; 3789411390 % 2 = 0
hash(&#39;art&#39;) =&gt; 3789415740; bucketIndex =&gt; 3789415740 % 2 = 0
hash(&#39;dog&#39;) =&gt; 3788563007; bucketIndex =&gt; 3788563007 % 2 = 1
hash(&#39;rat&#39;) =&gt; 3789411405; bucketIndex =&gt; 3789411405 % 2 = 1</code></pre></td></tr></tbody></table>

So naturally, we have increased the initial capacity, but by how much? Let’s see how the initial size affects the hash map performance.

If we have an initial capacity of `1`. All the values will go into one bucket (`bucket#0`), and it won’t be any better than searching a deal in a simple array _`O(n)`_.

Let’s say that we start with an initial capacity set to 10:

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
17</code></pre></td><td><pre><code>const hashMapSize10 = new DecentHashMap(10);

hashMapSize10.set(&#39;cat&#39;, 2);
hashMapSize10.set(&#39;rat&#39;, 7);
hashMapSize10.set(&#39;dog&#39;, 1);
hashMapSize10.set(&#39;art&#39;, 8);

console.log(&#39;collisions: &#39;, hashMapSize10.collisions); // 1
console.log(&#39;hashMapSize10\n&#39;, hashMapSize10.buckets);
/_
bucket#0: [ { key: &#39;cat&#39;, value: 2 }, { key: &#39;art&#39;, value: 8 } ],
&lt;4 empty items&gt;,
bucket#5: [ { key: &#39;rat&#39;, value: 7 } ],
&lt;1 empty item&gt;,
bucket#7: [ { key: &#39;dog&#39;, value: 1 } ],
&lt;2 empty items&gt;
_/</code></pre></td></tr></tbody></table>

Another way to see this

![](/images/hash-map.jpg "HashMap: hash function translates keys into bucket (array) indexes")

As you can see, we reduced the number of collisions (from 2 to 1) by increasing the hash map’s initial capacity.

Let’s try with a bigger capacity 💯:

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
20</code></pre></td><td><pre><code>const hashMapSize100 = new DecentHashMap(100);

hashMapSize100.set(&#39;cat&#39;, 2);
hashMapSize100.set(&#39;rat&#39;, 7);
hashMapSize100.set(&#39;dog&#39;, 1);
hashMapSize100.set(&#39;art&#39;, 8);

console.log(&#39;collisions: &#39;, hashMapSize100.collisions); // 0
console.log(&#39;hashMapSize100\n&#39;, hashMapSize100.buckets);
/_
&lt;5 empty items&gt;,
bucket#5: [ { key: &#39;rat&#39;, value: 7 } ],
&lt;1 empty item&gt;,
bucket#7: [ { key: &#39;dog&#39;, value: 1 } ],
&lt;32 empty items&gt;,
bucket#41: [ { key: &#39;art&#39;, value: 8 } ],
&lt;49 empty items&gt;,
bucket#90: [ { key: &#39;cat&#39;, value: 2 } ],
&lt;9 empty items&gt;
_/</code></pre></td></tr></tbody></table>

Yay! 🎊 no collision!

Having a bigger bucket size is excellent to avoid collisions, but it consumes **too much memory**, and probably most of the buckets will be unused.

Wouldn’t it be great if we can have a HashMap that automatically increases its size as needed? Well, that’s called \*\* rehash\*\*, and we are going to do it next!

### <a href="#Optimal-HashMap-Implementation" class="headerlink" title="Optimal HashMap Implementation"></a>Optimal HashMap Implementation

If we have a big enough bucket, we won’t have collisions; thus, the search time would be _`O(1)`_. However, how do we know how big a hash map capacity should big? 100? 1,000? A million?

Having allocated massive amounts of memory is impractical. So, we can automatically have the hash map resize itself based on a load factor. This operation is called \*\* rehash\*\*.

The **load factor** is the measurement of how full is a hash map. We can get the load factor by dividing the number of items by the bucket size.

This will be our latest and greatest hash map implementation:

<span id="HashMapWithRehash"></span>

\*\*Optimized Hash Map Implementation \_(click here to show the code)\_\*\*

Optimal HashMap Implementation[documented code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/maps/hash-maps/hash-map.js)

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
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115</code></pre></td><td><pre><code>class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
    this.collisions = 0;
    this.keys = [];
  }

hash(key) {
let hashValue = 0;
const stringTypeKey = `${key}${typeof key}`;

    for (let index = 0; index &lt; stringTypeKey.length; index++) {
      const charCode = stringTypeKey.charCodeAt(index);
      hashValue += charCode &lt;&lt; (index * 8);
    }

    return hashValue;

}

\_getBucketIndex(key) {
const hashValue = this.hash(key);
const bucketIndex = hashValue % this.buckets.length;
return bucketIndex;
}

set(key, value) {
const {bucketIndex, entryIndex} = this.\_getIndexes(key);

    if(entryIndex === undefined) {
      // initialize array and save key/value
      const keyIndex = this.keys.push({content: key}) - 1; // keep track of the key index
      this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];
      this.buckets[bucketIndex].push({key, value, keyIndex});
      this.size++;
      // Optional: keep count of collisions
      if(this.buckets[bucketIndex].length &gt; 1) { this.collisions++; }
    } else {
      // override existing value
      this.buckets[bucketIndex][entryIndex].value = value;
    }

    // check if a rehash is due
    if(this.loadFactor &gt; 0 &amp;&amp; this.getLoadFactor() &gt; this.loadFactor) {
      this.rehash(this.buckets.length * 2);
    }

    return this;

}

get(key) {
const {bucketIndex, entryIndex} = this.\_getIndexes(key);

    if(entryIndex === undefined) {
      return;
    }

    return this.buckets[bucketIndex][entryIndex].value;

}

has(key) {
return !!this.get(key);
}

\_getIndexes(key) {
const bucketIndex = this.\_getBucketIndex(key);
const values = this.buckets[bucketIndex] || [];

    for (let entryIndex = 0; entryIndex &lt; values.length; entryIndex++) {
      const entry = values[entryIndex];
      if(entry.key === key) {
        return {bucketIndex, entryIndex};
      }
    }

    return {bucketIndex};

}

delete(key) {
const {bucketIndex, entryIndex, keyIndex} = this.\_getIndexes(key);

    if(entryIndex === undefined) {
      return false;
    }

    this.buckets[bucketIndex].splice(entryIndex, 1);
    delete this.keys[keyIndex];
    this.size--;

    return true;

}

rehash(newCapacity) {
const newMap = new HashMap(newCapacity);

    this.keys.forEach(key =&gt; {
      if(key) {
        newMap.set(key.content, this.get(key.content));
      }
    });

    // update bucket
    this.buckets = newMap.buckets;
    this.collisions = newMap.collisions;
    // Optional: both `keys` has the same content except that the new one doesn&#39;t have empty spaces from deletions
    this.keys = newMap.keys;

}

getLoadFactor() {
return this.size / this.buckets.length;
}
}</code></pre></td></tr></tbody></table>

Pay special attention to lines 96 to 114. That’s where the rehash magic happens. We create a new HashMap with doubled capacity.

So, **testing** our new implementation from above ^

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
29</code></pre></td><td><pre><code>const assert = require(&#39;assert&#39;);
const hashMap = new HashMap();

assert.equal(hashMap.getLoadFactor(), 0);
hashMap.set(&#39;songs&#39;, 2);
hashMap.set(&#39;pets&#39;, 7);
hashMap.set(&#39;tests&#39;, 1);
hashMap.set(&#39;art&#39;, 8);
assert.equal(hashMap.getLoadFactor(), 4/16);

hashMap.set(&#39;Pineapple&#39;, &#39;Pen Pineapple Apple Pen&#39;);
hashMap.set(&#39;Despacito&#39;, &#39;Luis Fonsi&#39;);
hashMap.set(&#39;Bailando&#39;, &#39;Enrique Iglesias&#39;);
hashMap.set(&#39;Dura&#39;, &#39;Daddy Yankee&#39;);

hashMap.set(&#39;Lean On&#39;, &#39;Major Lazer&#39;);
hashMap.set(&#39;Hello&#39;, &#39;Adele&#39;);
hashMap.set(&#39;All About That Bass&#39;, &#39;Meghan Trainor&#39;);
hashMap.set(&#39;This Is What You Came For&#39;, &#39;Calvin Harris &#39;);

assert.equal(hashMap.collisions, 2);
assert.equal(hashMap.getLoadFactor(), 0.75);
assert.equal(hashMap.buckets.length, 16);

hashMap.set(&#39;Wake Me Up&#39;, &#39;Avicii&#39;); // &lt;--- Trigger REHASH

assert.equal(hashMap.collisions, 0);
assert.equal(hashMap.getLoadFactor(), 0.40625);
assert.equal(hashMap.buckets.length, 32);</code></pre></td></tr></tbody></table>

Take notice that after we add the 12th item, the load factor gets beyond 0.75, so a rehash is triggered and doubles the capacity (from 16 to 32). Also, you can see how the number of collisions improves from 2 to 0!

This implementation is good enough to help us figure out the runtime of standard operations like insert/search/delete/edit.

To sum up, the performance of a HashMap will be given by:

1.  The hash function that every key produces for different output.
2.  Size of the bucket to hold data.

We nailed both 🔨. We have a decent hash function that produces different outputs for different data. Two distinct data will never return the same code. Also, we have a rehash function that automatically grows the capacity as needed. That’s great!

### <a href="#Insert-element-on-a-HashMap-runtime" class="headerlink" title="Insert element on a HashMap runtime"></a>Insert element on a HashMap runtime

Inserting an element on a HashMap requires two things: a key and a value. We could use our [DecentHashMap](#DecentHashMap) data structure that we develop or use the built-in as follows:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>function insert(object, key, value) {
  object[key] = value;
  return object;
}

const object = {};
console.log(insert(hash, &#39;word&#39;, 1)); // =&gt; { word: 1 }</code></pre></td></tr></tbody></table>

In modern JavaScript, you can use `Map`s.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>function insertMap(map, key, value) {
  map.set(key, value);
  return map;
}

const map = new Map();
console.log(insertMap(map, &#39;word&#39;, 1)); // Map { &#39;word&#39; =&gt; 1 }</code></pre></td></tr></tbody></table>

**Note:** We will use the `Map` rather than the regular `Object`, since the Map’s key could be anything while on Object’s key can only be string or number. Also, `Map`s keeps the order of insertion.

Behind the scenes, the `Map.set` just insert elements into an array (take a look at [`DecentHashMap.set`](#DecentHashMap)). So, similar to `Array.push` we have that:

> Insert an element in HashMap runtime is _O(1)_. If rehash is needed, then it will take _O(n)_

Our implementation with [rehash](#HashMapWithRehash) functionality will keep collisions to the minimum. The rehash operation takes _`O(n)`_, but it doesn’t happen all the time, only when it is needed.

### <a href="#Search-Access-an-element-on-a-HashMap-runtime" class="headerlink" title="Search/Access an element on a HashMap runtime"></a>Search/Access an element on a HashMap runtime

This is the `HashMap.get` function that we use to get the value associated with a key. Let’s evaluate the implementation from [`DecentHashMap.get`](#DecentHashMap)):

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10</code></pre></td><td><pre><code>get(key) {
  const hashIndex = this.getIndex(key);
  const values = this.array[hashIndex];
  for (let index = 0; index &lt; values.length; index++) {
    const entry = values[index];
    if(entry.key === key) {
      return entry.value
    }
  }
}</code></pre></td></tr></tbody></table>

If there’s no collision, then `values` will only have one value, and the access time would be _`O(1)`_. But, we know there will be collisions. If the initial capacity is too small and the hash function is terrible like [NaiveHashMap.hash](#NaiveHashMap), then most of the elements will end up in a few buckets _`O(n)`_.

> HashMap access operation has a runtime of _`O(1)`_ on average and worst-case of _`O(n)`_.

**Advanced Note:** Another idea to reduce the time to get elements from _O(n)_ to _O(log n)_ is to use a _binary search tree_ instead of an array. Actually, [Java’s HashMap implementation](http://hg.openjdk.java.net/jdk9/jdk9/jdk/file/f08705540498/src/java.base/share/classes/java/util/HashMap.java#l145) switches from an array to a tree when a bucket has more than [8 elements](http://hg.openjdk.java.net/jdk9/jdk9/jdk/file/f08705540498/src/java.base/share/classes/java/util/HashMap.java#l257).

### <a href="#Edit-Delete-element-on-a-HashMap-runtime" class="headerlink" title="Edit/Delete element on a HashMap runtime"></a>Edit/Delete element on a HashMap runtime

Editing (`HashMap.set`) and deleting (`HashMap.delete`) key/value pairs have an **amortized** runtime of _`O(1)`_. In the case of many collisions, we could face an _`O(n)`_ as a worst-case. However, with our rehash operation, we can mitigate that risk.

> HashMap edits and delete operations has a runtime of _`O(1)`_ on average and worst-case of _`O(n)`_.

### <a href="#HashMap-operations-time-complexity" class="headerlink" title="HashMap operations time complexity"></a>HashMap operations time complexity

We can sum up the arrays time complexity as follows:

**HashMap Time Complexities**

<table><thead><tr class="header"><th>Operation</th><th>Worst</th><th>Amortized</th><th>Comments</th></tr></thead><tbody><tr class="odd"><td>Access/Search (<code>HashMap.get</code>)</td><td><em><code>O(n)</code></em></td><td><em><code>O(1)</code></em></td><td><em><code>O(n)</code></em> is an extreme case when there are too many collisions</td></tr><tr class="even"><td>Insert/Edit (<code>HashMap.set</code>)</td><td><em><code>O(n)</code></em></td><td><em><code>O(1)</code></em></td><td><em><code>O(n)</code></em> only happens with rehash when the Hash is 0.75 full</td></tr><tr class="odd"><td>Delete (<code>HashMap.delete</code>)</td><td><em><code>O(n)</code></em></td><td><em><code>O(1)</code></em></td><td><em><code>O(n)</code></em> is an extreme case when there are too many collisions</td></tr></tbody></table>

## <a href="#Sets" class="headerlink" title="Sets"></a>Sets

Sets are very similar to arrays. The difference is that they don’t allow duplicates.

How can we implement a Set (Array without duplicates)? We could use an array and check if an element is there before inserting a new one. But the running time of checking if a value is already there is _`O(n)`_. Can we do better than that? We develop the `Map` with an amortized run time of _`O(1)`_!

### <a href="#Set-Implementation" class="headerlink" title="Set Implementation"></a>Set Implementation

We could use the JavaScript built-in `Set`. However, if we implement it by ourselves, it’s more logical to deduct the runtimes. We are going to use the [optimized HashMap](#HashMapWithRehash) with rehash functionality.

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
32</code></pre></td><td><pre><code>const HashMap = require(&#39;../hash-maps/hash-map&#39;);

class MySet {
constructor() {
this.hashMap = new HashMap();
}

add(value) {
this.hashMap.set(value);
}

has(value) {
return this.hashMap.has(value);
}

get size() {
return this.hashMap.size;
}

delete(value) {
return this.hashMap.delete(value);
}

entries() {
return this.hashMap.keys.reduce((acc, key) =&gt; {
if(key !== undefined) {
acc.push(key.content);
}
return acc
}, []);
}
}</code></pre></td></tr></tbody></table>

We used `HashMap.set` to add the set elements without duplicates. We use the key as the value, and since the hash map’s keys are unique, we are all set.

Checking if an element is already there can be done using the `hashMap.has`, which has an amortized runtime of _`O(1)`_. Most operations would be an amortized constant time except for getting the `entries`, _`O(n)`_.

Note: The JS built-in `Set.has` has a runtime of _O(n)_ since it uses a regular list of elements and checks each one at a time. You can see the `Set.has` algorithm [here](https://www.ecma-international.org/ecma-262/6.0/#sec-set.prototype.has)

Here some examples how to use it:

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
18</code></pre></td><td><pre><code>const assert = require(&#39;assert&#39;);
// const set = new Set(); // Using the built-in
const set = new MySet(); // Using our own implementation

set.add(&#39;one&#39;);
set.add(&#39;uno&#39;);
set.add(&#39;one&#39;); // should NOT add this one twice

assert.equal(set.has(&#39;one&#39;), true);
assert.equal(set.has(&#39;dos&#39;), false);

assert.equal(set.size, 2);
// assert.deepEqual(Array.from(set), [&#39;one&#39;, &#39;uno&#39;]);

assert.equal(set.delete(&#39;one&#39;), true);
assert.equal(set.delete(&#39;one&#39;), false);
assert.equal(set.has(&#39;one&#39;), false);
assert.equal(set.size, 1);</code></pre></td></tr></tbody></table>

You should be able to use `MySet` and the built-in `Set` interchangeably for these examples.

### <a href="#Set-Operations-runtime" class="headerlink" title="Set Operations runtime"></a>Set Operations runtime

From our Set implementation using a HashMap, we can sum up the time complexity as follows (very similar to the HashMap):

**Set Time Complexities**

<table><thead><tr class="header"><th>Operation</th><th>Worst</th><th>Amortized</th><th>Comments</th></tr></thead><tbody><tr class="odd"><td>Access/Search (<code>Set.has</code>)</td><td><em><code>O(n)</code></em></td><td><em><code>O(1)</code></em></td><td><em><code>O(n)</code></em> is an extreme case when there are too many collisions</td></tr><tr class="even"><td>Insert/Edit (<code>Set.add</code>)</td><td><em><code>O(n)</code></em></td><td><em><code>O(1)</code></em></td><td><em><code>O(n)</code></em> only happens with <em>rehash</em> when the Hash is 0.75 full</td></tr><tr class="odd"><td>Delete (<code>Set.delete</code>)</td><td><em><code>O(n)</code></em></td><td><em><code>O(1)</code></em></td><td><em><code>O(n)</code></em> is an extreme case when there are too many collisions</td></tr></tbody></table>

## <a href="#Linked-Lists" class="headerlink" title="Linked Lists"></a>Linked Lists

A linked list is a data structure where every element is connected to the next one.

![](/images/linked-list.jpg "LinkedList")

The linked list is the first data structure that we are going to implement without using an array. Instead, we will use a `node` that holds a `value` and points to the next element.

node.js

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}</code></pre></td></tr></tbody></table>

When we have a chain of nodes where each one points to the next one, we a **Singly Linked list**.

### <a href="#Singly-Linked-Lists" class="headerlink" title="Singly Linked Lists"></a>Singly Linked Lists

For a singly linked list, we only have to worry about every element referencing the next one.

We start by constructing the root or head element.

linked-list.js

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>class LinkedList {
  constructor() {
    this.root = null; // first/head/root element
    this.size = 0; // total number of elements in the list
  }

// ...
}</code></pre></td></tr></tbody></table>

There are four basic operations that we can do in every Linked List:

1.  `addLast`: appends an element to the end of the list (tail)
2.  `removeLast`: deletes element to the end of the list
3.  `addFirst`: Adds an element to the beginning of the list (head)
4.  `removeFirst`: Removes an element from the start of the list (head/root)

**Adding/Removing an element at the end of a linked list**

There are two primary cases:

1.  If the list first (root/head) doesn’t have any element yet, we make this node the head of the list.
2.  Contrary, if the list already has items, then we have to iterate until finding the last one and appending our new node to the end.

<span id="SinglyLinkedList.addLast"></span>

LinkedList.prototype.addLast

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
13</code></pre></td><td><pre><code>addLast(value) { // similar Array.push
  const node = new Node(value);

if(this.root) {
let currentNode = this.root;
while(currentNode &amp;&amp; currentNode.next) {
currentNode = currentNode.next;
}
currentNode.next = node;
} else {
this.root = node;
}
}</code></pre></td></tr></tbody></table>

What’s the runtime of this code? If it is the first element, then adding to the root is _O(1)_. However, finding the last item is _O(n)_.

Now, removing an element from the end of the list has a similar code. We have to find the current before last and make its `next` reference `null`.

<span id="SinglyLinkedList.removeLast"></span>

LinkedList.prototype.removeLast

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
19</code></pre></td><td><pre><code>removeLast() {
  let current = this.root;
  let target;

if(current &amp;&amp; current.next) {
while(current &amp;&amp; current.next &amp;&amp; current.next.next) {
current = current.next;
}
target = current.next;
current.next = null;
} else {
this.root = null;
target = current;
}

if(target) {
return target.value;
}
}</code></pre></td></tr></tbody></table>

The runtime again is _O(n)_ because we have to iterate until the second-last element and remove the reference to the last (line 10).

**Adding/Removing an element from the beginning of a linked list**

<span id="SinglyLinkedList.removeFirst"></span>

Adding an element to the head of the list is like this:

LinkedList.addFirst

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10</code></pre></td><td><pre><code>/**
  * Adds an element to the beginning of the list. Similar to Array.unshift
  * Runtime: O(1)
  * @param {any} value
  */
addFirst(value) {
  const node = new Node(value);
  node.next = this.root;
  this.root = node;
}</code></pre></td></tr></tbody></table>

Adding and removing elements from the beginning is a constant time because we hold a reference to the first element:

LinkedList.removeFirst

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
12</code></pre></td><td><pre><code>/**
  * Removes element from the start of the list (head/root). It&#39;s Similar `Array.shift`
  * Runtime: O(1)
  */
removeFirst() {
  const first = this.root;

if (first) {
this.root = first.next;
return first.value;
}
}</code></pre></td></tr></tbody></table>

As expected, the runtime for removing/adding to the first element from a linked List is always constant _O(1)_

<span id="LinkedList.remove"></span>

**Removing an element anywhere from a linked list**

Removing an element anywhere in the list leverage the `removeLast` and `removeFirst`. However, if the removal is in the middle, then we assign the previous node to the next one. That removes any reference from the current node, this is removed from the list:

LinkedList.remove

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
16</code></pre></td><td><pre><code>remove(index = 0) {
  if(index === 0) {
    return this.removeFirst();
  }

for (let current = this.first, i = 0; current; i++, current = current.next) {
if(i === index) {
if(!current.next) { // if it doesn&#39;t have next it means that it is the last
return this.removeLast();
}
current.previous.next = current.next;
this.size--;
return current.value;
}
}
}</code></pre></td></tr></tbody></table>

Note that `index` is a zero-based index: 0 will be the first element, 1 second, and so on.

> Removing an element anywhere within the list is _O(n)_.

<span id="LinkedList.contains"></span>

**Searching for an element in a linked list**

Searching an element on the linked list is very somewhat similar to `remove`:

LinkedList.contains

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>contains(value) {
  for (let current = this.first, index = 0; current;  index++, current = current.next) {
    if(current.value === value) {
      return index;
    }
  }
}</code></pre></td></tr></tbody></table>

This function finds the first element with the given value.

> The runtime for searching an element in a linked list is _O(n)_

### <a href="#Singly-Linked-Lists-time-complexity" class="headerlink" title="Singly Linked Lists time complexity"></a>Singly Linked Lists time complexity

Singly Linked List time complexity per function is as follows.

<table><thead><tr class="header"><th>Operation</th><th>Runtime</th><th>Comment</th></tr></thead><tbody><tr class="odd"><td><a href="#DoublyLinkedList.addFirst"><code>addFirst</code></a></td><td><em>O(1)</em></td><td>Insert element to the beginning of the list</td></tr><tr class="even"><td><a href="#SinglyLinkedList.addLast"><code>addLast</code></a></td><td><em>O(n)</em></td><td>Insert element to the end of the list</td></tr><tr class="odd"><td><a href="#DoublyLinkedList.add"><code>add</code></a></td><td><em>O(n)</em></td><td>Insert element anywhere in the list.</td></tr><tr class="even"><td><a href="#DoublyLinkedList.removeFirst"><code>removeFirst</code></a></td><td><em>O(1)</em></td><td>Remove element to the beginning of the list</td></tr><tr class="odd"><td><a href="#SinglyLinkedList.removeLast"><code>removeLast</code></a></td><td><em>O(n)</em></td><td>Remove element to the end of the list</td></tr><tr class="even"><td><a href="#LinkedList.remove"><code>remove</code></a></td><td><em>O(n)</em></td><td>Remove any element from the list</td></tr><tr class="odd"><td><a href="#LinkedList.contains"><code>contains</code></a></td><td><em>O(n)</em></td><td>Search for an element from the list</td></tr></tbody></table>

Notice that every time we add/remove from the last position, the operation takes _O(n)_.

> But we could reduce the `addLast`/`removeLast` from _O(n)_ to a flat _O(1)_ if we keep a reference of the last element!

We are going to add the last reference in the next section!

### <a href="#Doubly-Linked-Lists" class="headerlink" title="Doubly Linked Lists"></a>Doubly Linked Lists

When we have a chain of nodes where each one points to the next one, we have a **Singly Linked list**. When we have a linked list where each node leads to the **next** and the **previous** element, we have a **Doubly Linked List**

![](/images/doubly-linked-list.jpg "Doubly Linked List")

Doubly linked list nodes have double references (next and previous). We are also going to keep track of the list first and the last element.

Doubly Linked List[full code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/linked-lists/linked-list.js)

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
17</code></pre></td><td><pre><code>class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
constructor() {
this.first = null; // head/root element
this.last = null; // last element of the list
this.size = 0; // total number of elements in the list
}

// ...
}</code></pre></td></tr></tbody></table>

**Adding and Removing from the start of a list**

Adding and removing from the start of the list is simple since we have `this.first` reference:

<span id="DoublyLinkedList.addFirst"></span>

LinkedList.prototype.addFirst[full code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/linked-lists/linked-list.js)

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
16</code></pre></td><td><pre><code>addFirst(value) {
  const node = new Node(value);

node.next = this.first;

if(this.first) {
this.first.previous = node;
} else {
this.last = node;
}

this.first = node; // update head
this.size++;

return node;
}</code></pre></td></tr></tbody></table>

Notice that we have to be very careful and update the previous and last reference.

<span id="DoublyLinkedList.removeFirst"></span>

LinkedList.prototype.removeFirst[full code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/linked-lists/linked-list.js)

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
16</code></pre></td><td><pre><code>removeFirst() {
  const first = this.first;

if(first) {
this.first = first.next;
if(this.first) {
this.first.previous = null;
}

    this.size--;

    return first.value;

} else {
this.last = null;
}
}</code></pre></td></tr></tbody></table>

What’s the runtime?

> Adding and removing elements from a (singly/doubly) LinkedList has a constant runtime _O(1)_

**Adding and removing from the end of a list**

Adding and removing _from the end_ of the list is a little tricky. If you checked in the Singly Linked List, both operations took _O(n)_ since we had to loop through the list to find the last element. Now, we have the `last` reference:

<span id="DoublyLinkedList.addLast"></span>

LinkedList.prototype.addLast[full code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/linked-lists/linked-list.js)

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
17</code></pre></td><td><pre><code>addLast(value) {
  const node = new Node(value);

if(this.first) {
let currentNode = this.first;
node.previous = this.last;
this.last.next = node;
this.last = node;
} else {
this.first = node;
this.last = node;
}

this.size++;

return node;
}</code></pre></td></tr></tbody></table>

Again, we have to be careful about updating the references and handling exceptional cases such as only one element.

<span id="DoublyLinkedList.removeLast"></span>

LinkedList.prototype.removeLast[full code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/linked-lists/linked-list.js)

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
20</code></pre></td><td><pre><code>removeLast() {
  let current = this.first;
  let target;

if(current &amp;&amp; current.next) {
current = this.last.previous;
this.last = current;
target = current.next;
current.next = null;
} else {
this.first = null;
this.last = null;
target = current;
}

if(target) {
this.size--;
return target.value;
}
}</code></pre></td></tr></tbody></table>

Using a doubly-linked list, we no longer have to iterate through the whole list to get the 2nd last element. We can use directly `this.last.previous` and is `O(1)`.

Did you remember that for the Queue, we had to use two arrays? We can now change that implementation and use a doubly-linked list instead. The runtime will be _O(1)_ for insert at the start and deleting at the end.

<span id="DoublyLinkedList.add"></span>

**Adding an element anywhere from a linked list**

Adding an element on anywhere on the list leverages our `addFirst` and `addLast` functions as you can see below:

LinkedList.add[FullCode](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/linked-lists/linked-list.js)

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
21</code></pre></td><td><pre><code>add(value, index = 0) {
  if(index === 0) {
    return this.addFirst(value);
  }

for (let current = this.first, i = 0; i &lt;= this.size; i++, current = (current &amp;&amp; current.next)) {
if(i === index) {
if(i === this.size) { // if it doesn&#39;t have next it means that it is the last
return this.addLast(value);
}
const newNode = new Node(value);
newNode.previous = current.previous;
newNode.next = current;

      current.previous.next = newNode;
      if(current.next) { current.next.previous = newNode; }
      this.size++;
      return newNode;
    }

}
}</code></pre></td></tr></tbody></table>

If we have an insertion in the middle of the Array, then we have to update the `next` and `previous` reference of the surrounding elements.

> Adding an element anywhere within the list is _O(n)_.

### <a href="#Doubly-Linked-Lists-time-complexity" class="headerlink" title="Doubly Linked Lists time complexity"></a>Doubly Linked Lists time complexity

Doubly Linked List time complexity per function is as follows:

<table><thead><tr class="header"><th>Operation</th><th>Runtime</th><th>Comment</th></tr></thead><tbody><tr class="odd"><td><a href="#DoublyLinkedList.addFirst"><code>addFirst</code></a></td><td><em>O(1)</em></td><td>Insert element to the beginning of the list.</td></tr><tr class="even"><td><a href="#DoublyLinkedList.addLast"><code>addLast</code></a></td><td><em>O(1)</em></td><td>Insert element to the end of the list.</td></tr><tr class="odd"><td><a href="#DoublyLinkedList.add"><code>add</code></a></td><td><em>O(n)</em></td><td>Insert element anywhere in the list.</td></tr><tr class="even"><td><a href="#DoublyLinkedList.removeFirst"><code>removeFirst</code></a></td><td><em>O(1)</em></td><td>Remove element to the beginning of the list.</td></tr><tr class="odd"><td><a href="#DoublyLinkedList.removeLast"><code>removeLast</code></a></td><td><em>O(1)</em></td><td>Remove element to the end of the list.</td></tr><tr class="even"><td><a href="#LinkedList.remove"><code>remove</code></a></td><td><em>O(n)</em></td><td>Remove any element from the list</td></tr><tr class="odd"><td><a href="#LinkedList.contains"><code>contains</code></a></td><td><em>O(n)</em></td><td>Search for any element from the list</td></tr></tbody></table>

Doubly linked lists are a significant improvement compared to the singly linked list! We improved from _O(n)_ to _O(1)_ by:

- Adding a reference to the previous element.
- Holding a reference to the last item in the list.

Removing first/last can be done in constant time; however, eliminating in the middle of the Array is still _O(n)_.

## <a href="#Stacks" class="headerlink" title="Stacks"></a>Stacks

Stacks is a data structure where the last entered data is the first to come out. Also know as Last-in, First-out (LIFO).

![](/images/stack.jpg "Stack: push and pop")

Let’s implement a stack from scratch!

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
14</code></pre></td><td><pre><code>class Stack {
  constructor() {
    this.input = [];
  }

push(element) {
this.input.push(element);
return this;
}

pop() {
return this.input.pop();
}
}</code></pre></td></tr></tbody></table>

As you can see, it is easy since we are using the built-in `Array.push` and `Array.pop`. Both have a runtime of _`O(1)`_.

Let’s see some examples of its usage:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>const stack = new Stack();

stack.push(&#39;a&#39;);
stack.push(&#39;b&#39;);
stack.push(&#39;c&#39;);

stack.pop(); // c
stack.pop(); // b
stack.pop(); // a</code></pre></td></tr></tbody></table>

The first element in (`a`) is the last to get out. We can also implement Stack using a linked list instead of an array. The runtime will be the same.

That’s all!

## <a href="#Queues" class="headerlink" title="Queues"></a>Queues

Queues are a data structure where the first data to get in is also the first to go out. A.k.a First-in, First-out (FIFO). It’s like a line of people at the movies, the first to come in is the first to come out.

![](/images/queue.jpg "Queue: enqueue and dequeue")

We could implement a Queue using an array, very similar to how we implemented the Stack.

### <a href="#Queue-implemented-with-Array-s" class="headerlink" title="Queue implemented with Array(s)"></a>Queue implemented with Array(s)

A naive implementation would be this one using `Array.push` and `Array.shift`:

<span id="QueueNaiveImpl"></span>

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
13</code></pre></td><td><pre><code>class Queue {
  constructor() {
    this.input = [];
  }

add(element) {
this.input.push(element);
}

remove() {
return this.input.shift();
}
}</code></pre></td></tr></tbody></table>

What’s the time complexity of `Queue.add` and `Queue.remove`?

- `Queue.add` uses `array.push` which has a constant runtime. Win!
- `Queue.remove` uses `array.shift` which has a linear runtime. Can we do better than _`O(n)`_?

Think of how you can implement a Queue only using `Array.push` and `Array.pop`.

<span id="QueueArrayImpl"></span>

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
19</code></pre></td><td><pre><code>class Queue {
  constructor() {
    this.input = [];
    this.output = [];
  }

add(element) {
this.input.push(element);
}

remove() {
if(!this.output.length) {
while(this.input.length) {
this.output.push(this.input.pop());
}
}
return this.output.pop();
}
}</code></pre></td></tr></tbody></table>

Now we are using two arrays rather than one.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>const queue = new Queue();

queue.add(&#39;a&#39;);
queue.add(&#39;b&#39;);

queue.remove() // a
queue.add(&#39;c&#39;);
queue.remove() // b
queue.remove() // c</code></pre></td></tr></tbody></table>

When we remove something for the first time, the `output` array is empty. So, we insert the content of `input` backward like `['b', 'a']`. Then we pop elements from the `output` array. As you can see, using this trick, we get the output in the same order of insertion (FIFO).

What’s the runtime?

If the output already has some elements, then the remove operation is constant _`O(1)`_. When the output arrays need to get refilled, it takes _`O(n)`_ to do so. After the refilled, every operation would be constant again. The amortized time is _`O(1)`_.

We can achieve a `Queue` with a pure constant if we use LinkedList. Let’s see what it is in the next section!

### <a href="#Queue-implemented-with-a-Doubly-Linked-List" class="headerlink" title="Queue implemented with a Doubly Linked List"></a>Queue implemented with a Doubly Linked List

We can achieve the best performance for a `queue` using a linked list rather than an array.

<span id="QueueListImpl"></span>

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
19</code></pre></td><td><pre><code>const LinkedList = require(&#39;../linked-lists/linked-list&#39;);

class Queue {
constructor() {
this.input = new LinkedList();
}

add(element) {
this.input.addFirst(element);
}

remove() {
return this.input.removeLast();
}

get size() {
return this.input.size;
}
}</code></pre></td></tr></tbody></table>

Using a doubly-linked list with the last element reference, we achieve an `add` of _O(1)_. That’s the importance of using the right tool for the right job. 💪

## <a href="#Summary" class="headerlink" title="Summary"></a>Summary

We explored most of the linear data structures. We saw that depending on how we implement the data structures. There are different runtimes.

Here’s a summary of everything that we explored. You can click on each runtime, and it will take you to the implementation.

**Time complexity**

_Click on the **name** to go to the section or click on the **runtime** to go to the implementation_

`*` = Amortized runtime

<table><thead><tr class="header"><th>Name</th><th>Insert</th><th>Access</th><th>Search</th><th>Delete</th><th>Comments</th></tr></thead><tbody><tr class="odd"><td><a href="#Array">Array</a></td><td><a href="#Insert-element-on-an-array">O(n)</a></td><td><a href="#Access-an-element-in-an-array">O(1)</a></td><td><a href="#Search-an-element-in-an-array">O(n)</a></td><td><a href="#Deleting-elements-from-an-array">O(n)</a></td><td>Insertion to the end is <code>O(1)</code>. <a href="#Array-operations-time-complexity">Details here.</a></td></tr><tr class="even"><td><a href="#HashMaps">HashMap</a></td><td><a href="#Insert-element-on-a-HashMap-runtime">O(1)</a></td><td><a href="#Search-Access-an-element-on-a-HashMap-runtime">O(1)</a></td><td><a href="#Search-Access-an-element-on-a-HashMap-runtime">O(1)</a></td><td><a href="#Edit-Delete-element-on-a-HashMap-runtime">O(1)</a></td><td>Rehashing might affect insertion time. <a href="#HashMap-operations-time-complexity">Details here.</a></td></tr><tr class="odd"><td>Map (using Binary Search Tree)</td><td>O(log(n))</td><td>-</td><td>O(log(n))</td><td>O(log(n))</td><td>Implemented using Binary Search Tree</td></tr><tr class="even"><td><a href="#Sets">Set (using HashMap)</a></td><td><a href="#Set-Implementation">O(1)</a></td><td>-</td><td><a href="#Set-Implementation">O(1)</a></td><td><a href="#Set-Implementation">O(1)</a></td><td>Set using a HashMap implementation. <a href="#Set-Operations-runtime">Details here.</a></td></tr><tr class="odd"><td>Set (using list)</td><td><a href="https://www.ecma-international.org/ecma-262/6.0/#sec-set.prototype.add">O(n)</a></td><td>-</td><td><a href="https://www.ecma-international.org/ecma-262/6.0/#sec-set.prototype.has">O(n)</a></td><td><a href="https://www.ecma-international.org/ecma-262/6.0/#sec-set.prototype.delete">O(n)</a></td><td>Implemented using Binary Search Tree</td></tr><tr class="even"><td>Set (using Binary Search Tree)</td><td>O(log(n))</td><td>-</td><td>O(log(n))</td><td>O(log(n))</td><td>Implemented using Binary Search Tree</td></tr><tr class="odd"><td><a href="#Singly-Linked-Lists">Linked List (singly)</a></td><td><a href="#SinglyLinkedList.addLast">O(n)</a></td><td>-</td><td><a href="#LinkedList.contains">O(n)</a></td><td><a href="#LinkedList.remove">O(n)</a></td><td>Adding/Removing to the start of the list is <code>O(1)</code>. <a href="#Singly-Linked-Lists-time-complexity">Details here</a>.</td></tr><tr class="even"><td><a href="#Doubly-Linked-Lists">Linked List (doubly)</a></td><td><a href="#DoublyLinkedList.add">O(n)</a></td><td>-</td><td><a href="#LinkedList.contains">O(n)</a></td><td><a href="#LinkedList.remove">O(n)</a></td><td>Adding/Deleting from the beginning/end is <code>O(1)</code>. But, deleting/adding from the middle is <code>O(n)</code>. <a href="#Doubly-Linked-Lists-time-complexity">Details here</a></td></tr><tr class="odd"><td><a href="#Stacks">Stack (array implementation)</a></td><td><a href="#Stacks">O(1)</a></td><td>-</td><td>-</td><td><a href="#Stacks">O(1)</a></td><td>Insert/delete is last-in, first-out (LIFO)</td></tr><tr class="even"><td><a href="#QueueNaiveImpl">Queue (naïve array impl.)</a></td><td><a href="#QueueNaiveImpl">O(1)</a></td><td>-</td><td>-</td><td><a href="#QueueNaiveImpl">O(n)</a></td><td>Remove (<code>Array.shift</code>) is <em>O(n)</em></td></tr><tr class="odd"><td><a href="#QueueArrayImpl">Queue (array implementation)</a></td><td><a href="#QueueArrayImpl">O(1)</a></td><td>-</td><td>-</td><td><a href="#QueueArrayImpl">O(1)</a></td><td>Worst time insert is O(n). However amortized is O(1)</td></tr><tr class="even"><td><a href="#QueueListImpl">Queue (list implementation)</a></td><td><a href="#QueueListImpl">O(1)</a></td><td>-</td><td>-</td><td><a href="#QueueListImpl">O(1)</a></td><td>Using Doubly Linked List with reference to the last element.</td></tr></tbody></table>

Note: **Binary search trees** and trees, in general, will be cover in the next post. Also, graph data structures.

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2018-05-25-Data-Structures-Time-Complexity-for-Beginners-Arrays-HashMaps-Linked-Lists-Stacks-Queues-tutorial.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Graph Data Structures in JavaScript for Beginners

<a href="/Analysis-of-Recursive-Algorithms/" class="article-nav-older"><strong>older <em></em></strong></a>

Analysis of Recursive Algorithms

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

1.  <a href="#Data-Structures-Big-O-Cheatsheet" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Data Structures Big-O Cheatsheet</span></a>
2.  <a href="#Primitive-Data-Types" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Primitive Data Types</span></a>
3.  <a href="#Array" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Array</span></a>
    1.  <a href="#Arrays-built-in-operations" class="toc-link"><span class="toc-number">3.1.</span> <span class="toc-text">Arrays built-in operations</span></a>
    2.  <a href="#Insert-element-on-an-array" class="toc-link"><span class="toc-number">3.2.</span> <span class="toc-text">Insert element on an array</span></a>
    3.  <a href="#Access-an-element-in-an-array" class="toc-link"><span class="toc-number">3.3.</span> <span class="toc-text">Access an element in an array</span></a>
    4.  <a href="#Search-an-element-in-an-array" class="toc-link"><span class="toc-number">3.4.</span> <span class="toc-text">Search an element in an array</span></a>
    5.  <a href="#Deleting-elements-from-an-array" class="toc-link"><span class="toc-number">3.5.</span> <span class="toc-text">Deleting elements from an array</span></a>
    6.  <a href="#Array-operations-time-complexity" class="toc-link"><span class="toc-number">3.6.</span> <span class="toc-text">Array operations time complexity</span></a>
4.  <a href="#HashMaps" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">HashMaps</span></a>
    1.  <a href="#HashMap-vs-Array" class="toc-link"><span class="toc-number">4.1.</span> <span class="toc-text">HashMap vs. Array</span></a>
    2.  <a href="#Hash-Function" class="toc-link"><span class="toc-number">4.2.</span> <span class="toc-text">Hash Function</span></a>
    3.  <a href="#Naive-HashMap-implementation" class="toc-link"><span class="toc-number">4.3.</span> <span class="toc-text">Naïve HashMap implementation</span></a>
    4.  <a href="#Improving-Hash-Function" class="toc-link"><span class="toc-number">4.4.</span> <span class="toc-text">Improving Hash Function</span></a>
    5.  <a href="#Decent-HashMap-Implementation" class="toc-link"><span class="toc-number">4.5.</span> <span class="toc-text">Decent HashMap Implementation</span></a>
    6.  <a href="#Optimal-HashMap-Implementation" class="toc-link"><span class="toc-number">4.6.</span> <span class="toc-text">Optimal HashMap Implementation</span></a>
    7.  <a href="#Insert-element-on-a-HashMap-runtime" class="toc-link"><span class="toc-number">4.7.</span> <span class="toc-text">Insert element on a HashMap runtime</span></a>
    8.  <a href="#Search-Access-an-element-on-a-HashMap-runtime" class="toc-link"><span class="toc-number">4.8.</span> <span class="toc-text">Search/Access an element on a HashMap runtime</span></a>
    9.  <a href="#Edit-Delete-element-on-a-HashMap-runtime" class="toc-link"><span class="toc-number">4.9.</span> <span class="toc-text">Edit/Delete element on a HashMap runtime</span></a>
    10. <a href="#HashMap-operations-time-complexity" class="toc-link"><span class="toc-number">4.10.</span> <span class="toc-text">HashMap operations time complexity</span></a>
5.  <a href="#Sets" class="toc-link"><span class="toc-number">5.</span> <span class="toc-text">Sets</span></a>
    1.  <a href="#Set-Implementation" class="toc-link"><span class="toc-number">5.1.</span> <span class="toc-text">Set Implementation</span></a>
    2.  <a href="#Set-Operations-runtime" class="toc-link"><span class="toc-number">5.2.</span> <span class="toc-text">Set Operations runtime</span></a>
6.  <a href="#Linked-Lists" class="toc-link"><span class="toc-number">6.</span> <span class="toc-text">Linked Lists</span></a>
    1.  <a href="#Singly-Linked-Lists" class="toc-link"><span class="toc-number">6.1.</span> <span class="toc-text">Singly Linked Lists</span></a>
    2.  <a href="#Singly-Linked-Lists-time-complexity" class="toc-link"><span class="toc-number">6.2.</span> <span class="toc-text">Singly Linked Lists time complexity</span></a>
    3.  <a href="#Doubly-Linked-Lists" class="toc-link"><span class="toc-number">6.3.</span> <span class="toc-text">Doubly Linked Lists</span></a>
    4.  <a href="#Doubly-Linked-Lists-time-complexity" class="toc-link"><span class="toc-number">6.4.</span> <span class="toc-text">Doubly Linked Lists time complexity</span></a>
7.  <a href="#Stacks" class="toc-link"><span class="toc-number">7.</span> <span class="toc-text">Stacks</span></a>
8.  <a href="#Queues" class="toc-link"><span class="toc-number">8.</span> <span class="toc-text">Queues</span></a>
    1.  <a href="#Queue-implemented-with-Array-s" class="toc-link"><span class="toc-number">8.1.</span> <span class="toc-text">Queue implemented with Array(s)</span></a>
    2.  <a href="#Queue-implemented-with-a-Doubly-Linked-List" class="toc-link"><span class="toc-number">8.2.</span> <span class="toc-text">Queue implemented with a Doubly Linked List</span></a>
9.  <a href="#Summary" class="toc-link"><span class="toc-number">9.</span> <span class="toc-text">Summary</span></a>
