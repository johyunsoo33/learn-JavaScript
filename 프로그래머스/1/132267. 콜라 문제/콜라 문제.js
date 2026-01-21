//반복문
// function solution(a, b, n) {
//     var answer = 0;
//     let currentBottles = n;
//     while(currentBottles>=a){
//         const exchange_cola = currentBottles / a
//         const increaseBottleCount = Math.floor(exchange_cola) * b
//         const empty_bottle = currentBottles % a;
//         answer += increaseBottleCount
//         currentBottles = increaseBottleCount + empty_bottle;
//     }
//     return answer;
// }

//재귀함수
function solution(a, b, n) {
    if(n<a){
        return 0;
    }
    var answer = 0;
    
    const exChangeCola = Math.floor(n / a)*b
    const remainBottle = n % a;
    
    
    return exChangeCola + solution(a,b,exChangeCola+remainBottle);
}