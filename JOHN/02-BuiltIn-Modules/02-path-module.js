const { sep, join, basename, resolve } = require("path");
//
console.log(sep);
//
const filePath = join("/JONAS", "txt", "start.txt");
console.log(filePath);
//
const base = basename(filePath);
console.log(base);
//
const absolute = resolve(__dirname, "JONAS", "txt", "start.txt");
console.log(absolute);
