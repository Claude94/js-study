var tall = +prompt("신장을 입력하세요.");
var age = +prompt("나이를 입력하세요");
// 디버깅
console.log(`${tall}, ${age}`);

if (age >= 8 && tall >= 140) {
    alert("놀이기구에 탑승할 수 있습니다");
} 
else {
    alert("놀이기구에 탑승할 수 없습니다");
}
alert("오늘 하루 즐거운 시간되세요");