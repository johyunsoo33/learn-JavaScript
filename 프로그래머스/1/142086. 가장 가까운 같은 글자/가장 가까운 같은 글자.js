function solution(s) {
    var answer = [];
    const StringArray = s.split("")
    const map = StringArray.map((char,index) =>{
        let found = false;
        for(let i=index-1; i>=0; i--){
            if(StringArray[i] === char){
                answer.push(index-i)
                found = true;
                  break;
            }
        }
        if(!found){
                    answer.push(-1)
        }

    })
    return answer;
}