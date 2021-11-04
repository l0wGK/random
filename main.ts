function int(maximum?: number, minimum?: number): number {
    var maximum = maximum ? maximum : 1;
    var minimum = minimum ? minimum : 0;
    var result = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    return result;
}

function float(maximum?: number, minimum?: number): number {
    var maximum = maximum ? maximum : 1;
    var minimum = minimum ? minimum : 0;
    var result = Math.random() * (maximum - minimum) + minimum;
    return result;
}

function boolean(): boolean {
    var result = int(1,0) == 0 ? true : false;
    return result;
}

function chance(percentage?: number): boolean {
    var percentage = percentage ? percentage : 50;
    var result = int(100,0) <= percentage ? true : false;
    return result;
}

function rng(length?: number): number {
    length = length  && length < 16 ? length : 6;
    var numbers = "0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
        var random = int(numbers.length - 1,0);
        result += numbers.charAt(random);
    }
    return parseInt(result);
}

function die(sides?: number): number {
    sides = sides ? sides : 6;
    var result = int(sides,1);
    return result;
}

export { int, float, boolean, chance, rng, die };