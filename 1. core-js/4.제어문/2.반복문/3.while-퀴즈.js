var num1 = +prompt("첫번째 정수를 입력하세요");
var num3 = num1;
var num2 = +prompt("두번째 정수를 입력하세요");
var total = 0;
while(num1 <= num2) {
     total += num1;
    num1++;
}
alert(`${num3}부터 ${num2}까지의 합은: ${total}`);