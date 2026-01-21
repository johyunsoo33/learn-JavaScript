function solution(want, number, discount) {
    var answer = 0;
    const productArray = []
    for(let i=0; i<number.length; i++){
      productArray.push(...Array(number[i]).fill(want[i]))
    }
    for(let j=0; j<= discount.length-productArray.length; j++){
        const discountSlice = discount.slice(j,j + productArray.length);
        const sorted1 = [...productArray].sort()
        const sorted2 = [...discountSlice].sort()
        
      if(sorted1.every((item, index) => item === sorted2[index])) {
            answer += 1;
        }
    }
    return answer;
}