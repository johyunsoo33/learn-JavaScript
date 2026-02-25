function solution(n, arr1, arr2) {
    var answer = [];
    let binaryArr1=[];
    let binaryArr2=[];
    for(let i=0; i<n; i++){
        let binaryStr1 = arr1[i].toString(2).padStart(n, '0');
        let binaryStr2 = arr2[i].toString(2).padStart(n, '0');
        const result1 = binaryStr1.split("").map(num => num === "0" ? " " : "#").join("");
        const result2 = binaryStr2.split("").map(num => num === "0" ? " " : "#").join("");
        binaryArr1.push(result1);
        binaryArr2.push(result2);
    }
const result = binaryArr1.map((str1, i) => {
        const str2 = binaryArr2[i];
        let combined = "";
        
        for(let j = 0; j < str1.length; j++) {
            if(str1[j] === "#" || str2[j] === "#") {
                combined += "#";
            } else {
                combined += " ";
            }
        }
        
        return combined;
    });
    return result;
}