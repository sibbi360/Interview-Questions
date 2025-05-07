function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    // Compare elements from both arrays and push the smaller one into the mergedArray
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If any elements are remaining in arr1, push them into mergedArray
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If any elements are remaining in arr2, push them into mergedArray
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]



// Another Approach

function mergeSortedArrays(arr1, arr2) {
    // Concatenate both arrays and sort the resulting array
    let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    return mergedArray;
}
