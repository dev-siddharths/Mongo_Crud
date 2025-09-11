const mongoose = require("mongoose");

const info_Schema = mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

const info = mongoose.model("info", info_Schema);
module.exports = info;
