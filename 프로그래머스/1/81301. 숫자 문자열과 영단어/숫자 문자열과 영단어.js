function solution(s) {
    var answer = 0;
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
     
     answer = s;
    
    for(let i = 0; i < words.length; i++) {
        answer = answer.replaceAll(words[i], i);
    }
    return Number(answer);
}