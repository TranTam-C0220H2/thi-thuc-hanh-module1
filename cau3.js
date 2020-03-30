function isFibonacci(isIntNumber, arrayFibonacci) {
    isIntNumber = +prompt('Nhập số nguyên: ');
    arrayFibonacci = Array();
    arrayFibonacci[0] = 0;
    arrayFibonacci[1] = 1;
    if (Number.isInteger(isIntNumber)) {
        if (isIntNumber < 0) {
            alert(false);
        } else if (isIntNumber === 0 || isIntNumber === 1) {
            alert(true)
        } else {
            for (let i = 2; i < Infinity; i++) {
                arrayFibonacci[i] = arrayFibonacci[i - 1] + arrayFibonacci[i - 2];
                if (arrayFibonacci[i] === isIntNumber) {
                    alert(true);
                    break;
                } else if (arrayFibonacci[i] > isIntNumber) {
                    alert(false);
                    break;
                }
            }
        }
    } else {
        alert(false);
    }
}