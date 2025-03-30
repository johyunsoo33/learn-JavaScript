const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
for (let i = 0; i < input.length; i++) {
  let a = parseInt(input[i].split(" ")[0]);
  let b = parseInt(input[i].split(" ")[1]);
  if (a == 0 && b == 0) {
    break;
  }
  console.log(a + b);
}
