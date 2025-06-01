/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// Time Complexity Analysis:
// Brute Force: O(|s|^2 * |t|) - Check all substrings of s
// Optimized: O(|s| + |t|) - Sliding window with character frequency

const minWindow = (s, t) => {
    // Brute Force Approach - O(|s|^2 * |t|) Time, O(|t|) Space
    // Generate all substrings of s and check if each contains all chars of t
    
    // Sliding Window - O(|s| + |t|) Time, O(|s| + |t|) Space
    // Expand window until all chars found, then contract to minimize
    
};

// Test Cases
const testCases = [
    {
        input: ["ADOBECODEBANC", "ABC"],
        expected: "BANC",
        description: "Basic minimum window substring"
    },
    {
        input: ["a", "a"],
        expected: "a",
        description: "Single character match"
    },
    {
        input: ["a", "aa"],
        expected: "",
        description: "Impossible - not enough characters"
    },
    {
        input: ["ab", "b"],
        expected: "b",
        description: "Target is single character at end"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = minWindow(...test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: s = "${test.input[0]}", t = "${test.input[1]}"`);
    console.log(`Expected: "${test.expected}"`);
    console.log(`Obtained: "${result}"`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = minWindow; 