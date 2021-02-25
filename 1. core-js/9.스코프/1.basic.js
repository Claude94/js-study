var x = 'global';

function foo(y) {
    var x = 'local';
    console.log(`x : ${x}`);
}
foo('prameter');
console.log(`x : ${x}`);