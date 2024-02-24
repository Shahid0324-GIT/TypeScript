"use strict";
// Type Aliases: It is used to assign a type to variable which can be used anywhere in the code and which makes the code more modular.
// Literal Types: Is used to define a constant value which cannot be changed => const name = 'Constant';
let myName;
let userName;
const add = (a, b) => {
    return a + b;
};
let sub = function (a, b) {
    return Math.abs(a - b);
};
function multiply(a, b) {
    return Math.abs(a * b);
}
const divide = (a, b) => {
    return Math.ceil(a / b);
};
// Void Function
const v = (message) => {
    console.log(message);
};
console.log(add(24, 18));
console.log(sub(24, -18));
console.log(multiply(-24, 18));
console.log(divide(24, 18));
console.log(sub(-24, 18));
v("Hello World!");
v(123);
v(true);
v({
    name: "Jane Doe",
});
// Optional Parameters: Any parameter which is optional must be passed as the last argument.
const addAll = (a, b, c) => {
    if (c) {
        return a + b + c;
    }
    return a + b;
};
// Default Parameter
const multiplyAll = (a, b, c = 42) => {
    return a * b * c;
};
const subAll = (a = 10, b, c = 2) => {
    return a + b - c;
};
// Rest Parameter
const total = (a, b, c, ...nums) => {
    console.log(a, b, c, nums);
    return a * b * c + nums.reduce((curr, acc) => curr + acc, 0);
};
v(multiplyAll(4, 5, 6));
v(multiplyAll(4, 5));
v(addAll(1, 2, 3));
v(addAll(1, 2));
v(subAll(undefined, 5));
v(total(1, 2, 3, 4, 5, 6, 7, 8, 9));
// Never Type: Functions which throw error are of "never" type or have a infinit loop
// Error function
const createError = (msg) => {
    throw new Error(msg);
};
// Infinite loop
const infinite = () => {
    let i = 0;
    while (true) {
        i++;
        if (i > 10) {
            break;
        }
    }
};
