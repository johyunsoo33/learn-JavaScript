function solution(citations) {
    const max = Math.max(...citations);
    
    for(let h = max; h >= 0; h--) {
        const count = citations.filter(c => c >= h).length;
        if(count >= h) return h;
    }
    return 0;
}