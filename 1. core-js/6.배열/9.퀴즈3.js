var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];
// if (tvxq.length === 0) {
//     break;
// } 전부 지우고 종료 할 때
while (true) {
    var delName = prompt(`[${tvxq}] \n중 삭제할 멤버의 이름을 입력해주세요`);
    var findName = tvxq.indexOf(delName);
    if (findName >= 0) {
        if (confirm(`${delName}: 정말로 삭제 하겠습니까?`)); {
            tvxq.splice(findName, 1);
            alert(`${delName}을 삭제하였습니다 \n 남은 멤버 : [${tvxq}]`);
            break;
        }
    } else {
        alert(`${delName}은 잘못된 이름입니다`);
    }
}