function solution(strings, n) {
    var answer = [];
    
    for(let i = 0; i < strings.length; i++) {
        answer.push([strings[i][n].charCodeAt(0), strings[i]]);
    }
    answer.sort((a, b) => {
        if(a[0] === b[0]) {
            return a[1].localeCompare(b[1]);
        }
        return a[0] - b[0];
    });
    
    return answer.map(item=>item[1]);
}