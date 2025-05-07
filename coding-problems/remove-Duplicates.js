// Using Set
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Using Filter
function removeDuplicates(arr) {
    return arr.filter((num, index) => arr.indexOf(num) === index);
}

// Using Reduce
function removeDuplicates(arr) {
    return arr.reduce((unique, num) => unique.includes(num) ? unique : [...unique, num], []);
}

// Using forEach
function removeDuplicates(arr) {
    const uniqueArray = [];
    arr.forEach(num => {
        if (!uniqueArray.includes(num)) {
            uniqueArray.push(num);
        }
    });
    return uniqueArray;
}