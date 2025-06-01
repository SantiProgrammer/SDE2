/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Complexity Analysis:
// Brute Force: O(2^n) - Try all combinations considering circular constraint
// Optimized DP: O(n) - Two linear DP passes (include first vs exclude first)

const rob = (nums) => {
    // Brute Force Approach - O(2^n) Time, O(n) Space
    // Recursively explore all valid combinations in circular array
    
    // Dynamic Programming - O(n) Time, O(1) Space
    // Run DP twice: [0...n-2] and [1...n-1], take maximum
    
};

// Test Cases
const testCases = [
    {
        input: [2, 3, 2],
        expected: 3,
        description: "Basic circular case - can't rob both ends"
    },
    {
        input: [1, 2, 3, 1],
        expected: 4,
        description: "Rob houses 0 and 2 (or 1 and 3)"
    },
    {
        input: [1, 2, 3],
        expected: 3,
        description: "Three houses in circle"
    },
    {
        input: [5],
        expected: 5,
        description: "Single house (edge case)"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = rob(test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: ${JSON.stringify(test.input)}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = rob; 