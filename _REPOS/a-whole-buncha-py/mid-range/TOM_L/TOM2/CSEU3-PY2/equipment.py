# make a equipment class with the fields of 
# name, price, style and weight
# that inherits from the product class
from product import Product

class Equipment(Product):
    # constructor
    def __init__(self, name, price, style, weight):
        super().__init__(name, price)
        self.style = style
        self.weight = weight

    def __str__(self):
        f'{super().__str__()} Style: {self.style}, Weight: {str(self.weight)}'
