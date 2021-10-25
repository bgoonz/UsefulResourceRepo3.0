class Animal:
    def __init__(self, name, color, kind):
        self.name = name
        self.color = color
        self.kind = kind

    def pet(self):
        print(f'{self.name} enjoyed being pet')

    def feed(self, food_item):
        print(f'{self.name} ate {food_item}')

class Fish(Animal):

    def pet(self):
        print('Please let me go, Im a fish')
    
class Zoo:
    def __init__(self):
        self.animals = []
    
    def pet_all(self):
        for animal in self.animals:
            animal.pet()


dog = Animal('Rufus', 'brown', 'poodle')

dog2 = Animal('Frank', 'grey', 'lab')

cat = Animal('Garfield', 'yellow', 'tabby')

goldfish = Fish('Cracker', 'gold', 'goldfish')

zoo = Zoo()
zoo.animals.append(dog)
zoo.animals.append(dog2)
zoo.animals.append(cat)
zoo.animals.append(goldfish)
zoo.pet_all()

# print(dog.name)
# print(dog2.name)
# dog.pet()
# dog2.pet()
# cat.pet()
# cat.feed('fish')

# goldfish.pet()
