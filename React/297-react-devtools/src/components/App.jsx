import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      
      <Avatar 
      img="https://scontent.cdninstagram.com/v/t51.82787-19/706028766_18085116656550512_5756457897954699744_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=101&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDI3LkMzIn0%3D&_nc_ohc=pRSLdG0UDSwQ7kNvwH7Xrzm&_nc_oc=Adoxf4J9mUSorH5y7N85tVVazvaokAJp28-BxkZDT6lo865h8oVpUV2th0V3w0hcyITVGYLPBR1yDlPt9oxkVSUd&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=IARtWNhDSSc7V1CECZRhSQ&_nc_ss=7b6a8&oh=00_Af5TMWnyWKu1mzISALMT2Een5CgoPC0XHUGA44Wx_KHwpA&oe=6A1DCA74"
      />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
