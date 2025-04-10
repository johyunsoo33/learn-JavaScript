function main() {
  const data = getData();
  let blank = "";
  let stars = "";
  for (let i = 1; i <= data; i++) {
    blank = " ".repeat(data - i);
    stars = "*".repeat(i);
    console.log(blank + stars);
  }
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
