// 3. Merge Sort

// In the mergeSort function, we recursively divide the array into two halves until each subarray has only one element. Then, we merge the sorted subarrays using the merge function.

// The merge function takes two sorted arrays left and right and merges them into a single sorted array. It iterates through both arrays and compares elements, pushing the smaller element into the result array. Finally, it concatenates any remaining elements from either array.

// The time complexity of the Merge Sort algorithm is O(n log n), where n is the number of elements in the array. It is a stable sorting algorithm and has consistent performance regardless of the input data.

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// // Example usage:
// const numbers = [4, 2, 5, 1, 3];
// const sortedNumbers = mergeSort(numbers);
// console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]
