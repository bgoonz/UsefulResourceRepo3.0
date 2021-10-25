import mod from "../../src/data-structures/binary-search-tree.js";
const Node = mod.Node;
const BinaryTree = mod.BinaryTree;

describe("Node", () => {
  "use strict";

  it("should be a constructor function", () => {
    expect(typeof Node).toBe("function");
  });
});

describe("Binary Tree", () => {
  "use strict";

  it("should be a constructor function", () => {
    expect(typeof BinaryTree).toBe("function");
  });
  it("should start with null root", () => {
    expect(new BinaryTree()._root).toBe(null);
  });
  it("should insert and remove single node properly", () => {
    const bTree = new BinaryTree();
    bTree.insert(15);
    const node = bTree.find(15);
    bTree.remove(node);
    expect(bTree._root).toBe(null);
  });
  it("should remove root and replace with valid child", () => {
    const bTree = new BinaryTree();
    bTree.insert(15);
    bTree.insert(30);
    bTree.insert(45);
    const node = bTree.find(15);
    bTree.remove(node);
    expect(bTree._root.value).toBe(30);
  });
  it("should insert multiple nodes properly", () => {
    const bTree = new BinaryTree();
    bTree.insert(10);
    bTree.insert(5);
    bTree.insert(15);
    bTree.insert(4);
    bTree.insert(6);
    bTree.insert(14);
    bTree.insert(16);
    const leftRootChild = bTree._root._left;
    const rightRootChild = bTree._root._right;
    expect(bTree._root.value).toBe(10);
    expect(leftRootChild.value).toBe(5);
    expect(rightRootChild.value).toBe(15);
    expect(leftRootChild._left.value).toBe(4);
    expect(leftRootChild._right.value).toBe(6);
    expect(rightRootChild._left.value).toBe(14);
    expect(rightRootChild._right.value).toBe(16);
  });
  it("should remove multiple nodes properly", () => {
    const bTree = new BinaryTree();
    bTree.insert(10);
    bTree.insert(5);
    bTree.insert(15);
    bTree.insert(4);
    bTree.insert(6);
    bTree.insert(7);
    bTree.insert(14);
    bTree.insert(16);
    const leftRootChild = bTree._root._left;
    const rightRootChild = bTree._root._right;
    const sixteen = bTree.find(16);
    bTree.remove(sixteen);
    expect(bTree._root.value).toBe(10);
    expect(leftRootChild.value).toBe(5);
    expect(rightRootChild.value).toBe(15);
    expect(leftRootChild._left.value).toBe(4);
    expect(leftRootChild._right.value).toBe(6);
    expect(leftRootChild._right._right.value).toBe(7);
    expect(rightRootChild._left.value).toBe(14);
    expect(rightRootChild._right).toBe(null);
    const fourteen = bTree.find(14);
    bTree.remove(fourteen);
    expect(rightRootChild._left).toBe(null);
    const five = bTree.find(5);
    bTree.remove(five);
    expect(leftRootChild.value).toBe(6);
    expect(leftRootChild._left.value).toBe(4);
    expect(leftRootChild._right.value).toBe(7);
  });
});
