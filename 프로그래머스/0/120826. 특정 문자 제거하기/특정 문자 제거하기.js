function solution(my_string, letter) {
    var answer = '';
    var newText = my_string.replaceAll(letter,"")
    return newText;
}