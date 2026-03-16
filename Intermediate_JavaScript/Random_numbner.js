var n = Math.random(); // [0,1) -> 0 - 0,999999999999
n = n * 6; // [0,6)
n = Math.floor(n) + 1; // [1,7) but have floor so it will round become [1,6]
console.log(n);

nameUser1 = prompt("What's your name?");
nameUser2 = prompt("What's your name?");
var loveScore = Math.random();
loveScore  *= 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);