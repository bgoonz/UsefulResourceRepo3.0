class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val, root = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < root.val) {
      if (!root.left) {
        root.left = new TreeNode(val);
      } else {
        this.insert(val, root.left);
      }
    } else {
      if (!root.right) {
        root.right = new TreeNode(val);
      } else {
        this.insert(val, root.right);
      }
    }
  }

  searchRecur(val, root = this.root) {
    if (!root) return false;

    if (val < root.val) {
      return this.searchRecur(val, root.left);
    } else if (val > root.val) {
      return this.searchRecur(val, root.right);
    } else {
      return true;
    }
  }

  searchIter(val, root = this.root) {
    if (!root) return false;

    let found = false;

    while (!found) {
      if (val < root.val) {
        // search all the left nodes
        if (root.left) {
          if (val === root.left.val) {
            return true;
          } else {
            root = root.left;
          }
        } else {
          return false;
        }
      } else if (val > root.val) {
        // search all the right nodes
        if (root.right) {
          if (val === root.right.val) {
            return true;
          } else {
            root = root.right;
          }
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
  }
}

module.exports = {
  TreeNode,
  BST,
};
