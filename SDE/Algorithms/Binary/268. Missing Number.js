/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Complexity Analysis:
// Brute Force: O(n^2) - Check each number from 0 to n in array
// Optimized: O(n) - Use sum formula, sorting, or XOR

const missingNumber = (nums) => {
    // Brute Force Approach - O(n^2) Time, O(1) Space
    // For each number 0 to n, check if it exists in array
    
    // Mathematical Approach - O(n) Time, O(1) Space
    // Expected sum - actual sum = missing number
    // Or XOR all numbers with indices
    
    const n = nums.length;
    const expectedSum = n * (n + 1) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
};

// Test Cases
const testCases = [
    {
        input: [3, 0, 1],
        expected: 2,
        description: "Basic case missing middle number"
    },
    {
        input: [0, 1],
        expected: 2,
        description: "Missing last number"
    },
    {
        input: [9, 6, 4, 2, 3, 5, 7, 0, 1],
        expected: 8,
        description: "Larger array missing number"
    },
    {
        input: [0],
        expected: 1,
        description: "Single element array"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = missingNumber(test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: ${JSON.stringify(test.input)}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = missingNumber; 