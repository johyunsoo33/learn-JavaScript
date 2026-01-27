function solution(arr) {
    const minNum = Math.min(...arr);
    const answer = arr.filter(num => num !== minNum)
    if(answer.length === 0){
        answer.push(-1)
    }
    return answer;
}