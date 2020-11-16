const URI = {
    base: "https://data-hub-api.herokuapp.com/",
    routes: {
        // Projects
        allProjects: "projects",
        projectByID: "projects/",
        createProject: "projects",
        editProject: "projects/",
        deleteProject: "projects/",
        myProjects: "projects/my-projects",
        // Events
        allEvents: "events",
        eventById: "events/",
        createEvent: "events",
        editEvent: "events/",
        deleteEvents: "events/",
        myEvents: "events/my-events",
        // Companies
        allCompanies: "companies",
        createCompany: "companies",
        // Users
        signUpUser: "users/",
        getAllUsers: "users",
        // Signup, Login, Password
        signIn: "iniciar-sesion/",
        resetSendEmail: 'users/password-resets',
		resetPassword: 'users/password-resets/'
    }
}

export default URI;
