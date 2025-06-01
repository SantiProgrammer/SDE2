/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Time Complexity Analysis:
// Brute Force: O(2^n) - Try all possible jumps from each position
// Greedy Approach: O(n) - Track furthest reachable position

const canJump = (nums) => {
    // Brute Force Approach - O(2^n) Time, O(n) Space
    // Recursively try all possible jump lengths from each position
    
    // Greedy Approach - O(n) Time, O(1) Space
    // Keep track of the furthest position we can reach
    
};

// Test Cases
const testCases = [
    {
        input: [2, 3, 1, 1, 4],
        expected: true,
        description: "Can reach last index through multiple paths"
    },
    {
        input: [3, 2, 1, 0, 4],
        expected: false,
        description: "Stuck at index 3 (value 0)"
    },
    {
        input: [0],
        expected: true,
        description: "Single element (already at target)"
    },
    {
        input: [1, 0, 1, 0],
        expected: false,
        description: "Cannot jump over zeros"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = canJump(test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: ${JSON.stringify(test.input)}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = canJump; 