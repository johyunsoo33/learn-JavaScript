function solution(s) {
    // const answer = (s.length === 4 || s.length === 6) ? (isNaN(s) ? false : true) : false;
    const strArr = s.split("");
    let isNum = true;
    for(let i=0; i<strArr.length; i++){
        if(strArr[i] != Number(strArr[i])){
            isNum = false;
        }
    }
  return isNum && (s.length === 4 || s.length === 6) ? true : false;
}