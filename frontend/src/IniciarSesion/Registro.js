import React, { useReducer, useState } from 'react';
import RoundedButton from '../components/RoundedButton';
import { Subbutton } from '../components/Subbutton';
import Logo from '../assets/Picture2.png';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import URI from '../URI';
import { _handlePreview } from '../Utilities';
import 'bootstrap/dist/css/bootstrap.min.css';
import './IniciarSesion.css';
import MiPerfil from '../MiPerfil';
/*
const initialState = {
	username: '',
	email: '',
	nombre: '',
	apellido: '',
	fechaDeNacimiento: '',
	genero: '',
	role: '',
	universidad: '',
	compañia: '',
	password: '',
	imagen: null,
	imgUrl: '',
	error: '',
	valueUniversidad: 'hide',
	valueCompania: 'hide',
};*/

function reducer(state, { field, value }) {
	return {
		...state,
		[field]: value,
	};
}

/*function checkInputs(state) {
	if (
		(state.username !== '' &&
			state.email !== '' &&
			state.nombre !== '' &&
			state.apellido !== '' &&
			state.fechaDeNacimiento !== '' &&
			state.genero !== '' &&
			state.role !== '' &&
			state.universidad !== '') ||
		(state.compañia !== '' && state.password !== '' && state.imagen !== null)
	) {
		if (state.password.length < 6) {
			return toast.error('La contraseña debe tener mínimo 6 carácteres');
		}
		return true;
	}
	return false;
}*/
{
	/*<Form.File
accept="image/jpeg, imgage/jpg, image/png"
className="mt-5"
id="fileItem"
name="imagen"
multiple={false}
onChange={onChange}
onKeyDown={_handleKeyDown}
/>*/
}
const Registro = (props) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [fechaDeNacimiento, setFechaDeNacimiento] = useState('');
	const [genero, setGenero] = useState('');
	const [role, setRole] = useState('');
	const [universidad, setUniversidad] = useState('');
	const [compañia, setCompañia] = useState('');
	const [password, setPassword] = useState('');
	const [imagen, setImagen] = useState('');
	const [imgUrl, setImgUrl] = useState('');
	const [valueUniversidad, setValueUniversidad] = useState('hide');
	const [valueCompania, setValueCompania] = useState('hide');
	const initialState = {
		username: '',
		email: '',
		nombre: '',
		apellido: '',
		fechaDeNacimiento: '',
		genero: '',
		role: '',
		universidad: '',
		compañia: '',
		password: '',
		imagen: null,
		imgUrl: '',
		error: '',
		valueUniversidad: 'hide',
		valueCompania: 'hide',
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	const _handleChange = (e) => {
		e.preventDefault();
		_handlePreview(e, setImagen, setImgUrl);
	};

	const rolefunc = (e) => {};
	const onChange = (e) => {
		//rolefunc(e)
		setRole(e.target.value);
		console.log(role);
		dispatch({ field: e.target.name, value: e.target.value });
		if (e.target.value === 'alumno' || e.target.value === 'maestro') {
			setValueCompania('hide');
			setValueUniversidad(e.target.value);
		} else if (
			e.target.value === 'socio_comercial' ||
			e.target.value === 'socio_tecnologico' ||
			e.target.value === 'investigador'
		) {
			setValueUniversidad('hide');
			setValueCompania(e.target.value);
		} /* else if (e.target.value == 'profesor+') {
			setValueCompania('show');
			setValueUniversidad('show');
		}*/
	};

	const _signup = async (e) => {
		e.preventDefault();
		let respError = await _signupHandler();
		if (respError) {
			console.log(respError);
			//dispatch({ field: 'error', value: respError });
		} else {
			//toast.success('Registro éxitoso!');
			//props.history.push('/', {sucess: "Registro éxitoso"});
		}
	};
	const _signupHandler = (_) => {
		if (
			username !== '' &&
			email !== '' &&
			nombre !== '' &&
			apellido !== '' &&
			fechaDeNacimiento !== '' &&
			genero !== '' // &&
			//role !== '') //&&
			//((universidad !== '') ||(compañia !== '') )&& password !== '' && imagen !== null)*/
		) {
			const data = new FormData();
			/*let {
				username,
				email,
				nombre,
				apellido,
				fechaDeNacimiento,
				genero,
				role,
				universidad,
				compañia,
				imagen,
				imgUrl,
				password,
			} = state;*/
			console.log(imagen);
			console.log(role);
			data.append('username', username);
			data.append('email', email);
			data.append('nombre', nombre);
			data.append('apellido', apellido);
			data.append('fechaDeNacimiento', new Date(fechaDeNacimiento));
			data.append('genero', genero);
			data.append('role', role);
			data.append('universidad', universidad);
			data.append('compañia', compañia);
			data.append('password', password);
			data.append('imagen', imagen);

			console.log(...data);
			return axios
				.post(`${URI.base}${URI.routes.signUpUser}`, data)
				.then((response) => {
					props.history.push('/IniciarSesion');
					console.log(response);
					return null;
				})
				.catch((error) => {
					if (error.response) {
						if (error.response.data.message === `El usuario ${username} ya existe.`) {
							return toast.error(error.response.data.message);
						} else if (error.response.data.message === `El email ${email} ya existe.`) {
							return toast.error(error.response.data.message);
						} else if (error.response.data.message === 'User validation failed: email: Email invalido') {
							return toast.error('Email inválido');
						}
						return error.response.data.message;
					} else return error.message;
				});
		} else {
			return toast.error('Favor de llenar todos los campos');
		}
	};

	const _handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			_signup(e);
		}
	};
	return (
		<div class="d-md-flex h-md-100 align-items-center">
			<ToastContainer draggable={false} autoClose={4000} />
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
						<form class="" /*onSubmit={handleSubmit}*/>
							<div class="form-row">
								<div class="form-group col-md-6">
									<label for="inputEmail4">Nombre</label>
									<input
										type="text"
										class="form-control inputRegistro"
										id="nombre"
										onChange={(e) => {
											setNombre(e.target.value);
										}}
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
										onChange={(e) => {
											setApellido(e.target.value);
										}}
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
										type="date"
										id="fechaNacimiento"
										onChange={(e) => {
											setFechaDeNacimiento(e.target.value);
										}}
										onKeyDown={_handleKeyDown}
										name="fechaDeNacimiento"
										required
									/>
								</div>
								<div class="form-group col-md-6">
									<label for="inputPassword4">Género</label>
									<select
										class="form-control inputRegistro"
										id="genero"
										onChange={(e) => {
											setGenero(e.target.value);
										}}
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
								onChange={(e) => {
									onChange(e);
								}}
								onKeyDown={_handleKeyDown}
								className="form-control inputDependency inputRegistro"
								required
							>
								<option value="hide"></option>
								<option value="alumno">Alumno</option>
								<option value="maestro">Maestro</option>
								{/*	<option value="profesor+">Profesor +</option>*/}
								<option value="investigador">Investigador</option>
								<option value="socio_comercial">Socio Comercial</option>
								<option value="socio_tecnologico">Socio Tecnológico</option>
							</select>
							<div class="form-group" className={valueCompania}>
								<label for="inputState">Selecciona Compañia</label>
								<select
									id="univInput"
									name="compañia"
									onChange={(e) => {
										setCompañia(e.target.value);
									}}
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
									onChange={(e) => {
										setUniversidad(e.target.value);
									}}
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
								<label for="inputAddress">Sube tus credenciales</label>
								<input
									type="file"
									class="form-control-file"
									id="exampleFormControlFile1"
									accept="image/jpeg, imgage/jpg, image/png"
									//className="mt-5"
									id="fileItem"
									name="imagen"
									multiple={false}
									onChange={_handleChange}
								/>
							</div>
							<div class="form-group">
								<label for="inputAddress">Nombre de usuario</label>
								<input
									type="text"
									class="form-control inputRegistro"
									id="username"
									name="username"
									onChange={(e) => {
										setUsername(e.target.value);
									}}
									onKeyDown={_handleKeyDown}
									className="form-control inputRegistro"
								/>
							</div>
							<div class="form-row">
								<div class="form-group col-md-6">
									<label for="inputAddress">Correo Electrónico</label>
									<input
										type="text"
										class="form-control inputRegistro"
										name="email"
										//value={values.email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
										onKeyDown={_handleKeyDown}
										className=" form-control inputRegistro"
									/>
									{/* {errors.email && <p className="error">{errors.email}</p>}*/}
								</div>
								<div class="form-group col-md-6">
									<label for="inputAddress">Contraseña</label>
									<input
										type="password"
										id="passwordSignup"
										name="password"
										//value={values.password}
										onChange={(e) => {
											setPassword(e.target.value);
										}}
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
									{/*	{errors.password && <p className="error">{errors.password}</p>}*/}
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
