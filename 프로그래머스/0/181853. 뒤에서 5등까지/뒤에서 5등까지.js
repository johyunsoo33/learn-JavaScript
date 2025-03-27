function solution(num_list) {
    var answer = [];
    var upArr = num_list.sort(arrSort);
    function arrSort(a,b){
        return a - b ;
    }
    for (let i=0; i<5; i++){
        answer.push(upArr[i])
    }
    return answer;
}