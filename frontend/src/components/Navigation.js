import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import {isLoggedIn, isTeacher, isAdmin, isSuperAdmin, isSocioComercial, isSocioTecnologico, isInvestigator} from './Util/auth';
import "./css/Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Navigation = ({ status }) => {
  let navItems = [
    <>
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
    </>,
  ];
  if (isLoggedIn()) {
    navItems.push(
      <>
        <Nav.Link className="NavItem" href="/Miperfil">
          MI PERFIL
        </Nav.Link>
        <Nav.Link className="NavItem" href="/MisProyectos">
          MIS PROYECTOS
        </Nav.Link>
      </>
    );
  }

  if (
    isLoggedIn() &&
    (isAdmin() ||
      isTeacher() ||
      isSuperAdmin() ||
      isSocioComercial() ||
      isSocioTecnologico() ||
      isInvestigator())
  ) {
    navItems.push(
      <>
        <Nav.Link className="NavItem" href="/CrearProyecto">
          CREAR PROYECTO
        </Nav.Link>
      </>
    );
  }
  return (
    <header className="header sticky-top">
      <NavBar expand="lg" variant="dark" className="navBar">
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="navbarSupportedContent">
          <Nav className="ml-auto ">
            {navItems}
            {/*<Nav.Link className="NavItem" href="/Consultas"> CONSULTAS </Nav.Link>*/}
          </Nav>
        </NavBar.Collapse>
      </NavBar>
    </header>
  );
};
export default Navigation;

/*

import React, { memo } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import "./css/Navigation.css"
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';
import {useHistory, Link } from 'react-router-dom';

function Navigation(props) {
	return (
		<header className="header sticky-top">
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
            <Nav.Link className="NavItem" href="/MisProyectos">
              MIS PROYECTOS
            </Nav.Link>
          </Nav>
        </NavBar.Collapse>
      </NavBar>
    </header>
  );
     
            {props.routes.map(({ path, title }) => (
					<Nav.Link key={path} className="NavItem">
						{title}
					</Nav.Link>
				))}
        
				
					</Nav>
				</NavBar.Collapse>
			</NavBar>
		</header>
	);
}

Navigation.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default Navigation;
*/
