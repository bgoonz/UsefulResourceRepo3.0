<a href="/categories/coding/" class="category-link">Coding</a> &gt; <a href="/categories/coding/data-structures-and-algorithms-dsa/" class="category-link">Data Structures and Algorithms (DSA)</a>

# Self-balanced Binary Search Trees with AVL in JavaScript

<span title="Last time this post was updated"> Last updated May 30th 2019 </span> <span class="m-x-2" title="Pageviews"> 13.6k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/Self-balanced-Binary-Search-Trees-with-AVL-tree-Data-Structure-for-beginners/">0</span>](#disqus_thread) </span>

- <a href="/tags/algorithms/" class="tag-list-link">algorithms</a><span class="tag-list-count">12</span>
- <a href="/tags/tutorial-algorithms/" class="tag-list-link">tutorial_algorithms</a><span class="tag-list-count">10</span>

![Self-balanced Binary Search Trees with AVL in JavaScript](/images/data-structures-algorithms-avl-binary-search-trees-large.jpg)

Binary Search Trees (BST) is used for many things that we might not be aware of. For instance: in compilers to generate syntax trees, cryptography and in compressions algorithms used in JPG and MP3. However, search trees need to be balanced to be fast. So, we are going to discuss how to keep the BST balanced as you add and remove elements.

<span id="more"></span>

In this post, we are going to explore different techniques to balance a tree. We are going to use rotations to move nodes around and the AVL algorithm to keep track if the tree is balanced or needs adjustments. Let’s dig in!

You can find all these implementations and more in the Github repo: <https://github.com/amejiarosario/dsa.js>

---

This post is part of a tutorial series:

**Learning Data Structures and Algorithms (DSA) for Beginners**

1.  [Intro to algorithm’s time complexity and Big O notation](/blog/2018/04/04/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/)

2.  [Eight time complexities that every programmer should know](/blog/2018/04/05/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/)

3.  [Data Structures for Beginners: Arrays, HashMaps, and Lists](/blog/2018/04/28/Data-Structures-Time-Complexity-for-Beginners-Arrays-HashMaps-Linked-Lists-Stacks-Queues-tutorial/)

4.  [Graph Data Structures for Beginners](/blog/2018/05/14/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/)

5.  [Trees Data Structures for Beginners](/blog/2018/06/11/Data-Structures-for-Beginners-Trees-binary-search-tree-tutorial/)

6.  Self-balanced Binary Search Trees **👈 you are here**

7.  [Appendix I: Analysis of Recursive Algorithms](/blog/2018/04/24/Analysis-of-Recursive-Algorithms/)

---

Let’s start by defining what is a “balanced tree” and the pitfalls of an “unbalanced tree”.

## <a href="#Balanced-vs-Unbalanced-Binary-Search-Tree" class="headerlink" title="Balanced vs. Unbalanced Binary Search Tree"></a>Balanced vs. Unbalanced Binary Search Tree

As discussed in the [previous post](/blog/2018/06/11/data-structures-for-beginners-trees-binary-search-tree-tutorial/) the worst nightmare for a BST is to be given numbers in order (e.g. 1, 2, 3, 4, 5, 6, 7, …).

![](/images/balanced-vs-non-balanced-tree.jpg "Balanced vs. unbalanced Tree")

If we ended up with a tree like the one on the left, we are screwed because performance will go to the floor. To find out if a node is on the tree or not, you will have to visit every node when the tree is unbalanced. That takes _O(n)_, while if we keep the node balanced in every insertion or deletion, we could have _O(log n)_.

Again, this might not look like a big difference, but when you have a million nodes, the difference is huge! We are talking about visiting `1,000,000` nodes vs. visiting `20`!

“Ok, I’m sold. How do I keep the tree balanced?” I’m glad you asked 😉. Well, let’s first learn when to tell that a tree is unbalanced.

## <a href="#When-a-tree-is-balanced-non-balanced" class="headerlink" title="When a tree is balanced/non-balanced?"></a>When a tree is balanced/non-balanced?

Take a look at the following trees and tell which one is balanced and which one is not.

![](/images/full-complete-perfect-binary-tree.jpg "Full vs. Complete vs. Perfect Binary Tree")

Well, a tree is definately balanced when is a perfect tree (all the levels on the tree have maximum number of nodes). But what about [full trees](/blog/2018/06/11/data-structures-for-beginners-trees-binary-search-tree-tutorial/#Full-Complete-and-Perfect-binary-trees) or [complete trees](/blog/2018/06/11/data-structures-for-beginners-trees-binary-search-tree-tutorial/#Full-Complete-and-Perfect-binary-trees) ?

The “complete tree” looks somewhat balanced, right? What about the full tree? Well, it starts to get tricky. Let’s work on a definition.

A tree is **balanced** if:

1.  The left subtree height and the right subtree height differ by at most 1.
2.  Visit every node making sure rule **\#1** is satisfied.

> Note: Height of a node is the distance (edge count) from the farthest child to itself.

For instance, if you have a tree with seven nodes:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>    10
   /   \
  5    20
 /     / \
4    15   30
     /
    12</code></pre></td></tr></tbody></table>

If you check the subtrees’ [heights](/blog/2018/06/11/data-structures-for-beginners-trees-binary-search-tree-tutorial/#Trees-basic-concepts) (edge counts to farthest leaf node) recursively you will notice they never differ by more than one.

- `10` descendants:
  - Left subtree `5` has a height of 1, while right subtree `20` has a height of `2`. The difference is one so: **Balanced**!
- `20` descendants:
  - Left subtree`15` has a height of `1`, while right subtree `30` has a height of 0. So the diff is `1`: **Balanced**!

On the other hand, take a look at this tree:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>     40
   /   \
  35    60*
 /     /
25    50
     /
    45</code></pre></td></tr></tbody></table>

Let’s check the height of the subtree recursively:

- `40` descendants:
  - Left subtree `35` has a height of 1, while right subtree `60` has a height of `2`. The difference is one so: **Balanced**!
- `60` descendants:
  - Left subtree `50` has a height of `2`, while the right subtree (none) has a height of `0`. The difference between `2` and `0` is more than one, so: **NOT balanced**!

Hopefully, now you can calculate balanced and unbalanced trees.

What can we do when we find an unbalanced tree? We do rotations!

If we take the same tree as before and move `50` to the place of `60` we get the following:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>     40
   /   \
  35    50
 /     /   \
25    45    60*</code></pre></td></tr></tbody></table>

After rotating `60` to the right, It’s balanced! Let’s learn all about it in the next section.

## <a href="#Tree-rotations" class="headerlink" title="Tree rotations"></a>Tree rotations

Before throwing any line of code, let’s spend some time thinking about how to balance small trees using rotations.

### <a href="#Left-Rotation" class="headerlink" title="Left Rotation"></a>Left Rotation

Let’s say that we have the following tree with ascending values: `1-2-3`

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>1*                                        2
 \                                       /  \
  2     ---| left-rotation(1) |--&gt;      1*   3
   \
    3</code></pre></td></tr></tbody></table>

To perform a left rotation on node `1`, we move it down as it’s children’s (`2`) **left** descendant.

![](/images/left-rotation2.gif "Left rotate on 2")

This is called **single left rotation** or **Left-Left (LL) rotation**.

For the coding part, let’s do another example:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>1                                 1
 \                                 \
  2*                                3
   \    --left-rotation(2)-&gt;       / \
    3                             2*  4
     \
      4</code></pre></td></tr></tbody></table>

To define the tree, we are using [TreeNode](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/tree-node.js) that we developed in the [previous post](https://master--bgoonz-blog.netlify.app/blog/2018/06/11/data-structures-for-beginners-trees-binary-search-tree-tutorial/#BST-Implementation).

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
11</code></pre></td><td><pre><code>const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);

n1.right = n2;
n2.right = n3;
n3.right = n4;

const newParent = leftRotation(n2);
console.log(newParent === n3); // true</code></pre></td></tr></tbody></table>

In this case, we are rotating 2 to the left. Let’s implement the `leftRotation` function.

leftRotation[Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/tree-rotations.js)

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
13</code></pre></td><td><pre><code>function leftRotation(node) {
  const newParent = node.right; // e.g. 3
  const grandparent = node.parent; // e.g. 1

// make 1 the parent of 3 (previously was the parent of 2)
swapParentChild(node, newParent, grandparent);

// do LL rotation
newParent.left = node; // makes 2 the left child of 3
node.right = undefined; // clean 2&#39;s right child

return newParent; // 3 is the new parent (previously was 2)
}</code></pre></td></tr></tbody></table>

Notice that we are using a utility function to swap parents called `swapParentChild`.

swapParentChild[Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/tree-rotations.js)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10</code></pre></td><td><pre><code>function swapParentChild(oldChild, newChild, parent) {
  if (parent) {
    const side = oldChild.isParentRightChild ? &#39;right&#39; : &#39;left&#39;;
    // this set parent child AND also
    parent[side] = newChild;
  } else {
    // no parent? so set it to null
    newChild.parent = null;
  }
}</code></pre></td></tr></tbody></table>

We are using this function to make `1` the parent of `3`. We are going to use it rotation right as well.

### <a href="#Right-Rotation" class="headerlink" title="Right Rotation"></a>Right Rotation

We have the following tree with descending values `4-3-2-1`:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>      4                                        4
     /                                        /
    3*                                       2
   /                                        /  \
  2       ---| right-rotation(3) |--&gt;      1    3*
 /
1</code></pre></td></tr></tbody></table>

To perform a right rotation on node `3`, we move it down as its child `2`‘s **right** descendant.

![](/images/right-rotation2.gif "Left rotate on 2")

This is called **single right rotation** or **Right-Right (RR) rotation**.

The code is pretty similar to what we did on the left rotation:

rightRotation[Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/tree-rotations.js)

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
12</code></pre></td><td><pre><code>function rightRotation(node) {
  const newParent = node.left;
  const grandparent = node.parent;

swapParentChild(node, newParent, grandparent);

// do RR rotation
newParent.right = node;
node.left = undefined;

return newParent;
}</code></pre></td></tr></tbody></table>

The `rightRotation` does the following:

1.  First, we swap `4`‘s child: before it was `3` and after the swap is `2` (line 5).
2.  Later, we make `3` the **right** child of 2 (line 8) and
3.  Finally, we clean up the `3` right child reference to null (line 9).

Now that know how single rotations work to the left and right we can combine them: left-right and right-left rotations.

### <a href="#Left-Right-Rotation" class="headerlink" title="Left-Right Rotation"></a>Left-Right Rotation

If we insert values on a BST in this order: 3-1-2. We will get an unbalanced tree. To balance the tree, we have to do a `leftRightRotation(3)`.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>  3*                                       2*
 /                                        /  \
1    --| left-right-rotation(3) |-&gt;      1    3
 \
  2</code></pre></td></tr></tbody></table>

Double rotations are a combination of the other two rotations we discussed in (LL and RR):

If we expand the `left-right-rotation` into the two single rotations we would have:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>  3*                          3*
 /                          /                            2
1   -left-rotation(1)-&gt;    2    -right-rotation(3)-&gt;    /  \
 \                        /                            1    3*
  2                      1</code></pre></td></tr></tbody></table>

- left-rotation(1): We do a left rotation on the nodes’ left child. E.g. `1`.
- right-rotation(3): right rotation on the same node. E.g. `3`.

![](/images/left-right-rotation.gif "Left-Right rotate on 2")

This double rotation is called **Left-Right (LR) rotation**.

leftRightRotation[Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/tree-rotations.js)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>function leftRightRotation(node) {
  leftRotation(node.left);
  return rightRotation(node);
}</code></pre></td></tr></tbody></table>

The code is straightforward since we leverage the `leftRotation` and `rightRotation` that we did before.

### <a href="#Right-Left-Rotation" class="headerlink" title="Right-Left Rotation"></a>Right-Left Rotation

When we insert nodes on the following order: `1-3-2`, we need to perform a `rightLeftRotation(1)` to balance the tree.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>1*                           1*
 \                            \                              2
   3   -right-rotation(3)-&gt;    2   -left-rotation(1)-&gt;      /  \
 /                              \                          1*   3
2                                3</code></pre></td></tr></tbody></table>

The code to is very similar to LR rotation:

leftRightRotation[Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/tree-rotations.js)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4</code></pre></td><td><pre><code>function rightLeftRotation(node) {
  rightRotation(node.right);
  return leftRotation(node);
}</code></pre></td></tr></tbody></table>

We know all the rotations needed to balanced any binary tree. Let’s go ahead, use the AVL algorithm to keep it balanced on insertions/deletions.

## <a href="#AVL-Tree-Overview" class="headerlink" title="AVL Tree Overview"></a>AVL Tree Overview

**AVL Tree** was the first self-balanced tree invented. It is named after the two inventors **A**delson-**V**elsky and **L**andis. In their self-balancing algorithm if one subtree differs from the other by at most one, then rebalancing is done using rotations.

We already know how to do rotations from the previous sections; the next step is to figure out the subtree’s heights. We are going to call **balance factor**, the diff between the left and right subtree on a given node.

> balanceFactor = leftSubtreeHeight - rightSubtreeHeight

If the balance factor is bigger than `1` or less than `-1` then, we know we need to balance that node. We can write the balance function as follows:

Balance[Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/tree-rotations.js#L98)

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
17</code></pre></td><td><pre><code>function balance(node) {
  if (node.balanceFactor &gt; 1) {
    // left subtree is higher than right subtree
    if (node.left.balanceFactor &gt; 0) {
      rightRotation(node);
    } else if (node.left.balanceFactor &lt; 0) {
      leftRightRotation(node);
    }
  } else if (node.balanceFactor &lt; -1) {
    // right subtree is higher than left subtree
    if (node.right.balanceFactor &lt; 0) {
      leftRotation(node);
    } else if (node.right.balanceFactor &gt; 0) {
      rightLeftRotation(node);
    }
  }
}</code></pre></td></tr></tbody></table>

Based on the balance factor, there four different rotation that we can do: RR, LL, RL, and LR. To know what rotation to do we:

1.  Take a look into the given `node`‘s `balanceFactor`.
2.  If the balance factor is `-1`, `0` or `1` we are done.
3.  If the node needs balancing, then we use the node’s left or right balance factor to tell which kind of rotation it needs.

Notice that we haven’t implemented the `node.balanceFactor` attribute yet, but we are going to do that next.

One of the easiest ways to implement subtree heights is by using recursion. Let’s go ahead and add height-related properties to `TreeNode` class:

height, leftSubtreeHeight and rightSubtreeHeight[Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/tree-node.js#L125)

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
15</code></pre></td><td><pre><code>get height() {
  return Math.max(this.leftSubtreeHeight, this.rightSubtreeHeight);
}

get leftSubtreeHeight() {
return this.left ? this.left.height + 1 : 0;
}

get rightSubtreeHeight() {
return this.right ? this.right.height + 1 : 0;
}

get balanceFactor() {
return this.leftSubtreeHeight - this.rightSubtreeHeight;
}</code></pre></td></tr></tbody></table>

To understand better what’s going on, let’s do some examples.

### <a href="#Tree-with-one-node" class="headerlink" title="Tree with one node"></a>Tree with one node

Let’s start with a single root node:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>  40*
/     \</code></pre></td></tr></tbody></table>

- Since this node doesn’t have left nor right children then `leftSubtreeHeight` and `rightSubtreeHeight` will return `0`.
- Height is `Math.max(this.leftSubtreeHeight, this.rightSubtreeHeight)` which is `Math.max(0, 0)`, so height is `0`.
- Balance factor is also zero since `0 - 0 = 0`.

### <a href="#Tree-with-multiple-nodes" class="headerlink" title="Tree with multiple nodes"></a>Tree with multiple nodes

Let’s try with multiple nodes:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7</code></pre></td><td><pre><code>     40
   /   \
  35    60
 /     /
25    50
     /
    45</code></pre></td></tr></tbody></table>

**balanceFactor(45)**

- As we saw leaf nodes doesn’t have left or right subtree, so their heights are 0, thus balance factor is 0.

**balanceFactor(50)**

- `leftSubtreeHeight = 1` and `rightSubtreeHeight = 0`.
- `height = Math.max(1, 0)`, so it’s `1`.
- Balance factor is `1 - 0`, so it’s `1` as well.

**balanceFactor(60)**

- `leftSubtreeHeight = 2` and `rightSubtreeHeight = 0`.
- `height = Math.max(2, 0)`, so it’s `2`.
- Balance factor is `2 - 0`, so it’s `2` and it’s UNBALANCED!

If we use our `balance` function on node `60` that we developed, then it would do a `rightRotation` on `60` and the tree will look like:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5</code></pre></td><td><pre><code>     40
   /   \
  35    50
 /     /   \
25    45    60*</code></pre></td></tr></tbody></table>

Before the height of the tree (from the root) was 3, now it’s only 2.

Let’s put all together and explain how we can keep a binary search tree balanced on insertion and deletion.

## <a href="#AVL-Tree-Insertion-and-Deletion" class="headerlink" title="AVL Tree Insertion and Deletion"></a>AVL Tree Insertion and Deletion

AVL tree is just a layer on top of a regular Binary Search Tree (BST). The add/remove operations are the same as in the BST, the only difference is that we run the `balance` function after each change.

Let’s implement the AVL Tree.

AvlTree[Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/avl-tree.js)

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
20</code></pre></td><td><pre><code>const BinarySearchTree = require(&#39;./binary-search-tree&#39;);

class AvlTree extends BinarySearchTree {
add(value) {
const node = super.add(value);
balanceUpstream(node);
return node;
}

remove(value) {
const node = super.find(value);
if (node) {
const found = super.remove(value);
balanceUpstream(node.parent);
return found;
}

    return false;

}
}</code></pre></td></tr></tbody></table>

If you need to review the dependencies here are the links to the implementations:

- [binary-search-tree](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js)
- [balanceUpstream](https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/src/data-structures/trees/avl-tree.js#L46)

The `balanceUpstream` function gets executed after an insertion or deletion.

balanceUpstream[Context](https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/src/data-structures/trees/avl-tree.js#L46)

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9</code></pre></td><td><pre><code>function balanceUpstream(node) {
  let current = node;
  let newParent;
  while (current) {
    newParent = balance(current);
    current = current.parent;
  }
  return newParent;
}</code></pre></td></tr></tbody></table>

We go recursively using the `balance` function on the nodes’ parent until we reach the root node.

In the following animation, we can see AVL tree insertions and deletions in action:

![](/images/avl-tree-insert-remove.gif "AVL tree insertions and deletions")

You can also check the [test files](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/avl-tree.spec.js) to see more detailed examples of how to use the AVL trees.

That’s all folks!

## <a href="#Summary" class="headerlink" title="Summary"></a>Summary

In this post, we explored the AVL tree, which is a particular binary search tree that self-balance itself after insertions and deletions of nodes. The operations of balancing a tree involve rotations, and they can be single or double rotations.

Single rotations:

- Left rotation
- Right rotation

Double rotations:

- Left-Right rotation
- Right-Left rotation

You can find all the code developed here in the [Github](https://github.com/amejiarosario/dsa.js/tree/master/src/data-structures/trees). You can `star` it to keep it handy.

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2018-07-28-Self-balanced-Binary-Search-Trees-with-AVL-tree-Data-Structure-for-beginners.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/Vue-js-Tutorial-for-beginners-Create-a-Todo-App/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Vue.js Tutorial for beginners

<a href="/Data-Structures-for-Beginners-Trees-binary-search-tree-tutorial/" class="article-nav-older"><strong>older <em></em></strong></a>

Tree Data Structures in JavaScript for Beginners

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

1.  <a href="#Balanced-vs-Unbalanced-Binary-Search-Tree" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Balanced vs. Unbalanced Binary Search Tree</span></a>
2.  <a href="#When-a-tree-is-balanced-non-balanced" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">When a tree is balanced/non-balanced?</span></a>
3.  <a href="#Tree-rotations" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Tree rotations</span></a>
    1.  <a href="#Left-Rotation" class="toc-link"><span class="toc-number">3.1.</span> <span class="toc-text">Left Rotation</span></a>
    2.  <a href="#Right-Rotation" class="toc-link"><span class="toc-number">3.2.</span> <span class="toc-text">Right Rotation</span></a>
    3.  <a href="#Left-Right-Rotation" class="toc-link"><span class="toc-number">3.3.</span> <span class="toc-text">Left-Right Rotation</span></a>
    4.  <a href="#Right-Left-Rotation" class="toc-link"><span class="toc-number">3.4.</span> <span class="toc-text">Right-Left Rotation</span></a>
4.  <a href="#AVL-Tree-Overview" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">AVL Tree Overview</span></a>
    1.  <a href="#Tree-with-one-node" class="toc-link"><span class="toc-number">4.1.</span> <span class="toc-text">Tree with one node</span></a>
    2.  <a href="#Tree-with-multiple-nodes" class="toc-link"><span class="toc-number">4.2.</span> <span class="toc-text">Tree with multiple nodes</span></a>
5.  <a href="#AVL-Tree-Insertion-and-Deletion" class="toc-link"><span class="toc-number">5.</span> <span class="toc-text">AVL Tree Insertion and Deletion</span></a>
6.  <a href="#Summary" class="toc-link"><span class="toc-number">6.</span> <span class="toc-text">Summary</span></a>
