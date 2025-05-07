// 2 . Quick sort

// In the quickSort function, we select a pivot element (in this implementation, we choose the middle element of the array). Then, we partition the array into two subarrays: one containing elements less than the pivot and another containing elements greater than or equal to the pivot. Finally, we recursively apply the quick sort algorithm to both subarrays and concatenate the sorted subarrays along with the pivot element.

// The time complexity of the Quick Sort algorithm is O(n log n) on average and O(n^2) in the worst case, where n is the number of elements in the array. However, Quick Sort is efficient and widely used in practice due to its good average-case performance and low space complexity.

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)]; // Choose a pivot
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
            continue; // Skip the pivot element
        }
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]; // Recursively sort left and right subarrays
}

// Example usage:
// const numbers = [4, 2, 5, 1, 3];
// const sortedNumbers = quickSort(numbers);
// console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]