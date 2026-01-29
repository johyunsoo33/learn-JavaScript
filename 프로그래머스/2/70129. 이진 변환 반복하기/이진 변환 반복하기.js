function solution(s) {
    var answer = [];
    let zeroCount = 0;
    let transformCount = 0;
        function Binary(Array){
            if(Array === "1"){
                return;
            }
            transformCount++;
            let StrArray = Array.split("");
            for(let i=0; i<StrArray.length; i++){
                if(StrArray[i] === "0"){
                    StrArray[i] = "";
                    zeroCount++;
                }
            }
            let onesCount = StrArray.join("").length;
            let binaryStr = onesCount.toString(2);
            Binary(binaryStr);
    }
        Binary(s);
        answer = [transformCount, zeroCount];
    return answer;
}