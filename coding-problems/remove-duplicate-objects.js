function removeDuplicateObjects(arr) {
    return arr.filter((obj, index) => {
        // Return true if the current object is the first occurrence in the array
        return arr.findIndex(item => JSON.stringify(item) === JSON.stringify(obj)) === index;
    });
}

// Example usage:
const arrayWithDuplicates = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John' }, // Duplicate object
    { id: 3, name: 'Alice' },
    { id: 2, name: 'Jane' }  // Duplicate object
];

const uniqueArray = removeDuplicateObjects(arrayWithDuplicates);
console.log(uniqueArray);
