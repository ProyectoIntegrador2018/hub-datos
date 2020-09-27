const mongoose = require("mongoose");
const secret = require("../config.js");
var connectionURL = secret.connectionURL;

if (process.env.NODE_ENV === "production") {
  var connectionURL = process.env.connectionURL;
} else {
  const secret = require("../config.js");
  var connectionURL = secret.connectionURL;
}

mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
