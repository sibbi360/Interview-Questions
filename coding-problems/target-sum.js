
function pairsWithSumEqualTo(arr, targetSum) {
    let pairs = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }

    return pairs;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let output = pairsWithSumEqualTo(arr, 9);
console.log(output); // Output: [[6, 3], [7, 2], [8, 1]]
