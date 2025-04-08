function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  console.log(data.a + data.b + data.c);
}
main();
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split(" ");

  const result = new Object();

  result.a = isNaN(fileData[0]) ? fileData[0] : parseInt(fileData[0]);
  result.b = isNaN(fileData[1]) ? fileData[1] : parseInt(fileData[1]);
  result.c = isNaN(fileData[2]) ? fileData[2] : parseInt(fileData[2]);
  return result;
}
