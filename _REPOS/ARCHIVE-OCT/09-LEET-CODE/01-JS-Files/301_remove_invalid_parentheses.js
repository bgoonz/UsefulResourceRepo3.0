/*
Remove the minimum number of invalid parentheses in order to make the input string valid.
Return all possible results.
*the input string may contain letters other than the parentheses ( and ).


Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]
Example 2:

Input: "(a)())()"
Output: ["(a)()()", "(a())()"]
Example 3:

Input: ")("
Output: [""]
*/

// For a string to be valid, every left has to have a closint right, but they also have to be in the correct order.
// we could go through and 