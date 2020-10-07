# HUB Datos

## Paso 1 - Instalar NodeJS

[Descargar NodeJs](https://nodejs.org/en/)

- Descargar la versión para el sistema operativo utilizado.
- Versión recomendada **v12.18.3**.
- Asegurarse de que se instale **npm**.

## Paso 2 - Instalar librerias del proyecto

Correr el siguiente comando para instalar todas las librerias y componentes requeridos para correr el servidor.  
**Este comando se debe de correr dentro de la carpeta frontend y backend.**

```bash
npm install
```

## Paso 3 - Subir a Heroku

Para subir a producción en Heroku, se corren los siguientes comandos

1. Instalar Heroku-CLI

   - [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

2. Iniciar sesión en Heroku

   - Utilizar las credenciales de Heroku que se proporcionaron anteriormente.

   ```bash
   heroku login
   ```

3. Se crea el proyecto a Heroku y se hace el push

   - Se crea el proyecto en Heroku

     ```bash
     heroku create
     ```

   - Se renombra la aplicacion

     ```bash
     heroku apps:rename data-hub-api --app   default-app-name
     ```

   - Se termina de pushear a heroku

     ```bash
     heroku git:remote -a data-hub-api
     ```

     ```bash
     heroku buildpacks:set heroku/nodejs
     ```

     ```bash
     git subtree push --prefix backend heroku    master
     ```

   - Esto subirá a heroku todo lo que esta en la branch **backend**.
   - Si se desea utilizar otra branch se puede correr cambiando el nombre de la branch del siguiente comando

     ```bash
     git subtree push --prefix backend heroku master
     ```

   - para la branch master es este comando

     ```bash
     git push heroku master
     ```

4. Entrar en la carpeta de frontend y correr los siguientes comandos para desplegar el servidor

   ```bash
   npm build
   npm start
   ```

## Notas adicionales

- Si se cambiar de servidor de Heroku o se usa otra herramienta, se tendrá que cambiar el URL dentro de la Aplicación en el otro repositorio para tener acceso a la API.
  - Este se encuentra en el archivo _URI_ dentro de la carpeta Frontend
