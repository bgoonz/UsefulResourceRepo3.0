"""
You've encountered a situation where you want to easily be able to pull the
largest integer from a stack.
You already have a `Stack` class that you've implemented using a dynamic array.
Use this `Stack` class to implement a new class `MaxStack` with a method
`get_max()` that returns the largest element in the stack. `get_max()` should
not remove the item.
*Note: Your stacks will contain only integers. You should be able to get a
runtime of O(1) for push(), pop(), and get_max().*
"""
class Stack:
    def __init__(self):
        """Initialize an empty stack"""
        self.items = []

    def push(self, item):
        """Push a new item onto the stack"""
        self.items.append(item)

    def pop(self):
        """Remove and return the last item"""
        # If the stack is empty, return None
        # (it would also be reasonable to throw an exception)
        if not self.items:
            return None

        return self.items.pop()

    def peek(self):
        """Return the last item without removing it"""
        if not self.items:
            return None
        return self.items[-1]

# create a storage_stack
# create a max_stack


# push
  # push the item on to the storage_stack

  # check if the max_stack is empty, or if the item is greater than or equal to the top of the max_stack
    # push the item on to the max_stack

# pop
  # store the item by popping it off the storage_stack
  # check if the item is equal to the top of the max_stack
    # pop the max_stack
  
  # return the item to the caller

# get_max
  # return the peek the top of the max stack

# peek 
  # return peek on the storage_stack


class MaxStack:
  def __init__(self):
    self.storage_stack = Stack()
    self.max_stack = Stack()

  def push(self, item):
    self.storage_stack.push(item)

    if self.max_stack.peek() is None or item >= self.max_stack.peek():
      self.max_stack.push(item)
  
  def pop(self):
    item = self.storage_stack.pop()

    if item == self.max_stack.peek():
      self.max_stack.pop()

    return item

  def get_max(self):
    return self.max_stack.peek()
  
  def peek(self):
    return self.storage_stack.peek()

ms = MaxStack()
ms.push(10)
ms.push(5)
ms.push(2)
ms.push(20)
ms.push(3)

print(ms.get_max())
