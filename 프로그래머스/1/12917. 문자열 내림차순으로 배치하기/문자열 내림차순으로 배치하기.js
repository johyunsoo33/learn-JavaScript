function solution(s) {
    var answer = '';
    const strArray = [...s].sort((a,b) => a<b ? 1 : -1).join("")
    return strArray;
}