import "./css/Header.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Img from "../assets/Picture1.png";
import React from "react";

function Header() {
  return (
    <Jumbotron
      className="bg-cover darkened-image bg-cover w-100 mb-0"
      style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
    >
      <Image className="logo" src={Img} alt="digital-hub logo"/>
    </Jumbotron>
  );
}
export default Header;
