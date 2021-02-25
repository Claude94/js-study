function calcDivisor(number) {
    var divCount = 0;
    var measure = [];
    for (var num = 1; num <= number; num++) {
        if (number % num === 0) {
            measure.push(num)
            divCount++;
        }
    }
    console.log(measure);
    return divCount;
    // return measure.length 약수의 갯수 출력

}
var divCount = calcDivisor(24);
console.log(`약수의 개수: ${divCount}개`);