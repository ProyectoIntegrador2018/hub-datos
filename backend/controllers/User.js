const userModel = require("../models/User");
const bcrypt = require("bcryptjs");

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
    if (role == "alumno" && userDets.universidad) {
      user.universidad = userDets.universidad;
    } else {
      res.status(400).send({
        message: "El alumno debe de tener una universidad obligatoriamente",
      });
    }
    if (role == "socio_comercial" && userDets.compañia) {
      user.compañia = userDets.compañia;
    } else {
      res.status(400).send({
        message: "El socio comercial debe de tener una compañia obligatoriamente",
      });
    }
    if (role == "maestro" && userDets.universidad) {
      user.universidad = userDets.universidad;
    } else {
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

module.exports = {
  userRegister: userRegister,
};
