import sys

loaded_file_name = ""

if len(sys.argv) < 2:
    print("Usage: fileio.py <filename>")
else:
    loaded_file_name = sys.argv[1]

def load_prog(file_name):
    program = []
    try:
        with open(file_name) as f:
                for line in f:
                    num_string = line.split("#")[0].strip()

                    if num_string == '':
                        continue

                    int_of_bin = int(num_string, 2)

                    program.append(int_of_bin)


    except FileNotFoundError:
        print("I can not find the file!!!!!!!!")

    return program

# class A:
#     def __init__(self):
#         pass


# my_a = A()

# print(my_a)

# components of a computer to us.
# RAM
# CPU

# opcodes
LOAD_NUM = 0b00000000
PRINT_NUM = 0b00000001
PRINT_REG = 0b11001100
HALT = 0b00001000
PRINT_NAME = 0b10101100
ADD = 0b11101100

LDI = 0b10000010
PRN = 0b01000111
PUSH = 0b01000101
POP = 0b01000110

CALL = 0b01010000
RET = 0b00010001

# Memory
ram = [0] * 255
prog = load_prog(loaded_file_name)
# print(prog)
# load a program from
address = 0
for instruction in prog:
        ram[address] = instruction
        address += 1

# program counter
pc = 0

# r0 - r7
registers = [0] * 8

# TODO: add stack pointer to register as per ls8 specs

# stack pointer is register 7
SP = 7

# and set the top of the stack by setting registers at the index of SP to the value of 0xf4
registers[SP] = 0xf4


# running loop
running = True

while running:
    # fetch
    inst = ram[pc]
    opa = ram[pc + 1]

    opb = ram[pc + 2]
    # print(f"OPA: {opa}, OPB: {opb}")
    # decode
    if inst == PRINT_NAME:
        # execute
        print("Tom")
        pc += 1
    
    # decode
    elif inst == HALT:
        # execute
        running = False
        pc += 1
    
    # decode
    elif inst == LOAD_NUM:
        # execute
        # get the num.
        num = opa
        # get the reg index.
        reg_index = opb
        # put the number in the registers list at the index of reg_index
        registers[reg_index] = num
        pc += 3

        # decode
    elif inst == LDI:
        # print("LDI")
        # execute
        # get the reg index.
        reg_index = opa
        # get the num.
        num = opb
        # put the number in the registers list at the index of reg_index
        registers[reg_index] = num
        pc += 3

    # decode
    elif inst == PRINT_NUM:
        # execute
        print(opa)
        pc += 2

    # decode
    elif inst == RET:
        # execute
        # copy the value in memory pointed to by the stack pointer in to the pc
        pc = ram[registers[SP]]
        # Icrement the Stack Pointer
        registers[SP] += 1


    # decode
    elif inst == CALL:
        # execute

        # Get the address of the next instruction by adding 2 to the current pc
        address_of_next_instruction = pc + 2
        # Push the address of next instruction on to the stack for use in the RET instruction
        registers[SP] -= 1
        ram[registers[SP]] = address_of_next_instruction

        reg_index = opa
        addr = registers[reg_index]
        pc = addr

    # decode
    elif inst == PRINT_REG:
        # execute
        # get reg index.
        reg_index = opa
        print(registers[reg_index])
        pc += 2

    elif inst == ADD:
        reg_index1 = opa
        reg_index2 = opb

        registers[reg_index1] += registers[reg_index2]
        pc += 3

    # TODO: Implement PUSH operation.
    elif inst == PUSH:
        # print("PUSH")

        # Decrement the Stack Pointer
        registers[SP] -= 1

        # Copy the value at the given register to the address in memory pointed to by the Stack Pointer.
        ram[registers[SP]] = registers[opa]

        pc += 2




    # TODO: Implement POP operation.
    elif inst == POP:

        # Copy the value at address in memory pointed to by the Stack Pointer to the given register.
        registers[opa] = ram[registers[SP]]

        # Icrement the Stack Pointer
        registers[SP] += 1

        # increment the PC.
        pc += 2

    # decode
    else:
        print("Unknown instruction")
        running = False
