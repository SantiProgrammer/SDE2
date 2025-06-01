/**
 * @param {number[]} height
 * @return {number}
 */

// Time Complexity Analysis:
// Brute Force: O(n^2) - Check all pairs of lines
// Optimized: O(n) - Two pointers from both ends

const maxArea = (height) => {
    // Brute Force Approach - O(n^2) Time, O(1) Space
    // Check area between every pair of lines
    
    // Two Pointers - O(n) Time, O(1) Space
    // Start from both ends, move pointer with smaller height
    
};

// Test Cases
const testCases = [
    {
        input: [1, 8, 6, 2, 5, 4, 8, 3, 7],
        expected: 49,
        description: "Basic case with varying heights"
    },
    {
        input: [1, 1],
        expected: 1,
        description: "Two equal heights"
    },
    {
        input: [1, 2, 1],
        expected: 2,
        description: "Three elements"
    },
    {
        input: [2, 1, 8, 9],
        expected: 16,
        description: "Optimal solution at ends"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = maxArea(test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: ${JSON.stringify(test.input)}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = maxArea; 