import React from "react";

function Footer() {
  const getYear = new Date().getFullYear();
  return <footer><p>copyright © {getYear}</p></footer>;
}

export default Footer;