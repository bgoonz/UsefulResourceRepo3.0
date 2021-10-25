"""
Add "Herb" to the phonebook with the number 7653420789.
Remove "Bill" from the phonebook.
"""
phonebook = {
    "Abe": 4569874321,
    "Bill": 7659803241,
    "Barry": 6573214789
}

phonebook["Herb"] = 7653420789

print(phonebook['Abe'])
print(phonebook['Herb'])

# print(phonebook)

# del phonebook['Bill']

# print(phonebook)

# if "Bill" in phonebook:
#     print("Yes")
# else:
#     print("No")

# print(phonebook.keys())
# print(phonebook.values())
# print(phonebook.items())

# for key, value in phonebook.items():
#     print(key, value)

num_list = [1, 2, 3, 4, 5, 6]
my_dict = { num : num*num  for num in num_list }


friends_list = {'Amy', 'Brian', 'Leah', 'Susan'}

if 'Brian' in friends_list:
    print("Yes")
