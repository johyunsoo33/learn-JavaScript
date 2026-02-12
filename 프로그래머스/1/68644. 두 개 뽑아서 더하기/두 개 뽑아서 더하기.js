function solution(numbers) {
    var answer = [];
    for (let i=0; i<numbers.length-1; i++){
        for(let j=0; j<numbers.length; j++){
            if( i !== j){
                answer.push(numbers[i]+numbers[j]);
            }
        }
    }
    const array = [...new Set(answer)]
    answer = array.sort((a,b)=>a-b)
    return array;
}