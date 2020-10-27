import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Error from './Error';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useHistory } from 'react-router-dom';
import URI from './URI';
import ResetPassForm from './components/ResetPassForm';

function checkInputs(password, confirmation) {
	if (password !== '' && confirmation !== '' && password === confirmation) {
		return true;
	}
	return false;
}

const AccountRecovery_Password = () => {
	const [password, setPassword] = useState('');
	const [confirmation, setConfirmation] = useState('');
	//const [error, setError] = useState("");
	const [passMatch, setPassMatch] = useState('');
	let history = useHistory();

	let location = useLocation();
	const queryString = require('query-string');
	let parsed = queryString.parse(location.search);
	let { token } = parsed;

	const _handleClick = (e) => {
		e.preventDefault();

		if (checkInputs(password, confirmation)) {
			return axios
				.post(`${URI.base}${URI.routes.resetPassword}`, { token, password })
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
			setPassMatch('Las contraseñas no coinciden');
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

	//const errorMessage = <Error error={error} />;

	return (
		<div>
			<Header />
			<Card.Body>
				{/*{!certificate ? errorMessage : recoveryForm}*/}
				{recoveryForm}
			</Card.Body>
			<p className="error">{/*{passMatch}*/}</p>
			<Footer />
		</div>
	);
};

export default AccountRecovery_Password;
