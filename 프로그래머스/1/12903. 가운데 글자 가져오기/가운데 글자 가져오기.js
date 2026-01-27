function solution(s) {
    var answer = '';
    const evenIndex = [];
    const strArr = s.split("");
    const middleNum = Math.round(strArr.length/2);
    if(strArr.length  % 2 !==0){
        evenIndex.push(strArr[middleNum-1])
    }else if(strArr.length  % 2 === 0){
         evenIndex.push(strArr[middleNum-1],strArr[middleNum])
    }
    const Str = evenIndex.join("") 
    return Str;
}