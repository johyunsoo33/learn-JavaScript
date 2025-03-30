const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let totalNum = parseInt(input[0]);
let orderNum = parseInt(input[1]);
let sum = 0;
for (let i = 2; i < orderNum + 2; i++) {
  let a = parseInt(input[i].split(" ")[0]);
  let b = parseInt(input[i].split(" ")[1]);
  sum += a * b;
}
if (sum == totalNum) {
  console.log("Yes");
} else {
  console.log("No");
}
