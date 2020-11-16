import React, { useState } from 'react';
import './App.css';
import RoundedButton from './components/RoundedButton';
import URI from './URI';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './IniciarSesion/IniciarSesion.css';

function RecuperarContraseña(props) {
	const [email, setEmail] = useState('');
	const _forgotPassword = async (e) => {
		e.preventDefault();
		let respError = await _forgotPasswordHandler();
		if (respError) {

		} else {
			setEmail("");
			toast.success('Se ha enviado un link a tu correo para resetear tu contraseña!');
		}
	};

	const _forgotPasswordHandler = async (e) => {
		
		if (email !== '') {
			return axios
				.post(`${URI.base}${URI.routes.resetSendEmail}`, {
					email,
				})
				.then((response) => {
					return null;
				})
				.catch((error) => {
					if (error.response) {
						setEmail("");
						toast.error("Email no registrado");
						return toast.error(error.response.data.message);
					} else return error.message;
				});
		}else{
			return toast.error("Favor de ingresar un correo")
		}

	};


	const _handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			_forgotPasswordHandler(e);
		}
	};
	return (
		<div>
			<ToastContainer draggable={false} autoClose={6000} />
			<div class="container padding-bottom-3x mb-2">
				<div class="row justify-content-center">
					<div class="col-lg-8 col-md-10">
						<h2>¿Olvidaste tu contraseña?</h2>
						<form class="card mt-4">
							<div class="card-body">
								<div class="form-group">
									<label for="email-for-pass">Ingresa tu correo electrónico</label>
									<input
										class="form-control inputRegistro"
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
							<div class=" text-center">
								<RoundedButton type="blackBtn" onClick={_forgotPassword}>
									Obten nueva contraseña
								</RoundedButton>
							</div>
						</form>
					</div>
				</div>
			</div>
	
		</div>
	);
}

export default RecuperarContraseña;
