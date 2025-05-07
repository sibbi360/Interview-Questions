// Types of sorting

// In the bubbleSort function, we iterate through the array multiple times. In each iteration, we compare adjacent elements and swap them if they are in the wrong order. This process repeats until the entire array is sorted. The time complexity of the bubble sort algorithm is O(n^2), where n is the number of elements in the array.

// Keep in mind that bubble sort is not the most efficient sorting algorithm, especially for large arrays, but it's simple to understand and implement. Other sorting algorithms like merge sort, quick sort, or heap sort are more efficient for larger datasets.

// Bubble sort;

function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
// const numbers = [4, 2, 5, 1, 3];
// const sortedNumbers = bubbleSort(numbers);
// console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]



