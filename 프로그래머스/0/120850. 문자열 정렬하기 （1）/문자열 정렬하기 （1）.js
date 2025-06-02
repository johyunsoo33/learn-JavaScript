function solution(my_string) {
    const arr = my_string.match(/\d/g).map(Number).sort();
    return arr;
}