function main() {
  const data = getData();
  let x = data.a;
  let y = data.b;
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  if (x > 0 && y > 0) {
    console.log("1");
  } else if (x < 0 && y > 0) {
    console.log("2");
  } else if (x < 0 && y < 0) {
    console.log("3");
  } else if (x > 0 && y < 0) {
    console.log("4");
  } else {
    console.log("0");
  }
}
main();

function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split("\n");

  const result = new Object();

  result.a = isNaN(fileData[0]) ? fileData[0] : parseInt(fileData[0]);
  result.b = isNaN(fileData[1]) ? fileData[1] : parseInt(fileData[1]);
  return result;
}