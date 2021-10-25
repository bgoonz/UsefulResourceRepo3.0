ram = [0] * 256
ram[0] = 10 # BOB
ram[1] = 10 # BOB
ram[2] = 0b10000010
ram[3] = 0b00000000
ram[4] = 124
ram[5] = 23 #pc DAVE
ram[6] = 0 # pc + 1  DAVES Argument
ram[7] = 56 # pc + 2 HLT
reg = [0] * 8
reg[0] = 678
pc = 0
cmd = 0

# opcodes
BOB = 0b00001010
DAVE = 23
HLT = 56
LDI = 0b10000010
ADD = 0b10100000
JMP = 0b01010100


00000010 >> 6

def alu(op, arg1, arg2):
    if op == "ADD":
        reg[arg1] += reg[arg2]

running = True
while running:
    # fetch

    cmd = ram[pc]
    argument1 = ram[pc + 1]
    argument2 = ram[pc + 2]

    cmd >> 6

    # decode
    if cmd == BOB:
        # execute
        print("I am a fish!")
        pc += 1
    # decode
    elif cmd == DAVE:
        # execute
        print(f"Seven! {reg[argument1]}")
        pc += 2

    elif cmd == LDI:
        reg[argument1] = argument2
        pc += 3

    elif cmd == ADD:
        alu("ADD", argument1, argument2)
        pc += 3

    elif cmd == HLT:
        running = False

    else:
        print("wat you talkin about?!?!?!?!?")
        running = False

