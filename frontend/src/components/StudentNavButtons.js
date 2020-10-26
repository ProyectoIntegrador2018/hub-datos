import Button from 'react-bootstrap/Button';
import "./css/LinkHeader.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import "./css/Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";


const StudentNavButtons = ({ userId,loggedIn, _logout }) => {
    const accountLink = `/account/?accountId=${userId}`
    const loggedInButtons = (
        <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="/my-projects">Mis proyectos</Nav.Link>
            <Nav.Link href={accountLink}>My Account</Nav.Link>
            <Button variant="outline-info" href="/" className="ml-3" onClick={_logout}>Log out</Button>
        </Nav>
    );
    
    const loggedOutButtons = (
        <NavBar expand="lg" id="navBarBtnIniciarSesion">
        <Nav className="ml-auto">
          <Button variant="link" className="text-black" id="btnIniciarSesion" href="/IniciarSesion">
            INICIAR SESIÓN / REGISTRARSE
          </Button>
        </Nav>
      </NavBar>
    );

    return loggedIn ? loggedInButtons : loggedOutButtons;
}

export default StudentNavButtons;