function solution(s) {
    var answer = 0;
    const arr = s.split('');
    const n = arr.length;
    function isValid(arr) {
    const stack = [];
    
    for (let ch of arr) {
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        } else {
            const top = stack.pop();
            if (ch === ')' && top !== '(') return false;
            if (ch === ']' && top !== '[') return false;
            if (ch === '}' && top !== '{') return false;
        }
    }
    
    return stack.length === 0;
}
    
    for (let x = 0; x < n; x++) {
        if (isValid(arr)) answer++;
        
        arr.push(arr.shift());
    }
    
    return answer;
}