const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const historySchema = require("./History");

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  history: [historySchema],
});

module.exports = mongoose.model("User", UserSchema);
