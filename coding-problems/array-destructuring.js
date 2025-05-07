const alphabet = ['A','B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

// const a = alphabet[0] 
// const b = alphabet[1]

// console.log(a)   // 'A'
// console.log(b)  // 'B'


                            // using Array Destructuring

        // Select first two elements in an Array

const [a, b] = alphabet;

// console.log(a)   // 'A'
// console.log(b)  // 'B'

        // Select first three elements in an Array

const [a, b, c] = alphabet;

// console.log(a)   // 'A'
// console.log(b)  // 'B'
// console.log(c)   // 'C'

        // Select first and third elements in an Array

const [a, ,c] = alphabet;

// console.log(a)   // 'A'
// console.log(c)  // 'C'

        // Select first third and rest of the elements in an Array

const [a, , c, ...rest] = alphabet;

// console.log(a)   // 'A'
// console.log(c)  // 'C'
// console.log(rest)   // ['D', 'E', 'F']

 

