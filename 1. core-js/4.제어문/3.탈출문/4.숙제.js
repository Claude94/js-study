var oscore = 0, xsocre = 0;
while (true) {
    var num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    var num2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    var trueasr = num1 + num2;
    var userasr = +prompt(`${num1} + ${num2} = ???`);
    if (userasr === trueasr) {
        alert(`${userasr}는 정답입니다.`);
        oscore++;
    } else if (userasr === 0) {
        alert("시험을 종료합니다");
        break;
    } else {
        alert(`${userasr}는 정답이 아닙니다.`);
        xsocre++;
    }
}
alert(`정답 횟수 : ${oscore}, 오답 횟수 : ${xsocre}`);
