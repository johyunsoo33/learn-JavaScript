function solution(nums) {
    var answer = 0;
    nums.sort((a, b) => a - b);
    const maxSelect = nums.length / 2;
    let typeSelect = 0;
    for (let i=0; i<nums.length; i++){
        if(nums[i] !== nums[i-1]){
            typeSelect++;
        }
    }
   return Math.min(typeSelect, maxSelect);
}