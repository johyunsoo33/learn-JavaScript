function solution(n) {
    var answer = 0;
    if(n%2 != 0){
        for(let i=1; i<=n; i++){
            if(i%2 != 0 ){
                answer += i;
            }
        }
    }
    else if(n % 2 == 0){
        for(let i=1; i<=n; i++){
            if(i%2 == 0){
                answer += i**2;
            }
        }
    }
    return answer;
}