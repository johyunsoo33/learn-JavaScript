function solution(numbers) {
    var answer = Array.from(numbers);
    var answerMap = answer.map(maping);
    
    function maping(value){
        return value*2;
    }
    return answerMap;
}