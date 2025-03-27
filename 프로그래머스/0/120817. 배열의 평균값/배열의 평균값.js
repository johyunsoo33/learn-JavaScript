function solution(numbers) {
    var answer = Array.from(numbers);
    let sum = 0;
    for(var i=0; i<answer.length; i++){
        sum+=answer[i];
    }
    let average = sum/answer.length;
    return average;
}