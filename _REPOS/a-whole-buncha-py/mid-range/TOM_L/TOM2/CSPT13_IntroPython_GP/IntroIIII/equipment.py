from product import Product

class Equipment(Product):
    def __init__(self, name, price, style, weight):
        super().__init__(name, price)
        self.style = style
        self.weight = weight

    def __str__(self):
        return f"{super().__str__()} comes in {self.style}, and weighs in at {self.weight}kg"