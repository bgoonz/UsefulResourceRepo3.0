# my_dict = {}
# my_dict = dict()

class HashTable:
    def __init__(self, size = 8):
        self.storage = [None] * size

    def hash_func(self, string):
        # Add up all the encoded values of
        # the string chars
        sum = 0
        for char in string:
            sum += ord(char)
        return sum % len(self.storage)

    def put(self, key, value):
        # Hash the key
        index = self.hash_func(key)
        if (self.storage[index] is not None):
            print("OH NO, collision")
            return
        # store the value
        self.storage[index] = (key, value)

    def get(self, key):
        # Hash the key
        index = self.hash_func(key)
        # Retreive the value
        return self.storage[index][1]
    
    def delete(self, key):
        # Hash the key
        index = self.hash_func(key)
        self.storage[index] = None
    
    def __setitem__(self, key, value):
        self.put(key, value)

    def __getitem__(self, key):
        return self.get(key)


my_dict = HashTable()
my_dict['apple'] = 'is a fruit'
my_dict['banana'] = 'banana is a fruit'
print(my_dict.storage)
my_dict['peach'] = 'is not a banana'
# print(my_dict.storage)
print(my_dict['banana'])

print(my_dict.hash_func('banana'))
print(my_dict.hash_func('peach'))
