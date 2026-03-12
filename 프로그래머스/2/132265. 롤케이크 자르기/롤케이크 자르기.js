function solution(topping) {
    var answer = 0;
    const left = new Set();
    const rightCount = new Map();
    for (const t of topping) {
        rightCount.set(t, (rightCount.get(t) || 0) + 1);
            // console.log(rightCount)
    }
    for (const t of topping) {
        left.add(t)
        rightCount.set(t,(rightCount.get(t)-1))
        if (rightCount.get(t) === 0) rightCount.delete(t);
        if (left.size === rightCount.size) answer++;
    // console.log(rightCount)
    // console.log(left)
    } 
    return answer;
}