var greeting;
greeting = "hello"; //홑따옴표
greeting = '안녕하세요'; //겹따옴표
greeting = `니하오`; //백틱

console.log(typeof greeting);

var exStr = '그는 나에게 "위험해" 알고 말했다.'
console.log(exStr);

exStr = "Let's go!"
console.log(exStr);

var exStr = '그는 나에게 \"위험해\" 알고 말했다.'
console.log(exStr);
// 홑따옴표의 특징은 엔터를 입력하면 에러가 발생한다
var temp = '';
// 백틱의 특징은 엔터를 사용해도 홑따옴표와는 다르게 인식이 가능하다
var temp = ``;

var month = 12;
var day = 25;
var anniversary = '크리스마스';
// 백틱에서는 ${}를 사용하여 +의 의미를 가질 수 있다.
console.log(`${month}월 ${day}일은 ${anniversary}입니다`);

console.log(100 + 200);
console.log('100' + '200');

