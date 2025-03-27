function solution(my_string) {
    var answer = Array.from(my_string);
    var deleteLetter = my_string.replaceAll(/[aeiou]/g,"")
    return deleteLetter;
}