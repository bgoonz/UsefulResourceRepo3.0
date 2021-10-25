from product import Product

class Clothing(Product):
    def __init__(self, name, price, color, size):
        super().__init__(name, price)

        self.color = color
        self.size = size

    def __str__(self):
        return f"{super().__str__()} comes in {self.color}, {self.size}"