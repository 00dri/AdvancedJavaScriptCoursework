Array.prototype.flatten = function () {
    
    function flattenArrayOfArrays(array, result) {
        if (!result) {
            result = [];
        }
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                flattenArrayOfArrays(array[i], result);
            } else {
                result.push(array[i]);
            }
        }
        return result;
    } 
    return flattenArrayOfArrays(this);
}

console.log("First sample code");
var array = [1, 2, 3, 4];
console.log(array);
console.log(array.flatten());
console.log();

console.log("Second sample code");
var array = [1, 2, [3, 4], [5, 6]];
console.log(array);
console.log(array.flatten());
console.log();

console.log("Third sample code");
var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array);
console.log(array.flatten());
console.log();