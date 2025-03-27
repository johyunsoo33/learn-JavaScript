function solution(num_list) {
    var answer = [0,0];
    var arr = Array.from(num_list);
    for(let i=0; i<num_list.length; i++){
        if(arr[i] % 2 ==0){
            answer[0]++;
        }
        if(arr[i] % 2 !=0){
            answer[1]++;
        }
    }
    return answer;
}