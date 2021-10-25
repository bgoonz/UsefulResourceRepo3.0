class Category:
    def __init__(self, name, products = None):
        self.name = name
        self.products = products

    def __str__(self):
        if self.products == None:
            return f'No products available in {self.name}'
        else:
            output = ''
            output += self.name + '\n'
            product_number = 1
            for p in self.products:
                output += f'  [{product_number}] {p.name}\n'
                product_number += 1