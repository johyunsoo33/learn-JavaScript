function solution(strArr) {
    var answer = [];
    for(let i=0; i<strArr.length; i++){
        if(i % 2 !== 0){
            strArr[i] = strArr[i].toUpperCase();
            answer.push(strArr[i]);
        }
        else if(i % 2 == 0){
            strArr[i] = strArr[i].toLowerCase();
            answer.push(strArr[i]);
        }
        else{
            strArr[i] = strArr[i].toLowerCase();
            answer.push(strArr[i]);
        }
    }
    return answer;
}