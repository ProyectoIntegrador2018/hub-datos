import "./css/Header.css";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import React from "react";


function Header() {
  return (
    <Jumbotron
      className="bg-cover darkened-image bg-cover w-100 mb-0"
      style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
    >
    </Jumbotron>
  );
}
export default Header;