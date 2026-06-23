const sumAll = function(a, b) {
    if(typeof(a) != "number" || typeof(b) != "number") return "ERROR";
    if( a < 0 || b < 0) return "ERROR";
    if(!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    let min = a < b ? a : b;
    let max = a > b ? a : b;

    let sum = 0;
    for(let i = min; i <= max; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
