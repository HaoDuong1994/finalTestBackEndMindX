const mongoose = require("mongoose");
const { Schema } = mongoose;
const usersSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  identity: {
    type: String,
    require: true,
  },
  dob: {
    type: Date,
    require: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["STUDENT", "TEACHER", "ADMIN"],
  },
});
const User = mongoose.model("users", usersSchema);
module.exports = User;
