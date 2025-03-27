function solution(array, height) {
    var answer = 0;
    var heights = Array.from(array);
    var filteredHeights = heights.filter(listHeight);
    function listHeight(value) {
        return value > height;
    }
    return filteredHeights.length;
}