// exceptions.js
// This file contains classes for excpetions

export class NegativeNumberError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.date = new Date();
    }
}
