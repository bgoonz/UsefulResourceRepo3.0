import root from "../..";
const BST = root.DataStructures.BST;
const bfs = root.Search.bfs;
import assert from "assert";

describe("Binary Search Tree", () => {
  it("inserts elements respecting the BST restrictions", () => {
    const bst = new BST();
    bst.insert(4);
    bst.insert(8);
    bst.insert(10);
    bst.insert(2);
    bst.insert(1);
    bst.insert(3);
    bst.insert(0);
    bst.insert(5);
    bst.insert(100);
    assert.equal(bst.size, 9);
  });
  it("checks if an element exists (in O(lg n))", () => {
    const bst = new BST();
    bst.insert(4);
    bst.insert(8);
    bst.insert(10);
    bst.insert(2);
    bst.insert(1);
    bst.insert(3);
    bst.insert(0);
    bst.insert(5);
    bst.insert(100);
    assert(bst.contains(4));
    assert(bst.contains(0));
    assert(bst.contains(8));
    assert(bst.contains(10));
    assert(bst.contains(5));
    assert(bst.contains(100));

    assert(!bst.contains(12));
    assert(!bst.contains(-10));
    assert(!bst.contains(10000));
    assert(!bst.contains(30));
    assert(!bst.contains(7));
  });

  /**
   *            4
   *       2          8
   *    1     3    5     10
   *  0    2.5               100
   */
  const bst = new BST();
  bst.insert(4);
  bst.insert(8);
  bst.insert(10);
  bst.insert(2);
  bst.insert(1);
  bst.insert(3);
  bst.insert(0);
  bst.insert(5);
  bst.insert(100);
  bst.insert(2.5);

  const callbackGenerator = (a) => (n) => a.push(n);

  it(
    "removes a leaf without altering anything else in " +
      "the structure of the tree",
    () => {
      bst.remove(0);
      /**
       *            4
       *       2          8
       *    1     3    5     10
       *       2.5               100
       */
      const a = [];
      bfs(bst.root, callbackGenerator(a));
      assert.deepEqual(a, [4, 2, 8, 1, 3, 5, 10, 2.5, 100]);
    }
  );

  it(
    "removes an element with just one child and substitute " +
      "it as the root of only subtree",
    () => {
      bst.remove(10);
      /**
       *            4
       *       2          8
       *    1     3    5     100
       *       2.5
       */
      const a = [];
      bfs(bst.root, callbackGenerator(a));
      assert.deepEqual(a, [4, 2, 8, 1, 3, 5, 100, 2.5]);
    }
  );

  it(
    "substitute an element by the leftmost child in the right " +
      "subtree and remove it as a leaf",
    () => {
      /**
       *            4
       *       2          8
       *    1     3    5     100
       *       2.5
       */
      bst.remove(2);
      /**
       *            4
       *       2.5        8
       *     1     3    5     100
       *
       */
      let a = [];
      bfs(bst.root, callbackGenerator(a));
      assert.deepEqual(a, [4, 2.5, 8, 1, 3, 5, 100]);

      bst.remove(4);
      /**
       *            5
       *       2.5        8
       *     1     3        100
       *
       */
      a = [];
      bfs(bst.root, callbackGenerator(a));
      assert.deepEqual(a, [5, 2.5, 8, 1, 3, 100]);

      bst.remove(2.5);
      /**
       *            5
       *        3        8
       *     1              100
       *
       */
      a = [];
      bfs(bst.root, callbackGenerator(a));
      assert.deepEqual(a, [5, 3, 8, 1, 100]);
    }
  );

  it("returns the right root and size", () => {
    const bst = new BST();
    bst.insert(5);
    assert.equal(bst.size, 1);
    bst.remove(5);
    assert.equal(bst.size, 0);
    assert.equal(bst.root, null);
    bst.insert(10);
    bst.insert(3);
    bst.insert(20);
    assert.equal(bst.size, 3);
    bst.remove(10);
    assert.equal(bst.size, 2);
    bst.remove(20);
    assert.equal(bst.size, 1);
    bst.remove(3);
    assert.equal(bst.size, 0);
  });

  it("throws an error when trying to remove an unexisting node", () => {
    const bst = new BST();
    assert.throws(() => bst.remove(0), Error);
    bst.insert(3);
    assert.throws(() => bst.remove(0), Error);
  });
});

describe("Binary Search Tree with custom comparator", () => {
  const strLenCompare = ({ length }, { length }) => {
    if (length === length) return 0;
    return length < length ? -1 : 1;
  };

  it("inserts elements respecting the BST restrictions", () => {
    const bst = new BST(strLenCompare);
    bst.insert("banana");
    bst.insert("apple");
    bst.insert("pineapple");
    bst.insert("watermelon");
    assert.equal(bst.size, 4);
  });

  it("checks if an element exists (in O(lg n))", () => {
    const bst = new BST(strLenCompare);
    bst.insert("banana");
    bst.insert("apple");
    bst.insert("pineapple");
    bst.insert("watermelon");

    assert(bst.contains("watermelon"));
    assert(bst.contains("apple"));
    assert(bst.contains("banana"));
    assert(bst.contains("pineapple"));

    assert(!bst.contains("mango"));
    assert(!bst.contains("melon"));
    assert(!bst.contains("tangerine"));
  });

  /**
   *           'banana'
   *     'apple'      'pineapple'
   *  'pear'               'watermelon'
   *
   */
  const bst = new BST(strLenCompare);
  bst.insert("banana");
  bst.insert("apple");
  bst.insert("pear");
  bst.insert("pineapple");
  bst.insert("watermelon");

  const callbackGenerator = (a) => (n) => a.push(n);

  it("inserts the items according to the comparator", () => {
    const a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, ["banana", "apple", "pineapple", "pear", "watermelon"]);
  });

  it(
    "removes a leaf without altering anything else in " +
      "the structure of the tree",
    () => {
      bst.remove("watermelon");
      /**
       *           'banana'
       *     'apple'      'pineapple'
       *  'pear'
       */
      const a = [];
      bfs(bst.root, callbackGenerator(a));
      assert.deepEqual(a, ["banana", "apple", "pineapple", "pear"]);
    }
  );

  it(
    "removes an element with just one child and substitute " +
      "it as the root of only subtree",
    () => {
      bst.remove("apple");
      /**
       *           'banana'
       *     'pear'      'pineapple'
       */
      const a = [];
      bfs(bst.root, callbackGenerator(a));
      assert.deepEqual(a, ["banana", "pear", "pineapple"]);
    }
  );

  it(
    "substitutes an element by the leftmost child in the right " +
      "subtree and remove it as a leaf",
    () => {
      bst.remove("banana");
      /**
       *       'pineapple'
       *   'pear'
       */
      const a = [];
      bfs(bst.root, callbackGenerator(a));
      assert.deepEqual(a, ["pineapple", "pear"]);
    }
  );
});
