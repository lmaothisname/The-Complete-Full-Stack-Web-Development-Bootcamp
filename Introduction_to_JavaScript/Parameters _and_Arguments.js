// Functions with Inputs allows to pass specific data into a functions when you call it.
// Parameters: when creating the function, we put a name inside the parentheses. -> placeholder variables
// Arguments: when we want to run the function, we put the actual data inside the parentheses.

function getMilk(moneys) {   
  var numberOfBottles = Math.floor(moneys / 1.5);
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + numberOfBottles + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5);