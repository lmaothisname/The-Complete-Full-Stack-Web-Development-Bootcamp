import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200"
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">My Favourite Foods</h1>
    <div>
      <img className="car-img" src="https://cms-i.autodaily.vn/du-lieu/2019/12/21/bmw-s1000rr-2020-6.jpg" alt="bmw s1000rr" />
      <img className="car-img" src="https://mcn-images.bauersecure.com/wp-images/4952/1440x960/honda_fireblade_01.jpg?mode=max&quality=90&scale=down" alt="honda cbr1000rrr" />
      <img className="car-img" src="https://cms-i.autodaily.vn/du-lieu/2017/11/11/Ducati%20Panigale%20V4/ducati-panigale-v4-23.jpg" alt="ducati v4s" />
      <img src={img + "?grayscale"} alt="random" />
    </div>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
