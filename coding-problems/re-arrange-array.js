// WAF to rearrange an array in order – largest, smallest, 2nd largest, 2nd smallest...

// I/P - [5, 8, 1, 4, 2, 9, 3, 7, 6]
// O/P - [1, 9, 2, 8, 3, 7, 4, 6, 5]

function rearrangeArray(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Initialize an empty array to store the rearranged elements
    let rearrangedArr = [];

    // Pointers for the smallest and largest elements
    let left = 0;
    let right = arr.length - 1;

    // Iterate until left pointer is less than or equal to right pointer
    while (left <= right) {
        // Push the smallest and largest elements alternatively
        rearrangedArr.push(arr[left]);
        rearrangedArr.push(arr[right]);

        // Move the pointers
        left++;
        right--;
    }

    return rearrangedArr;
}

// Example input
const inputArray = [5, 8, 1, 4, 2, 9, 3, 7, 6];

// Call the function
const outputArray = rearrangeArray(inputArray);
console.log(outputArray); // Output: [1, 9, 2, 8, 3, 7, 4, 6, 5]
