/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// Time Complexity Analysis:
// Brute Force: O(b) - Use loops to simulate addition
// Optimized: O(log(max(a,b))) - Bit manipulation with carry

const getSum = (a, b) => {
    // Brute Force Approach - O(b) Time, O(1) Space
    // Use increment/decrement operations
    
    // Bit Manipulation - O(log(max(a,b))) Time, O(1) Space
    // Use XOR for sum without carry, AND with shift for carry
    
};

// Test Cases
const testCases = [
    {
        input: [1, 2],
        expected: 3,
        description: "Basic positive numbers"
    },
    {
        input: [2, 3],
        expected: 5,
        description: "Another positive case"
    },
    {
        input: [-1, 1],
        expected: 0,
        description: "Positive and negative cancel out"
    },
    {
        input: [0, 0],
        expected: 0,
        description: "Both zeros"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = getSum(...test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: a = ${test.input[0]}, b = ${test.input[1]}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = getSum; 