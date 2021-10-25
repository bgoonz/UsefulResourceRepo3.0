class Book:
    """Simple Book class"""

    title = "title"
    author = "last, first"
    genre = "fiction"

    def __init__(self, title, author, genre):
        self.title = title
        self.author = author
        self.genre = genre

    def __str__(self):
        return str(self.genre) + ": " + str(self.title) + " by " + str(self.author)

    def __repr__(self):
        return str(self.genre) + ": " + str(self.title) + " by " + str(self.author)
