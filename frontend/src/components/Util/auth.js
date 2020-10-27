import jwtDecode from 'jwt-decode';
function isLoggedIn() {
	let token = localStorage.getItem('token');

	if (token) {
		let tokenExpiration = jwtDecode(token).exp;
		let dateNow = new Date();

		if (tokenExpiration < dateNow.getTime() / 1000) {
			LogOut();
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}
function isStudent() {
	let token = localStorage.getItem('token');
	if (token) {
		let tokenExpiration = jwtDecode(token).exp;
		let dateNow = new Date();

		if (tokenExpiration < dateNow.getTime() / 1000) {
			LogOut();
			return false;
		} else {
			let decoded = jwtDecode(token);
			let role = decoded.role;
			if (role === 'alumno') return true;
			else return false;
		}
	} else {
		return false;
	}
}
function isAdmin() {
	let token = localStorage.getItem('token');
	if (token) {
		let tokenExpiration = jwtDecode(token).exp;
		let dateNow = new Date();

		if (tokenExpiration < dateNow.getTime() / 1000) {
			LogOut();
			return false;
		} else {
			let decoded = jwtDecode(token);
			let role = decoded.role;
			if (role === 'administrador') return true;
			else return false;
		}
	} else {
		return false;
	}
}
function isSuperAdmin() {
	let token = localStorage.getItem('token');
	if (token) {
		let tokenExpiration = jwtDecode(token).exp;
		let dateNow = new Date();

		if (tokenExpiration < dateNow.getTime() / 1000) {
			LogOut();
			return false;
		} else {
			let decoded = jwtDecode(token);
			let role = decoded.role;
			if (role === 'super_admin') return true;
			else return false;
		}
	} else {
		return false;
	}
}
function isTeacher() {
	let token = localStorage.getItem('token');
	if (token) {
		let tokenExpiration = jwtDecode(token).exp;
		let dateNow = new Date();

		if (tokenExpiration < dateNow.getTime() / 1000) {
			LogOut();
			return false;
		} else {
			let decoded = jwtDecode(token);
			let role = decoded.role;
			if (role === 'maestro') return true;
			else return false;
		}
	} else {
		return false;
	}
}
function isInvestigator() {
	let token = localStorage.getItem('token');
	if (token) {
		let tokenExpiration = jwtDecode(token).exp;
		let dateNow = new Date();

		if (tokenExpiration < dateNow.getTime() / 1000) {
			LogOut();
			return false;
		} else {
			let decoded = jwtDecode(token);
			let role = decoded.role;
			if (role === 'investigador') return true;
			else return false;
		}
	} else {
		return false;
	}
}
function isSocioComercial() {
	let token = localStorage.getItem('token');
	if (token) {
		let tokenExpiration = jwtDecode(token).exp;
		let dateNow = new Date();

		if (tokenExpiration < dateNow.getTime() / 1000) {
			LogOut();
			return false;
		} else {
			let decoded = jwtDecode(token);
			let role = decoded.role;
			if (role === 'socio_comercial') return true;
			else return false;
		}
	} else {
		return false;
	}
}
function isSocioTecnologico() {
	let token = localStorage.getItem('token');
	if (token) {
		let tokenExpiration = jwtDecode(token).exp;
		let dateNow = new Date();

		if (tokenExpiration < dateNow.getTime() / 1000) {
			LogOut();
			return false;
		} else {
			let decoded = jwtDecode(token);
			let role = decoded.role;
			if (role === 'socio_tecnologico') return true;
			else return false;
		}
	} else {
		return false;
	}
}
function LogOut() {
	localStorage.removeItem('token');
	localStorage.removeItem('role');
	localStorage.removeItem('id');
	window.location.href = '/';
}
function getUserData() {
	let email;
	let name;
	let last_name;
	let token = localStorage.getItem('token');

	if (token) {
		email = jwtDecode(token).email;
		name = jwtDecode(token).name;
		last_name = jwtDecode(token).last_name;

		let data = {
			name,
			email,
			last_name,
		};

		return data;
	} else {
		return false;
	}
}

export {
	isLoggedIn,
	LogOut,
	getUserData,
	isStudent,
	isAdmin,
	isTeacher,
	isSuperAdmin,
	isInvestigator,
	isSocioComercial,
	isSocioTecnologico,
};
