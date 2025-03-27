function solution(n) {
    var answer = 0;
    var result = Math.sqrt(n);
    if(Number.isInteger(result)){
        answer =1;
    }
    else{
        answer =2;
    }
    return answer;
}