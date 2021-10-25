class SimpleHashTable:
    def __init__(self, capacity):

        # data structure
        self.capacity = capacity
        self.storage = [None] * capacity

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


    def basic_hash(self, string):
        # take in some string
        # turn the string in to bytes
        str_bytes = string.encode()

        # set up a counter or a sum variable
        sum = 0
        # iterate over each byte
        for byte in str_bytes:
            # increment our counter / sum by the value at that byte
            sum += byte

        # pass on the value to the caller (return the sum)
        return sum

    def hash_index(self,key):
        return self.djb2_hash(key) % self.capacity

    def put(self, key, value):
        self.storage[self.hash_index(key)] = value

    def get(self, key):
        return self.storage[self.hash_index(key)]

    def remove(self, key):
        self.storage[self.hash_index(key)] = None

ht = SimpleHashTable(10)

print(ht.storage)
ht.put("Dave", 20)
print(ht.storage)
daves_age = ht.get("Dave")
print(daves_age)