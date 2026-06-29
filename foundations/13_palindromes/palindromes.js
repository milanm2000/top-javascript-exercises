const palindromes = function (str) {
    let cleanString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let arr = cleanString.split('');

    for(let i = 0; i < arr.length / 2; i++){
        if(arr.at(i) != arr.at(-i -1)) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
