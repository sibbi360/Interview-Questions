function transformString(input) {
    // Split the input string into an array of words
    const words = input.split(' ');

    // Capitalize the first letter of each word except for the first one
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    // Join the modified words into a single string
    const output = words.join('');

    return output;
}

// Example usage
const input = "hi hello world";
console.log(transformString(input)); // Output : hiHelloWorld