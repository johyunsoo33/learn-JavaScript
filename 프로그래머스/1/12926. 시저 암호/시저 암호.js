function solution(s, n) {
    const strArray = s.split("");
    
    for(let i = 0; i < strArray.length; i++) {
        const char = strArray[i];
        
        if (/[a-z]/.test(char)) {
            const code = char.charCodeAt(0) - 97;
            const newCode = (code + n) % 26;
            strArray[i] = String.fromCharCode(97 + newCode);
        } 
        else if (/[A-Z]/.test(char)) {
            const code = char.charCodeAt(0) - 65;
            const newCode = (code + n) % 26;
            strArray[i] = String.fromCharCode(65 + newCode);
        }
    }
    
    return strArray.join("");
}