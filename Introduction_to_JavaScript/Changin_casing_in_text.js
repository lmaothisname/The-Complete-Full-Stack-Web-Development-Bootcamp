var userName = prompt("What's your name?");
var firstChar = userName.slice(0,1);
var restOfName = userName.slice(1,userName.length);

alert("Hello, " + firstChar.toUpperCase() + restOfName.toLowerCase());
