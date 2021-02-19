//1~10까지의 총합을 구하는 로직
var total = 0;
var n = 1; //제어변수
while (n <= 10) {
    total += n; //반복 실행문
    n++; //제어변수 증감식
}
console.log(`총합: ${total}`);

// 7~100사이의 정수중 7의 배수를 모두 출력하기
var num = 7;
while (num <= 100) {
    console.log(num);
    num += 7;
}

console.log('==============================');
// 1~78 사이의 정수 중 13의 부수 모두 출력하기
num = 1;
while (num <= 78) {
    if (num % 13 === 0) {
        console.log(num);
    }
    num++;
}
console.log('==============================');
num = 1;
while (num <= 100) {
    if (num % 6 === 0 && num % 12 !== 0) {
        console.log(`1~100상이의 정수 중 6의 배수이면서 12의 배수가 아닌 수: ${num}`);
    }
    num++
}
console.log('==============================');
num = 1;
var count = 0;
while (num <= 4000) {
    if (num % 9 === 0) {
        count++;
    }
    num++
}
console.log(`범위 내의 9의배수의 개수: ${count}`);