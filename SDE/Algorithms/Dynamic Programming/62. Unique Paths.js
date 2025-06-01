/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// Time Complexity Analysis:
// Brute Force: O(2^(m+n)) - Recursive exploration of all paths
// Optimized DP: O(m*n) - Dynamic programming with 2D table
// Space Optimized: O(min(m,n)) - Use 1D array instead of 2D

const uniquePaths = (m, n) => {
    // Brute Force Approach - O(2^(m+n)) Time, O(m+n) Space
    // Recursively explore all possible right and down moves
    
    // Dynamic Programming - O(m*n) Time, O(m*n) Space
    // dp[i][j] = number of ways to reach cell (i,j)
    
    // Space Optimized - O(m*n) Time, O(min(m,n)) Space
    // Use 1D array since we only need previous row
    
};

// Test Cases
const testCases = [
    {
        input: [3, 7],
        expected: 28,
        description: "Basic 3x7 grid"
    },
    {
        input: [3, 2],
        expected: 3,
        description: "Small 3x2 grid"
    },
    {
        input: [1, 1],
        expected: 1,
        description: "Single cell (edge case)"
    },
    {
        input: [3, 3],
        expected: 6,
        description: "Square 3x3 grid"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = uniquePaths(...test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: m = ${test.input[0]}, n = ${test.input[1]}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = uniquePaths; 