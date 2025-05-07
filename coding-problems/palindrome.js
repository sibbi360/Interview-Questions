// Write a function that takes a string and checks if it's a palindrome (reads the same forwards and backwards).

function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("racecar")); // Output: true
