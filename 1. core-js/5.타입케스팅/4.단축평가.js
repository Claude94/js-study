// OR연산
console.log('hellow' || 'world');
console.log(0 || '안녕');
console.log('잘가' || 123);

// AND연산
console.log('hellow' && 'world');
console.log(0 && '안녕');
console.log('잘가' && 123);

// 응용예시
var x = 10
// if (x > 0) {
//     console.log('x는 0보다 큽니다.');
// }
x > 0 && console.log('x는 0보다 큽니다.');