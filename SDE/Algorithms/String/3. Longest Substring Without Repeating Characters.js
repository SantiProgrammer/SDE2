/**
 * @param {string} s
 * @return {number}
 */

// Time Complexity Analysis:
// Brute Force: O(n^3) - Check all substrings for uniqueness
// Optimized: O(n) - Sliding window with hash set/map

const lengthOfLongestSubstring = (s) => {
    // Brute Force Approach - O(n^3) Time, O(min(m,n)) Space
    // Generate all substrings and check each for unique characters
    
    // Sliding Window - O(n) Time, O(min(m,n)) Space
    // Use hash set to track characters in current window
    
};

// Test Cases
const testCases = [
    {
        input: "abcabcbb",
        expected: 3,
        description: "Longest substring is 'abc'"
    },
    {
        input: "bbbbb",
        expected: 1,
        description: "All characters are the same"
    },
    {
        input: "pwwkew",
        expected: 3,
        description: "Longest substring is 'wke'"
    },
    {
        input: "",
        expected: 0,
        description: "Empty string"
    },
    {
        input: "dvdf",
        expected: 3,
        description: "Longest substring is 'vdf'"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = lengthOfLongestSubstring(test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: "${test.input}"`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = lengthOfLongestSubstring; 