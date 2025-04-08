const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const str = input[0];
const index = Number(input[1]);
console.log(str[index - 1]);
