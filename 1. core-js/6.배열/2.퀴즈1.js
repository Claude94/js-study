var scores = [70, 70, 70, 80, 80, 90, 90, 100, 33];
var total = 0;
// for (var i = 0; i < scores.length; i++) {
//     total = total + scores[i];
// }
for (var i of scores) {
    total = total + i;
}
var avg = total / (scores.length)
avg = Math.round(avg * 100) / 100;

console.log(`총점 : ${total}`);
console.log(`평균 : ${avg}`);