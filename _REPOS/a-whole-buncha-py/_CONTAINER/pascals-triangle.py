class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []
        
        result = [[1]]  # hardcode the first row
        
        for i in range(1, numRows):
            result.append([])  # initiate the new row
            for j in range(len(result[i-1])+1):  # iterate through the previous row
                if j == 0 or j == len(result[i-1]):
                    result[i].append(1)  # add 1's to the ends
                else:
                    # add numbers together from the previous row
                    result[i].append(result[i-1][j] + result[i-1][j-1])
        
        return result
