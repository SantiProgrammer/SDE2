/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// Time Complexity Analysis:
// Brute Force: O(32) - Check each bit position
// Optimized: O(k) - Where k is number of set bits (Brian Kernighan's algorithm)

const hammingWeight = (n) => {
    // Brute Force Approach - O(32) Time, O(1) Space
    // Check each of the 32 bits using bit shifting
    
    // Brian Kernighan's Algorithm - O(k) Time, O(1) Space
    // Remove rightmost set bit in each iteration: n & (n-1)
    
};

// Test Cases
const testCases = [
    {
        input: 0b00000000000000000000000000001011, // 11 in binary
        expected: 3,
        description: "Number with 3 set bits"
    },
    {
        input: 0b00000000000000000000000010000000, // 128 in binary
        expected: 1,
        description: "Power of 2 (single bit set)"
    },
    {
        input: 0b11111111111111111111111111111101, // 4294967293 in binary
        expected: 31,
        description: "Number with many set bits"
    },
    {
        input: 1,
        expected: 1,
        description: "Minimum positive integer"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = hammingWeight(test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: ${test.input} (binary: ${test.input.toString(2)})`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Obtained: ${result}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = hammingWeight; 