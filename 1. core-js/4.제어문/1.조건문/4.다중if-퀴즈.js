var input = +prompt("정수를 입력하세요");

if (input === 0) {
    alert("입력한 숫자는 0입니다");
} else if (input % 7 === 0) {
    alert("입력한 숫자는 7의 배수 입니다");
} else {
    alert("입력하신 숫자는 7의 배수가 아닙니다");
}