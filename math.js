// math.js
// This File provides functions for mathematical calculations 

const exceptions = require("./exceptions");

export function sqrt(n) {
    if (n < 0) {
        throw new exceptions.NegativeNumberError("Cannot Find Square Root Of A Negative Number");
    }
    return n ** 0.5;
}

export const pi = 3.141592653589793;
export const py_const = sqrt(2);

export function factorial(x) {
    if (x < 0) {
        throw new exceptions.NegativeNumberError("Cannot Find Factorial of Negative Number");
    }
    let result = 1;
    for (let i = 1; i <= x; i++) {
        result *= i;
    }
    return result;
}

export function diag_square(n) {
    return n * py_const;
}