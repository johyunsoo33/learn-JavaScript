function solution(n, words) {
    var answer = [0,0];
    for(let i=0; i<words.length; i++){
      if(words.indexOf(words[i]) < i) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        if(i > 0 && words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
    }
    return answer;
}