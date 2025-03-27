function solution(n) {
    var answer = [];
    for(let i=0; i <= n; i++){
        if(n%i == 0){
            answer.push(i);
        }
    }
    var result = answer.length;
    return result;
}