# # lets talk about bitshifting
# # Example of shifting LDI right by 6 bits:
# #
# # 10000010
# # 01000001
# # 00100000
# # 00010000
# # 00001000
# # 00000100
# # 00000010

# #  00000010
# #
# # The result is 0b10 or 2, the number of operands for LDI.
# """
# AABCDDDD
# 10000010 => 130
# 11000000 &
# ----------
# 10000000 = > 128

# 10000000 >> 6

# 00000010 => 2 => number of operands

# inc_pc? = 1 + number of operands


# """
# 128 + 2 = 130
# LDI = 0b10000010
# ADD = 0b00000000
# # 000000AA
# operand_size = LDI >> 6
# operand_size == 0b00000010 # => 2
# add_to_pc = operand_size + 1


# 10100000 >> 6 => 00000010 => 2
# operand_size = ADD >> 6
# add_to_pc = operand_size + 1

# memory = [
#     LDI, 
#     12,
#     2,
#     PRINT_VLAD <==== PC
# ]

# # FETCH
# ir = 0b10000010

# # DECODE
# add_to_pc = (ir >> 6) + 1

# if IR == LDI:
#     # do the ldi thing
#     pass
# elif IR == ADD:
#     # do the add thing
#     pass

# cpu.pc += add_to_pc