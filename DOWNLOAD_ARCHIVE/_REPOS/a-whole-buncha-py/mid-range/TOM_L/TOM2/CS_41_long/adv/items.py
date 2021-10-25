class Item:
    def __init__(self,name, description):
        self.name = name
        self.description = description

    def on_pickup(self, player):
        """ Abstract Method to be overriden in sub classes """
        pass

    def on_drop(self, player):
        pass

    def __str__(self):
        return f"{self.name}"

class Treasure(Item):
    def __init__(self, name, description, value):
        super().__init__(name, description)
        self.value = value
        self.picked_up = False
    
    def on_pickup(self, player):
        super().on_pickup(player)

        if not self.picked_up:
            player.gold += self.value
            print(f"You gained {self.value} Gold!")
            self.picked_up = True

class Weapon(Item):
    def __init__(self, name, description, power):
        super().__init__(name, description)
        self.power = power
        self.picked_up = False
    
    def on_pickup(self, player):
        super().on_pickup(player)

        if not self.picked_up:
            player.atk += self.power
            print(f"You gain {self.power} Power!")
            self.picked_up = True
    
    def on_drop(self, player):
        super().on_drop(player)

        if self.picked_up:
            player.atk -= self.power
            print(f"You lost {self.power} Power!")
            self.picked_up = False

class LightSource(Item):
    def __init__(self, name, description):
        super().__init__(name, description)
        self.lightsource = True