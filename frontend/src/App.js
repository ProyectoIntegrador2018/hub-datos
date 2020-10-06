import React, {Component} from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LinkHeader from "./components/LinkHeader";
import Proyectos from "./Proyectos";
import ProjectDetails from "./ProjectDetails";
import Eventos from "./Eventos";
import EventDetails from "./EventDetails";
import Inicio from "./Inicio";
import NuestraGente from "./NuestraGente";
import SobreNosotros from "./SobreNostros";
import IniciarSesion from "./IniciarSesion";
import Consultas from "./Consultas";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import {withRouter} from "react-router-dom";

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
        <div>
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
            <Route path="/Proyectos/Detalles" component={ProjectDetails} />
            <Route path="/Proyectos" component={Proyectos} />
            <Route path="/Eventos/Detalles" component={EventDetails} />
            <Route path="/Eventos" component={Eventos} />
            <Route path="/NuestraGente" component={NuestraGente} />
            <Route path="/SobreNosotros" component={SobreNosotros} />
            <Route path="/Consultas" component={Consultas} />
            <Route path="/IniciarSesion" component={IniciarSesion} />
            <Route path="/*" component={Inicio} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}
export default withRouter(App);
