function solution(a, b, n) {
    var answer = 0;
    let currentBottles = n;
    while(currentBottles>=a){
        const exchange_cola = currentBottles / a
        const increaseBottleCount = Math.floor(exchange_cola) * b
        const empty_bottle = currentBottles % a;
        answer += increaseBottleCount
        currentBottles = increaseBottleCount + empty_bottle;
    }
    return answer;
}