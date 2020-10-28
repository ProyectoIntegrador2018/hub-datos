import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Error from './Error';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import URI from './URI';
import ResetPassForm from './components/ResetPassForm';

function checkInputs(password, confirmation) {
	if (password !== '' && confirmation !== '' && password === confirmation) {
		return true;
	}
	return false;
}

function ResetearContraseña(props){
	const [password, setPassword] = useState('');
	const [confirmation, setConfirmation] = useState('');
	//const [error, setError] = useState("");
	const [passMatch, setPassMatch] = useState('');
	let history = useHistory();
	
	const _handleClick = (e) => {
		e.preventDefault();
		var cadena = props.location.search;
		var token = cadena.substr(7)
		if (checkInputs(password, confirmation)) {
			console.log(password)
			return axios
				.put(`${URI.base}${URI.routes.resetPassword}${token}`,{password})
				.then((response) => {
					history.push('/IniciarSesion');
				})
				.catch((error) => {
					if (error.response) {
						//   setCertificate(false);
						return toast.error(error.response.data.message);
					} else return toast.error(error.message);
				});
		} else {
			toast.error('Las contraseñas no coinciden');
		}
	};

	const _handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			_handleClick(e);
		}
	};

	const recoveryForm = (
		<ResetPassForm
			_handleClick={_handleClick}
			_handleKeyDown={_handleKeyDown}
			setPassword={setPassword}
			setConfirmation={setConfirmation}
		/>
	);

	return (
		<div>
			<ToastContainer draggable={false} autoClose={6000} />
			<Card.Body>
				{recoveryForm}
			</Card.Body>
			<p className="error">{passMatch}</p>
		
		</div>
	);
};

export default ResetearContraseña;
