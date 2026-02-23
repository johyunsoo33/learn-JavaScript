function solution(k, tangerine) {
    var answer = 0;
    
    const countObj = tangerine.reduce((obj, num) => {
        obj[num] = (obj[num] || 0) + 1;
        return obj;
    }, {});
    
    const counts = Object.values(countObj);
    
    const sortArray = counts.sort((a,b) => b-a);

    let total = 0;
    for(let i=0; i<sortArray.length; i++) {
        total += sortArray[i];
        answer++;
        if(total >= k) break;
    }
    
    return answer;
}