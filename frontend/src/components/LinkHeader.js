import './css/LinkHeader.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import React from 'react';
import { isLoggedIn, LogOut } from './Util/auth';

function LinkHeader() {
	let button;
	if (isLoggedIn()) {
		button = (
			<Button variant="link" className="logout" onClick={LogOut} id="btnIniciarSesion">
				CERRAR SESIÓN
			</Button>
		);
	} else {
		button = (
			<Button
				variant="link"
				className="text-black"
				onClick={isLoggedIn}
				id="btnIniciarSesion"
				href="/IniciarSesion"
			>
				INICIAR SESIÓN / REGISTRARSE
			</Button>
		);
	}

	return (
		<NavBar expand="lg" id="navBarBtnIniciarSesion">
			<Nav className="ml-auto">{button}</Nav>
		</NavBar>
	);
}
export default LinkHeader;
