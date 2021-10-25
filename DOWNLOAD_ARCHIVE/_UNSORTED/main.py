# storage = [None] * 10

# def hashing_function(key):
#   sum = 0

#   for c in key:
#     sum += ord(c)
  
#   return sum

# def hash_to_index(key, length):
#   return hashing_function(key) % length

# def put_in_table(key, value):
#   idx = hash_to_index(key, len(storage))
#   storage[idx] = value

# def get_from_table(key):
#   idx = hash_to_index(key, len(storage))
#   return storage[idx]


# put_in_table("ABC", "Dave")
# put_in_table("FDER", "Steve")
# put_in_table("asedgfsrfdgw", "Joe")
# put_in_table("ABCWERWE", "Sue")
# put_in_table("Waaaaaaaaaaahhhhaaahahahaha", "Paul")

# print(storage)



class HashTable:
  def __init__(self, capacity):
    self.capacity = capacity
    self.storage = [None] * capacity
    self.item_count = 0

  def hash_func(self, key):
    sum = 0

    for c in key:
      sum += ord(c)
    
    return sum

  def djb2(self, key):
    str_key = str(key).encode()

    hash_value = 5381

    for b in str_key:
      hash_value = ((hash_value << 5) + hash_value) + b
      hash_value &= 0xffffffff


    return hash_value

  def hash_index(self, key):
    return self.djb2(key) % self.capacity

  def put(self, key, value):
    idx = self.hash_index(key)
    self.storage[idx] = value

  def get(self, key):
    idx = self.hash_index(key, self.capacity)
    return self.storage[idx]

  def __str__(self):
    return str(self.storage)


# tests

h = HashTable(10)


h.put("ABC", "Dave")
h.put("FDER", "Steve")
h.put("asedgfsrfdgw", "Joe")
h.put("ABCWERWE", "Sue")
h.put("Waaaaaaaaaaahhhhaaahahahaha", "Paul")

print(h)


hash = 0b00001000101010010110010101010101