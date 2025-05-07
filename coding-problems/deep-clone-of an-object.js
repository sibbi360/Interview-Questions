// Approach 1

// Using JSON methods: You can use JSON.stringify() to serialize the object into a JSON string and then JSON.parse() to parse the JSON string back into a new object. This method is simple but has limitations, such as losing function properties and handling only serializable data.

let obj = { a: 1, b: { c: 2 } };
let deepClone = JSON.parse(JSON.stringify(obj));


// Approach 2 

// Using recursion: You can write a recursive function to traverse the object and clone its properties, including nested objects and arrays.

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    let clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

let obj = { a: 1, b: { c: 2 } };
let deepClone = deepClone(obj);


// Approach 3

// Using third-party libraries: Libraries like lodash provide a _.cloneDeep() function to perform deep cloning. This method is efficient and handles edge cases well.

const _ = require('lodash');
let obj = { a: 1, b: { c: 2 } };
let deepClone = _.cloneDeep(obj);


