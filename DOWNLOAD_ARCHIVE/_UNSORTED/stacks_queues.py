class Queue:
  def __init__(self):
    self.storage = []

  def enqueue(self, value):
    self.storage.append(value)
  
  def dequeue(self):
    if len(self.storage) > 0:
      return self.storage.pop(0)

q = Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)

print(q.storage)
print(q.dequeue())
print(q.dequeue())
print(q.dequeue())
print(q.dequeue())
print(q.storage)

class Stack:
  def __init__(self):
    self.storage = []

  def push(self, value):
    self.storage.append(value)
  
  def pop(self):
    if len(self.storage) > 0:
      return self.storage.pop()

s = Stack()
s.push(10)
s.push(20)
s.push(30)
print(s.storage)
s.pop()
print(s.storage)


class LLNode:
  def __init__(self, data):
    self.data = data
    self.next = None

  def __repr__(self):
    return f"Node({self.data}) -> {self.next}"


class LLQueue:
  def __init__(self):
    self.front = None
    self.rear = None

  def enqueue(self, item):
    new_node = LLNode(item)

    if self.rear is None:
      self.front = new_node
      self.rear = new_node
    else:
      self.rear.next = new_node
      self.rear = new_node

  def dequeue(self):
    if self.front is not None:
      old_front = self.front
      self.front = old_front.next
    
    if self.front is None:
      self.rear = None
    
    return old_front

lq = LLQueue()
lq.enqueue(10)
lq.enqueue(20)
lq.enqueue(30)
print(lq.front)
n1 = lq.dequeue()
print(lq.front)


class LLStack:
  def __init__(self):
    self.top = None
  
  def push(self, data):
    new_node = LLNode(data)

    new_node.next = self.top
    self.top = new_node

  def pop(self):
    if self.top is not None:
      popped_node = self.top

      self.top = popped_node.next

      popped_node.next = None

      return popped_node 

lls = LLStack()
lls.push(10)
lls.push(20)
lls.push(30)
print(lls.top)
n2 = lls.pop()
print(lls.top)
print(n2)