//일반 반복문
// function solution(number) {
//     var answer = 0;
//     for(let i =0; i<number.length; i++){
//         for(let j = i+1; j<number.length; j++){
//             for(let k=j+1; k<number.length; k++){
//                 if(number[i]+number[j]+number[k] === 0){
//                     answer += 1;
//                 }
//             }
//         }
//     }
//     return answer;
// }

//재귀함수 시도
function solution(number) {
    var answer = 0;
    function findCombination(first,second,last){
        if(last < number.length){
            if (number[first]+number[second]+number[last] === 0){
                answer += 1;
            }
            findCombination(first,second,last+1);
        }
        else if (second < number.length-2){
         
            findCombination(first,second+1,second+2);
        }
        else if(first < number.length-3){
            
            findCombination(first+1,first+2,first+3);
        }
    }
    findCombination(0,1,2)
    return answer;
}