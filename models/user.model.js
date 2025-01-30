const mongoose = require("mongoose");
const db = require("../config/db");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, lowercase: true, required: true, unique: true },
  password: { type: String, required: true },
  prn: { type: Number, required: true, unique: true },
  department: { type: String, required: true },
  yearofstudy: { type: Number, required: true },
});


const UserModel = db.model("user", userSchema);


module.exports = UserModel;
