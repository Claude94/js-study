// 정답 회수 오답 횟수 저장변수
var correctCount = 0, correctCount = 0;
while (true) {
    // 1이상 100이하의 랜덤 정수
    var first = Math.floor(Math.random() * (100)) + 1;
    var second = Math.floor(Math.random() * (100)) + 1;

    // 0 1 2 의 랜덤정수 생성
    var operatorMark = Math.floor(Math.random() * 3);

    var operatorMark;
    if(operatorMark === 0) {
        operatorMark = '+';
    } else if (operatorMark === 1) {
        operatorMark = '-';
    } else {
        operatorMark = '*';
    }

    // 사용자가 입력한 답
    var userAnwser = +prompt(`${first} ${operatorMark} ${second} = ??`);

    // 탈출 조건
    if (userAnwser === 0) {
        break;
    }

    // 실제 정답
    var realANswer;
        if (operatorMark === '+') {
            realANswer = first + second;
        } else if (operatorMark === '-') {
            realANswer = first - second;
        } else {
            realANswer = first * second;
        }

    // 정오답 판별
    if (userAnwser === realANswer) {
        alert('정답 입니다');
        correctCount++;
    
    } else {
        alert('오답 입니다');
        incorrectCount++;
    }
} //end while

alert (`프로그램이 종료 되었습니다 # 정답 횟수 ${correctCount}회, 틀린 횟수 ${incorrectCount}회`);