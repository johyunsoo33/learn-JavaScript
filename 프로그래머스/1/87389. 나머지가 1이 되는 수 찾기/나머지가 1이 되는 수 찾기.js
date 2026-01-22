function solution(n) {
    var answer = 0;
    const num1 = n - 1;
    let x = 2; 
    
    while (num1 % x !== 0) {
        x++;
    }
    answer = x;
    return answer;
}