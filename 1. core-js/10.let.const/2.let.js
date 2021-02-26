//1.변수 중복 선언 불가능
let x = 100;
//let x = 500;

//2.블록레벨 스코프 지원
if(ture) {
    let y = 100;
    console.log(`if문 내부: ${y}`);
}
// console.log(`if문 내부: ${y}`);

//3.변수 호이스킹이 발생하지 않음
z = 10;
console.log(z);

let z;