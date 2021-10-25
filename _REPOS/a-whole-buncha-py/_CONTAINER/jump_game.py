class Solution:
    def canJump(self, nums: List[int]) -> bool:
        # start at the end
        goal = len(nums) - 1
        
        # search backwards
        current_index = goal - 1
        while current_index >= 0:
            # check if current_index can be our new goal
            jump_value = nums[current_index]
            if current_index + jump_value >= goal:
                # set the goal to current_index
                goal = current_index
            current_index -= 1
        
        # Check if we reached the end
        return goal == 0
        
        
                    
        
