// function solution(n) {
//     var answer = 0;
//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) answer++;
//     }
//     return answer;
// }

// function isPrime(n) {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }


function solution(n) {
     // 초기화: 2부터 n까지의 모든 수를 포함하는 배열 생성
    const sieve = new Array(n+1).fill(true);
    sieve[0] = sieve[1] = false;
    
    for(let i=2; i<=Math.sqrt(n); i++){
        if(sieve[i]){
           for (let j = i * i; j <= n; j += i) {
                sieve[j] = false;
            }
        }
    }
     return sieve.filter(Boolean).length;
}