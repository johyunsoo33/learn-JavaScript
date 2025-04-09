function main() {
  const data = getData();
  const h = data[0][0];
  const m = data[0][1];
  const c = data[1][0];

  let totalMin = h * 60 + m + c;
  if (totalMin >= 60 * 24) {
    totalMin -= 60 * 24;
  }
  const result = {
    h: Math.floor(totalMin / 60),
    m: totalMin % 60,
  };

  console.log(result.h, result.m);
}
main();

function getData() {
  const fs = require("fs"); // Node.js의 파일 시스템 모듈 로드
  const fileData = fs.readFileSync(0).toString(); // 표준 입력으로부터 데이터 읽고 문자열로 변환
  const arr = fileData.trim().split("\n"); // 입력받은 문자열 양 끝 공백 제거 후, 줄바꿈 기준으로 배열 생성

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i];
    const rowArr = row.split(" ");

    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }

    result.push(rowArr);
  }

  return result;
}
