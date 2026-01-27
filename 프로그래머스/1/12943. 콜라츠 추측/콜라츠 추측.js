function solution(num) {
    var answer = 0;
    let count = 0;
    if (num === 1) {
        return count = 0;
    }
     while(num !== 1){
         if(num % 2 === 0){
             num = Math.floor(num / 2);
         }else if(num % 2 !== 0){
             num = (num*3)+1;
         }
         count++;
         if(count >=500){
                          return count = -1;
             break;

         }
     }
    return count;
}