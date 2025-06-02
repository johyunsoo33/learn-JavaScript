function solution(num, k) {
    var answer = 0;
    const str = num.toString();
    const index = str.split("").findIndex((value) => value === k.toString())
    
    if (index === -1){
        answer = -1
    }else if(index >= 0){
        answer = index+1
    }
    return answer;
}