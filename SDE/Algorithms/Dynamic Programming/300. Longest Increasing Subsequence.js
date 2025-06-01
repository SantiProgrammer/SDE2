/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Complexity Analysis:
// Brute Force: O(2^n) - Generate all subsequences and check
// DP Approach: O(n^2) - Dynamic programming with nested loops
// Optimized: O(n log n) - Binary search + patience sorting

const lengthOfLIS = (nums) => {
    // Brute Force Approach - O(2^n) Time, O(n) Space
    // Generate all possible subsequences and find longest increasing
    
    // Dynamic Programming - O(n^2) Time, O(n) Space
    // dp[i] = length of LIS ending at index i
    
    // Binary Search - O(n log n) Time, O(n) Space
    // Maintain array of smallest tail for each length
    
};

// Test Cases
const testCases = [
    {
        input: [10, 9, 2, 5, 3, 7, 101, 18],
        expected: 4,
        description: "Basic case - LIS: [2,3,7,18]"
    },
    {
        input: [0, 1, 0, 3, 2, 3],
        expected: 4,
        description: "Multiple valid LIS"
    },
    {
        input: [7, 7, 7, 7, 7, 7, 7],
        expected: 1,
        description: "All equal elements"
    },
    {
        input: [1, 3, 6, 7, 9, 4, 10, 5, 6],
        expected: 6,
        description: "Longer sequence"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = lengthOfLIS(test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: ${JSON.stringify(test.input)}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = lengthOfLIS; 