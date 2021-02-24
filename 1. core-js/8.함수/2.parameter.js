// begin부터 end까지의 통합을 구해주는 함수
function calRangeTotal(begin, end) {
    console.log(begin);
    console.log(end);
    var total = 0;
    for (var n = begin; n <= end; n++) {
        total += n;
    }
    return total;

}
console.log('====================================');
function sayHollo(language='한국어') {
    // ES5
    // language = language || '한국어';
    if (language === '한국어') {
        console.log('안녕하세요');
    } else if (language === '영어') {
        console.log('헬로');
    } else if (language === '일본어') {
        console.log('콘니치와');
    }
}
function selectRandomFood() {
    var rn = Math.random();
    return rn > 0.5 ? '짜장면' : '짬뽕';
}

console.log (selectRandomFood());
function multiply(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        console.log('숫자를 전달하세요');
        return;
    }
    return n1 * n2;
}
var res = multiply('안녕', 20);
console.log('====================================');
console.log(res);

sayHollo();

// 함수 호출
console.log('====================================');
var result = calRangeTotal(5, 11, 40);
console.log(result);