 def populate_graph(self, num_users, avg_friendships):
        """
        Takes a number of users and an average number of friendships
        as arguments
        Creates that number of users and a randomly distributed friendships
        between those users.
        The number of users must be greater than the average number of friendships.
        """
        # Reset graph
        self.last_id = 0
        self.users = {}
        self.friendships = {}
        # !!!! IMPLEMENT ME

        # Add users

        # Create friendships
        # Generate  all possible friendship combinations.

        # think of a way to avoid duplicates.

        # shuffle the friends.

        # create a friendship between the first x pairs in the list.
        # we could determine x by using (num_users * avg_friendships // 2)
