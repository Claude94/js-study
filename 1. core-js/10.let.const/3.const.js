let x;
console.log(x);
//const 선언과 동시에 초기화 해야한다
// const x; //const는 상수이기 때문에 대입이 불가능 하다
console.log(x);// 상수의 이르은 관례적으로 대문자로만 지정(_스네이크 케이스)

//const와 객체(객체, 배열, 함수)
const person = {
    name: 'park',
    age: 20
};
person.name = 'kim';
console.log(person);