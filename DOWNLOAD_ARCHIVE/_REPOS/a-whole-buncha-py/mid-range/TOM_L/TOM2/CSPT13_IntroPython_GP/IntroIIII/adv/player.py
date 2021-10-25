# lets make a Player class

class Player:
    def __init__(self, name, starting_room, storage):
        self.name = name
        self.current_room = starting_room  # has_a
        self.storage = storage

