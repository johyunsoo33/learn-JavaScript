function solution(arr) {
    var arr = Array.from(arr);
    var answer = 0;
    var sum =0;
    for(let i =0; i<arr.length; i++){
        sum += Number(arr[i]);
    }
    answer = sum/arr.length;
    return answer;
}