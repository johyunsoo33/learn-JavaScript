function main() {
  const data = getData();
  const arr = [];
  for (let i = 0; i < data[0][0]; i++) {
    arr[i] = i + 1;
  }

  for (let i = 1; i < data.length; i++) {
    let ballFirst = data[i][0];
    let ballLast = data[i][1];
    let temp = arr[ballFirst - 1];
    arr[ballFirst - 1] = arr[ballLast - 1];
    arr[ballLast - 1] = temp;
  }
  console.log(arr.join(" "));
}
main();

function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString();
  const arr = fileData.trim().split("\n");
  const result = [];
  for (let row of arr) {
    const rowArr = row.split(" ");
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr.length === 1 ? rowArr[0] : rowArr);
  }
  return result.length === 1 ? result[0] : result;
}
