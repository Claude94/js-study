function add(n1, n2) {
    return n1 + n2;
    var res = n1 - n2;
}
//void 함수 : 리턴이 없는 함수
//void 함수는 단독 호출해서 사용할 뿐, 다른 함수의 인자로 전달 할 수 없음
function sub(n1, n2) {
    console.log(`${n1} - ${n2} = ${n1-n2}`);
}

function greeting(nickname) {
    badNick = ['쓰레기', '바보', '양아치'];
    if (badNick.includes(nickname)) {
        console.log('그런 나쁜 말은 하지 마세요');
        return; //탈출문으로 사용가능 하다
        //함수 안에 반복문이 있을때 return을 사용해서 탈출할 수 있지만
        //밑에 코드를 무시한다
    }
    console.log(`${nickname}님 안녕하세요`);
}
greeting('쓰레기');
console.log('========================================');

function operationAll(n1, n2) {
    return {
        plus: n1 + n2,
        minus: n1 - n2
    };
}
var results = operationAll(10, 2);
console.log(results.plus);
console.log(results.minus);

var res1 = add(add(5, 5), add(add(10, 10), add(50, 5)));
console.log(res1);
console.log('========================================');

sub(add(add(5, 5), add(add(10, 10), add(50, 5))), 10);

var res = sub(30, 17);
console.log(res);

var result = add(5, 8);
var result2 = add(result, result * 2);
console.log(result2);