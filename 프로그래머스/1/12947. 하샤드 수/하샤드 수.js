function solution(x) {
    var answer = true;
    const xStr = String(x);
    const xArr = xStr.split("");
    let indexSum = 0
    for(let i=0; i<xArr.length; i++){
         indexSum += Number(xArr[i]);
        if(x%indexSum === 0){
            answer = true
        }else{
            answer = false
        }
    }
   
    return answer;
}