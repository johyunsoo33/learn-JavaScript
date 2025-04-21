const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const Unit = [1, 1, 2, 2, 2, 8];
const result = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] !== Unit[i]) {
    let a = Unit[i] - input[i];
    result.push(a);
  }
}
console.log(result.join(" "));