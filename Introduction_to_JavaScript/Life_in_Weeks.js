function lifeInWeeks(age) {
/************Don't change the code above************/    
    
  //Write your code here.
  var days = 32850 - (age * 365);
  var weeks = 4680 - (age * 52);
  var months = (90 * 12) - (age * 12);
  console.log("You have " + days + " days, " + weeks + " weeks," + " and " + months +" months left.");
    
    
    
/*************Don't change the code below**********/
}

lifeInWeeks(56);