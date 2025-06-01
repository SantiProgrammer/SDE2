/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Time Complexity Analysis:
// Brute Force: O(n^2) - For each element, calculate product of all other elements
// Optimized: O(n) - Single pass with left and right products

const productExceptSelf = (nums) => {
    // Brute Force Approach - O(n^2) Time, O(1) Space (excluding output)
    // For each index i, multiply all elements except nums[i]
    
    // Optimized Approach - O(n) Time, O(1) Space (excluding output)
    // Use output array to store left products, then traverse right to multiply
    
};

// Test Cases
const testCases = [
    {
        input: [1, 2, 3, 4],
        expected: [24, 12, 8, 6],
        description: "Basic case with positive numbers"
    },
    {
        input: [-1, 1, 0, -3, 3],
        expected: [0, 0, 9, 0, 0],
        description: "Array with zero"
    },
    {
        input: [2, 3],
        expected: [3, 2],
        description: "Two element array"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = productExceptSelf(test.input);
    const passed = JSON.stringify(result) === JSON.stringify(test.expected);
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: ${JSON.stringify(test.input)}`);
    console.log(`Expected: ${JSON.stringify(test.expected)}`);
    console.log(`Obtained: ${JSON.stringify(result)}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = productExceptSelf; 