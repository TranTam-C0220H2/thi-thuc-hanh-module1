function findMax(testScore, maxScore) {
    testScore = [];
    maxScore = -1;
    for (let i = 0; i <= Math.floor(Math.random() * 10); i++) {
        testScore[i] = Math.floor(Math.random() * 11);
        if (testScore[i] > maxScore) {
            maxScore = testScore[i];
        }
    }
    document.getElementById('bai1').innerHTML = 'Danh sách điểm đầu vào: ' + testScore + '<br>' + 'Điểm cao nhất trong danh sách: ' + maxScore;

}