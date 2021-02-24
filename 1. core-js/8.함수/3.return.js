function add(n1, n2) {
    return n1 + n2;
    var res = n1 - n2;
}

function sub(n1, n2) {
console.log(`${n1} - ${n2} = ${n1-n2}`);
}
console.log('========================================');
var res1 = add(add(5,5), add(add(10, 10), add(50, 5)));
console.log(res1);
console.log('========================================');

sub(add(add(5,5), add(add(10, 10), add(50, 5))), 10);

var res = sub(30, 17);
console.log(res);

var result = add(5, 8);
var result2 = add(result, result * 2);
console.log(result2);