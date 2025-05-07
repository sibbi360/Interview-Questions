// Rotate Array to the Right:

function rotateRight(arr, positions) {
    const rotatedArray = arr.slice(); // Create a copy of the original array
    for (let i = 0; i < positions; i++) {
        const lastElement = rotatedArray.pop(); // Remove the last element and store it
        rotatedArray.unshift(lastElement); // Add the last element to the beginning of the array
    }
    return rotatedArray;
}

// Example usage:
// const myArray = [1, 2, 3, 4, 5];
// const rotatedArrayRight = rotateRight(myArray, 2);
// console.log(rotatedArrayRight); 
// Output: [4, 5, 1, 2, 3]





// Rotate Array to the Left:

function rotateLeft(arr, positions) {
    const rotatedArray = arr.slice(); // Create a copy of the original array
    for (let i = 0; i < positions; i++) {
        const firstElement = rotatedArray.shift(); // Remove the first element and store it
        rotatedArray.push(firstElement); // Add the first element to the end of the array
    }
    return rotatedArray;
}

// Example usage:
// const myArray = [1, 2, 3, 4, 5];
// const rotatedArrayLeft = rotateLeft(myArray, 2);
// console.log(rotatedArrayLeft); 
// Output: [3, 4, 5, 1, 2]


// using while and for loop

function rotateArray(arr, k) {
    const n = arr.length;
    
    // Normalize k to be within the range of array length
    k = k % n;
    
    let count = 0; // Initialize count of elements shifted
    
    while (count < k) {
      const temp = arr[n - 1]; // Store the last element
      
      // Shift each element one position to the right
      for (let i = n - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
      }
      
      arr[0] = temp; // Move the last element to the beginning
      
      count++; // Increment the count of elements shifted
    }
    
    return arr;
  }
  
  // Example usage:
//   const arr = [1, 2, 3, 4, 5];
//   const k = 2;
//   console.log("Original array:", arr); // Output: [1, 2, 3, 4, 5]
//   console.log("Rotated array:", rotateArray(arr, k)); // Output: [4, 5, 1, 2, 3]
  