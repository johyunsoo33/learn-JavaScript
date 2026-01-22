function solution(n) {
    var answer = 0;
    const str = String(n);
    const arr = str.split("");
    arr.sort((a,b) =>  b-a);
    const str2 = arr.join("");
    answer = Math.floor(str2)
    return answer;
}