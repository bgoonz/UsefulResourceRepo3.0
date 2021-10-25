# lets talk about classes

# holds data
# methods to act upon that data

# class called Vec2
# hold x and y as integers
# constructor that can take in x and y

# class Vec2 {
#     constructor(x, y) { 
#         this.x = x;
#          this.y = y;
#     } 
# }

# v = new Vec2(12, 23);

# this keyword === self keyword

class Vec2:

    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    
v1 = Vec2(12, 45) # constructor is called