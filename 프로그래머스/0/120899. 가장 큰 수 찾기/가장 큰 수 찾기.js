function solution(array) {
    var arr = Array.from(array);
    var sortArr = arr.sort(arrSort);
    function arrSort(a,b){
        return b-a;
    }
    var result1 = sortArr[0];
    var a=result1;
    var b=array.indexOf(a)
    var answer = [a,b];
    return answer;
}