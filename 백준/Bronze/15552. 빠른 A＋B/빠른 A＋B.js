const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let testNum = parseInt(input[0]);
let output = [];

for (let i = 1; i <= testNum; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  output.push(a + b);
}

console.log(output.join("\n"));
