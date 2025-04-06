const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const bucketNum = parseInt(input[0].split(" ")[0]);
const totalList = parseInt(input[0].split(" ")[1]);
let arr = new Array(bucketNum).fill(0);
for (let i = 0; i < bucketNum; i++) {
  arr[i] = i + 1;
}
for (let j = 1; j <= totalList; j++) {
  let ballFirst = parseInt(input[j].split(" ")[0]);
  let ballLast = parseInt(input[j].split(" ")[1]);
  let temp = arr[ballFirst - 1];
  arr[ballFirst - 1] = arr[ballLast - 1];
  arr[ballLast - 1] = temp;
}
console.log(arr.join(" "));

