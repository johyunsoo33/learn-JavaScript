function solution(n) {
    var answer = 0;
    if (n === 1 || n === 2) return n;
    const dp = [1,2]
      for (let i = 2; i < n; i++) {
          //피보나치 수열도 고려해서 계산한다.
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
      }
    return dp[n - 1];
}