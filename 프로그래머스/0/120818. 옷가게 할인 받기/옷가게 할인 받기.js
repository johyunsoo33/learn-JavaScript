function solution(price) {



     var answer = price >= 500000 ? price * 0.80 : price >= 300000 ? answer = price * 0.90 : price >= 100000 ? price * 0.95 : price ;
   return Math.floor(answer); 
}