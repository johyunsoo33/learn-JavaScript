function solution(brown, yellow) {
    var answer = [];
    //너비와높이값이 테두리로만 완성될 경우를 미리 선정
    let width = brown/2
    let height = 2;
    let result = -1;
    while(result !== 0){
        height++;
        width--;
        let mul = height * width;
        result = mul - brown - yellow;  
    }
    answer.push(width,height)
    return answer;
}