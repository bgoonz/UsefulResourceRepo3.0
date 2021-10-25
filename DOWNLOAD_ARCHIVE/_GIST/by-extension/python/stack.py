class stack:
  # by default pass in [] as inivial value
  def __init__(self,initialVal=[]):
    self.stack = initialVal
  
  # push is to append to the tail of the list
  def push(self,ele):
    self.stack.append(ele)
    return self.stack
  
  # pop is to remove from the tail of the list
  def pop(self):
    return self.stack.pop(-1)
  
  def checkStack(self):
    print(self.stack)
  
  def checkTop(self):
    print(self.stack[-1])