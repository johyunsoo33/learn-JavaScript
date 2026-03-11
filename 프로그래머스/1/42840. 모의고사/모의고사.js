function solution(answers) {
    var answer = [];
    const student = [
       [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
       [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5],
       [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5] 
    ]
    const arr = []
    for(let i = 0; i < student.length; i++){
    let count = 0;
    for(let j = 0; j < answers.length; j++){
        if(student[i][j % student[i].length] === answers[j]){
            count++;
        }
    }
    arr.push(count);
}
 const max = Math.max(...arr);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === max){
            answer.push(i + 1);
        }
    }

    return answer;
}