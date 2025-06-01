/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Time Complexity Analysis:
// Brute Force: O(n^2 * m) - Compare each string with every other string
// Optimized: O(n * m log m) - Sort each string and group by sorted key

const groupAnagrams = (strs) => {
    // Brute Force Approach - O(n^2 * m) Time, O(n * m) Space
    // For each string, check all others to find anagrams
    
    // Hash Map Approach - O(n * m log m) Time, O(n * m) Space
    // Sort each string as key, group strings with same sorted key
    
};

// Test Cases
const testCases = [
    {
        input: ["eat", "tea", "tan", "ate", "nat", "bat"],
        expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
        description: "Basic anagram grouping"
    },
    {
        input: [""],
        expected: [[""]],
        description: "Empty string"
    },
    {
        input: ["a"],
        expected: [["a"]],
        description: "Single character"
    },
    {
        input: ["abc", "bca", "cab", "xyz"],
        expected: [["abc", "bca", "cab"], ["xyz"]],
        description: "Multiple groups"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = groupAnagrams(test.input);
    // Sort both arrays for comparison since order may vary
    const sortedResult = result.map(group => group.sort()).sort();
    const sortedExpected = test.expected.map(group => group.sort()).sort();
    const passed = JSON.stringify(sortedResult) === JSON.stringify(sortedExpected);
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: ${JSON.stringify(test.input)}`);
    console.log(`Expected: ${JSON.stringify(test.expected)}`);
    console.log(`Obtained: ${JSON.stringify(result)}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = groupAnagrams; 