// arrays is a collection of related items in a single container
var guestList = ["Angela" ,"Jack","Pam","James","Lara","Jason"];
console.log(guestList.length); // check the list of array
console.log(guestList[0]); // get the item in an array

var findGuest = prompt("What's your name? ");
if (guestList.includes(findGuest)) {
  console.log("welcome");
} else {
  console.log("Sorry maybe next time.");
}