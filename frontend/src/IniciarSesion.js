import React, { Component, useState, useEffect } from 'react';
import { validateFields } from './Validation';
import classnames from 'classnames';
import RoundedButton from "./components/RoundedButton";
import { Subbutton } from "./components/Subbutton";
import Logo from "./assets/Picture2.png";
import axios from 'axios';
import URI from "./URI";
import "bootstrap/dist/css/bootstrap.min.css";
import "./IniciarSesion.css";
function SignUpUser(){
const [nombre, setNombre] = useState('')
const [apellido, setApellido] = useState('')
const [fechaNacimiento, setRole] = useState('')
const [genero, setGenero] = useState('')
const [perfilSelect, setPerfil] = useState('')
const [univInput, setuUniv] = useState('')
const [credencial, setCredencial] = useState('')
const [emailSignup, setEmailS] = useState('')
const [passwordSignup, setPasswordS] = useState('')
const [emailSErr, setemailSErr] = useState('');
const [passwordSErr, setpasswordSErr] = useState('');
/*
useEffect(()=>{
await axios.post(`${URI.base}${URI.routes.signUpUser}${perfilSelect.value}`)

})*/
}

const initialState = {
  emailLogin: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  passwordLogin: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  emailSignup: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  passwordSignup: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  submitCalled: false,
  allFieldsValidated: false,
  showLogin: true,
  showRegister: false,
  value: "hide",
};

class IniciarSesion extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    
  }  
  handleBlur(validationFunc, evt) {
    const field = evt.target.name;
    // validate onBlur only when validateOnChange for that field is false
    // because if validateOnChange is already true there is no need to validate onBlur
    if (
      this.state[field]['validateOnChange'] === false &&
      this.state.submitCalled === false
    ) {
      this.setState(state => ({
        [field]: {
          ...state[field],
          validateOnChange: true,
          error: validationFunc(state[field].value)
        }
      }));
    }
    return;
  }

  handleChange(validationFunc, evt) {
    const field = evt.target.name;
    const fieldVal = evt.target.value;
    this.setState(state => ({
      [field]: {
        ...state[field],
        value: fieldVal,
        error: state[field]['validateOnChange'] ? validationFunc(fieldVal) : ''
      }
    }));
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // validate fields
    const { emailLogin, passwordLogin, emailSignup, passwordSignup } = this.state;
    const emailLoginError = validateFields.validateEmail(emailLogin.value);
    const passwordLoginError = validateFields.validatePassword(passwordLogin.value);
    const emailSignupError = validateFields.validateEmail(emailSignup.value);
    const passwordSignupError = validateFields.validatePassword(passwordSignup.value);
    if ([emailLoginError, passwordLoginError,emailSignupError,passwordSignupError].every(e => e === false)) {
      this.setState({ ...initialState, allFieldsValidated: true });
      this.showAllFieldsValidated();
    } else {
      this.setState(state => ({
        emailLogin: {
          ...state.emailLogin,
          validateOnChange: true,
          error: emailLoginError
        },
        passwordLogin: {
          ...state.passwordLogin,
          validateOnChange: true,
          error: passwordLoginError
        },
        emailSignup: {
          ...state.emailSignup,
          validateOnChange: true,
          error: emailSignupError
        },
        passwordSignup: {
          ...state.passwordSignup,
          validateOnChange: true,
          error: passwordSignupError
        }
      }));
    }
  }

  showAllFieldsValidated() {
    setTimeout(() => {
      this.setState({ allFieldsValidated: false });
    }, 1500);
  }

  inputUniv = (e) => {
    this.setState({ value: e.target.value });
  };
  operation() {
    this.setState({
      showLogin: this.state.showRegister,
      showRegister: this.state.showLogin,
    });
  }
 

  render() {
    const { emailLogin,emailSignup,passwordSignup, allFieldsValidated } = this.state;
    return (
      <div class="d-md-flex h-md-100 align-items-center">
        <div class="col-md-6 p-0 bg-indigo h-md-100">
          <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
            <div class="logoarea pt-5 pb-5">
              <a href="/">
                {" "}
                <img src={Logo} alt="digital-hub logo"></img>
              </a>
              {this.state.showRegister ? <h1>REGISTRO</h1> : null}
              {this.state.showLogin ? <h1>INICIAR SESIÓN</h1> : null}
            </div>
          </div>
        </div>

        <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
          <div class="align-items-center h-md-100 p-5 justify-content-center">
            <div>
              {this.state.showLogin ? (
                <form class=" loginForm">
                 <div class="form-group">
                    <label for="inputAddress">Correo Electrónico</label>
                    <input
                    name="emailLogin"
                      type="text"
                      id="emailLogin"
                      className={classnames(
                        'form-control inputRegistro',
                        { 'is-valid': emailLogin.error === false },
                        { 'is-invalid': emailLogin.error }
                      )}
                      onChange={evt =>
                        this.handleChange(validateFields.validateEmail, evt)
                      }
                      onBlur={evt =>
                        this.handleBlur(validateFields.validateEmail, evt)
                      }
                    />
                      <div className="invalid-feedback">Correo inválido</div>
                  </div>
                  <div class="form-group">
                    <label for="inputAddress">Contraseña</label>
                    <input
                    name="passwordLogin"
                      type="password"
                      class="form-control inputRegistro"
                      id="passwordLogin"
                    />
                  </div>

                  <div className="btnLoginRegistro">
                    <RoundedButton type="blackBtn">
                      Iniciar Sesión
                    </RoundedButton>
                  </div>
                  <div className="bottom">
                    <p class="mensaje">
                      ¿Aún no te registras?{" "}
                      <Subbutton onClick={() => this.operation()} type="submit">
                        Registrarme
                      </Subbutton>
                    </p>
                  </div>
                </form>
              ) : null}
              {allFieldsValidated && (
              <p className="text-success text-center">
                Success, All fields are validated
              </p>
            )}
              {this.state.showRegister ? (
                
                <form class="">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Nombre</label>
                      <input
                        type="text"
                        class="form-control inputRegistro"
                        id="nombre"
                        name="nombre"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Apellido</label>
                      <input
                        type="password"
                        class="form-control inputRegistro"
                        id="apellido"
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
                        name="fechaNacimiento"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Género</label>
                      <select
                        class="form-control inputRegistro"
                        id="genero"
                        name="genero"
                        required
                      >
                        <option></option>
                        <option>Femenino</option>
                        <option>Masculino</option>
                        <option>Otro</option>
                      </select>{" "}
                    </div>
                  </div>
                  <label for="inputPassword4">Selecciona tu perfil</label>

                  <select
                    id="perfilSelect"
                    name="perfilSelect"
                    onChange={this.inputUniv}
                    className="form-control inputDependency inputRegistro"
                    required
                  >
                    <option value="hide"></option>
                    <option value="show">Alumno</option>
                    <option value="show">Profesor</option>
                    <option value="show">Profesor +</option>
                    <option value="show">Investigador</option>
                    <option value="hide">Socio Comercial</option>
                    <option value="hide">Socio Tecnológico</option>
                    <option value="hide">Administrador</option>
                  </select>
                  <div class="form-group" className={this.state.value}>
                    <label for="inputState">Selecciona Universidad</label>
                    <select
                      id="univInput"
                      name="univInput"
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
                        name="credencial"
                        required
                      />
                      <label
                        class="custom-file-label"
                        for="validatedCustomFile"
                      >
                        Adjunta tus credenciales...
                      </label>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputAddress">Correo Electrónico</label>
                    <input
                      type="text"
                      class="form-control inputRegistro"
                      id="emailSignup"
                      name="emailSignup"
                      className={classnames(
                        'form-control inputRegistro',
                        { 'is-valid': emailSignup.error === false },
                        { 'is-invalid': emailSignup.error }
                      )}
                      onChange={evt =>
                        this.handleChange(validateFields.validateEmail, evt)
                      }
                      onBlur={evt =>
                        this.handleBlur(validateFields.validateEmail, evt)
                      }
                    />
                    <div className="invalid-feedback">Correo inválido</div>
                  </div>
                  <div class="form-group">
                    <label for="inputAddress">Contraseña</label>
                    <input
                      type="password"
                      id="passwordSignup"
                      name="passwordSignup"   
                      className={classnames(
                        'form-control inputRegistro',
                        { 'is-valid': passwordSignup.error === false },
                        { 'is-invalid': passwordSignup.error }
                      )}
                      onChange={evt =>
                        this.handleChange(validateFields.validatePassword, evt)
                      }
                      onBlur={evt =>
                        this.handleBlur(validateFields.validatePassword, evt)
                      }                   
                    />
                     <div className="invalid-feedback">La contraseña debe tener al menos 8 carácteres</div>
                  </div>
                  <div className="btnLoginRegistro">
                    <RoundedButton type="blackBtn">Registrarse</RoundedButton>
                  </div>
                  <div className="bottom">
                    <p class="mensaje">
                      ¿Ya te registraste?{" "}
                      <Subbutton onClick={() => this.operation()} type="submit">
                        {" "}
                        Iniciar Sesión
                      </Subbutton>
                    </p>
                  </div>
                </form>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IniciarSesion;