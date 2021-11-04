"use strict";
exports.__esModule = true;
exports.die = exports.rng = exports.chance = exports.boolean = exports.float = exports.int = void 0;
function int(maximum, minimum) {
    var maximum = maximum ? maximum : 1;
    var minimum = minimum ? minimum : 0;
    var result = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    return result;
}
exports.int = int;
function float(maximum, minimum) {
    var maximum = maximum ? maximum : 1;
    var minimum = minimum ? minimum : 0;
    var result = Math.random() * (maximum - minimum) + minimum;
    return result;
}
exports.float = float;
function boolean() {
    var result = int(1, 0) == 0 ? true : false;
    return result;
}
exports.boolean = boolean;
function chance(percentage) {
    var percentage = percentage ? percentage : 50;
    var result = int(100, 0) <= percentage ? true : false;
    return result;
}
exports.chance = chance;
function rng(length) {
    length = length && length < 16 ? length : 6;
    var numbers = "0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
        var random = int(numbers.length - 1, 0);
        result += numbers.charAt(random);
    }
    return parseInt(result);
}
exports.rng = rng;
function die(sides) {
    sides = sides ? sides : 6;
    var result = int(sides, 1);
    return result;
}
exports.die = die;
