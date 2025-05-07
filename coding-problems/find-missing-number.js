// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

function findMissingNumber(nums) {
    const n = nums.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([3, 0, 1, 4, 6, 2])); // Output: 5
