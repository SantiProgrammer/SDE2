/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (nums, complexity) => {

    switch (complexity) {
        case 1:
            /* Complexity: O(n log n ) */
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] === nums[i - 1]) {
                    return true;
                }
            }

            return false;

        case 2:
            /* Complexity: O(n) */
            const visto = new Set();

            for (let num of nums) {
                if (visto.has(num)) {
                    return true // ya lo habiamos visto
                }
                visto.add(num) // lo guardamos
            }
            return false;

        default:
            throw new Error("Invalid complexity level. Use 1 or 2.");
    }
};


/* Test Cases */

console.log('Test Case 1 - O(n log n): ', containsDuplicate([1,2,3,1], 1 ))
console.log('Test Case 2 - O(n log n): ', containsDuplicate([1,2,3,4], 1))
console.log('Test Case 3 - O(n log n): ', containsDuplicate([1,1,1,3,3,4,3,2,4,2], 1))

console.log('Test Case 1 - O(n): ', containsDuplicate([1,2,3,1], 2))
console.log('Test Case 2 - O(n): ', containsDuplicate([1,2,3,4], 2))
console.log('Test Case 3 - O(n): ', containsDuplicate([1,1,1,3,3,4,3,2,4,2], 2))


