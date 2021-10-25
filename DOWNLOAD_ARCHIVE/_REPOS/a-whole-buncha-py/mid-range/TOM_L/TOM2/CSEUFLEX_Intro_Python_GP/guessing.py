# lets make a guessing game
# set a value
# take in some input from a player
# check it against a value
# if they are the same print player wins
# if they are different print guess again
# and loop




# what is a REPL?
# how can we make this game replayable? 


#repl
playing = True
number = 45
while playing: # LOOP
    val = int(input(" Guess the number i am thinking of >>> ")) # READ

    if val == number: # EVAL
        print("You win") # PRINT
        playing = False
    else:
        print("Not correct!!")

# possible improvements
# random number to start?
# # maybe use ints and cast our guess
