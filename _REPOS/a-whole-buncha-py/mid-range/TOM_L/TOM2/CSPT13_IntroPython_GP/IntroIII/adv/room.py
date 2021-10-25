# lets make a room class

class Room:
    def __init__(self, name, description):
        self.name = name
        self.description = description

    def __str__(self):
        output = "\n"
        output += f"{self.name}\n"
        output += f"{self.description}\n"
        output += "Exits to the: "
        output += " [North] " if hasattr(self, "n_to") else ""
        output += " [South] " if hasattr(self, "s_to") else ""
        output += " [East] " if hasattr(self, "e_to") else ""
        output += " [West] " if hasattr(self, "w_to") else ""

        return output


    