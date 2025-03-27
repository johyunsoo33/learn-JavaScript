function solution(n) {
    var answer = 0;
    //n을 배열화하기위한것
    var arr = String(n).split('');
    var arrMap = arr.map(mapPing)
    function mapPing(value){
        answer += Number(value)
    }
    return answer;
}