/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Complexity Analysis:
// Brute Force: O(n) - Linear search for minimum
// Optimized: O(log n) - Binary search for pivot point

const findMin = (nums) => {
    // Brute Force Approach - O(n) Time, O(1) Space
    // Scan array linearly to find minimum
    
    // Binary Search - O(log n) Time, O(1) Space
    // Search for the point where rotation occurs
    
};

// Test Cases
const testCases = [
    {
        input: [3, 4, 5, 1, 2],
        expected: 1,
        description: "Basic rotated array"
    },
    {
        input: [4, 5, 6, 7, 0, 1, 2],
        expected: 0,
        description: "Larger rotated array"
    },
    {
        input: [11, 13, 15, 17],
        expected: 11,
        description: "No rotation"
    },
    {
        input: [2, 1],
        expected: 1,
        description: "Two element array"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = findMin(test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: ${JSON.stringify(test.input)}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = findMin; 