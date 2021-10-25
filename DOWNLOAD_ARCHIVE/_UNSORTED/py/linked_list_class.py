class LinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.previous = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
    # O(1) operation
    def print_list(self):
        current_node = self.head

        while current_node is not None:
            print(current_node.value)
            next_node = current_node.next
            current_node = next_node

    def get_nth_item(self, n):
        current_node = self.head
        i = 0
        while current_node:
            if i == n:
                return current_node

            current_node = current_node.next    
            i += 1


    def insert_at_head(self, value):   
        new_node = LinkedListNode(value)
        if self.head is None:
            # Check if we don't have a head yet
            self.head = new_node
            self.tail = new_node
            return
        new_node.next = self.head
        # Set the head to new node
        self.head = new_node
        return new_node


    def insert_at_next(self, node, value):
        new_node = LinkedListNode(value)
        new_node.next = node.next
        node.next = new_node


    def insert_at_tail(self, value):
        new_node = LinkedListNode(value)
        self.tail.next = new_node
        # Update the tail pointer
        self.tail = new_node
        return new_node


list = LinkedList() 
list.insert_at_head(1)

# Adding a node at the end
list.insert_at_tail(2)
list.insert_at_tail(3)

list.insert_at_head(0)

item_2 = list.get_nth_item(2)

list.insert_at_next(item_2, 5)

list.print_list()