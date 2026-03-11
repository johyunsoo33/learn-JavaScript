function solution(a, b) {
    var answer = '';
    const dayArr = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let date = new Date();
    let year = date.setFullYear(2016);
    let month = date.setMonth(a-1);
    let day = date.setDate(b);
    let dayofWeek = date.getDay()
    let arrString = dayArr[dayofWeek]
    return arrString;
}