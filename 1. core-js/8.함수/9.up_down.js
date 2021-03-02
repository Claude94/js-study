const gameData = {
    secretNumber: Math.floor(Math.random() * 100) + 1,
    min:1,
    max:100,
    count:0,
    countDown:6
}
//무한 루프 종료를 확인하는 함수
function isGameFinish () {
    return inputNumber();
}
//사용자 입력을 수행하는 함수
function inputNumber() {
    
    const {min,max};
    gameData.answer = +prompt(`숫자를 입력하세요${min}~${max}`);
    
    gameData.count++;
    gameData.countDown--;

    return checkNumber();
}
function chechNumber() {
    
    //객체 드스트럭쳐링 (ES6)
    const {secretNumber, answer, count, countDown, min, max} = gameData;


    if(secretNumber === answer) {
        alert(`정답입니다~ ${count}번 만에 맞췄군요`)
        check
        return true;
    } else if (secretNumber > answer) {
        alert('UP');
        gameData.min = answer;
    } else {
        alert('DOWN');
        gameData.max = answer;
    }
    alertCountDown(countDown);
    return false;
}

//사용자의 남은 카운트다운을 알려주는 함수
function alertCountDown(countDown) {
    if (countDown > 0) {
        alert(`정답 기회 ${countDown}번 남음`);
    } else {
        alert(`정답 기회 모두 소진 문제를 계속 풀어주세요`);
    }
}

(function() {
    alert('up & down 게임 - 1~100사이의 숫자를 맞춰보세요');

    while (true) {
        if (InputNumber()) break;
        
    }
} ());