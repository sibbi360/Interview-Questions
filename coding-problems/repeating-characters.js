// WAF to print the strings which has repeating characters

function hasRepeatingCharacters(strs) {
    let unique = {};
    for(let char of strs) {
        if(unique[char]) {
            return true;
        } else {
            unique[char] = true;
        }
    }
    return false;
}

let strs = ["aman", "asdfg", "shubham"];
const repeatingNames = strs.filter(hasRepeatingCharacters);
console.log(repeatingNames);

// Output : ["aman", "shubham"]
