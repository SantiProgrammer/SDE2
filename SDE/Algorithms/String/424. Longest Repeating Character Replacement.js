/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// Time Complexity Analysis:
// Brute Force: O(n^2) - Check all possible substrings
// Optimized: O(n) - Sliding window with character frequency tracking

const characterReplacement = (s, k) => {
    // Brute Force Approach - O(n^2) Time, O(1) Space
    // Check every possible substring and count replacements needed
    
    // Sliding Window - O(n) Time, O(1) Space (26 letters max)
    // Expand window while replacements <= k, contract when > k
    
};

// Test Cases
const testCases = [
    {
        input: ["ABAB", 2],
        expected: 4,
        description: "Can replace all characters to make 'AAAA' or 'BBBB'"
    },
    {
        input: ["AABABBA", 1],
        expected: 4,
        description: "Replace one B to get 'AAAA' (indices 0-3)"
    },
    {
        input: ["ABCDE", 1],
        expected: 2,
        description: "Any two adjacent characters with one replacement"
    },
    {
        input: ["AAAA", 0],
        expected: 4,
        description: "All same characters, no replacements needed"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = characterReplacement(...test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: s = "${test.input[0]}", k = ${test.input[1]}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = characterReplacement; 