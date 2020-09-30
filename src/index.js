
exports.min = function min (array) {
    if(Array.isArray(array) && array.length !== 0) {
       return Math.min.apply(Array, array);
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if(Array.isArray(array) && array.length !== 0) {
        return Math.max.apply(Array, array);
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if(Array.isArray(array) && array.length !== 0) {
        const totalSum = array.reduce((sum, x) => sum + x);
        return totalSum / array.length;
    } else {
        return 0;
    }
}
