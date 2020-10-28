const URI = {
    base: "https://data-hub-api.herokuapp.com/",
    routes: {
        signUpUser: "users/",
        getAllUsers: "users",
        allProjects: "projects",
        projectByID: "projects/",
        createProject: "projects",
        editProject: "projects/",
        deleteProject: "projects/",
        myProjects: "projects/my-projects",
        signIn: "iniciar-sesion/",
        resetSendEmail: 'users/password-resets',
		resetPassword: 'users/password-resets/'
    }
}

export default URI;
