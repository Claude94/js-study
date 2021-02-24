var user = {
    kim1234: 'kkk1234',
    lee4567: 'lll4567',
    park9876: 'ppp9876'
}
while (true) {
    var id = prompt('아이디를 입력하세요.');
    if (id in user) {
        var pw = prompt('비밀번호를 입력하시요');
        if (user[id] === pw) { // 객체변수의 이름에 따른 
                    //[키 값]이 가지고 있는 벨류값을 출력
            alert('로그인 성공');
            break;
        } else {
            alert('다시 로그인 해주세요');
        }
    } else {
        alert('그런 아이디는 존재 하지 않습니다');
    }
}