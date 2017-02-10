function arrayChange(array) {
    var turns = 0;
    for (var i = 1; i < array.length; i++) {
        if (array[i] <= array[i - 1]) {
            turns += array[i - 1] - array[i] + 1;
            array[i] += array[i - 1] - array[i] + 1;
        }
    }
    return turns;
}

var array = [1, 1, 1];
var array2 = [2, 4, 6, 6, 8];
var array3 = [3, 6, -1, 9];
var array4 = [5678, -367, 432, 10567, 5];

console.log(arrayChange(array));
console.log(arrayChange(array2));
console.log(arrayChange(array3));
console.log(arrayChange(array4))