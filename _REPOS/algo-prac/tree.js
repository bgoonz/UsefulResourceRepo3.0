class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.parent = this.left = this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = value || null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = value || null;
  }

  //Insert a node into a BST
  insert(value) {
    let newNode = new BinaryTreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }
  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      // insert into the left
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      //insert into the right
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  //Remove a node from BST
  remove(data) {
    this.root = this._removeNode(this.root, data);
  }
  _removeNode(node, data) {
    if (node === null) return null;
    if (data < node.data) {
      node.left = this._removeNode(node.left, key);
      return node;
    }
    if (data > node.data) {
      node.right = this._removeNode(node.right, key);
      return node;
    }

    //if node === node.data
    // current node has no children
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }
    // node has one child
    if (node.left === null) {
      node = node.right;
      return node;
    }
    if (node.right === null) {
      node = node.left;
      return node;
    }

    // node has two children -
    // 1. Find the min value of its right subtree and use this as
    // the node.
    // 2. remove the min value from right subtree
    let temp = this._findMinNode(node.right);
    node.data = temp.data;
    //remove min node from right subtree
    node.right = this._removeNode(node.right, temp.data);
    return node;
  }

  _findMinNode(node) {
    if (node.left === null) return node; //this must be min node

    return this._findMinNode(node.left);
  }

  //Tree traversal
  preOrderTraversal(node, array) {
    //root, left, right

    if (!array) array = [];
    if (!node) return array;

    if (array) {
      array.push(node.value);
      array = this.preOrderTraversal(node.left, array);
      array = this.preOrderTraversal(node.right, array);
    }
    console.log("preOrder: " + array);
    return array;
  }

  inOrderTraversal(node, array) {
    //left, root, right
    if (!array) array = [];
    if (!node) return array;

    array = this.inOrderTraversal(node.left, array);
    array.push(node.value);
    array = this.inOrderTraverse(node.right, array);

    console.log(array);
    return array;
  }

  postOrderTraversal(node, array) {
    //left, right, root
    if (!array) array = [];
    if (!node) return array;

    array = this.postOrderTraversal(node.left, array);
    array = this.postOrderTraverse(node.right, array);
    array.push(node.value);

    console.log(array);
    return array;
  }
}

module.exports = {
  BinaryTree,
  BinarySearchTree,
};
