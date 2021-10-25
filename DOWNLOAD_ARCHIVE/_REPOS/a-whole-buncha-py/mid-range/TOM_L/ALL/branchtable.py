# lets think about a branch table!!
ADD = 23
SUB = 34
PRINT_SOME_STUFF = 50


def op_add(op1, op2):
    op1 += op2
    return 2

def op_sub(op1, op2):
    op1 -= op2
    return 2

def op_print_some_stuff(op1, op2):
    print("Some Stuff...")
    return 1

bt = {
    ADD: op_add,
    SUB: op_sub,
    PRINT_SOME_STUFF: op_print_some_stuff
}

"""
ADD
0
1
"""

memory = [0] * 128
pc = 0
running = True

while running:
    ir = memory[pc]
    op1 = memory[pc + 1]
    op2 = memory[pc + 2]

    if ir in bt: # is ADD in the branch table?
        pc += bt[ir](op1, op2) # bt[ADD](op1, op2) => op_add(op1, op2)
    else:
        print("not valid")