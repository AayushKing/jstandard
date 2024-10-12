// json.js
// This File Allows you to Parse Json

export function parse(json_string) {
    return JSON.parse(json_string);
}

export function string(data) {
    return JSON.stringify(data);
}

