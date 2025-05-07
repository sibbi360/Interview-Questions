// Given a signed 32-bit integer, reverse its digits.

function reverseInteger(x) {
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
}

console.log(reverseInteger(123)); // Output: 321


// Approach 2

function reverseNumber(num) {
    let numString = num.toString();
    let reversedString = numString.split('').reverse().join('');
    // Convert the reversed string back to a number
    let reversedNum = parseInt(reversedString);
    return reversedNum;
}

// Example usage
let number = 12345;
let reversedNumber = reverseNumber(number);
console.log("Original number:", number);
console.log("Reversed number:", reversedNumber);

// Approach 3

function reverseNumber(num) {
    let reversedNum = 0;
    
    while (num !== 0) {
        // Get the last digit of the number
        let digit = num % 10;
        
        // Append the digit to the reversed number
        reversedNum = (reversedNum * 10) + digit;
        
        // Remove the last digit from the number
        num = Math.floor(num / 10);
    }
    
    return reversedNum;
}

let number = 12345;
let reversedNumber = reverseNumber(number);
console.log("Reversed number:", reversedNumber);
// Output : 54321


