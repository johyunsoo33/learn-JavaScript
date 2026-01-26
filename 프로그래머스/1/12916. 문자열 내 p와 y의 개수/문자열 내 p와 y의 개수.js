function solution(s){
    var answer = true;
    const sLowerCase = s.toLowerCase();
    const sStrArr = sLowerCase.split("")
    const pLength = sStrArr.filter((word)=>word==='p');
    const yLength = sStrArr.filter((word)=>word==='y');
    if(pLength.length === yLength.length){
        return answer;
    }else if(pLength.length !== yLength.length){
        return answer=false;
    }
    else if(pLength.length === 0 && yLength.length === 0){
           return answer;
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return pLength;
}