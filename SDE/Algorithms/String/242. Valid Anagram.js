/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Time Complexity Analysis:
// Brute Force: O(n log n) - Sort both strings and compare
// Optimized: O(n) - Use character frequency counting

const isAnagram = (s, t) => {
    // Brute Force Approach - O(n log n) Time, O(1) Space
    // Sort both strings and compare character by character
    
    // Hash Map Approach - O(n) Time, O(1) Space (26 letters max)
    // Count frequency of each character in both strings
    
};

// Test Cases
const testCases = [
    {
        input: ["anagram", "nagaram"],
        expected: true,
        description: "Basic valid anagram"
    },
    {
        input: ["rat", "car"],
        expected: false,
        description: "Different characters"
    },
    {
        input: ["listen", "silent"],
        expected: true,
        description: "Classic anagram example"
    },
    {
        input: ["a", "ab"],
        expected: false,
        description: "Different lengths"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = isAnagram(...test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: s = "${test.input[0]}", t = "${test.input[1]}"`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = isAnagram; 