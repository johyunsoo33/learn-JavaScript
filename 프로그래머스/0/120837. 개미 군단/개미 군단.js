function solution(hp) {
    var answer = 0;
    var first = parseInt(hp/5);
    var second = parseInt((hp%5)/3);
    var last = parseInt((hp%5)%3/1)
    return answer=first+second+last;
}