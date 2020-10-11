import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Consultas from "./Consultas";
import CrearProyecto from "./CrearProyecto";
import EditarProyecto from "./EditarProyecto";
import Eventos from "./Eventos";
import EventDetails from "./EventDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IniciarSesion from "./IniciarSesion/IniciarSesion";
import Inicio from "./Inicio";
import LinkHeader from "./components/LinkHeader";
import MisEventos from "./MisEventos";
import MisProyectos from "./MisProyectos";
import Navigation from "./components/Navigation";
import NewsDetails from "./NewsDetails";
import NuestraGente from "./NuestraGente/NuestraGente";
import ProjectDetails from "./ProjectDetails";
import Proyectos from "./Proyectos";
import React, { Component } from "react";
import SobreNosotros from "./SobreNostros";
import { withRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundUrl: "",
    };
  }

  render() {
    return (
      <Router>
          {this.props.location.pathname === "/IniciarSesion" ? "" : <Header />}
          {this.props.location.pathname === "/IniciarSesion" ? (
            ""
          ) : (
            <LinkHeader />
          )}
          {this.props.location.pathname === "/IniciarSesion" ? (
            ""
          ) : (
            <Navigation />
          )}
          <Switch>
            <Route path="/CrearProyecto" component={CrearProyecto} />
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
            <Route path="/*" component={Inicio} />
          </Switch>
        <Footer />
      </Router>
    );
  }
}
export default withRouter(App);
