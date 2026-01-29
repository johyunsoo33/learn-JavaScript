function solution(d, budget) {
    var answer = 0;
    let sortDArray = d.sort((a,b) => a-b);
    for(let i=0; i<sortDArray.length; i++){
        if(budget>=sortDArray[i]){
            answer++;
            budget  -= sortDArray[i]
        }
        if(budget < sortDArray[i]){
            break;
        }
    }
    return answer;
}