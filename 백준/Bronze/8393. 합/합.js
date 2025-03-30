const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let sum = 0;
for (let i = 1; i <= Number(input[0]); i++) {
  sum += parseInt(i);
}
console.log(sum);
