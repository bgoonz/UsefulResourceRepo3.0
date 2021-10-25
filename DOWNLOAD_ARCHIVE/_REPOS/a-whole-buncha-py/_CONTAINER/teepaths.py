def tree_paths(t):
  # create empty stack
  # create an empty output list
  # push the [t] on to the stack
  # create a visited set

  # while there is still stuff on the stack...
    # pop the path off the top of the stack...
    # get the current node from the end of the path..

    # if current node is not in visited...
      # check if it is a leaf node
        # append the path to the output, formatting it as required
      
      # add the current node to visited

      # if the current right exists...
        # create a copy of the path..
        # append the current right to the new path.
        # push the new path on to the stack.
      # if the current left exists...
        # create a copy of the path
        # append current left to new path.
        # push new path on to the stack
  # return output to the caller