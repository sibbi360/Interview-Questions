function longestSubstringWithoutRepeating(str) {
    let maxLength = 0;
    let charMap = {};
    let start = 0;

    for (let end = 0; end < str.length; end++) {
        const char = str[end];
        if (charMap[char] !== undefined && charMap[char] >= start) {
            // If the character is repeated within the current substring, move the start pointer to the right of the last occurrence of the character
            start = charMap[char] + 1;
        }
        // Update the most recent index of the character
        charMap[char] = end;
        // Update the maximum length of the substring without repeating characters
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage
console.log(longestSubstringWithoutRepeating("abcabcbb")); // Output: 3
console.log(longestSubstringWithoutRepeating("bbbbb"));    // Output: 1
console.log(longestSubstringWithoutRepeating("pwwkew"));   // Output: 3

// Another Approach

function longestSubstringWithoutRepeating(str) {
    let maxLength = 0;
    let charSet = new Set();
    let left = 0;
    let right = 0;

    while (right < str.length) {
        if (!charSet.has(str[right])) {
            charSet.add(str[right]);
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        } else {
            charSet.delete(str[left]);
            left++;
        }
    }

    return maxLength;
}

// Example usage
console.log(longestSubstringWithoutRepeating("abcabcbb")); // Output: 3
console.log(longestSubstringWithoutRepeating("bbbbb"));    // Output: 1
console.log(longestSubstringWithoutRepeating("pwwkew"));   // Output: 3

