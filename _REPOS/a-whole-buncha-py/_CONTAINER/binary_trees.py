class BSTNode:
    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value

    # a way to insert
    def insert(self, value):
        new_node = BSTNode(value)
        if value < self.value:
            # Insert to the left
            if self.left is None:
                self.left = new_node
            else:
                self.left.insert(value) 
        else:
            # Insert to the right
            if self.right is None:
                self.right = new_node
            else:
                self.right.insert(value)

    def search(self, target):
        # check if self is the target
        if self.value == target:
            return True
        if self.value > target:
            # Go left
            if self.left is None:
                return False
            else:
                found = self.left.search(target)
                return found
        else:
            # go right
            if self.right is None:
                return False
            else:
                return self.right.search(target)

    def find_minimum_value(self):
        # If this is the left most node, its the smallest
        if self.left is None:
            return self.value
        else:
            smallest_value = self.left.find_minimum_value()    
            return smallest_value

    # Remove the node, and return the new node to take its place
    def delete(self, value):
        if self.value > value:
            # search for our value to delete, on the left
            self.left = self.left.delete(value)
        elif self.value < value:
            # search for our value on the right
            self.right = self.right.delete(value)
        else:
            # self is the current node to delete
            # if the node has no children
            if self.left is None and self.right is None:
                return None
            # If there is only one child
            if self.left is not None and self.right is None:
                # there are only nodes to the left
                return self.left
            elif self.right is not None and self.left is None:
                # there are only nodes to the right
                return self.right
            else:
                # There are TWO children! so we need to do something else
                # Lets find, the inorder successor (the next smallest number)
                next_min_value = self.right.find_minimum_value()
                self.value = next_min_value
                self.right = self.right.delete(next_min_value)
        return self


# A way to search
# a way to delete

root = BSTNode(8)

root.insert(5)
root.insert(11)
root.insert(2)
root.insert(7)
root.insert(10)
root.insert(12)
root.insert(6)

print(root.search(5))

root = root.delete(5)

print(root.search(5))
print(root.search(2))
print(root.search(6))
print(root.search(7))