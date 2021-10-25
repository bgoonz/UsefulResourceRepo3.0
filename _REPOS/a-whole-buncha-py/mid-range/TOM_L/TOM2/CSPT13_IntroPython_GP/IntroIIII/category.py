# lets create a class to hold our category data

class Category:
    def __init__(self, name, products):
        self.name = name
        self.products = products # has_a relationship

    # def __str__(self):
    #     return f"No Products in {self.name}"
    def __str__(self):
        if len(self.products) == 0:
            return f"No Products in {self.name}"

        ret = f"{self.name}\n"
        for i, p in enumerate(self.products):
            # ret += "    " + str(i + 1) + ": " + p.name + " > " + str(p.price) + "\n"
            ret += f"{p}\n"

        return ret