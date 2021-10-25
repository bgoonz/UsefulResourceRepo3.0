# composition and inheritance


class Bar:
    def __init__(self, name="bar"):
        self.name = name

a = 12
b = 23
c = 19

class Foo:
    def __init__(self):
        self.bars = [Bar()] * 10 # has_a relationship
        self.numbers = [a, b, c] # has_a

    def __str__(self):
        return f"{self.bar}"


class Entity():
    def __init__(self, id, x, y):
        self.id = id
        self.x = x
        self.y = y

    def get_id(self):
        return self.id


my_super = Entity()


class Mob(Entity): # is_a relationship
    def __init__(self, id, x, y):
        super().__init__(id, x, y)
        # self.bob = super().get_id()

# foo = Foo()

# print(foo)
class Item:
    def __init__(self, name, description=""):
        self.name = name
        self.description = description

class Weapon(Item):
    def __init__(self, name, power, description=''):
        super().__init__(name, description=description)
        self.power = power

class Room:
    def __init__(self, name, description):
        self.name = name
        self.description = description
        self.items = [Weapon("Knife", 10), Item("Hammer")]


class Player:
    def __init__(self, starting_room):
        self.current_room = starting_room
        self.inventory = [Item("Shield")] # has_a item
        self.gold = 0

    def move(self, direction):
        # check if current room has direction_to
            # return current rooms direction_to
        # otherwise
            # tell user they can not go that way
        pass

    def pick_up(self, item):
        # if item exists in current room
            # create instance of item in inv
            # delete item from room
        # otherwise
            # tell player that they can not do that
        pass

    def drop(self, item):
        # if item exists in inv
            # create instance of item in current room
            # delete item from inv
        # otherwise
            # tell player that they can not do that
        pass
