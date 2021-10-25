class Animal:
    def __init__(self, kind, color):
        # Construct a new instance of animal
        self.kind = kind
        self.color = color

    def description(self):
        return f'This is a {self.kind}, and its color is {self.color}'




cat = Animal('cat', 'orange')

dog = Animal('dog', 'brown')

print(cat.description())
print(dog.description())
