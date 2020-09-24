const express = require('express');
const api = express.Router();

const projectRoute = require("./routes/project");

api.use('/project', projectRoute);

//export this api to use in our server.js
module.exports = api;