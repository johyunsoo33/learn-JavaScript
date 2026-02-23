function solution(arr) {
    var answer = 0;
    let arm = 1;
    while(true){
        if(arr.every((num) => arm % num === 0) === true){
            break;
        }
        arm++;
    }
    return arm;
}