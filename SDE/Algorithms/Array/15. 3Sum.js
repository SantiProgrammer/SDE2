/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Time Complexity Analysis:
// Brute Force: O(n^3) - Three nested loops to check all combinations
// Optimized: O(n^2) - Sort + two pointers for each element

const threeSum = (nums) => {
    // Brute Force Approach - O(n^3) Time, O(1) Space
    // Three nested loops to find all triplets
    
    // Two Pointers - O(n^2) Time, O(1) Space
    // Sort array, fix one element, use two pointers for remaining
    
};

// Test Cases
const testCases = [
    {
        input: [-1, 0, 1, 2, -1, -4],
        expected: [[-1, -1, 2], [-1, 0, 1]],
        description: "Basic case with duplicates"
    },
    {
        input: [0, 1, 1],
        expected: [],
        description: "No valid triplet"
    },
    {
        input: [0, 0, 0],
        expected: [[0, 0, 0]],
        description: "All zeros"
    },
    {
        input: [-2, 0, 1, 1, 2],
        expected: [[-2, 0, 2], [-2, 1, 1]],
        description: "Multiple valid triplets"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = threeSum(test.input);
    const passed = JSON.stringify(result.sort()) === JSON.stringify(test.expected.sort());
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: ${JSON.stringify(test.input)}`);
    console.log(`Expected: ${JSON.stringify(test.expected)}`);
    console.log(`Obtained: ${JSON.stringify(result)}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = threeSum; 