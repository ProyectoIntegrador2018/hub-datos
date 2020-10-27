const userModel = require("../models/User");
const passwordResetModel = require('./../models/Password-reset.model');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');

const { SECRET_TOKEN } = require("./../config");

const ROLES = {
  ALUMNO: "alumno",
  MAESTRO: "maestro",
  INVESTIGADOR: "investigador",
  ADMIN: "administrador",
  SOCIOCOMERCIAL: "socio_comercial",
  SOCIOTECNOLOGICO: "socio_tecnologico",
  SUPERADMIN: "super_admin"
}

const register = async (req, res, next) => {

  try {
    var isUserNameFree = await validateUsername(req.body.username);
  } catch (err) {
    return res.status(500).json(err);
  }

  if (!isUserNameFree) {
    let response = {
      message: `El usuario ${req.body.username} ya existe.`,
      success: false
    };
    res.statusMessage = `El usuario ${req.body.username} ya existe.`;
    return res.status(400).json(response);
  }

  try {
    var isEmailFree = await validateEmail(req.body.email);
  } catch (err) {
    return res.status(500).json(err);
  }

  if (!isEmailFree) {
    let response = {
      message: `El email ${req.body.email} ya existe.`,
      success: false
    };
    res.statusMessage = `El email ${req.body.email} ya existe.`;
    return res.status(400).json(response);
  }

  let newUser = new userModel();
  newUser.username = req.body.username;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.nombre = req.body.nombre;
  newUser.apellido = req.body.apellido;
  newUser.fechaDeNacimiento = req.body.fechaDeNacimiento;
  newUser.genero = req.body.genero;
  newUser.role = req.body.role;
  newUser.imagen = req.body.imagen;

  switch (req.body.role) {
    case ROLES.ALUMNO:
      newUser.universidad = req.body.universidad;
      break;

    case ROLES.MAESTRO:
      newUser.universidad = req.body.universidad;
      break;

    case ROLES.INVESTIGADOR:
      newUser.compañia = req.body.compañia;
      break;

    case ROLES.SOCIOCOMERCIAL:
      newUser.compañia = req.body.compañia;
      break;

    case ROLES.SOCIOTECNOLOGICO:
      newUser.compañia = req.body.compañia;
      break;

    case ROLES.ADMIN:
      return next();

    case ROLES.SUPERADMIN:
      return next();

    default:
      res.statusMessage = `No existe el tipo de usuario ${req.body.role}`;
      return res.status(400).end();
  }

  try {
    await newUser.save();
    // await newUser.validate();
    return res.status(200).json(newUser);
  } catch (e) {
    return res.status(500).json(e);
  }
};

const protectedRegister = (req, res) => {
  res.statusMessage = "Protected route to register admins and super admins";
  res.status(200).json({
    message: "To be implemented"
  });
};

const validateUsername = async function (username) {
  let user = await userModel.findOne({ username });
  return user ? false : true;
};

const validateEmail = async function (email) {
  let mail = await userModel.findOne({ email });
  return mail ? false : true;
};

const getAllUsers = async function (req, res) {
  const user = await userModel.find({});
  try {
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    res.statusMessage = `Correo electronico no proporcionado`;
    return res.status(406).end();
  }
  if (!password) {
    res.statusMessage = `Contraseña no proporcionado`;
    return res.status(406).end();
  }

  let user;
  try {
    user = await userModel.findOne({ email });
  } catch (error) {
    console.log(error);
  }
  if (!user) {
    res.statusMessage = `Usuario no registrado`;
    return res.status(401).end();
  }

  bcrypt.compare(password, user.password)
    .then((result) => {
      if (!result) {
        res.statusMessage = "Contraseña incorrecta";
        return res.status(401).end();
      }
      let tokenData = {
        _id: user._id,
        nombre: user.nombre,
        role: user.role,
      }
      jwt.sign(tokenData, SECRET_TOKEN, { expiresIn: "15m" }, (err, token) => {
        if (err) {
          res.statusMessage = `Error al generar el token. Por favor intentelo de nuevo.`;
          return res.status(400).end();
        }
        return res.status(200).json({ token });
      });
    })
    .catch((err) => {
      res.statusMessage = `Error al comparar la contraseña. Por favor intentelo de nuevo`;
      return res.status(500).end();
    });
};

const rpCreate = async (req, res) => {

  try {
    var user = await userModel.findOne({ email: req.body.email });
  } catch (e) {
    return res.status(500).json(e);
  }

  if (!user) {
    res.statusMessage = `El mail ${req.body.email} no ha sido registrado`;
    return res.status(404).end();
  }

  try {
    let passwordReset = new passwordResetModel({ user });
    await passwordReset.save();
  } catch(e) {
    return res.status(500).json(e);
  }

  res.status(202).end();

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const LINK = 'https://data-hub-app.herokuapp.com/';

  const msg = {
    to: user.email, // Change to your recipient
    from: process.env.EMAIL, // Change to your verified sender
    subject: 'Cambio de contraseña',
    html: `
      <strong>Hola ${user.nombre} ${user.apellido}!</strong>
      <p>Ingresa a la siguiente liga para cambiar tu contraseña: <a href=${LINK}>Cambiar contraseña</a><p>
    `,
  }

  // sgMail.send(msg)
  //   .then( () => console.log('Email sent') )
  //   .catch( (error) => console.error(error) );

}

const rpUpdate = async (req, res) => {
  try {
    var passReset = await passwordResetModel.findOne({
      token: req.params.token
    }).populate('user', ["password"]);
  } catch(e) {
    return res.status(500).json(e);
  }

  if( !passReset ) {
    res.statusMessage = `El URL expiro`;
    return res.status(404).end();
  }
  
  const { user } = passReset;

  user.set( {password: req.body.password} ).save()
    .then( () => passReset.remove() )
    .then( () => res.status(200).end() )
    .catch( e => res.status(500).json(e) );
}

module.exports = {
  register: register,
  protectedRegister: protectedRegister,
  getAllUsers: getAllUsers,
  login: login,
  rpCreate: rpCreate,
  rpUpdate: rpUpdate
};
