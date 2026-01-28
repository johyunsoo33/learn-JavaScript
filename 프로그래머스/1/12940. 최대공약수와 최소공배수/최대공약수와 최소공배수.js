function solution(n, m) {
    var answer = [];
    let NCD = [];
    let MCD = [];
    for(let i=1; i<=n; i++){
        if(n%i === 0){
            NCD.push(i);
        }
    }
    for(let j=1; j<=m; j++){
        if(m%j === 0){
            MCD.push(j);
        }
    }
    let GCD = NCD.filter(num => MCD.includes(num));
    answer.push(Math.max(...GCD))
    let LCM = Math.floor((n*m) / answer[0]) ;
    answer.push(LCM)
    return answer;
}