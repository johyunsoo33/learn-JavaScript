function solution(box, n) {
    var answer = 1; 
    box.forEach((value) => {
        answer *= Math.floor(value / n); 
    });
    return answer;
}