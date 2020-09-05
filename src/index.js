
exports.min = function min (array) {
    if (!array || array.length === 0) return 0;
    let minNumber = array[0]
    for(let i = 0; i < array.length; i++){
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }
    return minNumber;
}

exports.max = function max (array) {
    if (!array || array.length === 0) return 0;
    let maxNumber = array[0]
    for(let i = 0; i < array.length; i++){
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    return maxNumber;
}

exports.avg = function avg (array) {
    if (!array || array.length === 0) return 0;
    let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / array.length;
}
