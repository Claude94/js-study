var oscore = 0,
    xsocre = 0;
while (true) {
    var num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    var num2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    // 부호 랜덤 설정
    var operator = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    if (operator === 1) {
        operator = '+';
    } else if (operator === 2) {
        operator = '-';
    } else if (operator === 3) {
        operator = '*';
    } else {
        operator = '/';
    }
    // 부호별 정답 설정
    var trueasr = 0;
    if (operator === '+') {
        trueasr = num1 + num2;
    } else if (operator === '-') {
        trueasr = num1 - num2;
    } else if (operator === '*') {
        trueasr = num1 * num2;
    } else {
        trueasr = num1 / num2;
    }
    // 출제 문제 설정
    var userasr = +prompt(`${num1} ${operator} ${num2} = ???`);
    // 문제의 답이 맞을 경우
    if (userasr === trueasr) {
        alert(`${userasr}는 정답입니다.`);
        oscore++;
    // 프로그램을 종료 할 경우
    } else if (userasr === 0) {
        alert("시험을 종료합니다");
        break;
    // 문제의 답이 클릴 경우
    } else {
        alert(`${userasr}는 정답이 아닙니다.`);
        var rvg = +prompt("재도전 하겠습니까? (원한다면 : 1 아니라면 : 아무숫자) 를 누르세요.");
        //재시도 유무 결정
        if (rvg === 1) { //재시도 3회 설정
            var rvgoscore = 0;
            var userasr = +prompt(`재시도 : ${num1} ${operator} ${num2} = ???`);
            alert("3번의 기회가 있습니다");
            for (var count = 3; count < 1; count--) {
                if (userasr === trueasr) {
                    alert(`${userasr}는 정답입니다.`);
                    rvgoscore++;
                } else if (userasr === 0) {
                    alert("시험을 종료합니다");
                    break;
                } else {
                    alert(`${userasr}는 정답이 아닙니다.`);
                    alert(`${count}의 기회가 남았습니다`);
                }
            }
        } else {
            alert("기존 문제로 돌아갑니다");
            break;
        }
        xsocre++;
    }
}
alert(`정답 횟수 : ${oscore}, 오답 횟수 : ${xsocre}, 다시 맞춘 횟수 : ${rvgoscore}`);