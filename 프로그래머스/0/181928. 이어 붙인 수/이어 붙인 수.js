function solution(num_list) {
    var answer = 0;
    var even ="";
    var obb="";
    for(let i=0; i<num_list.length; i++){
        if(num_list[i] % 2 == 0){
            even += num_list[i].toString();
        }
        else if(num_list[i] % 2 != 0){
            obb += num_list[i].toString();
        }
    }
    answer=parseInt(even) + parseInt(obb);
    return answer;
}