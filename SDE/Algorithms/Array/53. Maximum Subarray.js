/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Complexity Analysis:
// Brute Force: O(n^3) - Check all possible subarrays
// Optimized (Kadane's): O(n) - Single pass dynamic programming

const maxSubArray = (nums) => {
    // Brute Force Approach - O(n^3) Time, O(1) Space
    // Generate all subarrays and find maximum sum
    
    // Kadane's Algorithm - O(n) Time, O(1) Space
    // Keep track of current max and global max
    
};

// Test Cases
const testCases = [
    {
        input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
        expected: 6,
        description: "Basic case with mixed positive/negative"
    },
    {
        input: [1],
        expected: 1,
        description: "Single element"
    },
    {
        input: [5, 4, -1, 7, 8],
        expected: 23,
        description: "Mostly positive numbers"
    },
    {
        input: [-1, -2, -3],
        expected: -1,
        description: "All negative numbers"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = maxSubArray(test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: ${JSON.stringify(test.input)}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = maxSubArray; 