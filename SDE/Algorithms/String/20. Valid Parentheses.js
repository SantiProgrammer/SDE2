/**
 * @param {string} s
 * @return {boolean}
 */

// Time Complexity Analysis:
// Brute Force: O(n^2) - Replace pairs until no more can be found
// Optimized: O(n) - Use stack to track opening brackets

const isValid = (s) => {
    // Brute Force Approach - O(n^2) Time, O(1) Space
    // Repeatedly remove valid pairs until string is empty or no pairs found
    
    // Stack Approach - O(n) Time, O(n) Space
    // Push opening brackets, pop and match with closing brackets
    
};

// Test Cases
const testCases = [
    {
        input: "()",
        expected: true,
        description: "Simple valid parentheses"
    },
    {
        input: "()[]{}",
        expected: true,
        description: "Multiple types of brackets"
    },
    {
        input: "(]",
        expected: false,
        description: "Mismatched bracket types"
    },
    {
        input: "([)]",
        expected: false,
        description: "Incorrectly nested brackets"
    },
    {
        input: "{[]}",
        expected: true,
        description: "Properly nested brackets"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = isValid(test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: "${test.input}"`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = isValid; 