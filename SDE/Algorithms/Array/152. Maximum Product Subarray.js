/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Complexity Analysis:
// Brute Force: O(n^2) - Check all possible subarrays
// Optimized: O(n) - Track min and max products at each position

const maxProduct = (nums) => {
    // Brute Force Approach - O(n^2) Time, O(1) Space
    // Generate all subarrays and find maximum product
    
    // Dynamic Programming - O(n) Time, O(1) Space
    // Track both min and max (due to negative numbers)
    
};

// Test Cases
const testCases = [
    {
        input: [2, 3, -2, 4],
        expected: 6,
        description: "Basic case with negative number"
    },
    {
        input: [-2, 0, -1],
        expected: 0,
        description: "Array with zero"
    },
    {
        input: [-2, 3, -4],
        expected: 24,
        description: "All elements form max product"
    },
    {
        input: [1, 2, 3, 4],
        expected: 24,
        description: "All positive numbers"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = maxProduct(test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: ${JSON.stringify(test.input)}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = maxProduct; 