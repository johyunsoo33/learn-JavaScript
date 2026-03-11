function solution(progresses, speeds) {
    let days = [];

    for(let i = 0; i < progresses.length; i++){
        let day = Math.ceil((100 - progresses[i]) / speeds[i]);
        days.push(day);
    }
    for(let j=0; j<days.length; j++){
        if(days[j] > days[j+1]){
            days[j+1] = days[j]
        }
    }
    const count = {};
    for (let val of days) {
        count[val] = (count[val] || 0) + 1;
    }

    const answer = Object.values(count);

    return answer;
}