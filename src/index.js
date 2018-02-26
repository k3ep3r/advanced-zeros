module.exports = function getZerosCount(number, base) {
    var tempNumber = {},
        tempBase = {},
        result = [];

    searching(base, tempBase);

    for (var j in tempBase) {
        tempNumber[j] = 0;
        for (var i = 1, x = 99; i <= x; i++) {
            tempNumber[j] += Math.floor(number / Math.pow(+j, i));
        }
    }

    for (var j in tempBase) {
        result.push(tempNumber[j] / tempBase[j]);
    }

    function searching(numb, denominator = {}) {
        for (var i = 2; i <= numb; i++) {
            while (numb % i === 0) {
                if (denominator[i]) {
                    denominator[i]++
                } else {
                    denominator[i] = 1;
                }
                numb /= i;
            }
        }
    }

    return Math.trunc(Math.min.apply(Math, result));
}
