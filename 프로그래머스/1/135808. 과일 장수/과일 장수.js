function solution(k, m, score) {
    const sorted = score.sort((a, b) => b - a);
    const boxCount = Math.floor(sorted.length / m);
    
    let answer = 0;
    for (let i = 0; i < boxCount; i++) {
        const minScore = sorted[(i + 1) * m - 1];
        answer += minScore * m;
    }
    
    return answer;
}