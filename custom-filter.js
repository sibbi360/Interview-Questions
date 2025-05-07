// write a custom filter to filter odd elements in an Array

Array.prototype.customFilter = function (callBack) {
    const arr = this;
    let filterOddNumber = [];

    for(let i = 0; i < arr.length; i++) {
        if(callBack(arr[i])) {
            filterOddNumber.push(arr[i])
        }
    }
    return filterOddNumber;
}

function isOdd(number) {
    return number % 2 !== 0;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const oddNumbers = customFilter(arr, isOdd);
// console.log(oddNumbers);

//

// const r = arr.filter(isOdd)

const custom = arr.customFilter(isOdd)
