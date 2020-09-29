import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectDetails from "./ProjectDetails";
import Proyectos from "./Proyectos";
import Eventos from "./Eventos";
import Inicio from "./Inicio";
import NuestraGente from "./NuestraGente";
import SobreNosotros from "./SobreNostros";
import IniciarSesion from "./IniciarSesion";
import Consultas from "./Consultas";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header/>
      <Navigation />
      <Switch>
        <Route path="/Proyectos/Detalles" component ={ProjectDetails} />
        <Route path="/Proyectos" component={Proyectos} />
        <Route path="/Eventos" component={Eventos} />
        <Route path="/NuestraGente" component={NuestraGente} />
        <Route path="/SobreNosotros" component={SobreNosotros} />
        <Route path="/Consultas" component={Consultas} />
        <Route path="/IniciarSesion" component={IniciarSesion} />
        <Route path="/*" component={Inicio} />
      </Switch>
      <Footer/>
    </Router>
  );
}
export default App;
