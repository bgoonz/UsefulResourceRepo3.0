# lets parse some numbers
# argv and argc take in command line args
# in this file we will read in a file and print the lines
import sys

if len(sys.argv) != 2:
    print("usage: 01_fileio1.py <filename>")
    sys.exit(1)

memory = []
try:
    with open(sys.argv[1]) as f:
        for line in f:
            comment_split = line.split('#')
            num = comment_split[0]
            if num == '':
                continue
            x = int(num, 2)
            print(f"{x:08b}")
            memory.append(x)

    print(memory)

except FileNotFoundError:
    print(f"{sys.argv[0]}: {sys.argv[1]} not found!")
    sys.exit(2)