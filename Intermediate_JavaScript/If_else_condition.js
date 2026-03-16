nameUser1 = prompt("What's your name?");
nameUser2 = prompt("What's your name?");
var loveScore = Math.random();
loveScore  *= 100;
loveScore = Math.floor(loveScore) + 1;
if(loveScore > 70) {
  console.log("Your love score is " + loveScore + "%" + " You love each other like Kanye loves Kanye");
} else {
  console.log("Your love score is " + loveScore + "%");
}
