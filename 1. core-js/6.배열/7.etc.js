var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치'];

//indexOf() : 배열 요소의 인텍스를 알려줌.
var idx = foods.indexOf('김말이'); //탐색 실패시 -1을 변환
console.log(`찾은 인덱스 : ${idx}`);

//includes() : 배열 요소의 존재 여부 확인
var result = foods.includes('김말이');
console.log(`탐색 결과 : ${result}`);

//slice() : 배열을 잘라냄 복사 추출
console.log('==============================');

var arr = [0,1,2,3,4,5,6,7,8,9];
var slicedArr = arr.slice(3, 7);
console.log(slicedArr);

console.log(foods);
console.log(foods.slice(1, 3));

console.log(arr.slice(6)); //6번 부터 끝까지 잘라냄

console.log(arr); //원본은 변하지 않는다.

// arr = arr.slice(5);

// recerse() : 배열을 역순으로 재배치, 원본을 변화시킴
var copyArr = arr.slice(0); //원본 복사
copyArr.reverse();

console.log(copyArr);

//join() : 배열의 요소들은 연결한 문자열로 변환
var foodStr = foods.join("!!");
console.log(foodStr);

//concat() : 배열을 결합
var arr1 = [10, 20, 30];
var arr2 = [100, 300, 500];

var concatArr = arr1.concat(arr2);
console.log(concatArr);  