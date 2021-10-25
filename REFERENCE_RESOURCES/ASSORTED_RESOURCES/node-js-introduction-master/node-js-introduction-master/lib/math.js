console.log(module.exports === exports);

// add function
exports.add = function( num1, num2 ) {
    return num1 + num2
};

console.log(module.exports === exports);