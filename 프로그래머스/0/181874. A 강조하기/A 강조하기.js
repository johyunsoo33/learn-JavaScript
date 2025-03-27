function solution(myString) {
    var answer = '';
    const arr = myString.split("");
    for(let i=0; i<myString.length; i++){
        if(arr[i] === "a"){
            arr[i] = "A"
        }
        else if(arr[i] === arr[i].toUpperCase()){
            if(arr[i] !== "A"){
                 arr[i] = arr[i].toLowerCase();
            }
        }
    }
    answer = arr.join("");
    return answer;
}