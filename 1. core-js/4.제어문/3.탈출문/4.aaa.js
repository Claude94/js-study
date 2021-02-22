var testnum1 = Math.floor(Math.random() * 101);
var testnum2 = Math.floor(Math.random() * 101);
var count = 3;
var onemore = 0;
while (true) {
    var questions = +prompt(`${testnum1} + ${testnum2} = 정답을 입력하세요. : `);
    var onemorenum1 = testnum1;
    var onemorenum2 = testnum2;
    var answer = testnum1 + testnum2;
    if (questions === answer) {
        alert(`${questions}은 정답입니다.`);
    } else if (questions !== answer) {
        alert(`${questions}은 정답이 아닙니다.`);
        while (onemore < 3) {
            var questions2 = +prompt(`${onemorenum1} + ${onemorenum2} = 정답을 입력하세요. : `);
            onemore++;
            count--;
                if (questions2 === answer) {
                    alert(`${questions2}은 정답입니다`);
                    break;
                }
                else if (questions2 !== answer) {
                    alert(`한번더 풀어 보세요 (${count}의 기회가 남았습니다)`);
                    break;
                }
            }
        }
    if (questions === 0) break;
}