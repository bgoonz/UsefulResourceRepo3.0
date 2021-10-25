from category import Category
# Store class (model a shop / store with categories)
class Store:
    # constructor
    def __init__(self, name, categories):
        # attributes (name, categories)
        self.name = name
        self.categories = categories

    def __str__(self):
        output = ''
        output += self.name + '\n'
        category_number = 1
        for c in self.categories:
            output += f'  [{category_number}] {c.name}\n'
            category_number += 1
        
        output += f'  [{category_number}] Exit'
        
        return output

hats = Category('Hats')
gloves = Category('Gloves')
pets = Category('Pets')
bats = Category('Bats')
carrots = Category('Carrots')

categories1 = [hats, gloves, pets]
snowman_categories = [hats, gloves, carrots]
s = Store("Harry's Emporium", snowman_categories)
print(s)

# set selection to zero
selection = 0
# REPL
while selection != len(s.categories) + 1:
    # get input from user
    selection = input('Select the number of the department ')
    # print the selection
    # print(f'The user selected {selection}')
    try:
        selection = int(selection)
        # exit clause
        if selection == len(s.categories) + 1:
            print(f'Thank you for shopping at {s.name}')
        elif selection > 0 and selection <= len(s.categories):
            print(s.categories[selection - 1])
        else:
            print('please select a valid number.')
    except ValueError:
        print('Please enter you choice as a number')
    


