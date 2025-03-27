function solution(arr1, arr2) {
    var answer = 0;
    var arrInt1 = 0;
    var arrInt2 = 0;
    if(arr1.length > arr2.length){
        answer = 1;
    }
    else if(arr1.length == arr2.length){
        for(let i=0; i<arr1.length; i++){
            arrInt1 += arr1[i];
        }
        for(let i=0; i<arr2.length; i++){
            arrInt2 += arr2[i];
        }
        if(arrInt1 > arrInt2){
            answer = 1;
        }
        else if(arrInt1 < arrInt2){
            answer = -1;
        }
        else{
            answer = 0;
        }
    }
    else if(arr2.length > arr1.length){
        answer = -1;
    }
    return answer;
}