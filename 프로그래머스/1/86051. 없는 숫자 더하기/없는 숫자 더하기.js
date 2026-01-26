function solution(numbers) {
    var answer = 0;
    for(let i=0; i<=9; i++){
        const filterNumbers = numbers.includes(i)
        if(!filterNumbers){
            answer += i
        }
    }
    return answer;
}