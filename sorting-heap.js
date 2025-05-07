// In the heapSort function, we first build a max heap from the input array using the buildMaxHeap function. Then, we repeatedly extract the maximum element (root) from the heap, swap it with the last element, and heapify the reduced heap using the heapify function.

// The buildMaxHeap function builds a max heap from the array, starting from the last non-leaf node and heapifying each node.

// The heapify function is used to heapify a subtree rooted at index i, assuming that the subtrees rooted at left and right children of i are already heapified. It compares the root with its left and right children, swaps the root with the largest child if necessary, and recursively heapifies the affected subtree.

// The time complexity of Heap Sort is O(n log n) in all cases. Although it has the same time complexity as Quick Sort and Merge Sort, it typically performs better in practice due to its cache-friendly nature.

// Heap sorting

function heapSort(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        // Swap root (max element) with the last element
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // Heapify the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

function buildMaxHeap(arr) {
    const n = arr.length;
    // Start from the last non-leaf node and heapify all nodes
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// Example usage:
const numbers = [4, 2, 5, 1, 3];
const sortedNumbers = heapSort(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]
