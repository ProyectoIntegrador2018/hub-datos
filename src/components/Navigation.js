import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (

    <nav className="navbar navbar-expand-lg navbar navbar-light ">
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
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
      <li className="nav-item active">
            <a className="nav-link" href="/Inicio">
              INICIO <span class="sr-only">(current)</span>
            </a>
          </li>
      <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/Proyectos"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              PROYECTOS
            </a>
            <div className="dropdown-menu"aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">10k Challenge</a>
              <a className="dropdown-item" href="#">MTY Universities for founders</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/Eventos"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              EVENTOS
            </a>
            <div className="dropdown-menu"aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Talleres</a>
              <a className="dropdown-item" href="#">Charlas</a>
            </div>
          </li>
      <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/NuestraGente"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              NUESTRA GENTE
            </a>
            <div className="dropdown-menu"aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Personas</a>
              <a className="dropdown-item" href="#">Grupos Estudiantiles</a>
              <a className="dropdown-item" href="#">Socios</a>
            </div>
          </li>
      <li className="nav-item">
            <a className="nav-link" href="/SobreNosotros">
              SOBRE NOSOTROS
            </a>
          </li>
      <li className="nav-item">
            <a className="nav-link" href="Consultas">
              CONSULTAS
            </a>
          </li>
        </ul>
        </div>
    </nav>
    
  );
}
export default Navigation;
