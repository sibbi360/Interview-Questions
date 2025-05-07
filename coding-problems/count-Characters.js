function countCharacters(str) {
    const charCount = {};
    
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    return charCount;
}

const str = "hello world";
const charOccurrences = countCharacters(str);

for (let char in charOccurrences) {
    console.log(`${char}: ${charOccurrences[char]}`);
}