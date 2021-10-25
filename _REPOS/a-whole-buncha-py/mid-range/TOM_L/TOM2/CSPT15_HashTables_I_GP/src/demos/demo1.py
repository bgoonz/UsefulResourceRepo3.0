"""
Your task is create your own HashTable without using a built-in library.
Your HashTable needs to have the following functions:
- put(key, value) : Inserts a (key, value) pair into the HashTable. If the
value already exists in the HashTable, update the value.
- get(key): Returns the value to which the specified key is mapped, or -1 if
this map contains no mapping for the key.
- remove(key) : Remove the mapping for the value key if this map contains the
mapping for the key.
Example:
```plaintext
hash_table = MyHashTable();
hash_table.put("a", 1);
hash_table.put("b", 2);
hash_table.get("a");            // returns 1
hash_table.get("c");            // returns -1 (not found)
hash_table.put("b", 1);         // update the existing value
hash_table.get("b");            // returns 1
hash_table.remove("b");         // remove the mapping for 2
hash_table.get("b");            // returns -1 (not found)
```
"""
# can be used to deal with collisions using what we call linked list chaining
class ListNode:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None

class MyHashTable:
    def __init__(self, capacity = 100):
        # Your code here
        self.capacity = capacity
        self.storage = [None] * self.capacity

    def djb2_hash(self, key):
        # get the bytes of the key
        key_bytes = key.encode()
        # start from an arbitrary prime number (larger = better) 5381
        hash_value = 5381

        # bit shift and sum up the value for each char
        for byte in key_bytes:
            hash_value = ((hash_value << 5) + hash_value) + byte
            # hash_value = 5381 << 5 + 5381 + "e"
            hash_value &= 0xfffffffff # keep the number to be only 32bit


        # return the hash value
        return hash_value

    def put(self, key, value):
        # Your code here
        # set the index to the hash of the key moded against the capacity
        index = self.djb2_hash(key) % self.capacity

        # check if the storage at index is None
        if self.storage[index] == None:
            # set the storage at index to a new list node with a key of key and value of value
            self.storage[index] = ListNode(key, value)
        # else we have some collision
        else:
            # set a current node ref to the first ListNode
            curr_node = self.storage[index]
            # iterate # traverse over the linked list
            while True:
                
                # check if our current nodes key is equal to our key
                if curr_node.key == key:
                    # set our current nodes value to value and return
                    curr_node.value = value
                    return
                # check if our current nodes next is none
                if curr_node.next == None:
                    curr_node.next = ListNode(key, value)
                    # break out of our loop
                    return
                # traverse to the next node
                curr_node = curr_node.next

            # set our current nodes next to a new list node with the key and value
            curr_node.next = ListNode(key, value)





    def get(self, key):
        # Your code here
        # set the index to the hash of the key moded against the capacity
        index = self.djb2_hash(key) % self.capacity

        # set up current node ref to storage at index
        curr_node = self.storage[index]

        # while current node is not none
        while curr_node:
            # if the current nodes key is our key
            if curr_node.key == key:
                # return current nodes value
                return curr_node.value
            # otherwise
            else:
                # traverse to the next node in the chain
                curr_node = curr_node.next

        return -1


    def remove(self, key) -> None:
        # Your code here
        # set the index to the hash of the key moded against the capacity
        index = self.djb2_hash(key) % self.capacity

        # hold the prev current node
        prev_curr_node = self.storage[index]
        # hold the current node
        curr_node = self.storage[index]
        # deal with the bucket being empty
        # if there is no current node
        if not curr_node:
            # just return (None)
            return None
        
        # check if the current nodes key is the key we pass in?
        if curr_node.key == key:
            # set the storage at index to the current nodes next
            self.storage[index] = curr_node.next

        # otherwise we did not find the node to delete so we need to traverse
        else:
            # # set a ref to current node as the current nodes next
            curr_node = curr_node.next
            # while the current node is not None
            while curr_node:
                # check if the current nodes key is the key we passed in
                if curr_node.key == key:
                    # set our prev current nodes next to our current nodes next
                    prev_curr_node.next = curr_node.next
                    # then break out of the loop
                    break
                # otherwise
                else:
                    # travers my prev current node
                    prev_curr_node = prev_curr_node.next
                    # and my current node
                    curr_node = curr_node.next


# tests
hash_table = MyHashTable()
hash_table.put("a", 1)
hash_table.put("b", 2)
print(hash_table.get("a"))           # returns 1
print(hash_table.get("c"))           # returns -1 (not found)
hash_table.put("b", 1)        # update the existing value
print(hash_table.get("b"))           # returns 1
hash_table.remove("b")       # remove the mapping for 2
print(hash_table.get("b"))          # returns -1 (not found)