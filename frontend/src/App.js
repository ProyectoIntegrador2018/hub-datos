import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import LinkHeader from './components/LinkHeader';
import Proyectos from './Proyectos';
import ProjectDetails from './ProjectDetails';
import Eventos from './Eventos';
import EventDetails from './EventDetails';
import NewsDetails from './NewsDetails';
import Inicio from './Inicio';
import NuestraGente from './NuestraGente';
import SobreNosotros from './SobreNostros';
import IniciarSesion from './IniciarSesion';
import Error from './Error';
import Inscrito from './Inscrito'
import Consultas from './Consultas';
import MiPerfil from './MiPerfil';
import Registro from './Registro.js';
import PrivateRoute from './components/Util/PrivateRoute';

import {isLoggedIn} from './components/Util/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
					{this.props.location.pathname === '/IniciarSesion' || this.props.location.pathname === '/Registro' ? (	'') : (
					 <Header />
					)}
					{this.props.location.pathname === '/IniciarSesion' ||
					this.props.location.pathname === '/Registro' ? (
						''
					) : (
						<LinkHeader />
					)}
					{this.props.location.pathname === '/IniciarSesion' ||
					this.props.location.pathname === '/Registro' ? (
						''
					) : (
						<Navigation />
					)}

					<Switch>
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
						<Route path="/Inscrito" component={Inscrito}/>
						<PrivateRoute path="/Miperfil" component={MiPerfil} authed={isLoggedIn()} />
						<Route path="/*" component={Inicio} />
						{/* Private routes */}
						
					</Switch>
					{this.props.location.pathname === '/IniciarSesion' ||
					this.props.location.pathname === '/Registro' ? (
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


/*import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import LinkHeader from './components/LinkHeader';
import Routes from './routes/index';
import { isLoggedIn } from './components/Util/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoute';
import PublicRoutes from './routes/PublicRoutes';
const navOptions = [];
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			backgroundUrl: '',
		};
	}

	render() {
		return (
			<div>
				{this.props.location.pathname === '/IniciarSesion' || this.props.location.pathname === '/Registro' ? (
					''
				) : (
					<Header />
				)}
				{this.props.location.pathname === '/IniciarSesion' || this.props.location.pathname === '/Registro' ? (
					''
				) : (
					<LinkHeader />
				)}
				{this.props.location.pathname === '/IniciarSesion' || this.props.location.pathname === '/Registro' ? (
					''
				) : (
					<Navigation routes={navOptions} />
				)}
				<Routes />
			</div>
		);
	}
}
export default withRouter(App);

/*

<Router>
				<div>
					{this.props.location.pathname === '/IniciarSesion' || this.props.location.pathname === '/Registro' ? (	'') : (
					 <Header />
					)}
					{this.props.location.pathname === '/IniciarSesion' ||
					this.props.location.pathname === '/Registro' ? (
						''
					) : (
						<LinkHeader />
					)}
					{this.props.location.pathname === '/IniciarSesion' ||
					this.props.location.pathname === '/Registro' ? (
						''
					) : (
						<Navigation routes={navOptions}/>
					)}

					<Switch>
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
						<Route path="/error" component={Error} />
						<Route path="/*" component={Inicio} />
						{/* Private routes */ //}

/*			</Switch>
						{this.props.location.pathname === '/IniciarSesion' ||
						this.props.location.pathname === '/Registro' ? (
							''
						) : (
							<Footer />
						)}
					</div>
				</Router>*/
 