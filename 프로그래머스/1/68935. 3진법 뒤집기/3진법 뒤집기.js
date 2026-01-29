function solution(n) {
    var answer = 0;
    let answerArray = [];
    while(n > 0){
        answerArray.unshift(n%3);
        n = Math.floor(n / 3);
        if(n === 1){
            answerArray.unshift(1);  
            break;                    
        }
     
    }
    answerArray.reverse();
    for(let i = 0; i < answerArray.length; i++){
        answer += answerArray[i] * Math.pow(3, answerArray.length - 1 - i);
    }
    return answer;
}