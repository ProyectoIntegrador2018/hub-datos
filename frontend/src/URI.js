const URI = {
	base: 'https://data-hub-api.herokuapp.com/',
	routes: {
		signUpUser: 'users',
		getAllUsers: 'users',
		allProjects: 'projects',
		projectByID: 'projects/',
		signIn: 'iniciar-sesion/',
		resetSendEmail: 'users/password-resets',
		resetPassword: 'users/password-resets/:token',
	},
};

export default URI;
