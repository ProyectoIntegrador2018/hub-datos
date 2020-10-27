import React, { useState, useEffect } from 'react';
import './App.css';
import RoundedButton from './components/RoundedButton';
import Footer from './components/Footer';
import URI from './URI';
import axios from 'axios';
import Header from './components/Header';

function RecuperarContraseña(props) {
	const [email, setEmail] = useState('');

	const _forgotPasswordHandler = async (e) => {
		e.preventDefault();
		if (email !== '') {
			return axios
				.post(/*${URI.base}${URI.routes.resetSendEmail}`*/ 'http://localhost:8000/users/password-resets', {
					email,
				})
				.then((response) => {
					return null;
				})
				.catch((error) => {
					if (error.response) {
						console.log(error.response);
						return error.response.data.message;
					} else return error.message;
				});
		}
	};

	const _handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			_forgotPasswordHandler(e);
		}
	};
	return (
		<div>
			<Header />
			<div class="container padding-bottom-3x mb-2">
				<div class="row justify-content-center">
					<div class="col-lg-8 col-md-10">
						<h2>¿Olvidaste tu contraseña?</h2>
						<form class="card mt-4">
							<div class="card-body">
								<div class="form-group">
									<label for="email-for-pass">Ingresa tu correo electrónico</label>
									<input
										class="form-control"
										type="text"
										onChange={(e) => {
											setEmail(e.target.value);
										}}
										onKeyDown={_handleKeyDown}
										id="email-for-pass"
										required=""
									/>
								</div>
							</div>
							<div class="card-footer text-center">
								<RoundedButton type="blackBtn" onClick={_forgotPasswordHandler}>
									Obten nueva contraseña
								</RoundedButton>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default RecuperarContraseña;
