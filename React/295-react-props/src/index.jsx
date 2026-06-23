import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
       <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.mail}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card 
      name="Max Verstappen" 
      img="https://img.redbull.com/images/c_crop,x_1007,y_0,h_2646,w_1985/c_fill,w_450,h_600/q_auto,f_auto/redbullcom/2024/11/24/nrqoxx9as35r5ry8ashm/max-verstapen-2024-f1-world-champion-four"
      tel="+123 456 789"
      mail="verstappen@racingbull.com"
    />

    <Card 
      name="Charles Leclerc" 
      img="https://cdn-9.motorsport.com/images/amp/Y99DD47Y/s6/charles-leclerc-scuderia-ferra.jpg"
      tel="+987 654 321"
      mail="charles@ferrari.com"
    />

    <Card 
      name="Oscar Piastri" 
      img="https://cdn-8.motorsport.com/images/amp/68yqP9G0/s6/oscar-piastri-mclaren.jpg"
      tel="+987 654 321"
      mail="oscar@mclaren.com"
    />

    <Card 
      name="Kimi Antonelli" 
      img="https://imageio.forbes.com/specials-images/imageserve/6931d6a241cb3464d229ffb2/0x0.jpg?format=jpg&crop=1346,1347,x278,y39,safe&height=416&width=416&fit=bounds"
      tel="+987 654 321"
      mail="antonelli@mercedes.com"
    />
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
