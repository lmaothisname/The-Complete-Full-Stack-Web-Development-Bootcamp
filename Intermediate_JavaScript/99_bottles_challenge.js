var number = 100;

function bottles99() {
  while(number > 0) {
    number--;
    if (number === 0) {
      console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
    }else {
      console.log(number +" bottles of beer on the wall, " + number+" bottles of beer.\nTake one down and pass it around, "+ number+ " bottles of beer on the wall.");
    }
  }
}

bottles99()