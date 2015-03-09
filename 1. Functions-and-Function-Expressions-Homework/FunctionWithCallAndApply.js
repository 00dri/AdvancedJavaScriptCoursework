function printArgsInfo() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i] + " (" + typeof (arguments[i]) + ")");
    }
}

console.log("*** Call without arguments: ***\n");
printArgsInfo.call();

console.log("*** Call with arguments: ***");
printArgsInfo.call(1,2,3, true, "dsads", null, [1,2,3]);

console.log("*** Apply without arguments: ***\n");
printArgsInfo.apply();

console.log("*** Apply with arguments: ***");
printArgsInfo.apply(null, [1,2,3, true, "dsads", null, [1,2,3]]);