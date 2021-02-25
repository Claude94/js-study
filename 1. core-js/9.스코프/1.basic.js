var x = 'global';//전역 변수

function foo(y) { //지역 변수 콜이 끝나면 값이 사라진다
    var x = 'local';
    console.log(`x : ${x}`);
}
foo('prameter');
console.log(`x : ${x}`);