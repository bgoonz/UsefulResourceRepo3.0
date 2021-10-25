class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        rows = []
        
        cache = {}
        
        def get_row(n):
            
            if n <= 1:
                return [1] * (n+1)
            
            if n not in cache:
                prev_row = get_row(n-1)

                # Start with 1
                new_row = [1]

                # Fill in the middle numbers
                middle_number_count = n - 1

                for j in range(middle_number_count):
                    col_index = j + 1
                    value = prev_row[col_index] + prev_row[col_index - 1]

                    new_row.append(value)

                new_row.append(1)
                
                cache[n] = new_row
            
            return cache[n]
            
        for r in range(numRows):
            rows.append(get_row(r))
            
        return rows
        
            
