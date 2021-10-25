class LinkedListNode:
    def __init__(self, key, value):
        self.value = value
        self.key = key
        self.next = None

class HashTable:
    def __init__(self, capacity):
        self.storage = [None] * capacity
        self.capacity = capacity
        self.item_count = 0

    def hash(self, str):
        byte_str = str.encode()

        sum = 0
        for byte in byte_str:
            sum += byte

        return sum % self.capacity

    def get_load_factor(self):
        return self.item_count / self.capacity

    def resize(self):
        old_storage = self.storage
        # Double the size
        self.capacity = self.capacity * 2
        self.item_count = 0
        self.storage = [None] * self.capacity
        # Go through each slot in storage
        for slot in old_storage:
            current_node = slot
            while current_node is not None:
                # Loop through linked list, and add the items back in
                self.put(current_node.key, current_node.value)
                current_node = current_node.next

    def put(self, key, value):
        # hash our key and get an index for our storage
        index = self.hash(key)
        new_node = LinkedListNode(key, value)
        # We have a collision (theres already a list here)
        if self.storage[index] is not None:
            # First, get the current head node
            current_head = self.storage[index]
            # Make the connection from new_node, to current_head 
            new_node.next = current_head
            # Make the new node, the new head
            self.storage[index] = new_node
        else:
            # Else, there is no list yet
            self.storage[index] = new_node
        self.item_count += 1
        # Check if load_factor is too large now
        if self.get_load_factor() > 0.7:
            # Lets resize!
            print("Resize!")
            self.resize()

    def get(self, key):
        # get the index from the key
        index = self.hash(key)
        current_node = self.storage[index]
        while current_node is not None:
            # Check if current_node is what we want
            if current_node.key == key:
                return current_node.value
            # Otherwise, keep movin through the linked list
            current_node = current_node.next
        print(f'The key {key} does not exist!')
        return None

    def remove(self, key):
        # get the index from the key
        index = self.hash(key)
        self.storage[index] = None
        self.item_count -= 1

    def __setitem__(self, key, value):
        self.put(key, value)

    def __getitem__(self, key):
        return self.get(key)

my_dict = HashTable(8)
my_dict['apple'] =  'apple is a fruit'
my_dict['banana'] = 'banana is a fruit'
my_dict['cucumber'] = 'vegetable'
my_dict['peach'] = 'Peach is TOTALY NOT A BANANA'
my_dict['tomato'] = 'tomato is a fruit?'
my_dict['watermelon'] = 'watermelon is a berry?'

print(my_dict['banana'])
print(my_dict['peach'])

print(my_dict.capacity)
print(my_dict.hash('banana'))
print(my_dict.hash('peach'))