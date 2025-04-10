const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

let T = parseInt(fileData[0])
let list = [];
for (let i = 1; i <= T; i++) {
  const data = fileData[i].split(" ");
  const A = parseInt(data[0]);
  const B = parseInt(data[1]); 
  list.push(A + B);
}
console.log(list.join("\n"));
