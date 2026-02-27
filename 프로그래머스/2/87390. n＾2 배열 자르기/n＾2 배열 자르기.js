function solution(n, left, right) {
    // var answer = [];
    // const matrix = [];
    // for(let i=0; i<n; i++){
    //     let row = [];
    //     for(let j=0; j<n; j++){
    //         row.push(Math.max(i + 1, j + 1));
    //     }
    //     matrix.push(row)
    // }
    // const rows = matrix.length;
    // const cols = matrix[0].length;
    // const oneWayArray = new Array(rows*cols);
    // let firstIndex = 0;
    // for(let i=0; i<rows; i++){
    //     for (let j=0; j<cols; j++){
    //         oneWayArray[firstIndex] = matrix[i][j];
    //         firstIndex++;
    //     }
    // }
    // const sliceArray = oneWayArray.slice(left,right+1)
    // return sliceArray;
    const answer = [];
    
    for (let idx = left; idx <= right; idx++) {
        const i = Math.floor(idx / n);
        const j = idx % n;
        answer.push(Math.max(i + 1, j + 1));
    }
    
    return answer;
}