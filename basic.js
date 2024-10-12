// basic.js 
// This File Provides Basic Functionalities

export function range(start, end) {
    const rangeArray = [];
    for (let i = start; i <= end; i++) {
        rangeArray.push(i);
    }
    return rangeArray;
}