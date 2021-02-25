var calcNumberTotalAndAverage = (...number) => {
    var total = 0;
    for (var num of number) {
        total += num;
    }   console.log(total);
    var avg = total / number.length
    console.log(avg);
    return {
        total,
        avg
    };
}

// function calcNumberTotalAndAverage(...number) {
//     var total = 0;
//     for (var num of number) {
//         total += num;
//     }   console.log(total);
//     var avg = total / number.length
//     console.log(avg);
//     // return {
//     //     total: total,
//     //     avg : avg
//     // };
//     // ES6 문법
//     return {
//         total,
//         avg
//     };

// }

var result = calcNumberTotalAndAverage(90, 80, 100, 90);
console.log(`총합: ${result.total}, 평균: ${result.avg}`);