class Category:

    def __init__(self, name, products):
        self.name = name
        self.products = products

    def __str__(self):
        output = "  " + self.name + "\n"
        if len(self.products) < 1:
            output = "No products available in this category"
        for p in self.products:
            output += "    " + str(p) + "\n"
        
        return output