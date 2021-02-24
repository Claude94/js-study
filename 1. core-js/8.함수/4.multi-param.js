//2대의 정수의 합을 구하는 함수
function add(n1, n2) {
    return n1 + n2;
}
//n개의 정수의 합을 구하는 함수
// spread: ES6 베얄문법
function addAll(name,...number) {
    console.log((`${name}님 안녕~`));
    var total = 0;
    for (var num of number) {
        total += num;
    }
    return total;
}

var results = addAll('고길동', 10, 20, 30);
console.log(results);
