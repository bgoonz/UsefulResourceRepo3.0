
class LinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None



class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

    def enqueue(self, item):
        # create a new LinkedListNode
        new_node = LinkedListNode(item)
        # if the queue is empty
        if self.rear is None:
            self.rear = new_node
            self.front = new_node
        # Add new node to the rear
        # Make sure the old rear, points to the new node
        else:
            self.rear.next = new_node
            # make the rear point to new_node
            self.rear = new_node


    def dequeue(self):
        if self.front is None:
            return None
        # store a temp variable so we dont lose our node
        old_front = self.front
        # move the front pointer, to the next node over
        self.front = self.front.next

        # Special case, if the queue should now be empty
        if self.front is None:
            self.rear = None

        return old_front.data

my_queue = Queue()

my_queue.enqueue('A')
my_queue.enqueue('B')
my_queue.enqueue('C')

print(f'The front is now {my_queue.front.data}')

print("Remove the value from the front")
print(f'removed value is {my_queue.dequeue()}')
print(f'The front is now {my_queue.front.data}')

print("Remove the value from the front")
print(f'removed value is {my_queue.dequeue()}')
print(f'The front is now {my_queue.front.data}')

print("Remove the value from the front")
print(f'removed value is {my_queue.dequeue()}')
print(f'The front is now {my_queue.front.data}')
