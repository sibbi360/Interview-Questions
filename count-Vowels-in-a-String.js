// Write a function that takes a string and returns the number of vowels (a, e, i, o, u) in the string.

function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

console.log(countVowels("hello")); // Output: 2
