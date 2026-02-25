function solution(name, yearning, photo) {
    var answer = [];
    const scoreMap = new Map();
    for(let i = 0; i < name.length; i++) {
        scoreMap.set(name[i], yearning[i]);
    }
    
    for(let i=0; i<photo.length; i++){
        let sum =0;
        for(let j=0; j<photo[i].length; j++){               
          const person = photo[i][j];
        sum += scoreMap.get(person) || 0;
        }
    answer.push(sum);
    }
    return answer;
}