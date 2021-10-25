# dictionary initialization using {}
mydict = {'a':1,'b':2}

# add new (key,value) pair
mydict['c'] = 3

# modify existing (key,value) pair
mydict['a'] = 5

# remove (key,value) pair
mydict.pop('a')

# get length of the dictionary
print(len(mydict))

# iteration through keys
for key in mydict.keys():
  print(key)

# iteration through values
for value in mydict.values():
  print(value)

# iteration through (key,value) pairs
for key,value in mydict.items():
  print(key,value)