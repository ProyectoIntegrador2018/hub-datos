const URI = {
    base: "https://data-hub-api.herokuapp.com/",
    routes: {
        signUpUser: "registrar/alumno",
        getAllUsers: "users",
        allProjects: "projects",
        projectByID: "projects/",
        createProject: "projects",
        editProject: "projects/",
        deleteProject: "projects/",
        signIn: "iniciar-sesion/",
        resetSendEmail: 'users/password-resets',
		resetPassword: 'users/password-resets/:token'
    }
}

export default URI;
