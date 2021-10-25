from product import Product

class Italker:

    def say(self, message):
        pass

class Clothing(Product, Italker):
    def __init__(self, name, price, colour, size):
        super().__init__(name, price)
        self.colour = colour
        self.size = size

    def say(self, message):
        print(f"{self.name} Says {message}")



    def __str__(self):
        return super().__str__() + f" comes in {self.colour}, {self.size}"