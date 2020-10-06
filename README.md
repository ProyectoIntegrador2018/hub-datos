<<<<<<< HEAD
# hub-datos
Realizar un sitio que preste servicios web para los miembros del hub de ciencia de datos.


## Teams
=======
# Hub Datos

Realizar un sitio que preste servicios web para los miembros del hub de ciencia de datxos.

## Table of contents
>>>>>>> gerardo

- [Client Details](#client-details)
- [Environment URLS](#environment-urls)
- [Digital HUB Team](#digital-hub-team)
- [Technology Stack](#technology-stack)
- [Management resources](#management-resources)
- [Setup the project](#setup-the-project)
- [Running the stack for development](#running-the-stack-for-development)
- [Stop the project](#stop-the-project)
- [Restoring the database](#restoring-the-database)
- [Debugging](#debugging)
- [Running specs](#running-specs)
- [Checking code for potential issues](#checking-code-for-potential-issues)

### Client Details

| Name              | Email             | Role |
| ----------------- | ----------------- | ---- |
| Dra. Lorena Gomez | lorenamtze@tec.mx | CEO  |

### Environment URLS

- **Production** - [TBD](TBD)
- **Development** - [TBD](TBD)

### Digital HUB Team

| Name                               | Role                            |
| ---------------------------------- | ------------------------------- |
| Mariana Estefanía Villegas Vázquez | Administrador del Proyecto      |
| Emilio Fernando Alonso Villa       | Scrum Master                    |
| Iván Fernando Muñiz Ramírez        | Product owner proxy             |
| Gerardo Aldair Ponce Gómez         | Administración de Configuración |

### Technology Stack

#### FrontEnd

| Technology       | Version |
| ---------------- | ------- |
| NodeJs LTS       | 12.18.3 |
| ReactJs          | 16.13.1 |
| React bootstrap  | 1.3.0   |
| React Dom        | 16.13.1 |
| React Router Dom | 5.2.0   |
| Reactscripts     | 3.4.3   |
| yarn             | 1.22.5  |
| boostrap         | 2.0.0   |
| bootstrap        | ^4.5.2  |
| jquery           | 3.5.1", |

#### BackEnd

| Technology   | Version |
| ------------ | ------- |
| NodeJs LTS   | 12.18.3 |
| Express      | 4.17.1  |
| Express-jwt  | 6.0.0   |
| bcryptjs     | 2.4.3   |
| jsonwebtoken | 8.5.1   |
| mongoose     | 5.10.7  |
| morgan       | 1.10.0  |
| uuid         | 8.3.0   |

#### DataBase

| Technology    |
| ------------- |
| MongoDb Atlas |

### Management tools

You should ask for access to this tools if you don't have it already:

- [Github repo](https://github.com/ProyectoIntegrador2018/hub-datos.git)
- [Backlog](https://trello.com/b/SV5uVhjY/product-backlog)
- [Heroku](https://crowdfront-staging.herokuapp.com/)
- [Documentation](https://drive.com)

## Development

### Setup the project

You'll definitely want to install [`NodeJs LTS`](https://nodejs.org/es/).

After installing please you can follow this simple steps:

1. Clone this repository into your local machine

```bash
$ git clone https://github.com/ProyectoIntegrador2018/hub-datos.gitgit
```

2. Run the following command to install all the dependencies inside Frontend and Backend:

```bash
$ npm install
```

3. Request the MongoDB Atlas login information to Lorena Gomez. Generate an appropriate user for each team member and then modify the following link in the mongoose.js document according to the link provided by mongoDB Atlas

<<<<<<< HEAD
- Github
- Trello
- Microsoft Teams

=======
```bash
mongodb+srv://hubdatos:<password>@hubdatos.oijcd.mongodb.net/<dbname>?retryWrites=true&w=majority
```
>>>>>>> gerardo
