import sys

if len(sys.argv) != 2:
	print("usage: comp.py programname")
	sys.exit(1)

PRINT_BEEJ = 1
HALT       = 2
PRINT_NUM  = 3
SAVE       = 4   # store a value in a register
PRINT_REG  = 5
PUSH       = 6
POP        = 7

registers = [0] * 8  # like variables

SP = 7

memory = [0] * 256

try:
	with open(sys.argv[1]) as f:
		address = 0

		for line in f:
			comment_split = line.split("#")

			num = comment_split[0].strip()

			try:
				#print(f"0b{int(num, 2):b}")
				memory[address] = int(num, 10)
				address += 1
			except ValueError:
				pass

except FileNotFoundError:
	print(f"comp.py: {sys.argv[1]} not found")
	sys.exit(2)

pc = 0 # Program Counter, current_instruction_index 

running = True 
while running:
	ir = memory[pc]  # Instruction Register, current instruction

	#print(f"TRACE: {pc}: {ir}")

	if ir == PRINT_BEEJ:
		print("Beej!")
		pc += 1

	elif ir == PRINT_NUM:
		operand = memory[pc + 1]
		print(operand)
		pc += 2

	elif ir == SAVE:
		reg_num = memory[pc + 1]
		value = memory[pc + 2]
		registers[reg_num] = value
		pc += 3

	elif ir == PRINT_REG:
		reg_num = memory[pc + 1]
		print(registers[reg_num])
		pc += 2

	elif ir == PUSH:
		reg_num = memory[pc + 1]

		# decrement SP
		registers[SP] -= 1

		# copy value from register into RAM
		val = registers[reg_num]
		top_of_stack = registers[SP]
		memory[top_of_stack] = val

		pc += 2

	elif ir == POP:
		reg_num = memory[pc + 1]

		# copy from stack to register
		top_of_stack = registers[SP]
		val = memory[top_of_stack]
		registers[reg_num] = val

		# increment SP
		registers[SP] += 1

		pc += 2

	elif ir == HALT:
		running = False

	else:
		print(f"Unknown instruction {ir} at address {pc}")
