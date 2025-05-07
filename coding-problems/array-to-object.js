// Given array is [2,3,5] convert into {0:2,1:3,2:5} : without using loop.

const arr = [2, 3, 5];
const result = arr.reduce((acc, value, index) => {
    acc[index] = value;
    return acc;
}, {});

console.log(result);


// Another Approach

const arr = [2, 3, 5];
const result = {};

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}

console.log(result);
