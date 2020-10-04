import "./css/LinkHeader.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import React from "react";

function LinkHeader() {
  return (
  
      <NavBar expand="lg" id="navBarBtnIniciarSesion">
        <Nav className="ml-auto">
          <Button variant="link" className="text-black" id="btnIniciarSesion" href="/IniciarSesion">
            INICIAR SESIÓN / REGISTRARSE
          </Button>
        </Nav>
      </NavBar>
  );
}
export default LinkHeader;
