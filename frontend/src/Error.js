import React from "react";
import "./App.css";
import { Subbutton } from "./components/Subbutton";

function MiPerfil() {
  return (
    <div className="container">
      <h1>Necesitas iniciar sesión para hacer eso</h1>
      <div className="bottom">
        <p class="mensaje">
          ¿Ya te registraste?{" "}
          <Subbutton href="/IniciarSesion" type="submit">
            {" "}
            Iniciar Sesión
          </Subbutton>
        </p>
      </div>
    </div>
  );
}

export default MiPerfil;
