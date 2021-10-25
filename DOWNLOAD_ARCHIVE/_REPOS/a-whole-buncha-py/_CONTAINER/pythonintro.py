

# lst = []

# for c in "This is a string":
#   lst.append(c)


# def some_thing(a, b, c=1, f=1, r=1):
#   """
#     Function purpose
#     expected inputs
#     exampe of usage
#     a = some_thing(1.2, 2.2, 3.5, 3.3, 0.9) # >> 27.4428
#   """

# lst.sort()
# print(lst)
# str1 = ""
# for c in lst:
#   str1 += c

# print(str1)


# # print("this")


# def add(a, b):
#                  print(12)
#                  return a + b


# # __ = private
# # _ = Protected
# #  = Public
# a = str(12)
# b = 12.6
# c = 'A'
# d = "Hello"
# g = d
# f = "Hello"
# t = (12, 23) # imutable
# t = (34, 4)
# l = [12, 23] # mutable
# l.append(40)
# # print(d is f)
# print(type(a))
# print(add(12, 4))

a = "a 23232 4534  ::::lp  99  ha"
b = ""
n = ""
# print(a.isalpha())
for char_to_test in a:
  c = char_to_test
  if c.isalpha():
    b += c
  if c.isnumeric():
    n += c

t = [(12, 23), (25, 78)]

d = {"name": "bob", "age": 34}

lst = ["dave", "bob", "ste"]

for i, n in enumerate(lst):

  print(f"Index [{i}] has name of '{n}'")



# for a, b in d.keys(), d.values():
#   print(a)
#   print(b)



# # print(b)
# # print(n)