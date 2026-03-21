function solution(babbling) {
    var answer = 0;
      const regex = /^(?!.*(aya|ye|woo|ma)\1)(aya|ye|woo|ma)+$/; //패턴 만들기(연속적으로 같은 문자가 이어서 사용됬는지 검증하는것을 포함해서)
    //^...$ → 문자열 전체가 패턴으로만 이뤄져야 한다는 조건
    for(let i=0; i<babbling.length; i++){
        if (regex.test(babbling[i])) { // test함수는 RegExp에서 사용되는 매서드 인데 이건 실제로 패턴으로만 이뤄진건지 아닌지 판단한다
            answer++;
    }
    }
    return answer;
}