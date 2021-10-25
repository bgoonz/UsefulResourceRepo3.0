from category import Category
from clothing import Clothing
from equipment import Equipment

cats = {
    "legs": Category("False Legs", [Clothing("Hat", 23, "Red", 5), Clothing("Shirt", 23, "Green", 5)]),
    "bats": Category("Baseball Bats", [Equipment("Long Bat", 450, "Metal", 10000)]),
    "fruit": Category("Fruit", []),
    "special": Category("Bobs Special Place", [])
}

