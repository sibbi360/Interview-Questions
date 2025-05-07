// Approach 1

function reverseString(str) {
    // Split the string into an array of characters, reverse it, then join it back into a string
    return str.split("").reverse().join("");
}

// Example usage:
// const originalString = "hello";
// const reversedString = reverseString(originalString);
// console.log(reversedString); // Output: "olleh"


// Approach 2

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example usage:
// const originalString = "hello";
// const reversedString = reverseString(originalString);
// console.log(reversedString); // Output: "olleh"