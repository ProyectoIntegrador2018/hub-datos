const userModel = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

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
  } catch(e) {
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


module.exports = {
  register: register,
  protectedRegister: protectedRegister,
  getAllUsers: getAllUsers,
  login: login
};
