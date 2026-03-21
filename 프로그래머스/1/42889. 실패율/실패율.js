function solution(N, stages) {
 
    const failRates = {}; 
    for (let i=1; i<= N; i++){
         
        let reached = 0;
        
        let failed = 0;
        
        for(let j = 0; j < stages.length; j++) {
            if(stages[j] >= i) {
                reached++;
            }
            if(stages[j] === i) {
                failed++;
            }
        }
        failRates[i] = reached === 0 ? 0 : failed / reached;
    }
    const sortArray = Object.keys(failRates).sort((a,b)=>{
        if(failRates[b] !== failRates[a]) {
                return failRates[b] - failRates[a];  
            }
            return a - b; 
    })
    const numArray = sortArray.map(Number)
    return numArray;
}   