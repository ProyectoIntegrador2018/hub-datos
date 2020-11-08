import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Consultas from "./Consultas";
import CrearEvento from "./CrearEvento";
import CrearProyecto from "./CrearProyecto";
import EditarProyecto from "./EditarProyecto";
import Eventos from "./Eventos";
import EventDetails from "./EventDetails";
import IniciarSesion from "./IniciarSesion/IniciarSesion";
import Inicio from "./Inicio";
import Inscrito from "./Inscrito";
import MisEventos from "./MisEventos";
import MiPerfil from "./MiPerfil";
import ResetearContraseña from "./ResetearContraseña";
import MisProyectos from "./MisProyectos";
import NewsDetails from "./NewsDetails";
import NotFound from "./NotFound";
import NuestraGente from "./NuestraGente/NuestraGente";
import PrivateRoute from "./components/Util/PrivateRoute";
import ProjectDetails from "./ProjectDetails";
import Proyectos from "./Proyectos";
import Registro from "./IniciarSesion/Registro.js";
import Error from "./Error";
import RecuperarContraseña from "./RecuperarContraseña";
import { isLoggedIn } from "./components/Util/auth";
import React, { Component, useState } from "react";
import SobreNosotros from "./SobreNostros";
import { withRouter } from "react-router-dom";

const Routes = () => (
  <main>
    <Switch>
      <Route path="/MisEventos/:id" component={MisEventos} />
      <Route path="/MisEventos" component={MisEventos} />
      <Route path="/MisProyectos/:id" component={EditarProyecto} />
      <Route path="/MisProyectos" component={MisProyectos} />
      <Route path="/Proyectos/:id" component={ProjectDetails} />
      <Route path="/Proyectos" component={Proyectos} />
      <Route path="/Eventos/Detalles" component={EventDetails} />
      <Route path="/Noticias/Detalles" component={NewsDetails} />
      <Route path="/Eventos" component={Eventos} />
      <Route path="/NuestraGente" component={NuestraGente} />
      <Route path="/SobreNosotros" component={SobreNosotros} />
      <Route path="/Consultas" component={Consultas} />
      <Route path="/IniciarSesion" component={IniciarSesion} />
      <Route path="/Registro" component={Registro} />
      <Route path="/Error" component={Error} />
      <Route path="/Inscrito" component={Inscrito} />
      <Route path="/Inicio" component={Inicio} />
      <Route path="/Recuperar-contraseña" component={RecuperarContraseña} />
      <Route path="/Resetear-contraseña" component={ResetearContraseña} />
      <PrivateRoute
        path="/CrearProyecto"
        component={CrearProyecto}
        authed={isLoggedIn()}
      />
      <PrivateRoute
        path="/CrearEvento"
        component={CrearEvento}
        authed={isLoggedIn()}
      />
      <PrivateRoute
        path="/Miperfil"
        component={MiPerfil}
        authed={isLoggedIn()}
      />
      <Route path="/*" component={Inicio} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Routes;
