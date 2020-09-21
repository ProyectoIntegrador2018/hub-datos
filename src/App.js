import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Proyectos from "./Proyectos";
import Eventos from "./Eventos";
import Inicio from "./Inicio";
import NuestraGente from "./NuestraGente";
import SobreNosotros from "./SobreNostros";
import Consultas from "./Consultas";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Switch,Route,NavLink,} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header/>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/Proyectos" component={Proyectos} />
        <Route path="/Eventos" component={Eventos} />
        <Route path="/NuestraGente" component={NuestraGente} />
        <Route path="/SobreNosotros" component={SobreNosotros} />
        <Route path="/Consultas" component={Consultas} />
      </Switch>
    </Router>
  );
}
export default App;
