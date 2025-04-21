const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("");

let result = 1;

for (let i = 0; i < Math.floor(input.length / 2); i++) {
  if (input[i] !== input[input.length - i - 1]) {
    result = 0;
    break;
  }
}

console.log(result);