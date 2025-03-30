const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
for (let i = 0; i < input.length; i++) {
  let a = parseInt(input[i].split(" ")[0]);
  let b = parseInt(input[i].split(" ")[1]);
  console.log(a + b);
}
