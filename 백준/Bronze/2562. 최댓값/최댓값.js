const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let max = Math.max(...input);
let num = 0;
for (i = 0; i < input.length; i++) {
  if (input[i] == max) {
    num += i;
  }
}
console.log(`${max}
${++num}`);
