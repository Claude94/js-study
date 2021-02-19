while (true) {
    var rn = Math.floor(Math.random() * 6);
    console.log(`랜덤값 : ${rn}`);
    if (rn === 3) {
        console.log("반복문 종료");
        break;
    }
}