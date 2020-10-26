import React, { useReducer, useEffect } from "react";
//import { validateFields } from "./Validation";
//import classnames from "classnames";
import RoundedButton from "./components/RoundedButton";
import { Subbutton } from "./components/Subbutton";
import Logo from "./assets/Picture2.png";
import axios from "axios";
import URI from "./URI";
import { Link } from "react-router-dom";
import { toast} from 'react-toastify';
import { useHistory, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./IniciarSesion.css";
import {isLoggedIn} from './components/Util/Auth';

const initialState = {
  email: '',
  password:'',
};

function reducer(state, { field, value }) {
	return {
		...state,
		[field]: value,
	};
}

function checkInputs(email, password) {
  if (email !== "" || password !== "")
   {
    return true;
  }
  return false;
}
/*
const initialState = {
  emailLogin: {
    value: "",
    validateOnChange: false,
    error: "",
  },
  passwordLogin: {
    value: "",
    validateOnChange: false,
    error: "",
  },
  emailSignup: {
    value: "",
    validateOnChange: false,
    error: "",
  },
  passwordSignup: {
    value: "",
    validateOnChange: false,
    error: "",
  },
  submitCalled: false,
  allFieldsValidated: false,
  showLogin: true,
  showRegister: false,
  value: "hide",
};*/

const IniciarSesion = ({ LoginHandler }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
 
  let history = useHistory();
  let location = useLocation();
const onChange = (e) =>{
  dispatch({field:e.target.name, value:e.target.value});
}
  useEffect(() => {
    if(location && location.state && location.state.error != "") {
      toast.error(location.state.error)
    }
    if(localStorage.getItem("token")){
      //history.push("/", {success: "You are already logged in."})
    }
  }, []);
  const login = async e => {
    e.preventDefault();
    let respError = await loginHandler();
    if (respError) {
      toast.error(respError);
    } else {
      return "ERROR";
     // history.push("/", {success: "Logged in successfully!"});
    }
  };
  const loginHandler = _ => {
    if (checkInputs(state)) {
      let {
        email,
        password,
      }=state;
      return axios
        .post("http://localhost:8000/iniciar-sesion/", {
          email,
          password
        })
        .then(response => {
          localStorage.setItem("token", response.data.token);
          LoginHandler(true);
          return null;
        })
        .catch(error => {
          if (error.response) {
            return error.response.data.message;
          } else return error.message;
        });
    } else return "One of your credentials is missing"
  };

  const _handleKeyDown = e => {
    if (e.key === "Enter") {
      login(e);
    }
  };
    return (
      <div class="d-md-flex h-md-100 align-items-center">
        <div class="col-md-6 p-0 bg-indigo h-md-100">
          <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
            <div class="logoarea pt-5 pb-5">
              <a href="/">
                {" "}
                <img src={Logo} alt="digital-hub logo"></img>
              </a>
               <h1>INICIAR SESIÓN</h1>
            </div>
          </div>
        </div>

        <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
          <div class="align-items-center h-md-100 p-5 justify-content-center">
            <div>
                <form class=" loginForm">
                  <div class="form-group">
                    <label for="inputAddress">Correo Electrónico</label>
                    <input
                      name="email"
                      type="text"
                      id="email"

                      className="form-control inputRegistro"
                      onChange={onChange}
                      onKeyDown={_handleKeyDown}
                    />
                    <div className="invalid-feedback">Correo inválido</div>
                  </div>
                  <div class="form-group">
                    <label for="inputAddress">Contraseña</label>
                    <input
                      name="password"
                      type="password"
                      class="form-control inputRegistro"
                      id="password"
                      onChange={onChange}
                      onKeyDown={_handleKeyDown}
                    />
                  </div>
                  <Link to="/recovery-email"> ¿Olvidaste tu contraseña?</Link>
                  <div className="btnLoginRegistro">
                    <RoundedButton type="blackBtn"
                    id="loginBtn"
                    onClick={login}
                    >
                      Iniciar Sesión
                    </RoundedButton>
                  </div>
                  <div className="bottom">
                    <p class="mensaje">
                      ¿Aún no te registras?{" "}
                      <Subbutton href="/Registro" type="submit">
                        Registrarme
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


export default IniciarSesion;
