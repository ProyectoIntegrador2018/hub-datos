import React, { Component } from "react";
import "./App.css";

function IniciarSesion() {
  return (
    <body>
      <div class="split left">
        <div class="centered">
          <form>
            <div class="form-group">
              <label className="lbInicioSesion" for="exampleInputEmail1">
                Correo Electrónico
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div class="form-group">
                <label className="lbInicioSesion" for="exampleInputPassword1">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" class="btn btn-light">
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="split right">
        <div class="centered">
          <form className="formRegistro">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label className="lbRegistro">Nombre</label>
                <input type="email" className="form-control"  id="inputEmail4" />
              </div>
              <div class="form-group col-md-6">
                <label className="lbRegistro">Apellido</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label className="lbRegistro">Edad</label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="form-group col-md-6">
                <label className="lbRegistro">Género</label>
                <select id="inputState" class="form-control">
                  <option selected>Femenino</option>
                  <option>Masculino</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label className="lbRegistro">Universidad / Compañia</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div class="form-group">
              <label className="lbRegistro">Selecciona tu perfil</label>
              <select id="inputState" class="form-control">
                <option selected>Selecciona una opción</option>
                <option>Estudiante</option>
                <option>Maestro</option>
              </select>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label className="lbRegistro">Correo Electrónico</label>
                <input type="email" className="form-control"  id="inputEmail4" />
              </div>
              <div class="form-group col-md-6">
                <label className="lbRegistro">Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                />
               </div>
             <button type="submit" class="btn btn-light" id="btnRegistro">
                Registrarme
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}

export default IniciarSesion;
