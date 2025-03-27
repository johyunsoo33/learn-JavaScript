function solution(strArr) {
    var answer = [];
    for (let i=0; i<strArr.length; i++){
        if(strArr[i].includes("ad")){
            strArr.splice(i,1);
            i--;
        }
        else{
            answer.push(strArr[i]);
        }
    }
    return answer;
}