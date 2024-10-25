const sumAll = function(firstInteger, secondInteger) {
    if (firstInteger < 0 || secondInteger < 0) {
        return('ERROR');
    }
    if (typeof firstInteger !== 'number' || typeof secondInteger !== 'number') {
        return('ERROR');
    }
    if (!Number.isInteger(firstInteger) || !Number.isInteger(secondInteger)) {
        return('ERROR');
    }
    let iteration = firstInteger - secondInteger;
    if (iteration>0) {
        let bigger = firstInteger;
        let smaller = secondInteger;
        let result = bigger;
        for (let index = iteration; index >0; index--) {
            result += index;
        }
        return result;

    } else if (iteration<0) {
        let bigger = secondInteger;
        let smaller = firstInteger;
        let iteration = Math.abs(firstInteger - secondInteger);
        let result = bigger;
        for (let index = iteration; index >0; index--) {
            result += index;
        }
        return result;
    } else if (iteration==0) {
        return firstInteger;
    }
};

// Do not edit below this line
module.exports = sumAll;
