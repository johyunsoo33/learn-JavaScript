function solution(a, b) {
    var answer = 0;
    for(let i=Math.min(a,b); i<=Math.max(a,b); i++){
        answer += i;
        if(Math.min(a,b) === Math.max(a,b)){
            answer = a || b;
        }
    }
    return answer;
}