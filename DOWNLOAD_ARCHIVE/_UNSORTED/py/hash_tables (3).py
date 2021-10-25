class HashTableNode:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None


class HashTable:
    def __init__(self, capacity):
        self.capacity = capacity
        self.storage = [None] * capacity            

    def my_hash(self, key):
        # do stuff to convert this str to a number
        bytes_str = key.encode()
        bytes_sum = 0
        for byte in bytes_str:
            bytes_sum += byte

        return bytes_sum % self.capacity 

    def resize(self, new_capacity):
        # We want to double the size of our storage
        # Once we change the size, we must rehash all items and find new locations

        # For each slot in storage
            # loop through all linked list items
                # rehash each item
                # re-insert the item into new storage


    def insert(self, key, value):
        # convert the key to an index for our storage  
        index = self.my_hash(key)
        print(f'{key} hashed to {index}')
        # Store the value in storage 

        # First, search through our linked list to see if the key exists
        current_node = self.storage[index]
        while current_node is not None:
            # compare the current node key to the key we are inserting
            if current_node.key == key:
                # we found our node, change its value
                current_node.value = value
                return
            else:
                current_node = current_node.next

        # Otherwise, add a new node
        # Create a new HashTableNode
        new_node = HashTableNode(key, value)
        current_head = self.storage[index]
        # Insert new_node into the linked list
        # if there is no list yet, create it
        if current_head is None:
            self.storage[index] = new_node
        else: 
            # There already exists a linked list
            # Make the new node the head of the list
            new_node.next = current_head
            self.storage[index] = new_node
        
    def get(self, key):
        # convert the key to an index for our storage  
        index = self.my_hash(key) 
        # get the head of the linked list using our index
        current_node = self.storage[index]

        # search through the linked list
        while current_node:
            if current_node.key == key:
                return current_node.value
            current_node = current_node.next
        
        # We have not found anything
        print(f"Error: Could not find {key}")
        return None

    def delete(self, key):
        # convert the key to an index for our storage  
        index = self.my_hash(key) 

        # Delete node from linked list
        current_node = self.storage[index]
        # cannot delete an empty list
        if current_node is None:
            return None

        # Check if the node to delete is the head
        if current_node.key == key:
            self.storage[index] = current_node.next
            return
        
        # Otherwise, delete node from inside the list
        prev_node = None
        while current_node:
            # look for the node that matches our key
            if current_node.key == key:
                # delete that node
                # make previous node, point to whatever current node points to
                prev_node.next = current_node.next
                return 
            prev_node = current_node
            current_node = current_node.next
        # We have not found anything
        print(f"Error: Could not find {key}")
        return

my_dict = HashTable(8)

my_dict.insert('banana', 'banana is a fruit')
my_dict.insert('apple', 'apple is also a fruit')
my_dict.insert('cucumber', 'cucumber is a vegetable')
my_dict.insert('tomato', 'no one can agree on tomato')

my_dict.insert('peach', 'Definitely not a banana')

print(my_dict.get('banana'))
# my_dict['banana']
print(my_dict.get('peach'))
# my_dict['peach']
print(my_dict.get('cucumber'))


# Delete Banana

my_dict.delete('banana')
# Try to access banana
print(my_dict.get('banana'))
