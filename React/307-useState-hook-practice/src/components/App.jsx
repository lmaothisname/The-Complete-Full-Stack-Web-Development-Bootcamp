import React from "react";
import { useState } from "react";

function App() {
  const [time, setTime] = useState("");
  console.log(time);
  function updateTime() {
    setTime(new Date().toLocaleTimeString().split(" ")[0]);
    
  }
  setInterval(changeTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
