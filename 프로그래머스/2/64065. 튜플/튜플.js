function solution(s) {
    var answer = [];
    const tuples = JSON.parse(s.replace(/{/g,"[").replace(/}/g,"]")).sort((a,b) => a.length - b.length);
    
    let set = new Set();
    for(let tuple of tuples){
        for(let num of tuple){
            if(!set.has(num)){
                set.add(num)
                answer.push(num);
                break;
            }
                      
        }
    }
    return answer;
}