function solution(price, money, count) {
    var answer = 0;
    let totalPrice = 0;
    for(let i=1; i<=count; i++){
        totalPrice += price * i;
    }

    answer = totalPrice - money;
    if(totalPrice - money <= 0 ){
        answer = 0;
    }
    return answer;
}