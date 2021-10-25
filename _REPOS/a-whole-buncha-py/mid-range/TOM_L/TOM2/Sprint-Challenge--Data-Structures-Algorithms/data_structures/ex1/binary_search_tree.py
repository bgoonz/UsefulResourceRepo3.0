class BinarySearchTree:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None

  def depth_first_for_each(self, cb):
    # invoke callback with the value of this node
    cb(self.value)

    # if the left has a valuse recursively invoke the depth first for each on left
    if self.left != None:
      self.left.depth_first_for_each(cb)
    
    # if the right has a value recursively invoke the depth first for each on right
    if self.right != None:
      self.right.depth_first_for_each(cb)  

  # some refs for the O notation https://medium.com/karuna-sehgal/a-simplified-explanation-of-the-big-o-notation-82523585e835
  def breadth_first_for_each(self, cb):
    # perform the call back on the root value
    cb(self.value)
        
    # check the level of the node [ a nested function : lets get recursive ]
    def check_level_of_node(node):
      # try to set left to the nodes left property
      try:
        left_node = node.left # O(1) operation
      except:
        # if it failes return an error or raise an exception
        return "ERROR: No Left Node" # TODO: maybe throw an exception of some sort
      else: 
        # if there was no exception on the try do a semi redundant call to make sure it is set
        left_node = node.left 
      
      # try to set right to the nodes right property
      try:
        right_node = node.right # O(1) operation
      except:
        # if it failes return an error or raise an exception
        return "ERROR: No Right Node" # TODO: maybe throw an exception of some sort
      else:
        # if there was no exception on the try do a semi redundant call to make sure it is set
        right_node = node.right 

      # set a counter variable to 0   
      counter = 0 # O(1) operation

      # if left holds a value the invoke the call back on the left value and increment the counter by 1
      if left_node is not None: 
        cb(left_node.value) # O(n)
        counter += 1 

      # if right holds a value the invoke the call back on the right value and increment the counter by 1
      if right_node is not None:
        cb(right_node.value) # O(n)
        counter += 1 

      # if the counter hits 2 then do a recursive call to check the level of the node to the left and one to the right
      if counter == 2: 
        check_level_of_node(left_node) # at this point we have 2 calls to the recirsive function so this opperation set of 2 is O(2^n)
        check_level_of_node(right_node)

      # then deal with a fallout case where left or right are none and just return to the caller    
      if left_node is None or  right_node is None:
        return
          
    # do the seed call to the nested function  
    check_level_of_node(self) # this call in itself does a recursive call to the chain but it is set at about O(3^n) due to the inner recursion of 3

    # so all in all we can postulate that the largest order is O(3^n) so we are working with an exponential order so we can simplify it to O(C^n)

  def insert(self, value):
    new_tree = BinarySearchTree(value)
    if (value < self.value):
      if not self.left:
        self.left = new_tree
      else:
        self.left.insert(value)
    elif value >= self.value:
      if not self.right:
        self.right = new_tree
      else:
        self.right.insert(value)

  def contains(self, target):
    if self.value == target:
      return True
    if self.left:
      if self.left.contains(target):
        return True
    if self.right:
      if self.right.contains(target):
        return True
    return False

  def get_max(self):
    if not self:
      return None
    max_value = self.value
    current = self
    while current:
      if current.value > max_value:
        max_value = current.value
      current = current.right
    return max_value
