# Write a class to hold player information, e.g. what room they are in
# currently.

class Player:
    def __init__(self, name, current_room):
        self.name = name
        self.current_room = current_room
        self.inventory = []
        self.gold = 0
        self.atk = 0
        self.hp = 10
        self.status = "alive"


    def move(self, direction):
        attribute = direction + '_to'

        if hasattr(self.current_room, attribute):
            self.current_room = getattr(self.current_room, attribute)
        else:
            print("you may not go in that direction!\n")

    def check_room_for_item(self, name):
        for i in self.current_room.contents:
            if i.name == name:
                return i
        return None

    def check_inventory_for_item(self, name):
        for i in self.inventory:
            if i.name == name:
                return i
        return None

    def print_info(self):
        output = f"\n[{self.name}]\nStatus: {self.status}\nHealth: {self.hp}\nAttack: {self.atk}\nGold: {self.gold}\n\n[Inventory]\n"

        if len(self.inventory) > 0:
            for i in self.inventory:
                output += f"{i.name}: {i.description}\n"
            output += "\n"
        else:
            output += "Your Sack is Empty!\n"

            
        print(output)