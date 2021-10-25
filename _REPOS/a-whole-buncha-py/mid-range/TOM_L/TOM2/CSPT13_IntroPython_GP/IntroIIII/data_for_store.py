from category import Category
from clothing import Clothing
from equipment import Equipment
cats = {
    "legs": Category("False Legs", [Equipment("Big Bat", 500, "metal", "9000"), Clothing("Socks", 10, "Red", 500), Clothing("Fluffy Socks", 100, "Green", 50), Clothing("Hairy Shoes", 120, "Orange", 5)]),
    "bats": Category("Baseball Bats", [Equipment("Big Bat", 500, "metal", "9000")]),
    "fruit": Category("Fruit", []),
    "special": Category("Bobs Special Place", [Clothing("Metal Jumper", 200, "Yellow", 120)])
}