/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// Time Complexity Analysis:
// Brute Force: O(2^n) - Try all possible ways to break the string
// Optimized DP: O(n^2 * m) - Where n is string length, m is average word length

const wordBreak = (s, wordDict) => {
    // Brute Force Approach - O(2^n) Time, O(n) Space
    // Recursively try all possible word combinations
    
    // Dynamic Programming - O(n^2 * m) Time, O(n) Space
    // dp[i] = true if s[0...i-1] can be segmented
    
};

// Test Cases
const testCases = [
    {
        input: ["leetcode", ["leet", "code"]],
        expected: true,
        description: "Basic valid word break"
    },
    {
        input: ["applepenapple", ["apple", "pen"]],
        expected: true,
        description: "Reuse words from dictionary"
    },
    {
        input: ["catsandog", ["cats", "dog", "sand", "and", "cat"]],
        expected: false,
        description: "Cannot be segmented"
    },
    {
        input: ["cars", ["car", "ca", "rs"]],
        expected: true,
        description: "Multiple ways to segment"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = wordBreak(...test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: s = "${test.input[0]}", wordDict = ${JSON.stringify(test.input[1])}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = wordBreak; 