/**
 * 
 * @param {Int32Array} maximum 
 * @param {Int32Array} minimum 
 * @returns 
 */

function int(maximum, minimum) {
    var maximum = maximum ? maximum : 1;
    var minimum = minimum ? minimum : 0;
    var result = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    return result;
}

/**
 * 
 * @param {Float32Array} maximum 
 * @param {Float32Array} minimum 
 */

function float(maximum, minimum) {
    var maximum = maximum ? maximum : 1;
    var minimum = minimum ? minimum : 0;
    var result = Math.random() * (maximum - minimum) + minimum;
    return result;
}

function boolean() {
    var result = int(1,0) == 0 ? true : false;
    return result;
}

/**
 * 
 * @param {Int16Array} percentage 
 */

function chance(percentage) {
    var percentage = percentage ? percentage : 50;
    var result = int(100,0) <= percentage ? true : false;
    return result;
}

module.exports = { int, float, boolean, chance };