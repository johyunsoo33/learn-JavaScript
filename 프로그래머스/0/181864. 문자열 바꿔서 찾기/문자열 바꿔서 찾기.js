function solution(myString, pat) {
    var answer = 0;
    var arr = myString.split("");
    var string = '';
    var target = arr.map(find);
    function find(word){
        if(word === "A"){
            return "B";
        }
        else if(word === "B"){
            return "A"
        }
        else{
            return word;
        }
    }
       string = target.join("");
    
    if(string.includes(pat)){
        answer = 1;
    }
    else{
        answer = 0;
    }
    return answer;
}