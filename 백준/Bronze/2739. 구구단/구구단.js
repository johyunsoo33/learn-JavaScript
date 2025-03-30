const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

for (let i = 1; i < 10; i++) {
  sum = parseInt(input) * i;
  console.log(`${input} * ${i} = ${sum}`);
}