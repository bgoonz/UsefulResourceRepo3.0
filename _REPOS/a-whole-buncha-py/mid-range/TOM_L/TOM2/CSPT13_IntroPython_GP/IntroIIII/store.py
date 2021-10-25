# lets write a store class with a name and categories
class Store:
    def __init__(self, name, categories):
        # attributes
        self.name = name # string has_a name
        self.categories = categories # has_a (has_many) composition

    def __str__(self):
        ret = f"{self.name}\n"
        for i, c in enumerate(self.categories):
            ret += "    " + str(i + 1) + ": " + c.name + "\n"
        ret += "    " + str(i + 2) + ": Exit"
        
        return ret

    def __repr__(self):
        return f"Store({self.name}, {self.categories})"

# how can we represent this class data as a string?