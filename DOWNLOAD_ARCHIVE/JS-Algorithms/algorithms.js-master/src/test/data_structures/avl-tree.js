import root from "../..";
const AVLTree = root.DataStructures.AVLTree;
import assert from "assert";

describe("AVL Tree", () => {
  it("starts with null root", () => {
    assert.equal(new AVLTree().root, null);
  });

  it("inserts and single rotate (leftRight) properly", () => {
    const avlTree = new AVLTree();
    avlTree.insert(9);
    avlTree.insert(3);
    avlTree.insert(5);

    assert.equal(avlTree.root.value, 5);
    assert.equal(avlTree.root.left.value, 3);
    assert.equal(avlTree.root.right.value, 9);

    assert.equal(avlTree.root.height, 2);
    assert.equal(avlTree.root.left.height, 1);
    assert.equal(avlTree.root.right.height, 1);
  });

  it("inserts and single rotate (rightLeft) properly", () => {
    const avlTree = new AVLTree();
    avlTree.insert(50);
    avlTree.insert(75);
    avlTree.insert(60);

    assert.equal(avlTree.root.value, 60);
    assert.equal(avlTree.root.left.value, 50);
    assert.equal(avlTree.root.right.value, 75);

    assert.equal(avlTree.root.height, 2);
    assert.equal(avlTree.root.left.height, 1);
    assert.equal(avlTree.root.right.height, 1);
  });

  it("inserts and double rotate (leftLeft) properly", () => {
    const avlTree = new AVLTree();
    avlTree.insert(50);
    avlTree.insert(25);
    avlTree.insert(10);

    assert.equal(avlTree.root.value, 25);
    assert.equal(avlTree.root.left.value, 10);
    assert.equal(avlTree.root.right.value, 50);

    assert.equal(avlTree.root.height, 2);
    assert.equal(avlTree.root.left.height, 1);
    assert.equal(avlTree.root.right.height, 1);
  });

  it("inserts and double rotate (rightRight) properly", () => {
    const avlTree = new AVLTree();
    avlTree.insert(50);
    avlTree.insert(75);
    avlTree.insert(100);

    assert.equal(avlTree.root.value, 75);
    assert.equal(avlTree.root.left.value, 50);
    assert.equal(avlTree.root.right.value, 100);

    assert.equal(avlTree.root.height, 2);
    assert.equal(avlTree.root.left.height, 1);
    assert.equal(avlTree.root.right.height, 1);
  });

  it("inserts multiple nodes and balance properly (1)", () => {
    const avlTree = new AVLTree();
    avlTree.insert(30);
    avlTree.insert(15);
    avlTree.insert(60);
    avlTree.insert(90);
    avlTree.insert(100);

    assert.equal(avlTree.root.value, 30);
    assert.equal(avlTree.root.left.value, 15);
    assert.equal(avlTree.root.right.value, 90);
    assert.equal(avlTree.root.right.left.value, 60);
    assert.equal(avlTree.root.right.right.value, 100);

    assert.equal(avlTree.root.height, 3);
    assert.equal(avlTree.root.left.height, 1);
    assert.equal(avlTree.root.right.height, 2);
    assert.equal(avlTree.root.right.left.height, 1);
    assert.equal(avlTree.root.right.right.height, 1);
  });

  it("removes nodes and balance properly (2)", () => {
    const avlTree = new AVLTree();
    avlTree.insert(55);
    avlTree.insert(25);
    avlTree.insert(11);
    avlTree.insert(1);
    avlTree.remove(55);

    assert.equal(avlTree.root.value, 11);
    assert.equal(avlTree.root.height, 2);

    assert.equal(avlTree.root.left.value, 1);
    assert.equal(avlTree.root.left.height, 1);
    assert.equal(avlTree.root.right.value, 25);
    assert.equal(avlTree.root.right.height, 1);
  });

  it("keeps the tree always balanced", () => {
    const avlTree = new AVLTree();

    avlTree.insert(50);
    avlTree.insert(100);
    avlTree.insert(200);

    //        100
    //     50    200
    assert.equal(avlTree.root.value, 100);
    assert.equal(avlTree.root.height, 2);
    assert.equal(avlTree.root.left.value, 50);
    assert.equal(avlTree.root.left.height, 1);
    assert.equal(avlTree.root.right.value, 200);
    assert.equal(avlTree.root.right.height, 1);

    avlTree.insert(1);
    avlTree.insert(2);
    avlTree.insert(75);

    //             50
    //         2        100
    //       1        75   200
    assert.equal(avlTree.root.value, 50);
    assert.equal(avlTree.root.height, 3);
    assert.equal(avlTree.root.left.value, 2);
    assert.equal(avlTree.root.left.height, 2);
    assert.equal(avlTree.root.right.value, 100);
    assert.equal(avlTree.root.right.height, 2);
    assert.equal(avlTree.root.left.left.value, 1);
    assert.equal(avlTree.root.right.left.value, 75);
    assert.equal(avlTree.root.right.right.value, 200);

    avlTree.insert(80);
    avlTree.insert(4);
    avlTree.insert(5);
    avlTree.insert(6);
    avlTree.insert(7);

    //              50
    //      5               100
    //   2    6         75       200
    // 1   4    7         80
    assert.equal(avlTree.root.value, 50);
    assert.equal(avlTree.root.height, 4);
    assert.equal(avlTree.root.left.value, 5);
    assert.equal(avlTree.root.left.height, 3);
    assert.equal(avlTree.root.right.value, 100);
    assert.equal(avlTree.root.right.height, 3);
    assert.equal(avlTree.root.left.left.value, 2);
    assert.equal(avlTree.root.left.left.left.value, 1);
    assert.equal(avlTree.root.left.left.right.value, 4);
    assert.equal(avlTree.root.left.right.value, 6);
    assert.equal(avlTree.root.left.right.right.value, 7);
    assert.equal(avlTree.root.right.left.value, 75);
    assert.equal(avlTree.root.right.left.right.value, 80);
    assert.equal(avlTree.root.right.right.value, 200);

    avlTree.insert(20);
    avlTree.insert(40);
    avlTree.insert(30);
    avlTree.insert(15);

    //                    50
    //           5                       100
    //     2              20          75      200
    //  1    4       7         30       80
    //             6   15         40
    assert.equal(avlTree.root.value, 50);
    assert.equal(avlTree.root.height, 5);
    assert.equal(avlTree.root.left.value, 5);
    assert.equal(avlTree.root.left.height, 4);
    assert.equal(avlTree.root.right.value, 100);
    assert.equal(avlTree.root.right.height, 3);
    assert.equal(avlTree.root.left.left.value, 2);
    assert.equal(avlTree.root.left.left.left.value, 1);
    assert.equal(avlTree.root.left.left.right.value, 4);
    assert.equal(avlTree.root.left.right.value, 20);
    assert.equal(avlTree.root.left.right.left.value, 7);
    assert.equal(avlTree.root.left.right.left.left.value, 6);
    assert.equal(avlTree.root.left.right.left.right.value, 15);
    assert.equal(avlTree.root.left.right.right.value, 30);
    assert.equal(avlTree.root.left.right.right.right.value, 40);
    assert.equal(avlTree.root.right.left.value, 75);
    assert.equal(avlTree.root.right.left.right.value, 80);
    assert.equal(avlTree.root.right.right.value, 200);
  });

  it("returns parents before children when traversing in preorder", () => {
    const avlTree = new AVLTree();

    avlTree.insert(50);
    avlTree.insert(100);
    avlTree.insert(200);
    avlTree.insert(1);
    avlTree.insert(2);
    avlTree.insert(75);
    avlTree.insert(80);
    avlTree.insert(4);
    avlTree.insert(5);
    avlTree.insert(6);
    avlTree.insert(7);
    avlTree.insert(20);
    avlTree.insert(40);
    avlTree.insert(30);
    avlTree.insert(15);

    const expectedPreOrder = [
      50, 5, 2, 1, 4, 20, 7, 6, 15, 30, 40, 100, 75, 80, 200,
    ];
    const preOrder = [];
    avlTree.preOrder(avlTree.root, ({ value }) => {
      preOrder.push(value);
    });
    assert.deepEqual(expectedPreOrder, preOrder);
  });

  it("returns children before parents when traversing in postorder", () => {
    const avlTree = new AVLTree();

    avlTree.insert(50);
    avlTree.insert(100);
    avlTree.insert(200);
    avlTree.insert(1);
    avlTree.insert(2);
    avlTree.insert(75);
    avlTree.insert(80);
    avlTree.insert(4);
    avlTree.insert(5);
    avlTree.insert(6);
    avlTree.insert(7);
    avlTree.insert(20);
    avlTree.insert(40);
    avlTree.insert(30);
    avlTree.insert(15);

    const expectedPostOrder = [
      1, 4, 2, 6, 15, 7, 40, 30, 20, 5, 80, 75, 200, 100, 50,
    ];
    const postOrder = [];
    avlTree.postOrder(avlTree.root, ({ value }) => {
      postOrder.push(value);
    });
    assert.deepEqual(expectedPostOrder, postOrder);
  });

  it("returns the sorted elements when traversing in order", () => {
    const avlTree = new AVLTree();
    const a = [];
    let i;
    for (i = 0; i < 1000; i++) {
      const x = Math.round(Math.random() * 100000);
      avlTree.insert(x);
      a.push(x);
    }
    a.sort((a, b) => a - b);

    const b = [];
    avlTree.inOrder(avlTree.root, ({ value }) => b.push(value));
    assert.equal(a.length, b.length);
    for (i = 0; i < a.length; i++) {
      assert.equal(a[i], b[i]);
    }
  });
});
