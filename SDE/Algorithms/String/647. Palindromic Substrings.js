/**
 * @param {string} s
 * @return {number}
 */

// Time Complexity Analysis:
// Brute Force: O(n^3) - Check all substrings for palindrome property
// Optimized: O(n^2) - Expand around centers approach

const countSubstrings = (s) => {
    // Brute Force Approach - O(n^3) Time, O(1) Space
    // Generate all substrings and check each for palindrome
    
    // Expand Around Centers - O(n^2) Time, O(1) Space
    // For each possible center, expand outward while characters match
    
};

// Test Cases
const testCases = [
    {
        input: "abc",
        expected: 3,
        description: "Only single characters are palindromes"
    },
    {
        input: "aaa",
        expected: 6,
        description: "Multiple overlapping palindromes: a, a, a, aa, aa, aaa"
    },
    {
        input: "racecar",
        expected: 10,
        description: "String with multiple palindromes including the whole string"
    },
    {
        input: "a",
        expected: 1,
        description: "Single character"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = countSubstrings(test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: "${test.input}"`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = countSubstrings; 