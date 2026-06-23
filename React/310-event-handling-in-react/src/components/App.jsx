import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  const [color, setColor] = useState({ backgroundColor: 'white' })
  
  function handleClick() {
    setHeadingText("Submitted");
  }

  function hoverButton() {
    setColor({ backgroundColor: 'black'});
  }

  function unhoverButton() {
    setColor({ backgroundColor: 'white'});
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={color} onClick={handleClick} onMouseOver={hoverButton} onMouseOut={unhoverButton}> Submit</button>
    </div>
  );
}

export default App;
