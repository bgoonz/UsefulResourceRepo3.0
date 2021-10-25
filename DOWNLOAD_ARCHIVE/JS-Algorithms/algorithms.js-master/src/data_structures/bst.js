import Comparator from "../util/comparator";

/**
 * Binary Search Tree
 */
class BST {
  constructor(compareFn) {
    this.root = null;
    this._size = 0;
    /**
     * @var Comparator
     */
    this._comparator = new Comparator(compareFn);

    /**
     * Read-only property for the size of the tree
     */
    Object.defineProperty(this, "size", {
      get: () => this._size,
    });
  }

  /**
   * Insert elements to the tree respecting the BST restrictions
   */
  insert(value, parent) {
    // Set the root as the initial insertion point
    // if it has not been passed
    if (!parent) {
      if (!this.root) {
        this.root = new Node(value);
        this._size++;
        return;
      }
      parent = this.root;
    }

    const child = this._comparator.lessThan(value, parent.value)
      ? "left"
      : "right";
    if (parent[child]) {
      this.insert(value, parent[child]);
    } else {
      parent[child] = new Node(value, parent);
      this._size++;
    }
  }

  /**
   * Returns if a tree contains an element in O(lg n)
   */
  contains(e) {
    return Boolean(this._find(e));
  }

  _find(e, root) {
    if (!root) {
      if (this.root) root = this.root;
      else return false;
    }

    if (root.value === e) return root;

    if (this._comparator.lessThan(e, root.value)) {
      return root.left && this._find(e, root.left);
    }

    if (this._comparator.greaterThan(e, root.value)) {
      return root.right && this._find(e, root.right);
    }
  }

  /**
   * Substitute two nodes
   */
  _replaceNodeInParent(currNode, newNode) {
    const parent = currNode.parent;
    if (parent) {
      parent[currNode === parent.left ? "left" : "right"] = newNode;
      if (newNode) newNode.parent = parent;
    } else {
      this.root = newNode;
    }
  }

  /**
   * Find the minimum value in a tree
   */
  _findMin(root) {
    let minNode = root;
    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode;
  }

  /**
   * Remove an element from the BST
   */
  remove(e) {
    const node = this._find(e);
    if (!node) {
      throw new Error("Item not found in the tree");
    }

    if (node.left && node.right) {
      /**
       * If the node to be removed has both left and right children,
       * replace the node's value by the minimum value of the right
       * sub-tree, and remove the leave containing the value
       */
      const successor = this._findMin(node.right);
      this.remove(successor.value);
      node.value = successor.value;
    } else {
      /**
       * If the node is a leaf, just make the parent point to null,
       * and if it has one child, make the parent point to this child
       * instead
       */
      this._replaceNodeInParent(node, node.left || node.right);
      this._size--;
    }
  }
}

/**
 * Tree node
 */
class Node {
  constructor(value, parent) {
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
}

export default BST;
