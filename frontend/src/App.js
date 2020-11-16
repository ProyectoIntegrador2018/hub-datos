import React from "react";
import Navigation from "./components/Navigation";
import { withRouter } from "react-router-dom";
import Routes  from "./Routes"
import Header from './components/Header';
import LinkHeader from './components/LinkHeader';
import Footer from "./components/Footer";

const App = ({ location }) => {
  return (
    <div>
		{location.pathname !== '/IniciarSesion' && location.pathname !== '/Registro' &&<Header/>}
		{location.pathname !== '/IniciarSesion' && location.pathname !== '/Registro' && location.pathname !== '/Recuperar-contraseña' && <LinkHeader/>}
		{location.pathname !== '/IniciarSesion' && location.pathname !== '/Registro' && location.pathname !== '/Recuperar-contraseña' && location.pathname !== '/Reset-contraseña/:id'  && <Navigation/>}

      <Routes />
	  {location.pathname !== '/IniciarSesion' && location.pathname !== '/Registro' &&<Footer/>}
    </div>
  );
}

export default withRouter(App);