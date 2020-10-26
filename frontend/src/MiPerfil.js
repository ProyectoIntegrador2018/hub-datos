
import React from "react";
import "./App.css";
import jwtDecode from 'jwt-decode';
import { isLoggedIn, LogOut } from './components/Util/Auth';

function MiPerfil() {
	let nameheader;
	let token = localStorage.getItem('token');
	let decoded = jwtDecode(token);
	let name = decoded.nombre;
	if (isLoggedIn()) {
		nameheader = <p> Hola {name}</p>;
  } 	
  return (
    <div className="container">
     <h1>{nameheader}</h1>
    </div>
  );
}

export default MiPerfil;
