import root from "../../..";
const BST = root.DataStructures.BST;
const bfs = root.Search.bfs;
import assert from "assert";

describe("Breadth First Search", () => {
  const bst = new BST();
  /**
   *            4
   *       2          8
   *    1     3    5     10
   *  0    2.5               100
   */
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

  it("returns the items by level", () => {
    const a = [];
    bfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, [4, 2, 8, 1, 3, 5, 10, 0, 2.5, 100]);
  });
});
