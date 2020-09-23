import "../App.css";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import React from "react";

function Header() {
  return (
    <Jumbotron className="bg-cover darkened-image bg-cover w-100 mb-0">
      <NavBar expand="lg">
        <Nav className="ml-auto">
          <Button variant="link" className="text-white" href="/IniciarSesion">
            INICIAR SESIÓN / REGISTRARSE
          </Button>
        </Nav>
      </NavBar>
    </Jumbotron>
  );
}
export default Header;
