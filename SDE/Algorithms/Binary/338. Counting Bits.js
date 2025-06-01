/**
 * @param {number} n
 * @return {number[]}
 */

// Time Complexity Analysis:
// Brute Force: O(n * log n) - Count bits for each number 0 to n
// Optimized: O(n) - Dynamic programming using bit manipulation patterns

const countBits = (n) => {
    // Brute Force Approach - O(n * log n) Time, O(1) Space (excluding output)
    // For each number, count set bits individually
    
    // Dynamic Programming - O(n) Time, O(1) Space (excluding output)
    // Use pattern: dp[i] = dp[i >> 1] + (i & 1)
    
};

// Test Cases
const testCases = [
    {
        input: 2,
        expected: [0, 1, 1],
        description: "Small case n=2"
    },
    {
        input: 5,
        expected: [0, 1, 1, 2, 1, 2],
        description: "Basic case n=5"
    },
    {
        input: 0,
        expected: [0],
        description: "Edge case n=0"
    },
    {
        input: 8,
        expected: [0, 1, 1, 2, 1, 2, 2, 3, 1],
        description: "Power of 2 case"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = countBits(test.input);
    const passed = JSON.stringify(result) === JSON.stringify(test.expected);
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: ${test.input}`);
    console.log(`Expected: ${JSON.stringify(test.expected)}`);
    console.log(`Obtained: ${JSON.stringify(result)}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = countBits; 