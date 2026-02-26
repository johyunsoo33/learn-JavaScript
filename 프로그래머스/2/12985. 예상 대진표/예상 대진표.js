function solution(n, a, b) {
    var answer = 0;
    let arr1 = Array.from({length: n/2}, (_, i) => [i * 2 + 1, i * 2 + 2]);
    for(let pair of arr1) {
        if(pair.includes(a) && pair.includes(b)) {
            return 1;
        }
    }
    
    while(true) {
        answer++; 
        
        const select = arr1.map((winner) => {
            if(winner.includes(a)) return a;
            if(winner.includes(b)) return b;
            return winner[0];
        });
        
        for(let i = 0; i < select.length; i += 2) {
            if(i + 1 < select.length) {
                if((select[i] === a && select[i+1] === b) || 
                   (select[i] === b && select[i+1] === a)) {
                    return answer + 1;
                }
            }
        }
        
        const result = [];
        for(let i = 0; i < select.length; i += 2) {
            if(i + 1 < select.length) {
                result.push([select[i], select[i + 1]]);
            }
        }
        
        if(result.length === 0) break;
        
        arr1 = result;
    }
    
    return answer;
}