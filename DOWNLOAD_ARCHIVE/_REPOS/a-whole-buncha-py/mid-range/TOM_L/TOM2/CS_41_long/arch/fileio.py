import sys

LDI = 0b10000010
PRN = 0b01000111
HLT = 0b00000001
program = []
if len(sys.argv) < 2:
    print("Usage: fileio.py <filename>")
else:
    try:
        # store the first argument as a file name
        file_name = sys.argv[1]

        # open the file using the `open()` function
        with open(file_name) as file:

                # iterate over each line in the file
                for line in file:
                    # split each line in to an element of a list
                    line_data = line.split("#")

                    # select the first element (the raw instruction string)
                    raw_instruction_string = line_data[0]

                    # strip any whitespace / newline characters using `.strip()` method
                    sanatized_instruction_string = raw_instruction_string.strip()

                    # deal with lines with only comments
                    if sanatized_instruction_string == '':
                        continue
                    
                    # cast the binary string to an integer, using the `int()` function. passing in a base of 2
                    int_of_bin = int(sanatized_instruction_string, 2)

                    # # print(f"{int_of_bin:08b}: {int_of_bin}")
                    # if int_of_bin == LDI:
                    #     print("LDI")
                    # elif int_of_bin == LDI:
                    #     print("LDI")
                    # elif int_of_bin == PRN:
                    #     print("PRN")
                    # elif int_of_bin == HLT:
                    #     print("HLT")

                    # append the integer to the program list as an element of machine code
                    program.append(int_of_bin)
    except FileNotFoundError:
        print("I can not find the file!!!!!!!!")
        
print(program)