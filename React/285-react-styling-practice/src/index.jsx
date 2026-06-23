//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
import React from "react";
import ReactDOM from "react-dom";

const changeColor = {
  color: "red",
}
const time = new Date().getHours();
console.log(time)
if (time >= 0 && time <12){
  changeColor.color="red";
  ReactDOM.render(<h1 className="heading" style={changeColor}>Good Morning</h1>, document.getElementById("root"));
} else if(time >=12 && time <18){
  changeColor.color="green";
  ReactDOM.render(<h1 className="heading" style={changeColor}>Good Afternoon</h1>, document.getElementById("root"));
} else {
  changeColor.color="blue";
  ReactDOM.render(<h1 className="heading" style={changeColor}>Good Evening</h1>, document.getElementById("root"));
}

