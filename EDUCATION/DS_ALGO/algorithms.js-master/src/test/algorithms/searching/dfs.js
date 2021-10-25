import root from "../../..";
const BST = root.DataStructures.BST;
const dfs = root.Search.dfs;
import assert from "assert";

describe("Depth First Search", () => {
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

  const callbackGenerator = (a) => (n) => a.push(n);

  it("returns the items sorted when retrieving in order", () => {
    const a = [];
    dfs(bst.root, callbackGenerator(a));
    assert.deepEqual(a, [0, 1, 2, 3, 4, 5, 8, 10, 100]);
  });

  it("returns parents before children when retrieving pre-order", () => {
    const a = [];
    dfs.preOrder(bst.root, callbackGenerator(a));
    assert.deepEqual(a, [4, 2, 1, 0, 3, 8, 5, 10, 100]);
  });

  it("returns children before parents when retrieving post-order", () => {
    const a = [];
    dfs.postOrder(bst.root, callbackGenerator(a));
    assert.deepEqual(a, [0, 1, 3, 2, 5, 100, 10, 8, 4]);
  });
});
