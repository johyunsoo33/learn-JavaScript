const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const count = parseInt(input[0]);
for (let i = 1; i <= count; i++) {
  let result = "";
  const repeatNum = parseInt(input[i].split(" ")[0]);
  const arr = input[i].split(" ")[1];
  const repeatArr = arr.split("");
  for (let j = 0; j < repeatArr.length; j++) {
    result += repeatArr[j].repeat(repeatNum);
  }
  console.log(result);
}