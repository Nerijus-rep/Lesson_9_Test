
function sumArray(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
};
sumArray([5, 2, 1, 6, 9, 8]); 