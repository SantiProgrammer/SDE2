/**
 * @param {string} s
 * @return {number}
 */

// Time Complexity Analysis:
// Brute Force: O(2^n) - Try all possible ways to decode the string
// Optimized DP: O(n) - Dynamic programming with memoization

const numDecodings = (s) => {
    // Brute Force Approach - O(2^n) Time, O(n) Space
    // Recursively try single digit and two digit combinations
    
    // Dynamic Programming - O(n) Time, O(1) Space
    // dp[i] represents number of ways to decode s[0...i-1]
    
};

// Test Cases
const testCases = [
    {
        input: "12",
        expected: 2,
        description: "Basic case - can be decoded as '1,2' or '12'"
    },
    {
        input: "226",
        expected: 3,
        description: "Multiple ways: '2,2,6', '22,6', '2,26'"
    },
    {
        input: "06",
        expected: 0,
        description: "Invalid - starts with zero"
    },
    {
        input: "11106",
        expected: 2,
        description: "Complex case with zeros"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = numDecodings(test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: "${test.input}"`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = numDecodings; 