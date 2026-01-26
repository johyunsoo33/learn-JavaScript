function solution(n) {
    var answer = 0;
    const nSqrt = Math.sqrt(n)
    const nisInteger = Number.isInteger(nSqrt)
    if(nisInteger){
        answer += Math.pow(nSqrt+1,2)
    }
    else{
        answer = -1
    }
    return answer;
}