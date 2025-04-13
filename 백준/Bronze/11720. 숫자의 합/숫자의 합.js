const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const count = parseInt(input[0]);
const arr = input[1];
let sum = 0;
for (let i = 0; i < count; i++) {
  sum += parseInt(arr[i]);
}
console.log(sum);
