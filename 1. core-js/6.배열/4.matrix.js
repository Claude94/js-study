// 2차원 배열
// 우리반 학생들 4과목 점수(국여수탐)관리
// var kim = [67, 89, 92, 32];
// var park = [100, 87, 55, 77];

var ourStudentScores = [
    [67, 89, 92, 32],
    [100, 87, 55, 77],
    [67, 89, 92, 32],
    [100, 87, 55, 77],
    [67, 89, 92, 32],
    [100, 87, 55, 77],
    [67, 89, 92, 32],
    [100, 87, 55, 77],
    [67, 89, 92, 32]
];
console.log(ourStudentScores.length);
console.log(ourStudentScores[2]);
console.log(ourStudentScores[0][2]);

console.log('=====================');
var studentNumder = 0;
// 우리반 평균을 저장할 변수가 필요함
var ourAverages = 0;

//국어점수를 저장할 변수
var korSum = 0;

for (var studentScore of ourStudentScores) {
    korSum += studentScore[0];
    // console.log(studentScore);
    var eachTotal = 0; //한 학생의 4과목 총점을 저장할 변수 
    for (var score of studentScore) {
        eachTotal += scores;
    }
    var eachAverage = eachTotal / studentScore.length; // 한학생의 평균 점수
   ourAverages += eachAverage;
    console.log(`${studentNumder}번 학생 총점 : ${eachTotal}점, 평균: ${eachAverage}`);
    studentNumder++;
}
// 반 평균
var classAverage = ourAverages / ourStudentScores.length;
