import React , { useState } from "react";

function App() {
  const [toDoWork, setToDoWork] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    setToDoWork(event.target.value);
  }

  function handleClick() {
    setItems(prevItems => [...prevItems, toDoWork])
    setToDoWork("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={toDoWork}/>
        <button type="button" onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
          {items.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
