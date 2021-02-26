// 1.중복선언을 허용한다.
var x = 1;
var x = 100;
// 2.블록레벨 스코프를 지원하지 않음
var i ='안녕';

for (var i = 0; i < 10; i++) {}

console.log(`i: ${i}`);
// 3.변수 호이스팅
y = 100;
console.log(`y : ${y}`);
var y;
