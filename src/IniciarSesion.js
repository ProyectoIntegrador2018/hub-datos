import React, { Component } from "react";
import "./IniciarSesion.css";
import { Button } from "./components/button";
import { Subbutton } from "./components/Subbutton";
import "bootstrap/dist/css/bootstrap.min.css";

class IniciarSesion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      showRegister: false,
    };
  }
  operation() {
    this.setState({
      showLogin: this.state.showRegister,
      showRegister: this.state.showLogin,
    });
  }
  render() {
    return (
      <div class="d-md-flex h-md-100 align-items-center">
        <div class="col-md-6 p-0 bg-indigo h-md-100">
          <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
            <div class="logoarea pt-5 pb-5">
              {this.state.showRegister ? <h1>REGISTRO</h1> : null}
              {this.state.showLogin ? <h1>INICIAR SESIÓN</h1> : null}
            </div>
          </div>
        </div>

        <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
          <div class="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
            <div>
              {this.state.showLogin ? (
                <form class="form-inline">
                  <input
                    type="text"
                    class="nombre"
                    name="nombre"
                    placeholder="Correo Electrónico"
                  />
                  <input
                    type="text"
                    class="nombre"
                    name="nombre"
                    placeholder="Contraseña"
                  />
                  <div className="btnLoginRegistro">
                  <Button>Iniciar Sesión</Button>
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
              {this.state.showRegister ? (
                <form class="form-inline">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <input
                        type="text"
                        class="nombre"
                        name="nombre"
                        placeholder="Nombre"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <input
                        type="text"
                        class="nombre"
                        name="nombre"
                        placeholder="Apellido"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <input
                        type="text"
                        class="nombre"
                        name="nombre"
                        placeholder="Edad"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <select class="form-control" id="inputGenero">
                        <option>Género</option>
                      </select>{" "}
                    </div>
                  </div>
                  <input
                    type="text"
                    class="nombre"
                    name="nombre"
                    placeholder="Universidad / Compañia"
                  />
                  <select class="form-control inputPerfil">
                    <option>Selecciona tu perfil</option>
                  </select>
                  <div class="custom-file inputFile">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="validatedCustomFile"
                      required
                    />
                    <label class="custom-file-label" for="validatedCustomFile">
                      Choose file...
                    </label>
                  </div>
                  <input
                    type="text"
                    class="nombre"
                    name="nombre"
                    placeholder="Correo Electrónico"
                  />
                  <input
                    type="text"
                    class="nombre"
                    name="nombre"
                    placeholder="Contraseña"
                  />
<div className="btnLoginRegistro">
                  <Button>Registrarse</Button>
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
