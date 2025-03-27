function solution(num_list) {
    var answer = 0;
    if(num_list.length > 10){
        var arrMap = num_list.map(mapping);
        function mapping(value){
            answer += value;
        }
    }
    if(num_list.length <= 10){
        answer = 1;
        var arrMap = num_list.map(mapping);
        function mapping(value){
            answer *= value;
        }
    }
    return answer;
}