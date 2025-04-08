const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const bucketNum = parseInt(input[0].split(" ")[0]);
const totalList = parseInt(input[0].split(" ")[1]);
let arr = new Array(bucketNum).fill(0);
let result = [];
for (let i = 0; i < bucketNum; i++) {
  arr[i] = i + 1;
}
for (let j = 1; j <= totalList; j++) {
  let ballFirst = parseInt(input[j].split(" ")[0]);
  let ballLast = parseInt(input[j].split(" ")[1]);
  result = arr.slice(ballFirst - 1, ballLast).reverse();

  for (let k = 0; k < result.length; k++) {
    arr[ballFirst - 1 + k] = result[k];
  }
}

console.log(arr.join(" "));
