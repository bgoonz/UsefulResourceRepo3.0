from room import Room
from player import Player
from items import Treasure, Weapon, LightSource


# Declare all the rooms

room = {
    'outside':  Room("Outside Cave Entrance",
                     "North of you, the cave mount beckons"),

    'foyer':    Room("Foyer", """Dim light filters in from the south. Dusty
passages run north and east."""),

    'overlook': Room("Grand Overlook", """A steep cliff appears before you, falling
into the darkness. Ahead to the north, a light flickers in
the distance, but there is no way across the chasm."""),

    'narrow':   Room("Narrow Passage", """The narrow passage bends here from west
to north. The smell of gold permeates the air."""),

    'treasure': Room("Treasure Chamber", """You've found the long-lost treasure
chamber! Sadly, it has already been completely emptied by
earlier adventurers. The only exit is to the south."""),
}


# Link rooms together

room['outside'].n_to = room['foyer']
room['foyer'].s_to = room['outside']
room['foyer'].n_to = room['overlook']
room['foyer'].e_to = room['narrow']
room['overlook'].s_to = room['foyer']
room['narrow'].w_to = room['foyer']
room['narrow'].n_to = room['treasure']
room['treasure'].s_to = room['narrow']

# make some rooms lit
room['outside'].is_lit = True
room['foyer'].is_lit = True

# items

item = {
    'sword': Weapon("stick", "Sticky Stick", 10),
    'coins': Treasure("sack", "a small sack (wonder whats in it?)", 5),
    'lamp': LightSource("lamp", "Oil Lamp")
}

# add some items to the rooms

room['overlook'].contents.append(item['sword'])
room['overlook'].contents.append(item['coins'])
room['foyer'].contents.append(item['lamp'])

# # helper functions
# def try_a_direction(player, dir):
#     attribute = dir + '_to'

#     if hasattr(player.current_room, attribute):
#         return getattr(player.current_room, attribute)
    
#     print("you may not go in that direction!\n")

#     return player.current_room

def display_room_contents(room):
    output = "Items in this room are:\n"

    if len(room.contents) > 0:
        for item in room.contents:
            output += f"  {item.name}: {item.description}\n"
    else:
        output = "The room is Empty!"

    return output

        



#
# Main
#
directions = ["n", 's', 'e', 'w']
# Make a new player object that is currently in the 'outside' room.
player = Player("Dave", room['outside'])

# Write a loop that:
#
# * Prints the current room name
# * Prints the current description (the textwrap module might be useful here).
# * Waits for user input and decides what to do.
#
# If the user enters a cardinal direction, attempt to move to the room there.
# Print an error message if the movement isn't allowed.
#
# If the user enters "q", quit the game.
playing = True
while playing:

    # check for lighting
    light_sources = [item for item in player.inventory + player.current_room.contents if isinstance(item, LightSource) and item.lightsource]
    is_lit = player.current_room.is_lit or len(light_sources) > 0

    if is_lit:
        # print surroundings
        print(f"Location: {player.current_room.name}")
        print(f"{player.current_room.description}\n")
        print(display_room_contents(player.current_room))
        # print(player.current_room.contents)
    else:
        print("\nIt's Pitch black!\n")

    # prompt for commands
    command = input("\nCommand>").strip().lower().split() # splitting the command in to a list of words

    #check for invalid amount of words
    if len(command) > 2 or len(command) < 1:
        print("I don't Understand what you are asking!")
        continue

    # single verb commands
    if len(command) == 1:
        if command[0] in directions:

            # player.current_room = try_a_direction(player, command)
            player.move(command[0])
        elif command[0] == "q":
            print("Thank you for playing my adventure!")
            playing = False
        elif command[0] == "stats" or command[0] == "i" or command[0] == "inventory":

            player.print_info()
        else:
            print("Unknown Command!")
    
    # verb + noun commands
    elif len(command) == 2:
        
        if command[0] == "get" or command[0] == "take":
            item = player.check_room_for_item(command[1])

            if item == None:
                print("I do not see that item here!")
            else:
                item.on_pickup(player)
                player.current_room.contents.remove(item)
                player.inventory.append(item)
                print(f"{item} taken!")

        if command[0] == "drop" or command[0] == "discard":
            item = player.check_inventory_for_item(command[1])

            if item == None:
                print("you do not have this item")
            else:
                item.on_drop(player)
                player.inventory.remove(item)
                player.current_room.contents.append(item)
                print(f"{item} droped!")



