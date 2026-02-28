function solution(clothes) {
    var answer = 0;
    const obj = clothes.reduce((acc, cur) => {
        const key = cur[1];
        const value = cur[0];

        if(!acc[key]) acc[key] = [];
        acc[key].push(value);
        return acc;
    }, {});
    
answer = Object.values(obj).reduce((acc, cur) => {
    return acc * (cur.length + 1);
}, 1)
    answer -= 1
    return answer;
}