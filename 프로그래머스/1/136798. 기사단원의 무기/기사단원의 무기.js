function solution(number, limit, power) {
    var answer = 0;
    const array = Array.from({length: number}, (v, i) => i+1);
    
    const getDivisors = (num) => {
        const divisors = [];
        for(let i = 1; i <= num/2; i++){
            if(num % i === 0) divisors.push(i);
        }
        return [...divisors, num];
    }
    const divisorCounts = []; 
    for(let i = 0; i < array.length; i++){
        const divisors = getDivisors(array[i]);
        divisorCounts.push(divisors.length);
    }
    for(let j=0; j<divisorCounts.length; j++){
        if(divisorCounts[j] > limit){
            divisorCounts[j] = power;
        }
        answer += divisorCounts[j]
    }
    return answer;
}