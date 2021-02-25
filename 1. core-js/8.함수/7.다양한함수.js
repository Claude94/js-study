//기본형태 : 함수 정의문
function add1(n1, n2) {
    return n1 + n2;
}
// 함수 리터럴: 함수 표현식
var add2 = function (n1, n2) {
    return n1 + n2;
};
//화살표 함수(ES6) : 함수 이터럴의 람다식형태
var add3 = (n1, n2) => {
    return n1 + n2;
};
var add4 = (n1, n2) => n1 + n2

console.log(add1(5, 5));
console.log(add2(5, 5));
console.log(add3(5, 5));
console.log(add4(5, 5));


var greeting2 = (n) => console.log('hollo~');

//즉시 실행 함수
(function (x, y) {
    console.log(`x + y = ${x + y}`);
}(60, 70));

//재귀 함수
function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1);
}
countdown(5);

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

//중첨 함수
// inner는 outer안에서 밖에 호출 할 수 있다.
function outer() {
    var x = 1;

    function inner() {
        var y = 2;
        console.log(x + y);

    }
    inner();
}

outer();

//콜백 함수
