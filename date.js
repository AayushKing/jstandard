// date.js
// This file provides date formating functions and classes

export function format(str) {
    const now = new Date();
    str = str.replace("%Y", now.getFullYear());
    str = str.replace("%M", now.getMonth());
    str = str.replace("%D", now.getDate());
    str = str.replace("%H", now.getHours());
    str = str.replace("%i", now.getMinutes());
    str = str.replace("%S", now.getSeconds());
    return str;
}