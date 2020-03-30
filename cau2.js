function tryRemoveFromArray(isInitArray, removeArray, isIntNumber, j) {
    isInitArray = [];
    removeArray = [];
    isIntNumber = Math.floor(Math.random() * 10 - 5);
    j = 0;
    for (let i = 0; i <= Math.floor(Math.random() * 10); i++) {
        isInitArray[i] = Math.floor(Math.random() * 10 - 5);
        if (isInitArray[i] !== isIntNumber) {
            removeArray[j] = isInitArray[i];
            j++;
        }
    }
    console.log(removeArray.length);
    if (removeArray.length === isInitArray.length) {
        document.getElementById('bai2').innerHTML = 'Mảng khởi tạo: ' + isInitArray + '<br>' + 'Số nguyên x khởi tạo: ' + isIntNumber + '<br>' + isIntNumber + ' không thuộc mảng khởi tạo ban đầu';
    } else {
        document.getElementById('bai2').innerHTML = 'Mảng khởi tạo: ' + isInitArray + '<br>' + 'Số nguyên x khởi tạo: ' + isIntNumber + '<br>' + 'Mảng sau khi xóa x: ' + removeArray;
    }
}