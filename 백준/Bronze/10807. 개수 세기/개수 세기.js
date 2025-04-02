const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const num = parseInt(input[0]);
const list = input[1].split(" ").map(Number);
const target = parseInt(input[2]);
let result = 0;
for (let i = 0; i <= num; i++) {
  if (list[i] === target) {
    result++;
  }
}
console.log(result);
