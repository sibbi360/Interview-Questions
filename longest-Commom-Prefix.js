// Input = ['flower', 'flight', 'flow']
// Output = 'fl'

function longestCommomPrefix(strs) {
    let common = "";
    for(let i = 0; i < strs[0].length; i++) {
        if(strs.every((str) => str[i] === strs[0][i])) {
            common = common + strs[0][i];
        } else {
            break;
        }
    }
    return common;
}

