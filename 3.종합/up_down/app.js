//게임에 필요한 데이터 객체
const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1,
    answer: null,
    min: 1,
    max: 100
};

//숫자 아이콘 생성 함수
function makerNumberIcons() {

    const $numbers = document.getElementById('numbers');
    const $frag = document.createDocumentFragment();
    for (let i = gameDatas.min; i <= gameDatas.max; i++) {
        const $icon = document.createElement('div');
        $icon.classList.add('icon');
        $icon.textContent = i;
        $frag.appendChild($icon);
    }
    $numbers.appendChild($frag);
    return $numbers;
    //정답을 판별해주는 함수 정의
}

function checkAnswer($numbers) {
    //객체 디스트럭쳐링

    const {
        secret,
        answer
    } = gameDatas;

    const $begin = document.getElementById('begin');
    const $end = document.getElementById('end');

    if (secret === answer) {

    } else if (secret < answer) {
        //다운인 경우
        gameDatas.max = answer - 1;
        $end.textContent = answer;
    } else {
        //업인 경우
        gameDatas.min = answer + 1;
        $begin.textContent = answer;
    }
}
//아이콘 전체 삭제 함수 정의
function clearNumberIcons($numbers) {
    for (let $icon of [...$numbers.children]) {

    }
}
makerNumberIcons();
//핵심 실핼 로직 즉시 함수
(function () {
    const $numbers = makerNumberIcons();
    //숫자 아이콘 클릭 이벤트
    $numbers.addEventListener('click', e => {
        if (!e.target.maches('#numbers > .icon')) {
            return;
        }
        // console.log(`${e.target.textContent}가 클릭됨`);
        gameDatas.answer = +e.target.textContent;
        // console.log(gameDatas);

        //정답 체크 함수
        checkAnswer($numbers);
    });
}());