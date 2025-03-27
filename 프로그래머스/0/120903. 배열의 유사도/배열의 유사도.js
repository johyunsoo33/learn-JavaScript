function solution(s1, s2) {
    var answer = 0;
    var arr1 = Array.from(s1);
    var arr2 = Array.from(s2);
    function sameWord(value) {
        return arr2.includes(value)
    }
    var result = arr1.filter(sameWord);
    return result.length;
}