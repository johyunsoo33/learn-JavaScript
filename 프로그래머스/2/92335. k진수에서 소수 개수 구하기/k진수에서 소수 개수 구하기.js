function solution(n, k) {
    var answer = 0;
    const dec = n.toString(k)
    const candidates = dec.split('0');
    for(let i=0; i<candidates.length; i++){
        const numStr = candidates[i];
        if(numStr === '' || numStr === '1'){
            continue;
        }
        const num = parseInt(numStr);
        if(isPrime(num)){
            answer++;
        }
    }
    
    function isPrime(num){
        if(num < 2) return false;
        if(num === 2) return true;
        if(num % 2 === 0) return false;
        for(let i = 3; i * i <= num; i += 2) {
        if(num % i === 0) return false;
    }
        return true;
    }
    return answer;
}