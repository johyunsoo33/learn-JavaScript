function solution(myString, pat) {
    var answer = 0;
    const patUp= pat.toUpperCase();
    if(myString.toUpperCase().includes(patUp)){
        answer =1;
    }
    else{
        answer=0;
    }
    return answer;
}