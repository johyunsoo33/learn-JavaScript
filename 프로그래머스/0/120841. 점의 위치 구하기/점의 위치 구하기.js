function solution(dot) {
    var answer = Array.from(dot);
    const x = dot[0];
    const y = dot[1];
    var result = 0;
    if(x >0 && y >0){
        result=1;
    }
    else if(x < 0 && y > 0){
        result=2;
    }
    else if(x < 0 && y < 0){
        result = 3;
    }
    else if(x > 0 && y < 0) {
        result =4;
    }
    else{
        result=0;
    }
    return result;
}