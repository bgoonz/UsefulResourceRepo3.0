from doubly_linked_list import DoublyLinkedList

class LRUCache:
    """
    Our LRUCache class keeps track of the max number of nodes it
    can hold, the current number of nodes it is holding, a doubly-
    linked list that holds the key-value entries in the correct
    order, as well as a storage dict that provides fast access
    to every node stored in the cache.
    """
    def __init__(self, limit=10):
        self.limit = limit
        self.size = 0
        self.order = DoublyLinkedList()
        self.storage = dict()



    """
    Retrieves the value associated with the given key. Also
    needs to move the key-value pair to the end of the order
    such that the pair is considered most-recently used.
    Returns the value associated with the key or None if the
    key-value pair doesn't exist in the cache.
    """
    def get(self, key):
        # if the key exists in the storage
        if key in self.storage:
            # extract the node from storage at the key
            node = self.storage[key] # => memory address of a ref to the actual node in the DLL
            # move the node to end of order
            self.order.move_to_end(node)
            # return the value of the value of the node
            return node.value[1] # => (n, 4)[1] => 4
        # otherwise
        else:
            # return None
            return None

    """
    Adds the given key-value pair to the cache. The newly-
    added pair should be considered the most-recently used
    entry in the cache. If the cache is already at max capacity
    before this entry is added, then the oldest entry in the
    cache needs to be removed to make room. Additionally, in the
    case that the key already exists in the cache, we simply
    want to overwrite the old value associated with the key with
    the newly-specified value.
    """
    def set(self, key, value):
        # if the key exists in the storage (1)
        if key in self.storage:
            # extract the node from the storage
            node = self.storage[key]
            # set the nodes value to the key value pair
            node.value = (key, value)

            # call move to end on the order
            self.order.move_to_end(node)
            # return from the set method
            return
        
        # if the size is the same as the limit (2)
        if self.size == self.limit:
            # delete the storage at the heads value key
            del self.storage[self.order.head.value[0]] #  del dict1[name]
            # call remove from head on the order
            self.order.remove_from_head()
            # decrement size
            self.size -= 1
        
        # if both cases are false (does not run if (1) is true
        # call add to tail on the order passing in the key value pair
        self.order.add_to_tail((key, value))
        # set the storage at the index of the key to the orders tail
        self.storage[key] = self.order.tail
        # increment the size
        self.size += 1
