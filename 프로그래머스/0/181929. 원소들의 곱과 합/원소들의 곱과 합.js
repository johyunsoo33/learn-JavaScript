function solution(num_list) {
    var answer = 0;
    let sum = 0;
    let multiply = 1;
    
    num_list.forEach((value) =>{
        sum += value;
        multiply *= value;
    })
    
    if(sum**2 > multiply){
        answer = 1
    }else if (sum**2 < multiply){
        answer = 0
    }
    return answer;
}