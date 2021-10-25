
"""Main."""

import sys
from cpu import CPU

# if len(sys.argv) != 2:
#     print(f"usage: {sys.argv[0]} filename", file=sys.stderr)
#     sys.exit(1)

cpu = CPU()

cpu.load(sys.argv[1])
cpu.run()