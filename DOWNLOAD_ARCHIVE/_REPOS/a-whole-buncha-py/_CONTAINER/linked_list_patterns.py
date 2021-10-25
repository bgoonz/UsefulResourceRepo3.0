class LinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None 

x = LinkedListNode('X')
y = LinkedListNode('Y')
z = LinkedListNode('Z')

x.next = y
y.next = z

y.prev = x
z.prev = y

# traverse a linked list
# print out its contents 
def print_ll(node):
    # we'll traverse the ll from left to right
    # some way to keep track of where we are as we're iterating 
    # use a variable/reference
    # set your `current` variable to the starting node 
    current = node 

    # keep moving `current` in a loop 
    # while current:
    while current is not None: 
        # how do we move `current`?
        # the variable itself 
        # and what the variable is referring 
        print(current.value)
        current = current.next 


print_ll(x)
