import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import StudentNavButtons from "./StudentNavButtons"
import { getUserId, deleteToken, deleteUserId } from "../LoginData";
import { useHistory } from "react-router-dom";
import "./css/Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Navigation = ({status})=> {
  let history = useHistory();
  const logout = _ => {
      deleteToken();
      deleteUserId();
      history.push("/");
  }
  return (
    <header class="header sticky-top">
      <NavBar expand="lg" variant="dark" className="navBar">
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="navbarSupportedContent">
          <Nav className="ml-auto ">
            <Nav.Link className="NavItem" href="/">
              INICIO
            </Nav.Link>
            <Nav.Link className="NavItem" href="/Proyectos">
              {" "}
              PROYECTOS{" "}
            </Nav.Link>
            <Nav.Link className="NavItem" href="/Eventos">
              {" "}
              EVENTOS{" "}
            </Nav.Link>
            <Nav.Link className="NavItem" href="/NuestraGente">
              {" "}
              NUESTRA GENTE{" "}
            </Nav.Link>
            <Nav.Link className="NavItem" href="/SobreNosotros">
              {" "}
              SOBRE NOSOTROS{" "}
            </Nav.Link>
            {/*<Nav.Link className="NavItem" href="/Consultas"> CONSULTAS </Nav.Link>*/}
          </Nav>
          <StudentNavButtons userId={getUserId()} loggedIn={status} logout={logout} />
        </NavBar.Collapse>
      </NavBar>
    </header>

  );
}
export default Navigation;
