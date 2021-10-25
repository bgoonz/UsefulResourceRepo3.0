from category import Category
class Store:
    def __init__(self, name, categories):
        self.name = name
        self.categories = categories

    def __str__(self):
        output = ""
        output += self.name + "\n\n"
        cat_index = 1
        for c in self.categories:
            output += "  " + str(cat_index) + ". " + c.name + "\n"
            cat_index += 1
        output += "  " + str(cat_index) + ". Exit"
        return output

s = Store("Bobs Store", [Category("Books"), Category("Weapons"), Category("Food"), Category("Bob")])

print(s)


# l = [12, 23, 34, 56, 78]
# for i,j in enumerate(l):
#     print(i, j)

selection = 0

while selection != len(s.categories) + 1:
    selection = input("Select the dept number: ")
    try:
        selection = int(selection)
        if selection == len(s.categories) + 1:
            print("Thanks for shopping with us!!!")
        elif selection > 0 and selection <= len(s.categories):
            print(s.categories[selection - 1])
        else:
            print("please choose a valid number")
    except ValueError:
        print("Please input a number")