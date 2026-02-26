// function solution(n,a,b)
// {
//     var answer = 1;
//     const mustSelect = [a,b];
//     let foundAB = false;
//     let arr1 = Array.from({length: n/2}, (_, i) => [i * 2 + 1, i * 2 + 2]);
//     while(foundAB === false){
//         answer++; 
//         const select = arr1.map((winner)=>{
//             const found = winner.find(num => mustSelect.includes(num));
//                 if(found) {
//                     return found;
//                 }
//             return winner[Math.floor(Math.random() * 2)];
//             }
//         );
        
//         for(let i = 0; i < select.length - 1; i += 2) {
//             const pair = [select[i], select[i + 1]];
//             if(pair.includes(a) && pair.includes(b)) {
//                 foundAB = true;
//                 break;
//             }
//         }
//         if(foundAB) break;
//         const result = [];
//         for(let i=0; i<select.length - 1; i+=2){
//             result.push([select[i], select[i + 1]]);
//         }
//         arr1 = result;
//     }
//     return answer;
// }


solution=(n,a,b)=>((a - 1) ^ (b - 1)).toString(2).length;