# Copyright (c) 2010 Doug Hellmann.  All rights reserved.
#


class MyObj:

    def __init__(self, num_loops):
        self.count = num_loops

    def go(self):
        for i in range(self.count):
            print(i)
        return

if __name__ == '__main__':
    MyObj(5).go()
