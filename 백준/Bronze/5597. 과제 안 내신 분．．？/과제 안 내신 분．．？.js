const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
function arraySort(a, b) {
  return a - b;
}
let aa = input.sort(arraySort);
let missing = [];
for (let i = 1; i <= 30; i++) {
  if (!aa.includes(i)) {
    missing.push(i);
  }
}
console.log(missing.join("\n"));
