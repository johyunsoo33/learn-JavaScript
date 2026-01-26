function solution(n) {
    var answer = [];
    const nStr = n.toString();
    const nArr = nStr.split('');
    const arrReverse = nArr.reverse();
    const arrReverseMap = arrReverse.map((index)=>Number(index))
    return arrReverseMap;
}