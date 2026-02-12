function solution(food) {
    var answer = '';
    let array = [];
    for(let i=1; i<food.length; i++){
        if(food[i]%2 !== 0){
            food[i] -= 1
        }
    }
    for(let j = 1; j < food.length; j++) {
        const count = Math.floor(food[j] / 2);  

        for(let k = 0; k < count; k++) {
            array.push(j); 
        }
    }
    const reversed = [...array].reverse();
    const result = [...array, 0, ...reversed]; 
    return result.join("");
}