const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const count = parseInt(input[0]);
for (let i = 1; i <= count; i++) {
  let arr = input[i].split(" ");
  for (let j = 0; j < arr.length; j++) {
    let arr2 = arr[j].trim().split("");
    let result = arr2[0] + arr2[arr2.length - 1];
    console.log(result);
  }
}

