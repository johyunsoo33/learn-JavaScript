function solution(chicken) {
    var answer = 0;
    const totalChicken = {
        order: chicken,
        sum: function () {
       let currentCoupon = chicken;
            answer = 0;
            while (currentCoupon >= 10) {
                let newService = Math.floor(currentCoupon / 10);
                answer += newService;
                currentCoupon = newService + (currentCoupon % 10);
            }
        }
    };
    totalChicken.sum();
    return answer
}
