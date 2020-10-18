import React, { useReducer, useState } from 'react';
import { validateFields } from './Validation';
import classnames from 'classnames';
import RoundedButton from './components/RoundedButton';
import { Subbutton } from './components/Subbutton';
import Logo from './assets/Picture2.png';
import axios from 'axios';
import URI from './URI';
import 'bootstrap/dist/css/bootstrap.min.css';
import './IniciarSesion.css';

const initialState = {
	username: '',
	email: '',
	nombre: '',
	apellido: '',
	edad: '',
	genero: '',
	role: '',
	universidad: '',
	compañia: '',
	password: '',
	imagen: '',
	error: '',
	valueUniversidad: 'hide',
	valueCompania: 'hide',
};

function reducer(state, { field, value }) {
	return {
		...state,
		[field]: value,
	};
}

function checkInputs(state) {
	if (
		state.username !== '' &&
		state.email !== '' &&
		state.nombre !== '' &&
		state.apellido !== '' &&
		state.edad !== '' &&
		state.genero !== '' &&
		state.role !== '' &&
		// state.universidad !== "" &&
		// state.compañia !== "" &&
		state.password !== '' // &&
		// state.imagen !== ""
	) {
		return true;
	}
	return false;
}

const Registro = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [valueUniversidad, setValueUniversidad] = useState('hide');
	const [valueCompania, setValueCompania] = useState('hide');
	const onChange = (e) => {
		dispatch({ field: e.target.name, value: e.target.value });
		if (e.target.value == 'alumno' || e.target.value == 'profesor') {
			setValueCompania('hide');
			setValueUniversidad(e.target.value);
		} else if (e.target.value == 'sociocomercial') {
			setValueCompania(e.target.value);
			setValueUniversidad('hide');
		} else if (e.target.value == 'profesor+') {
			setValueCompania('show');
			setValueUniversidad('show');
		}
	};

	const _signupHandler = (_) => {
		if (checkInputs(state)) {
			let {
				username,
				email,
				nombre,
				apellido,
				edad,
				genero,
				role,
				universidad,
				compañia,
				password,
				imagen,
			} = state;
			return axios
				.post('http://localhost:8000/registrar/alumno', {
					username,
					email,
					nombre,
					apellido,
					edad,
					genero,
					role,
					universidad,
					compañia,
					password,
					imagen,
				})
				.then((response) => {
					console.log(response);
					return null;
				})
				.catch((error) => {
					if (error.response) {
						return error.response.data.message;
					} else return error.message;
				});
		}
	};

	const _signup = async (e) => {
		e.preventDefault();
		let respError = await _signupHandler();
		if (respError) {
			dispatch({ field: 'error', value: respError });
		} else {
			props.history.push('/Usuarios');
		}
	};

	const _handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			_signup(e);
		}
	};

	return (
		<div class="d-md-flex h-md-100 align-items-center">
			<div class="col-md-6 p-0 bg-indigo h-md-100">
				<div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
					<div class="logoarea pt-5 pb-5">
						<a href="/">
							{' '}
							<img src={Logo} alt="digital-hub logo"></img>
						</a>
						<h1>REGISTRO</h1>
					</div>
				</div>
			</div>

			<div class="col-md-6 p-0 bg-white h-md-100 loginarea">
				<div class="align-items-center h-md-100 p-5 justify-content-center">
					<div>
						<p className="error">{state.error}</p>
						<form class="">
							<div class="form-row">
								<div class="form-group col-md-6">
									<label for="inputEmail4">Nombre</label>
									<input
										type="text"
										class="form-control inputRegistro"
										id="nombre"
										onChange={onChange}
										onKeyDown={_handleKeyDown}
										name="nombre"
									/>
								</div>
								<div class="form-group col-md-6">
									<label for="inputPassword4">Apellido</label>
									<input
										type="text"
										class="form-control inputRegistro"
										id="apellido"
										onChange={onChange}
										onKeyDown={_handleKeyDown}
										name="apellido"
									/>
								</div>
							</div>
							<div class="form-row">
								<div class="form-group col-md-6">
									<label for="inputPassword4">Fecha de Nacimiento</label>
									<input
										class="form-control inputRegistro"
										type="text"
										id="fechaNacimiento"
										onChange={onChange}
										onKeyDown={_handleKeyDown}
										name="edad"
										required
									/>
								</div>
								<div class="form-group col-md-6">
									<label for="inputPassword4">Género</label>
									<select
										class="form-control inputRegistro"
										id="genero"
										onChange={onChange}
										onKeyDown={_handleKeyDown}
										name="genero"
										required
									>
										<option></option>
										<option>Femenino</option>
										<option>Masculino</option>
										<option>Otro</option>
									</select>{' '}
								</div>
							</div>
							<label for="inputPassword4">Selecciona tu perfil</label>

							<select
								id="perfilSelect"
								name="role"
								onChange={onChange}
								onKeyDown={_handleKeyDown}
								className="form-control inputDependency inputRegistro"
								required
							>
								<option value="hide"></option>
								<option value="alumno">Alumno</option>
								<option value="profesor">Profesor</option>
								<option value="profesor+">Profesor +</option>
								<option value="investigador">Investigador</option>
								<option value="sociocomercial">Socio Comercial</option>
								<option value="sociotecnologico">Socio Tecnológico</option>
								<option value="administrador">Administrador</option>
							</select>
							<div class="form-group" className={valueCompania}>
								<label for="inputState">Selecciona Compañia</label>
								<select
									id="univInput"
									name="compañia"
									onChange={onChange}
									onKeyDown={_handleKeyDown}
									className="form-control inputRegistro inputDependency"
									required
								>
									<option>Selecciona Compañia...</option>
									<option>Google</option>
									<option>Microsoft</option>
									<option>Cemex</option>
								</select>
							</div>

							<div class="form-group" className={valueUniversidad}>
								<label for="inputState">Selecciona Universidad</label>
								<select
									id="univInput"
									name="universidad"
									onChange={onChange}
									onKeyDown={_handleKeyDown}
									className="form-control inputRegistro inputDependency"
									required
								>
									<option>Selecciona Universidad...</option>
									<option>UDEM</option>
									<option>UANL</option>
									<option>ITESM</option>
								</select>
							</div>

							<div class="form-group">
								<div class="custom-file inputFile">
									<input
										type="file"
										class="custom-file-input inputRegistro"
										id="credencial"
										name="imagen"
										onChange={onChange}
										onKeyDown={_handleKeyDown}
										required
									/>
									<label class="custom-file-label" for="validatedCustomFile">
										Adjunta tus credenciales...
									</label>
								</div>
							</div>
							<div class="form-group">
								<label for="inputAddress">Nombre de usuario</label>
								<input
									type="text"
									class="form-control inputRegistro"
									id="username"
									name="username"
									onChange={onChange}
									onKeyDown={_handleKeyDown}
									className="form-control inputRegistro"
								/>
								<div className="invalid-feedback">Correo inválido</div>
							</div>
							<div class="form-row">
								<div class="form-group col-md-6">
									<label for="inputAddress">Correo Electrónico</label>
									<input
										type="text"
										class="form-control inputRegistro"
										id="emailSignup"
										name="email"
										onChange={onChange}
										onKeyDown={_handleKeyDown}
										className="form-control inputRegistro"
										/* {classnames(
                        
                       { "is-valid": emailSignup.error === false },
                        { "is-invalid": emailSignup.error }
                      )}
                      /*onChange={(evt) =>
                        this.handleChange(validateFields.validateEmail, evt)
                      }
                      onBlur={(evt) =>
                        this.handleBlur(validateFields.validateEmail, evt)
                      }*/
									/>
								</div>
								<div className="invalid-feedback">Correo inválido</div>
								<div class="form-group col-md-6">
									<label for="inputAddress">Contraseña</label>
									<input
										type="password"
										id="passwordSignup"
										name="password"
										onChange={onChange}
										onKeyDown={_handleKeyDown}
										className="form-control inputRegistro"
										/*{classnames(
                        
                        { "is-valid": passwordSignup.error === false },
                        { "is-invalid": passwordSignup.error }
                      )}
                      onChange={(evt) =>
                        this.handleChange(validateFields.validatePassword, evt)
                      }
                      onBlur={(evt) =>
                        this.handleBlur(validateFields.validatePassword, evt)
                      }*/
									/>
									<div className="invalid-feedback">
										La contraseña debe tener al menos 8 carácteres
									</div>
								</div>
							</div>
							<div className="btnLoginRegistro">
								<RoundedButton type="blackBtn" onClick={_signup}>
									Registrarse
								</RoundedButton>
							</div>
							<div className="bottom">
								<p class="mensaje">
									¿Ya te registraste?{' '}
									<Subbutton href="/IniciarSesion" type="submit">
										{' '}
										Iniciar Sesión
									</Subbutton>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registro;
