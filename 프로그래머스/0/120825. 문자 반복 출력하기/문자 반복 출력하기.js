function solution(my_string, n) {
    var arr = Array.from(my_string);
    var mapArr = arr.map(mapping);
    var answer = mapArr.join('');
    function mapping(value){
        return value.repeat(n);
    }
    return answer;
}