const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let result = [];
for (let i = 0; i < input.length; i++) {
  let arr = input[i].split("");
  let rever = arr.reverse().join("");
  result.push(parseInt(rever));
}
console.log(Math.max(...result));
