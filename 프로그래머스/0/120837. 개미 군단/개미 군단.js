function solution(hp) {
    var answer = 0;
    let generalAnt = 0;
    let solderAnt = 0;
    let normalAnt = 0;    
    while(hp>0){
        if(hp>=5){
            hp =hp- 5;
            generalAnt++;
        }
        if(hp<5 && hp>=3){
            hp =hp-3;
            solderAnt++;
        }
        if(hp>0 && hp<3){
            hp = hp -1;
            normalAnt++;
        }
        answer = generalAnt+solderAnt+normalAnt;
    }
    return answer;
}