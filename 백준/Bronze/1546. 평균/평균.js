const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const num1 = parseInt(input[0]);
const list = input[1].split(" ").map(Number);
const max = Math.max(...list);
let sum = 0;
let avg = 0;
for (let i = 0; i < num1; i++) {
  list[i] = (list[i] / max) * 100;
  sum += list[i];
}
avg = sum / num1;
console.log(avg);
