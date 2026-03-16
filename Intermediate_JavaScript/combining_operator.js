// && : AND -> only True when both True, else is False
// || : OR -> only False When both False ,else is True
nameUser1 = prompt("What's your name?");
nameUser2 = prompt("What's your name?");
var loveScore = Math.random();
loveScore  *= 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore > 70 ) {
  console.log("Your love score is " + loveScore + "%"+ " You love each other like kanye loves kanye.");
}

if(loveScore > 30 && loveScore <= 70){
  console.log("Your love score is "+ loveScore + "%");
}

if(loveScore <= 30) {
  console.log("Your love score is "+ loveScore + "%" + " You go together like oil and water.");
}
