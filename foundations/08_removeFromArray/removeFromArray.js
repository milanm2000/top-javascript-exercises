const removeFromArray = function(arr, ...numbers) {
    for(const n of numbers){
        let ind = arr.indexOf(n);
        while(ind != -1){
            arr.splice(ind, 1);
            ind = arr.indexOf(n);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
