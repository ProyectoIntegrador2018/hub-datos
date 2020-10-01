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
    const user = new userModel({
      ...userDets,
      password: hashedPassword,
    });
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
