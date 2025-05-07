// Write a function that takes a string as an argument and returns the length of the longest word in the string.

function findLongestWord(str) {
    const words = str.split(" ");
    let longestWordLength = 0;
    for (let word of words) {
        if (word.length > longestWordLength) {
            longestWordLength = word.length;
        }
    }
    return longestWordLength;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: 5
