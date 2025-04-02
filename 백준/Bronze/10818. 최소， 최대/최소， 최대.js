const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const num = parseInt(input[0]);
const list = input[1].split(" ").map(Number);
let max = Math.max(...list);
let min = Math.min(...list);
console.log(min, max);
