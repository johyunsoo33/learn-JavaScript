const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const totalNum = parseInt(input[0].split(" ")[0]);
const compareNum = parseInt(input[0].split(" ")[1]);
const arr = input[1].split(" ").map(Number);
let list = [];
for (let i = 0; i < totalNum; i++) {
  if (arr[i] < compareNum) {
    list.push(arr[i]);
  }
}
let result = list.join(" ");
console.log(result);
