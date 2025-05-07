// Write a function that takes a nested array and flattens it into a single array.

function flattenArray(arr) {
    return arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr), []);
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]


function removeDuplicates(arr) {
    return arr.filter((obj, index) => {
        return arr.findIndex(item => JSON.stringify(item) === JSON.stringify(obj)) === index
    })
}
