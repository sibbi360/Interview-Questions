// Write a function that takes two strings and checks if they are anagrams of each other.

function isAnagram(str1, str2) {
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

console.log(isAnagram('listen', 'silent')); // Output: true
