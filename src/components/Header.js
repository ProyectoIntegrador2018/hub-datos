import React from "react";
import "../App.css";


function Header() {
  return (
    <div className="jumbotron bg-cover text-white darkened-image bg-cover">
    <nav className="navbar navbar-expand-lg navbar">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto ">
          <li className="nav-item">
            <a className="nav-link header-link" href="/IniciarSesion">
              INICIAR SESIÓN / REGISTRARSE
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  );
}
export default Header;
