// function solution(n, m, section) {
//     var answer = 0;
//     const array = Array.from({length:n},(_,i) => i+1);
//     for(let i=0; i<array.length; i++){
//         let sliceArray = array.slice(i,i+m);
//         if(section.includes(array[i])){
//             answer++;
//             section = section.filter(s => !sliceArray.includes(s))
//         }
//     }
//     return answer;
// }

function solution(n, m, section) {
    let flag = 0;
    let cnt = 0;
    for (const e of section) {
        if (e > flag - 1) {
            flag = e + m;
            cnt++;
        }
    }
    return cnt;
}