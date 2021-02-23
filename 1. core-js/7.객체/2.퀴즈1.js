//1번 문제
var user = {};
console.log(user);
user.name = 'john';
console.log(user);
user.surname = 'smith';
console.log(user);
user.name = 'pete';
console.log(user);
delete user.name;
console.log(user);

//2번 문제
var salsries = {
    kim : 1000000,
    park : 1600000,
    lee : 13000000
};
var total = 0;
for (var key in salsries) {
    total += salsries[key];
}
console.log(`금여 총합 : ${total}`);