import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <NavBar expand="lg">
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="navbarSupportedContent">
        <Nav className="ml-auto">
          <Nav.Link href="/">INICIO</Nav.Link>
          <Nav.Link href="/Proyectos"> PROYECTOS </Nav.Link>
          <Nav.Link href="/Eventos"> EVENTOS </Nav.Link>
          <Nav.Link href="/NuestraGente"> NUESTRA GENTE </Nav.Link>
          <Nav.Link href="/SobreNosotros"> SOBRE NOSOTROS </Nav.Link>
          <Nav.Link href="/Consultas"> CONSULTAS </Nav.Link>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  );
}
export default Navigation;
