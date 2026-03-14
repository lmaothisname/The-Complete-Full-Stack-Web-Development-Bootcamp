function getMilk(moneys) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + calcBottles(moneys,1.5) + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return calcChange(moneys,1.5);

} 

function calcBottles(startingMoney,costPerBottles) {
  var numberOfBottles = Math.floor(startingMoney / costPerBottles);
  return numberOfBottles
}

function calcChange(startingAmount, costPerBottles) {
  var change = startingAmount % costPerBottles
  return change
}

console.log("Hello master ,here is your " + getMilk(5));