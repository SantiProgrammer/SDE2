/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// Time Complexity Analysis:
// Brute Force: O(32) - Process each bit individually
// Optimized: O(32) - Same complexity but more efficient bit manipulation

const reverseBits = (n) => {
    // Brute Force Approach - O(32) Time, O(1) Space
    // Extract each bit and build result bit by bit
    
    // Bit Manipulation - O(32) Time, O(1) Space
    // Use bit shifting and masking for efficient reversal
    
};

// Test Cases
const testCases = [
    {
        input: 0b00000010100101000001111010011100,
        expected: 0b00111001011110000010100101000000,
        description: "Basic bit reversal"
    },
    {
        input: 0b11111111111111111111111111111101,
        expected: 0b10111111111111111111111111111111,
        description: "Almost all bits set"
    },
    {
        input: 1,
        expected: 0b10000000000000000000000000000000,
        description: "Single bit set at position 0"
    },
    {
        input: 0,
        expected: 0,
        description: "All bits zero"
    }
];

// Run test cases
testCases.forEach((test, index) => {
    const result = reverseBits(test.input);
    const passed = result === test.expected;
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: ${test.input} (binary: ${test.input.toString(2).padStart(32, '0')})`);
    console.log(`Expected: ${test.expected} (binary: ${test.expected.toString(2).padStart(32, '0')})`);
    console.log(`Obtained: ${result} (binary: ${result.toString(2).padStart(32, '0')})`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});

module.exports = reverseBits; 