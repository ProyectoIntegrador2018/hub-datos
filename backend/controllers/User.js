const userModel = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const { use } = require("../routes/routes");
const { SECRET_TOKEN } = require("./../config");

const userRegister = async function (userDets, role, res) {
  try {
    let usernameTaken = await validateUsername(userDets.username);
    if (!usernameTaken) {
      return res.status(400).send({
        message: `El usuario ${userDets.username} ha sido tomado`,
        succes: false,
      });
    }
    let emailRegistered = await validateEmail(userDets.email);
    if (!emailRegistered) {
      return (
        res.status(400) -
        send({
          message: `El correo ya ha sido registrado`,
          succes: false,
        })
      );
    }

    const hashedPassword = await bcrypt.hash(userDets.password, 12);
    const user = new userModel();
    user.username = userDets.username;
    user.email = userDets.email;
    user.nombre = userDets.nombre;
    user.apellido = userDets.apellido;
    user.edad = userDets.edad;
    user.genero = userDets.genero;
    user.role = role;
    console.log(role);
    if (role == "alumno" && userDets.universidad && userDets.universidad !== "") {
      user.universidad = userDets.universidad;
    } else if (user.role === "alumno") {
      res.status(400).send({
        message: "El alumno debe de tener una universidad obligatoriamente",
      });
    }
    if (user.role === "socio_comercial" && userDets.compañia && userDets.compañia !== "") {
      user.compañia = userDets.compañia;
    } else if (user.role === "socio_comercial") {
      res.status(400).send({
        message: "El socio comercial debe de tener una compañia obligatoriamente",
      });
    }
    if (user.role === "maestro" && userDets.universidad && userDets.universidad !== "") {
      user.universidad = userDets.universidad;
    } else if (user.role === "maestro") {
      res.status(400).send({
        message: "El maestro debe de tener una universidad obligatoriamente",
      });
    }
    user.password = hashedPassword;
    user.imagen = userDets.imagen;
    await user.save();
    res.status(201).send({
      message: "El usuario ha sido exitosamente registrado",
      succes: true,
    });
  } catch (err) {
    res.status(500).send(err);
  }
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
        email: user.email,
        role: user.role
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
  userRegister: userRegister,
  getAllUsers: getAllUsers,
  login: login
};
