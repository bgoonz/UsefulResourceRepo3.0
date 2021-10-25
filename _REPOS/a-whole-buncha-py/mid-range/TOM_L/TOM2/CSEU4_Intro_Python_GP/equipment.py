# make an equipment class with the fields of 
# name, price, style and weight
# that inherits from the product class
from product import Product
class Equipment(Product):
    def __init__(self, name, price, style, weight):
        super().__init__(name, price)
        self.style = style
        self.weight = weight