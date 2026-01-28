function solution(left, right) {
    let answer = 0;
    
    for(let i = left; i <= right; i++){
        let count = 0;
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                count++;
            }
        }
        
        if(count % 2 === 0){
            answer += i;  // 짝수면 더하기
        } else {
            answer -= i;  // 홀수면 빼기
        }
    }
    
    return answer;
}