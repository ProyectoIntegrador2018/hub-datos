import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Consultas from './Consultas';
import CrearProyecto from './CrearProyecto';
import EditarProyecto from './EditarProyecto';
import Eventos from './Eventos';
import EventDetails from './EventDetails';
import Footer from './components/Footer';
import Header from './components/Header';
import IniciarSesion from './IniciarSesion/IniciarSesion';
import Inicio from './Inicio';
import Inscrito from './Inscrito';
import LinkHeader from './components/LinkHeader';
import MisEventos from './MisEventos';
import MiPerfil from './MiPerfil';
import RecuperarContraseñaReset from './RecuperarContraseñaReset';
import MisProyectos from './MisProyectos';
import Navigation from './components/Navigation';
import NewsDetails from './NewsDetails';
import NotFound from './NotFound';
import NuestraGente from './NuestraGente/NuestraGente';
import PrivateRoute from './components/Util/PrivateRoute';
import ProjectDetails from './ProjectDetails';
import Proyectos from './Proyectos';
import Registro from './IniciarSesion/Registro.js';
import Error from './Error';
import RecuperarContraseña from './RecuperarContraseña';
import {
	isLoggedIn,
	isSocioTecnologico,
	isSocioComercial,
	isTeacher,
	isAdmin,
	isSuperAdmin,
	isStudent,
	isInvestigator,
} from './components/Util/auth';
import React, { Component } from 'react';
import SobreNosotros from './SobreNostros';
import { withRouter } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			backgroundUrl: '',
		};
	}
	render() {
		return (
			<Router>
				<div>
					{this.props.location.pathname === '/IniciarSesion' ||
					this.props.location.pathname === '/Registro' ||
					this.props.location.pathname === '/Recuperar-contraseña' ||
					this.props.location.pathname === '/Recuperar-contraseña-reset' ||
					this.props.location.pathname === '/' ? (
						''
					) : (
						<Header />
					)}
					{this.props.location.pathname === '/IniciarSesion' ||
					this.props.location.pathname === '/Registro' ||
					this.props.location.pathname === '/Recuperar-contraseña' ||
					this.props.location.pathname === '/Recuperar-contraseña-reset' ||
					this.props.location.pathname === '/' ? (
						''
					) : (
						<LinkHeader />
					)}
					{this.props.location.pathname === '/IniciarSesion' ||
					this.props.location.pathname === '/Registro' ||
					this.props.location.pathname === '/Recuperar-contraseña' ||
					this.props.location.pathname === '/Recuperar-contraseña-reset' ||
					this.props.location.pathname === '/' ? (
						''
					) : (
						<Navigation />
					)}

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
						<Route path="/Recuperar-contraseña-reset" component={RecuperarContraseñaReset} />
						<PrivateRoute path="/CrearProyecto" component={CrearProyecto} authed={isLoggedIn()} />
						<PrivateRoute path="/Miperfil" component={MiPerfil} authed={isLoggedIn()} />
						<Route path="/*" component={Inicio} />
						<Route component={NotFound} />
					</Switch>
					{this.props.location.pathname === '/IniciarSesion' ||
					this.props.location.pathname === '/Registro' ||
					this.props.location.pathname === '/Recuperar-contraseña' ||
					this.props.location.pathname === '/Recuperar-contraseña-reset' ||
					this.props.location.pathname === '/' ? (
						''
					) : (
						<Footer />
					)}
				</div>
			</Router>
		);
	}
}
export default withRouter(App);
