function solution(n, k) {
    var answer = 0;
    let yangPrice = 12000*n;
    let cola = 2000*k;
    if( n >= 10){
        let discount = Math.floor(n/10);
        if(k>=discount){
            cola -= 2000 * discount; 
        }

    }
    answer = yangPrice+cola;
    return answer;
}