class queue:
  # by default pass in [] as inivial value
  def __init__(self,initialVal=[]):
    self.queue = initialVal
  
  # enqueue is to append to the tail of the list
  def enqueue(self,ele):
    self.queue.append(ele)
    return self.queue
  
  # dequeue is to remove from the head of the list
  def dequeue(self):
    return self.queue.pop(0)
  
  def checkQueue(self):
    print(self.queue)
  
  def checkHead(self):
    print(self.queue[0])
  
  def checkTail(self):
    print(self.queue[-1])