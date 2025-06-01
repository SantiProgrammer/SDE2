/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Complexity Analysis:
// Brute Force: O(2^n) - Try all combinations of houses to rob
// Optimized DP: O(n) - Linear dynamic programming

const rob = (nums) => {
    // Brute Force Approach - O(2^n) Time, O(n) Space
    // Recursively decide to rob or skip each house
    
    // Dynamic Programming - O(n) Time, O(1) Space
    // Track max money at current and previous house
    
};

// Test Cases
const testCases = [
    {
        input: [1, 2, 3, 1],
        expected: 4,
        description: "Basic case - rob houses 0 and 2"
    },
    {
        input: [2, 7, 9, 3, 1],
        expected: 12,
        description: "Rob houses 0, 2, and 4"
    },
    {
        input: [5],
        expected: 5,
        description: "Single house"
    },
    {
        input: [2, 1, 1, 2],
        expected: 4,
        description: "Rob first and last house"
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