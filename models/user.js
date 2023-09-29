const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  phone: {
    type: number,
    required: true,
  },
  phone: phone,
  password: password,
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
