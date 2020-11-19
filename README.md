# Hub Datos

Realizar un sitio que preste servicios web para los miembros del hub de ciencia de datxos.

## Table of contents

- [Client Details](#client-details)
- [Environment URLS](#environment-urls)
- [Digital HUB Team](#digital-hub-team)
- [Technology Stack](#technology-stack)
- [Management resources](#management-resources)
- [Setup the project](#setup-the-project)

### Client Details

| Name              | Email             | Role |
| ----------------- | ----------------- | ---- |
| Dra. Lorena Gomez | lorenamtze@tec.mx | CEO  |

### Environment URLS

- **Production** - [TBD](TBD)
- **Development** - [https://data-hub-app.herokuapp.com](https://data-hub-app.herokuapp.com)

### Digital HUB Team

| Name                               | Role                            |
| ---------------------------------- | ------------------------------- |
| Mariana Estefanía Villegas Vázquez | Administrador del Proyecto      |
| Emilio Fernando Alonso Villa       | Scrum Master                    |
| Iván Fernando Muñiz Ramírez        | Product owner proxy             |
| Gerardo Aldair Ponce Gómez         | Administración de Configuración |

### Technology Stack

#### FrontEnd

| Technology                  | Version |
| --------------------------- | ------- |
| NodeJs LTS                  | 12.18.3 |
| @hookform/error-message     | 0.0.4   |
| @testing-library/jest-dom   | 4.2.4   |
| @testing-library/react      | 9.5.0   |
| @testing-library/user-event | 7.2.1   |
| axios                       | 0.20.0  |
| boostrap                    | 2.0.0   |
| bootstrap                   | 4.5.2   |
| classnames                  | 2.2.6   |
| email-validator             | 2.0.4   |
| formik                      | 2.2.1   |
| jquery                      | 3.5.1   |
| jwt-decode                  | 3.0.0   |
| lodash                      | 4.17.20 |
| react                       | 16.13.1 |
| react-bootstrap             | 1.3.0   |
| react-bootstrap-date-picker | 5.1.0   |
| react-datepicker            | 3.3.0   |
| react-dom                   | 16.13.1 |
| react-hook-form             | 6.9.2   |
| react-icons                 | 3.11.0  |
| react-markdown              | 5.0.2   |
| react-router-dom            | 5.2.0   |
| react-scripts               | 3.4.3   |
| react-toastify              | 6.0.9   |
| validator                   | 13.1.17 |
| yarn                        | 1.22.5  |
| yup                         | 0.29.3  |

#### BackEnd

| Technology     | Version |
| -------------- | ------- |
| NodeJs LTS     | 12.18.3 |
| Express        | 4.17.1  |
| @sendgrid/mail | 7.3.0   |
| aws-sdk        | 2.790.0 |
| bcrypt         | 5.0.0   |
| bcryptjs       | 2.4.3   |
| cors           | 2.8.5   |
| dotenv         | 8.2.0   |
| express        | 4.17.1  |
| jsonwebtoken   | 8.5.1   |
| mongoose       | 5.10.7  |
| morgan         | 1.10.0  |
| nodemon        | 2.0.6   |
| rand-token     | 1.0.1   |
| uuid           | 8.3.0   |
| validator      | 13.1.17 |

#### DataBase

| Technology    |
| ------------- |
| MongoDb Atlas |

### Management tools

You should ask for access to this tools if you don't have it already:

- [Github repo](https://github.com/ProyectoIntegrador2018/hub-datos.git)
- [Backlog](https://trello.com/b/SV5uVhjY/product-backlog)
- [Heroku](https://data-hub-app.herokuapp.com)
- [Documentation](https://drive.com)

## Development

### Setup the project

You'll definitely want to install [`NodeJs LTS`](https://nodejs.org/es/).

After installing please you can follow this simple steps:

1. Clone this repository into your local machine

   ```bash
   git clone https://github.com/ProyectoIntegrador2018/hub-datos.gitgit
   ```

2. Run the following command to install all the dependencies inside Frontend and Backend:

   ```bash
   npm install
   ```

3. Request the MongoDB Atlas login information to Lorena Gomez. Generate an appropriate user for each team member and then modify the following link in the mongoose.js document according to the link provided by mongoDB Atlas

   ```bash
   mongodb+srv://admin:<password>@hubdatos.oijcd.mongodb.net/<dbname>?retryWrites=true&w=majority
   ```

4. To run the server locally run the following commands

   **Backend**

   ```bash
   node server.js
   nodemon server.js
   ```

   **Frontend**

   ```bash
   npm start
   ```
