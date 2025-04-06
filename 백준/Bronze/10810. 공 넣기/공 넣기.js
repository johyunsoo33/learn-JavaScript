const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const bucketNum = parseInt(input[0].split(" ")[0]);
const totalList = parseInt(input[0].split(" ")[1]);
let arr = new Array(bucketNum).fill(0);

for (let i = 1; i <= totalList; i++) {
  let ballFirst = parseInt(input[i].split(" ")[0]);
  let ballLast = parseInt(input[i].split(" ")[1]);
  let ballNum = parseInt(input[i].split(" ")[2]);

  for (let j = ballFirst - 1; j < ballLast; j++) {
    arr[j] = ballNum;
  }
}
console.log(arr.join(" "));
