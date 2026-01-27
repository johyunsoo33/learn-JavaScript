function solution(n) {
    var answer = '';
    const arr = []
    for (let i=0; i<n; i++){
        if(i === 0){
            arr.push("수")
        }
        else if((i+1) % 2 !== 0){
            arr.push("수")
        }
        else if((i+1) % 2 === 0){
            arr.push("박")
        }
    }
    answer = arr.join("")
    return answer;
}