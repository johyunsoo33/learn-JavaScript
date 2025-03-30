const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let testNum = parseInt(input[0]);
for (let i = 1; i <= testNum; i++) {
  let a = parseInt(input[i].split(" ")[0]);
  let b = parseInt(input[i].split(" ")[1]);
  console.log(a + b);
}