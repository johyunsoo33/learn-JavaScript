function solution(phone_number) {
    var answer = '';
    const strArray = phone_number.split("");
    for(let i=0; i<strArray.length-4; i++){
        strArray[i] = "*"
    }
    const str = strArray.join("")
    return str;
}