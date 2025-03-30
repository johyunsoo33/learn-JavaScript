const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
for (let i = 1; i <= input; i++) {
  console.log("*".repeat(i));
}
