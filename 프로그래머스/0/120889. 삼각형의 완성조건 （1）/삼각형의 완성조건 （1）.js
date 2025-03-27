function solution(sides) {
    var answer = Array.from(sides);
    var result=0;
    function arraySort(a,b){
        return b-a;
    }
    var aa= answer.sort(arraySort);
    var maxValue = aa[0];
    var value2 = aa[1]+aa[2];
    if(maxValue < value2){
        result = 1;
    }
    else {
        result = 2;
    }
    return result;
}