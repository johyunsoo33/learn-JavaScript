function solution(t, p) {
    var answer = 0;
    let strArray = t.split("")
    let sliceArray = [];
    for(let i=0; i<strArray.length; i++){
        const slice = strArray.slice(i,i+p.length);
        if(slice.length <p.length){
            continue;
        }
        sliceArray.push(slice.join(""))
    }
    for (let j=0; j<sliceArray.length; j++){
        if(Number(sliceArray[j]) <= Number(p)){
            answer += 1;
        }
    }
    return answer;
}