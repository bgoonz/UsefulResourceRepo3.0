# key1 = "evaD"


# storage = [None] * 10

# # number = 0

# # for c in key1:
# #   number += ord(c)

# # print(number)

# # index = number % len(storage)

# # print(index)

def hash_func(s):
  number = 0

  for c in s:
    number += ord(c)

  # print(number)

  index = number % len(storage)
  return index

# idx = hash_func("Dave")

# storage[idx] = 25

# print(storage)

# {
#   "name": "Dave",
#   "Age": 25
# }


class HashTable:
  def __init__(self, capacity):
    self.capacity = capacity
    self.storage = [None] * capacity
    self.item_count = 0
  
  def hash_func(self, key):
    number = 0

    for c in key:
      number += ord(key)

    # print(number)
    return number

  def __djb2__(self, key):
    str_key = str(key).encode()

    hash_value = 5381

    for b in str_key:
      hash_value =  ((hash_value << 5) + hash_value) + b

      hash_value = hash_value & 0xffffffff

    return hash_value




  def hash_index(self, key):
    return self.__djb2__(key) % self.capacity
  
  def put(self, key, value):
    index = self.hash_index(key)
    self.storage[index] = value
    self.item_count += 1

  def get(self, key):
    index = self.hash_index(key)
    return self.storage[index]
      


  def delete(self, key):
    index = self.hash_index(key)
    self.storage[index] = None
    self.item_count -= 1

# test code
ht = HashTable(20)
ht.put("Dave", 34)
daves_age = ht.get("Dave") # => 34
print(daves_age)
