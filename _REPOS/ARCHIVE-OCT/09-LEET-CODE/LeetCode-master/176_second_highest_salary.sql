-- Write a SQL query to get the second highest salary from the Employee table.\

-- +----+--------+
-- | ID | Salary |
-- +----+--------+
-- | 1  | 100    |
-- | 2  | 200    |
-- | 3  | 300    |
-- +----+--------+


-- This is not accepted as an answer on LeetCode because it’s possible the second entry is null/doesn’t exist
SELECT DISTINCT Salary AS SecondHighestSalary
FROM Employee
ORDER BY Salary DESC
LIMIT 1 OFFSET 1;

-- in order to cover the null case, you have to take this as temp table
SELECT (
  SELECT DISTINCT Salary
  FROM Employee
  ORDER BY Salary DESC
  LIMIT 1 OFFSET 1) AS SecondHighestSalary;