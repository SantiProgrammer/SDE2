/**
 * @param {number[]} nums - Lista de números enteros
 * @param {number} target - Objetivo (la suma que buscamos)
 * @return {number[]} - Índices de los dos números que suman el objetivo
 */


const complexity = {
    1: 'O(n^2)' , // Quadratic Time
    2: 'O(n)' // Linear Time

}


/* Complexity: Cuadratic Time O(n^2) */
const twoSum = (nums, target, complexity = 2) => {

    switch (complexity) {
        case 1:

            for (let i = 0; i < nums.length; i++) {
                for (let j = i + 1; j < nums.length; j++) {
                    if (nums[ i ] + nums[ j ] === target) {
                        return [ i, j ]
                    }
                }

            }
            break;
        case 2:
            const map = new Map()

            for (let i = 0; i < nums.length; i++) {
                const complement = target - nums[ i ]
                if (map.has(complement)) {
                    return [ map.get(complement), i ]
                }
            }

            // fist loop to iterate over the array
            for (let i = 0; i < nums.length; i++) {
                map.set(nums[i], i);
            }

            // second loop to iterate over the array
            for (let i = 0; i < nums.length; i++) {
                const complement = target - nums[i];
                if (map.has(complement) && map.get(complement) !== i) {
                    return [i, map.get(complement)];
                }
            }
           


    }


}

/* Test Cases */

const testCases = [
    {
        input: [[2, 7, 11, 15], 9],
        expected: [0, 1],
        description: "Basic case with two numbers"
    },
    {
        input: [[3, 2, 4], 6],
        expected: [1, 2],
        description: "Numbers not at start"
    },
    {
        input: [[3, 3], 6],
        expected: [0, 1],
        description: "Same numbers"
    }
];

testCases.forEach((test, index) => {
    const result = twoSum(...test.input);
    const passed = JSON.stringify(result) === JSON.stringify(test.expected);
    console.log(`\nTest Case ${index + 1}: ${test.description}`);
    console.log(`Input: nums = ${JSON.stringify(test.input[0])}, target = ${test.input[1]}`);
    console.log(`Expected: ${JSON.stringify(test.expected)}`);
    console.log(`Obtained: ${JSON.stringify(result)}`);
    console.log(`Passed: ${passed ? '✅ True' : '❌ False'}`);
});
