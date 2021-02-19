var rn = Math.floor(Math.random()) * ((9 -2 +1)) + 2;
var num2 = 1;
// for (var num1 = 1; num1 <= 9; num1++) {
//     num2 = num1;
//     console.log(`${rn} X ${num2} = ${rn * num2} `);
// }
var num1 = 1;
while (num1 <= 9) {
    num1++;
    var num2 = num1;
    console.log(`${rn} X ${num2} = ${rn * num2} `);
}