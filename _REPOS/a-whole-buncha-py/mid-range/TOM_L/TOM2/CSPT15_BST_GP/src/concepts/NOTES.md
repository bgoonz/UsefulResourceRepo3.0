## Objective 01 - Describe the properties of a binary tree and the properties of a "perfect" tree
- The Total number of nodes on each level of the tree doubles as the tree grows
- The number of nodes that the last level contains is equal to the sum of all other levels plus one
- The height of a tree is the number of levels that it contains
- can calculate the trees height with *h = log(n + 1)*
- if you know the tree's height and want to calc the total number of nodes *n = 2^h - 1*


## Objective 02 - Recall the time and space complexity, the strengths and weaknesses, and the common uses of a binary search tree
### Lookup
If a binary search tree is balanced, then a lookup operation's time complexity is logarithmic (O(log n)). If the tree is unbalanced, the time complexity can be linear (O(n)) in the worst possible case (virtually a linear chain of nodes will have all the nodes on one side of the tree).

### Insert
If a binary search tree is balanced, then an insertion operation's time complexity is logarithmic (O(log n)). If the tree is entirely unbalanced, then the time complexity is linear (O(n)) in the worst case.

### Delete
If a binary search tree is balanced, then a deletion operation's time complexity is logarithmic (O(log n)). If the tree is entirely unbalanced, then the time complexity is linear (O(n)) in the worst case.

### Space
The space complexity of a binary search tree is linear (O(n)). Each node in the binary search tree will take up space in memory.

# Strengths
One of the main strengths of a BST is that it is sorted by default. You can pull out the data in order by using an in-order traversal. BSTs also have efficient searches (O(log n)). They have the same efficiency for their searches as a sorted array; however, BSTs are faster with insertions and deletions. In the average-case, dictionaries have more efficient operations than BSTs, but a BST has more efficient operations in the worst-case.

# Weaknesses
The primary weakness of a BST is that they only have efficient operations if they are balanced. The more unbalanced they are, the worse the efficiency of their operations gets. Another weakness is that they are don't have stellar efficiency in any one operation. They have good efficiency for a lot of different operations. So, they are more of a general-purpose data structure.

If you want to learn more about trees that automatically rearrange their nodes to remain balanced, look into AVL trees (Links to an external site.) or Red-Black trees

## Objective 03 - Construct a binary search tree that can perform basic operations with a logarithmic time complexity
```python
class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BSTNode(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BSTNode(value)
            else:
                self.right.insert(value)

    def search(self, target):
        if self.value == target:
            return self
        elif target < self.value:
            if self.left is None:
                return False
            else:
                return self.left.search(target)
        else:
            if self.right is None:
                return False
            else:
                return self.right.search(target)
```
