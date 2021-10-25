from product import Product

class Clothing(Product):
    def __init__(self, name, price, colour, size):
        super().__init__(name, price)
        self.colour = colour
        self.size = size

    def __str__(self):
        return f"{super().__str__()} comes in {self.colour}, {self.size}"


# # OOP
# noun.verb()

# # Procedural / imperative
# verb(noun)

# Functional 
# (input) synth1 -> synth2 -> synth3 -> synthn -> (end result)

# a = 12
# def f1(something):
#     return something + 1

# def f2(something):
#     return something * 2

# b = f1(a) + f2(a) - f1(a)